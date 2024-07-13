'use client';
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ChartProps {
  catData: number[];
  dogData: number[];
  title: string;
}

export default function Chart({ catData, dogData, title }: ChartProps) {
  const data = {
    labels: ['DevOps', 'Product', 'Success', '기업 부설 연구소'],
    datasets: [
      {
        label: 'Cat',
        data: catData,
        backgroundColor: 'rgba(255, 242, 0, 0.2)',
        borderColor: 'rgb(202, 188, 30)',
        borderWidth: 1,
      },
      {
        label: 'Dog',
        data: dogData,
        backgroundColor: 'rgba(255, 119, 0, 0.2)',
        borderColor: 'rgb(195, 118, 36)',
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: {
            size: 16,
          },
        },
      },
      title: {
        display: true,
        text: title,
      },
    },
    animation: {
      duration: 1000,
      easing: 'easeInOutExpo' as const,
      delay: (context: any) => {
        let delay = 0;
        if (context.type === 'data' && context.mode === 'default') {
          delay = context.dataIndex * 300 + context.datasetIndex * 100;
        }
        return delay;
      },
    },
  };

  return (
    <div className='w-full h-[60vh] max-h-[500px]'>
      <Bar data={data} options={options} />
    </div>
  );
}
