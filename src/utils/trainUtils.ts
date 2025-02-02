import * as z from "zod/v4"
import { ekitanSchema, holidayDataSchema } from "./types"
import { isHoliday, isWeekday, getNextDay, dayIndices } from "./dateUtils"

export function findNextTrains({ ekitanData, station, holidayData, date }: { ekitanData: z.infer<typeof ekitanSchema>, station: string, holidayData: z.infer<typeof holidayDataSchema>, date: Date }) {
  const currentHour = date.getHours();
  const currentMinutes = date.getMinutes();
  let currentDay = isHoliday({ date, holidayData }) ? "Sunday" : dayIndices[date.getDay()];
  const nextTrains: {
    day: "Weekday" | "Sunday" | "Saturday";
    station: "市ケ谷駅" | "飯田橋駅" | "九段下駅";
    trainType: string;
    destination: string;
    direction: string;
    line: string;
    hour: number;
    minute: number,
    date: Date
  }[] = []
  const currentDate = date
  for (let i = 0; i < 7; i++) {
    ekitanData.filter(item => item.station === station && (item.day === currentDay || isWeekday(currentDay) && item.day === "Weekday")).sort((a, b) => {
      return a.hour * 60 + a.minute - (b.hour * 60 + b.minute);
    }).map(item => {
      const itemTime = item.hour * 60 + item.minute;
      const nowTime = currentHour * 60 + currentMinutes;
      if (itemTime >= nowTime || i > 0) {
        nextTrains.push({ date: currentDate, ...item });
      }
    });
    currentDay = getNextDay({
      currentDay,
      currentDate: date,
      holidayData
    });
    if (nextTrains.length >= 15) {
      break
    }
    currentDate.setDate(currentDate.getDate() + 1)
  }

  return [...nextTrains.slice(0, 15)];
}
