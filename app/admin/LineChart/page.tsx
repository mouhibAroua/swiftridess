"use client"
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import Sidebar from '../sidebar/page';

// Custom type for the polar area chart
type PolarAreaChart = Chart<'polarArea', number[], string>;

const PolarChart = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<PolarAreaChart | null>(null);

  useEffect(() => {
    // Destroy existing chart if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Initialize the new chart when the component mounts
    const myChartRef = chartRef.current?.getContext('2d') as CanvasRenderingContext2D | null;

    if (myChartRef) {
      // Specify the correct type for the Chart constructor
      chartInstanceRef.current = new Chart(myChartRef, {
        type: 'polarArea',
        data: {
          labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
          datasets: [
            {
              data: [11, 16, 7, 3, 14],
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)',
                'rgb(54, 162, 235)',
              ],
            },
          ],
        },
        options: {
          // Add any options you need here
        },
      });
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []); // Removed chartRef from dependencies since it's not used within the useEffect

  return (
    <div>
      <Sidebar />
    <div className="flex items-center justify-center h-screen">
      
      <canvas className="w-64 h-64" ref={chartRef}></canvas>
    </div>
    </div>
  );
};

export default PolarChart;
