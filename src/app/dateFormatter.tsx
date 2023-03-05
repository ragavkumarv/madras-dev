"use client";
import { format, parse } from "date-fns";

export const dateFormatter = (date: string) => {
  const parsedDate = new Date(date);
  // console.log("****", date, parsedDate, {
  //   month: format(parsedDate, "MMM"),
  //   year: format(parsedDate, "yyyy"),
  //   day: format(parsedDate, "d"),
  // });
  return {
    month: format(parsedDate, "MMM"),
    year: format(parsedDate, "yyyy"),
    day: format(parsedDate, "d"),
  };
};
