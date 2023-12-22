<script setup lang="ts">
import { cn } from "./lib/utils";
import { ref } from "vue";
import {
  Tabs,
  TabTrigger,
  TabList,
  TabIndicator,
  TabContent,
} from "@ark-ui/vue";
import { ChevronLeft, ChevronRight } from "lucide-vue-next";

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

const items: Items = {
  data: [
    {
      date: "Dec,21",
      missions: [
        {
          startTime: "10.30AM",
          endTIme: "10.40AM",
          totalDistance: 3.46,
          missioId: "DOH-TEST-SMALL",
          station: "PTIC",
          flightId: "DOH-FL-23001",
          memo: "บินทดสอบ DOH & ML",
          totalTime: 7,
          status: "done",
        },
        {
          startTime: "11.25AM",
          endTIme: "11.32AM",
          totalDistance: 3.46,
          missioId: "DOH-TEST-SMALL",
          station: "PTIC",
          flightId: "DOH-FL-23001",
          memo: "บินทดสอบ DOH & ML",
          totalTime: 7,
          status: "next",
        },
        // {
        //   startTime: "12.00PM",
        //   endTIme: "12.20PM",
        //   totalDistance: 7.43,
        //   missioId: "FR-S55700-3RVL",
        //   station: "ทล.1 55+700",
        //   flightId: "DOH-FL-23003",
        //   memo: "บินสำรวจ จุดเปิดเลนสวน ถ.พหลโยธิน ช่วง กม.54+550 ถึง กม.58+250",
        //   totalTime: 20,
        //   status: "waiting",
        // },
        // {
        //   startTime: "13.30PM",
        //   endTIme: "13.58PM",
        //   totalDistance: 12.82,
        //   missioId: "FR-S71500-2RVL",
        //   station: "ทล.1 71+500",
        //   flightId: "DOH-FL-23004",
        //   memo: "บินสํารวจ จุดเปิดเลนสวน ถ.พหลโยธิน กม. 71+200 ถึง กม. 77+000 ",
        //   totalTime: 28,
        //   status: "waiting",
        // },
      ],
    },
    // {
    //   date: "Mon,29",
    //   missions: [
    //     {
    //       startTime: "9.00AM",
    //       endTIme: "9.25AM",
    //       totalDistance: 14,
    //       missioId: "FR-S55700-48750",
    //       station: "ทล.1 55+700",
    //       flightId: "DOH-FL-23001",
    //       memo: "บินสำรวจทาง ถ.พหโยธิน ขาเข้า ระหว่าง กม.55+700 ถึง กม.48+750",
    //       totalTime: 14,
    //       status: "waiting",
    //     },
    //     {
    //       startTime: "9.00AM",
    //       endTIme: "9.25AM",
    //       totalDistance: 14,
    //       missioId: "FR-S55700-48750",
    //       station: "ทล.1 55+700",
    //       flightId: "DOH-FL-23001",
    //       memo: "บินสำรวจทาง ถ.พหโยธิน ขาเข้า ระหว่าง กม.55+700 ถึง กม.48+750",
    //       totalTime: 14,
    //       status: "waiting",
    //     },
    //     {
    //       startTime: "9.00AM",
    //       endTIme: "9.25AM",
    //       totalDistance: 14,
    //       missioId: "FR-S55700-48750",
    //       station: "ทล.1 55+700",
    //       flightId: "DOH-FL-23001",
    //       memo: "บินสำรวจทาง ถ.พหโยธิน ขาเข้า ระหว่าง กม.55+700 ถึง กม.48+750",
    //       totalTime: 14,
    //       status: "waiting",
    //     },
    //     {
    //       startTime: "9.00AM",
    //       endTIme: "9.25AM",
    //       totalDistance: 14,
    //       missioId: "FR-S55700-48750",
    //       station: "ทล.1 55+700",
    //       flightId: "DOH-FL-23001",
    //       memo: "บินสำรวจทาง ถ.พหโยธิน ขาเข้า ระหว่าง กม.55+700 ถึง กม.48+750",
    //       totalTime: 14,
    //       status: "waiting",
    //     },
    //   ],
    // },
    // {
    //   date: "Mon,30",
    //   missions: [
    //     {
    //       startTime: "9.00AM",
    //       endTIme: "9.25AM",
    //       totalDistance: 14,
    //       missioId: "FR-S55700-48750",
    //       station: "ทล.1 55+700",
    //       flightId: "DOH-FL-23001",
    //       memo: "บินสำรวจทาง ถ.พหโยธิน ขาเข้า ระหว่าง กม.55+700 ถึง กม.48+750",
    //       totalTime: 14,
    //       status: "waiting",
    //     },
    //     {
    //       startTime: "9.00AM",
    //       endTIme: "9.25AM",
    //       totalDistance: 14,
    //       missioId: "FR-S55700-48750",
    //       station: "ทล.1 55+700",
    //       flightId: "DOH-FL-23001",
    //       memo: "บินสำรวจทาง ถ.พหโยธิน ขาเข้า ระหว่าง กม.55+700 ถึง กม.48+750",
    //       totalTime: 14,
    //       status: "waiting",
    //     },
    //     {
    //       startTime: "9.00AM",
    //       endTIme: "9.25AM",
    //       totalDistance: 14,
    //       missioId: "FR-S55700-48750",
    //       station: "ทล.1 55+700",
    //       flightId: "DOH-FL-23001",
    //       memo: "บินสำรวจทาง ถ.พหโยธิน ขาเข้า ระหว่าง กม.55+700 ถึง กม.48+750",
    //       totalTime: 14,
    //       status: "waiting",
    //     },
    //     {
    //       startTime: "9.00AM",
    //       endTIme: "9.25AM",
    //       totalDistance: 14,
    //       missioId: "FR-S55700-48750",
    //       station: "ทล.1 55+700",
    //       flightId: "DOH-FL-23001",
    //       memo: "บินสำรวจทาง ถ.พหโยธิน ขาเข้า ระหว่าง กม.55+700 ถึง กม.48+750",
    //       totalTime: 14,
    //       status: "waiting",
    //     },
    //   ],
    // },
  ],
};

const value = ref(items.data[0].date);

// onMounted(async () => {
//   const raw = await fetch(
//     "https://raw.githubusercontent.com/jungai/dotfiles/master/editor/.prettierrc.json",
//   );
//   const data = await raw.json();
//   console.log(data);
// });
</script>

<template>
  <div class="bg-graySecondary-700 h-screen overflow pt-[100px]">
    <div class="max-w-5xl mx-auto">
      <Tabs class="flex w-full flex-col gap-y-4" v-model="value">
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
                value === item.date ? 'bg-primary-500 rounded-[10px]' : ''
              }`"
            >
              <div class="flex flex-col py-2 px-3">
                <h2
                  :class="
                    cn(
                      value === item.date
                        ? 'text-base font-bold text-grayPrimary-50'
                        : 'text-base font-normal text-grayPrimary-400',
                    )
                  "
                >
                  {{ item.date }}
                </h2>
                <span
                  :class="
                    cn(
                      'text-xs',
                      value === item.date
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
        >
          <div class="flex flex-col gap-y-4">
            <div
              v-for="(mission, idx) in item.missions"
              class="flex items-center gap-x-[28px] rounded-[10px] bg-graySecondary-900/90 px-4 py-3 relative"
              :class="
                mission.status === 'next'
                  ? 'border-4 border-[rgba(0,112,174,0.2)] animate-pulse '
                  : ''
              "
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
                  <span class="font-extrabold">{{ mission.startTime }}</span>
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
