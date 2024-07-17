// chart.tsx
"use client";

import { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import { ChartContainer, ChartConfig } from '@/components/ui/chart';

const chartConfig: ChartConfig = {
  One: {
    label: 'One',
    color: '#2563eb',
  },
  Two: {
    label: 'Two',
    color: '#60a5fa',
  },
};

interface IProps {
  chart: any;
}

export const Chart = ({ chart }: IProps) => {
  const [newData, setNewData] = useState<any[]>(chart);

  useEffect(() => {
    console.log('Chart data:', chart);
    setNewData(chart);
  }, [chart]);

  const chartData = newData.map((item: any) => ({
    name: item.name,
    One: item.transactions[0]?.amount || 0,
    Two: item.transactions[1]?.amount || 0,
  }));

  console.log('Formatted chart data:', chartData);

  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="name"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 6)}
        />
        <Bar dataKey="One" fill={chartConfig.One.color} radius={4} />
        <Bar dataKey="Two" fill={chartConfig.Two.color} radius={4} />
      </BarChart>
    </ChartContainer>
  );
};
