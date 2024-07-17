// ChartPage.tsx
"use client";
import { useEffect, useState } from 'react';
import ChartAction from '@/components/Actions/chartAction';
import { Chart } from '@/components/chart';
import { findTransactionForChart } from '@/actions/transactions';

const ChartComponent = () => {
  const [chartData, setChartData] = useState<any[]>([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await findTransactionForChart();
    setChartData(data);
  };

  return (
    <div>
      <div className="grid sm:grid-cols-2 my-5 py-5">
        <div className="h-full flex items-center">
          <div>
            <h1 className="text-blue-800 text-3xl mb-3 text-center font-semibold">
              Customer Transactions Charts
            </h1>
         
            <ChartAction setChartData={setChartData} />
          </div>
        </div>
        <div>
          <Chart chart={chartData} />
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
