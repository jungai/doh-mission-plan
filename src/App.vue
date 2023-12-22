<script setup lang="ts">
import { cn } from "./lib/utils";
import { ref, onMounted } from "vue";
import {
  Tabs,
  TabTrigger,
  TabList,
  TabIndicator,
  TabContent,
} from "@ark-ui/vue";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-vue-next";

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
      </Tabs>
    </div>
  </div>
</template>
