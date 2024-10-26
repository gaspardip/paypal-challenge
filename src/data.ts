import dayjs from "dayjs";
import type { Transaction } from "./types";

const dateFormat = "YYYY/MM/DD";

const transactions: Transaction[] = [
  {
    id: "1",
    date: dayjs().subtract(1, "day").format(dateFormat),
    description: "First transaction",
    amount: 1000,
  },
  {
    id: "2",
    date: dayjs().subtract(2, "days").format(dateFormat),
    description: "Second transaction",
    amount: 2000,
  },
  {
    id: "3",
    date: dayjs().subtract(3, "days").format(dateFormat),
    description: "Third transaction",
    amount: 3000,
  },
  {
    id: "4",
    date: dayjs().subtract(4, "days").format(dateFormat),
    description: "Fourth transaction",
    amount: 4000,
  },
  {
    id: "5",
    date: dayjs().subtract(5, "days").format(dateFormat),
    description: "Fifth transaction",
    amount: 5000,
  },
];

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchTransactions = async () => {
  await sleep(500); // fake delay

  if (Math.random() > 0.5) {
    throw new Error("Failed to fetch transactions");
  }

  return transactions;
};
