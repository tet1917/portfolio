import React from "react";

export const Time = ({ time }: { time: string }) => {
  const date = new Date(time);
  const formattedDate = date.toISOString().split("T")[0];
  const formattedDate2 = date.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return <time dateTime={formattedDate}>{formattedDate2}</time>;
};
