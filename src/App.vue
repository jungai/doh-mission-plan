<script setup lang="ts">
import { cn, getCurrentFormatted } from "./lib/utils";
import { ref, watch } from "vue";
import axios from "axios";
import {
  Tabs,
  TabTrigger,
  TabList,
  TabIndicator,
  TabContent,
} from "@ark-ui/vue";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-vue-next";
import { useQuery } from "@tanstack/vue-query";

type Items = {
  data: {
    date: string;
    missions: {
      startTime: string;
      endTIme: string;
      totalDistance: number;
      totalTime: number;
      missioId: string;
      station: string;
      flightId: string;
      memo: string;
      status: "done" | "next" | "waiting";
    }[];
  }[];
};

const items = ref<Items>({ data: [] });
const currentDate = ref(getCurrentFormatted());

const missions = useQuery({
  queryKey: ["missions"],
  queryFn: () =>
    axios.get<Items>(
      "https://raw.githubusercontent.com/jungai/doh-mission-plan/master/data.json",
    ),
  refetchInterval: 1000 * 60 * 5,
});

watch(missions.isSuccess, () => {
  const newData = { ...(missions.data?.value?.data ?? { data: [] }) };

  items.value = newData;
});
</script>

<template>
  <div class="bg-graySecondary-700 h-screen overflow pt-[100px]">
    <div class="max-w-5xl mx-auto h-full">
      <Tabs class="flex w-full flex-col gap-y-4 h-full" v-model="currentDate">
        <div
          class="flex items-center gap-x-4 bg-graySecondary-900/90 shadow-[0px_3px_14px_0px_rgba(0,0,0,0.26)] rounded-[10px] px-8"
        >
          <div>
            <ChevronLeft :size="16" class="text-grayPrimary-50" />
          </div>
          <TabList class="flex-1 flex items-center gap-2">
            <TabTrigger
              v-for="(item, idx) in items.data"
              :key="idx"
              :value="item.date"
              :class="`${
                currentDate === item.date ? 'bg-primary-500 rounded-[10px]' : ''
              }`"
            >
              <div class="flex flex-col py-2 px-3">
                <h2
                  :class="
                    cn(
                      currentDate === item.date
                        ? 'text-base font-bold text-grayPrimary-50'
                        : 'text-base font-normal text-grayPrimary-400',
                    )
                  "
                >
                  {{
                    new Date(item.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                </h2>
                <span
                  :class="
                    cn(
                      'text-xs',
                      currentDate === item.date
                        ? 'text-grayPrimary-50'
                        : 'text-grayPrimary-400',
                    )
                  "
                  >{{ item.missions.length }} Missions</span
                >
              </div>
            </TabTrigger>
            <TabIndicator />
          </TabList>
          <div>
            <ChevronRight :size="16" class="text-grayPrimary-50" />
          </div>
        </div>
        <TabContent
          v-for="(item, idx) in items.data"
          :value="item.date"
          :key="idx"
          class="flex-1 overflow-y-auto"
        >
          <div class="flex flex-col gap-y-4">
            <div
              v-for="(mission, idx) in item.missions"
              class="flex items-center gap-x-[28px] rounded-[10px] bg-graySecondary-900/90 px-4 py-3 relative w-[calc(100%-8px)]"
              ref="itemRefs"
              :class="
                mission.status === 'next'
                  ? 'border-4 border-[rgba(0,112,174,0.2)] animate-pulse '
                  : mission.status === 'done'
                  ? 'hidden'
                  : ''
              "
              :id="idx + 1 + mission.status"
              :key="idx"
            >
              <div
                v-if="mission.status !== 'waiting'"
                class="absolute top-0 right-0 h-[40px] w-[100px] rounded-bl-xl py-2 flex justify-center"
                :class="
                  mission.status === 'next'
                    ? 'text-[#5CC6E6] bg-[rgba(0,112,174,0.2)]'
                    : 'bg-success-500/20 text-success-500'
                "
              >
                {{ mission.status }}
              </div>
              <div class="flex flex-col">
                <div
                  class="flex items-center gap-x-1 text-grayPrimary-50 text-sm"
                >
                  <span>{{ mission.startTime }}</span>
                  -
                  <span>{{ mission.endTIme }}</span>
                </div>
              </div>

              <img
                src="/drone.png"
                alt="drone"
                class="w-[100px] aspect-square"
              />

              <div class="flex items-center divide-x-2 divide-grayPrimary-50">
                <div class="flex flex-col px-4">
                  <h2 class="text-gray-50 font-bold">{{ mission.flightId }}</h2>
                  <span class="text-sm text-grayPrimary-500">{{
                    mission.missioId.split("-")[1]
                  }}</span>
                  <div class="flex items-center gap-x-2 text-grayPrimary-500">
                    <MapPin :size="16" class="text-grayPrimary-400" />
                    <span clas="text-sm">{{ mission.station }}</span>
                  </div>
                </div>

                <div class="flex flex-col px-4">
                  <div class="text-grayPrimary-50">
                    <span>ระยะทาง&nbsp;</span>
                    <span class="font-bold underline text-primary-300">{{
                      mission.totalDistance
                    }}</span>
                    <span>&nbsp;km</span>
                  </div>
                  <div class="text-grayPrimary-50">
                    <span>ระยะเวลา&nbsp;</span>
                    <span class="font-bold underline text-primary-300">{{
                      mission.totalTime
                    }}</span>
                    <span>&nbsp;นาที</span>
                  </div>
                  <div class="flex items-center gap-x-2 text-grayPrimary-500">
                    <span clas="text-xs">*{{ mission.memo }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabContent>
      </Tabs>
    </div>
  </div>
</template>
