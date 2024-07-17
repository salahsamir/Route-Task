'use client'; // Ensure this file is treated as a client component

import React from 'react';

interface ChartContainerProps {
  children: React.ReactNode;
  config: any;
  className: string;
}

export const ChartContainer: React.FC<ChartContainerProps> = ({ children, config, className }) => {
  return <div className={className}>{children}</div>;
};
