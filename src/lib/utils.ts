import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCurrentFormatted() {
  const today = new Date();

  // Using Intl.DateTimeFormat to format the date as 'YYYY-MM-DD'
  const formatter = new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return formatter.format(today).replace(/\//g, "-");
}
