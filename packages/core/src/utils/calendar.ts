import IDay from "../types/IDay";
import IEvent from "../types/IEvent";
import IZapTimeConfig from "../types/IZapTimeConfig";
import IDfnsConf from "../types/IDfnsConf";

import {
  format,
  getDaysInMonth,
  startOfMonth,
  subMonths,
  lastDayOfMonth,
  subDays,
  endOfMonth,
  addDays,
  isPast,
  isToday,
  isThisMonth,
} from "date-fns";

import { getEvents } from "../api/api";
import { getStartOfTheWeekIndex } from "../utils/localeLogic";

export const getEventsForDay = (
  date: Date,
  events: IEvent[]
): IEvent[] | undefined => {
  const collectedEvents: IEvent[] = [];
  for (const event of events) {
    if (format(date, "d") === format(new Date(event.start), "d")) {
      collectedEvents.push(event);
    }
  }

  if (collectedEvents.length > 0) {
    return collectedEvents;
  }

  return undefined;
};

export const getDays = async (
  date: Date,
  dfnsConfig: IDfnsConf,
  zapTimeConfig: IZapTimeConfig
): Promise<{ days: IDay[]; hasAnyEvent: boolean }> => {
  const dayCountInMonth = getDaysInMonth(date);
  const startDateOfTheMonth = startOfMonth(date);
  let hasAnyEvent = false;
  
  const events = await getEvents(
    zapTimeConfig.token,
    getStartDate(date, zapTimeConfig),
    format(endOfMonth(date), "yyyy-MM-dd")
  );

  if (Object.keys(events).length > 0) {
    hasAnyEvent = true;
  }

  const startOfTheWeekIndex =
    zapTimeConfig && zapTimeConfig.locale !== undefined
      ? getStartOfTheWeekIndex(zapTimeConfig.locale)
      : 0;

  let numberOfDay = parseInt(format(startDateOfTheMonth, "e"));

  numberOfDay -= startOfTheWeekIndex;
  

  const previousMonth = subMonths(startDateOfTheMonth, 1);

  const lastDateOfPreviousMonth = lastDayOfMonth(previousMonth);

  const days: IDay[] = [];

  for (let k = 1; k < numberOfDay; k++) {
    days.unshift({
      label: format(subDays(lastDateOfPreviousMonth, k - 1), "d"),
      isPast: true,
    });
  }

  for (let i = 1; i <= dayCountInMonth; i++) {
    const iteratedDate = addDays(startDateOfTheMonth, i - 1);
    days.push({
      label: i.toString(),
      date: iteratedDate,
      isPast: isPast(iteratedDate) && !isToday(iteratedDate),
      isCurrentMonth: true,
      isToday: isToday(iteratedDate),
      events: getEventsForDay(iteratedDate, events),
    });
  }

  let nextMonthRemainingDays = 0;


  if (days.length === 28) {
  } else if (days.length <= 35) {
    nextMonthRemainingDays =
      35 - dayCountInMonth - numberOfDay + 1 + startOfTheWeekIndex;
  } else {
    nextMonthRemainingDays =
      42 - dayCountInMonth - numberOfDay + 1 + startOfTheWeekIndex;
  }

  for (let j = 1; j <= nextMonthRemainingDays - startOfTheWeekIndex; j++) {
    days.push({
      label: j.toString(),
      events: undefined,
      isPast: true,
    });
  }

  return { days, hasAnyEvent };
};

const getStartDate = (date: Date, zapTimeConfig: IZapTimeConfig): string => {
  if (isThisMonth(date) && zapTimeConfig.closestAvailableEvent !== undefined) {
    return format(
      addDays(date, zapTimeConfig.closestAvailableEvent),
      "yyyy-MM-dd"
    );
  }

  return format(startOfMonth(date), "yyyy-MM-dd");
};
