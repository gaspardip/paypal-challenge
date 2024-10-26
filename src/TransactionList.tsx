import type { Transaction } from "./types";

type TransactionListProps = {
  transactions: Transaction[];
};

export const TransactionList = ({ transactions }: TransactionListProps) => {
  return (
    <>
      {transactions.map(({ id, date, description, amount }) => (
        <div key={id}>
          <p>ID: {id}</p>
          <p>Date: {date}</p>
          <p>Description: {description}</p>
          <p>Amount: {amount}</p>
        </div>
      ))}
    </>
  );
};
