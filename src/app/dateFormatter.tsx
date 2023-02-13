"use client";
import { format, parse } from "date-fns";

export const dateFormatter = (date: string) => {
  const parsedDate = parse(date, "dd/MM/yyyy", new Date());
  return {
    month: format(parsedDate, "MMM"),
    year: format(parsedDate, "yyyy"),
    day: format(parsedDate, "d"),
  };
};
