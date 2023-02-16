"use client";
import { format, parse } from "date-fns";

export const dateFormatter = (date: string) => {
  const parsedDate = parse(date, "yyyy-mm-dd", new Date());
  console.log("****", date, parsedDate);
  return {
    month: format(parsedDate, "MMM"),
    year: format(parsedDate, "yyyy"),
    day: format(parsedDate, "d"),
  };
};
