import { Navbar } from "@/components";
import { TransactionPageProps } from "@/types";
import React from "react";
import { useTrx } from "./useTrx";

const TransactionPage: React.FC<TransactionPageProps> = (props) => {
  const trx = useTrx(props);

  return <Navbar />;
};

export default TransactionPage;
