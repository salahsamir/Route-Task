// chartAction.tsx
"use client";

import { findTransactionByCustomerName } from '@/actions/transactions';
import { Input } from '../ui/input';

interface IProps {
  setChartData: (data: any[]) => void;
}

const ChartAction = ({ setChartData }: IProps) => {
  // Function to handle input change and fetch data
  const handleChangeCustomerName = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const result = await findTransactionByCustomerName(e.target.value);
    setChartData(result);
  };

  return <Input placeholder="Customer Name" onChange={handleChangeCustomerName} />;
};

export default ChartAction;
