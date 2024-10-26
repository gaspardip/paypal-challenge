import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetchTransactions } from "./data";
import { DateFilter } from "./DateFilter";
import { TransactionList } from "./TransactionList";

export default function App() {
  const {
    isPending,
    error,
    data: transactions,
  } = useQuery({
    queryKey: ["transactionData"],
    queryFn: fetchTransactions,
  });

  const [{ startDate, endDate }, setDateRange] = useState({
    startDate: "",
    endDate: "",
  });

  if (error) {
    return <div>An error has occurred: {error.message}</div>;
  }

  if (isPending) {
    return <div>Loading transaction data...</div>;
  }

  const filteredTransactions = transactions!.filter(({ date }) => {
    const d = new Date(date);

    return (
      (!startDate || new Date(startDate) <= d) &&
      (!endDate || d <= new Date(endDate))
    );
  });

  return (
    <div>
      <DateFilter onChange={setDateRange} />
      <TransactionList transactions={filteredTransactions!} />
    </div>
  );
}
