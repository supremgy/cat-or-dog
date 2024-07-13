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

type Database = {
  label: string;
  data: number[];
  backgroundColor: string;
  borderColor?: string;
  borderWidth: number;
};
interface ChartProps {
  labels: string[];
  databases: Database[];
  title: string;
}

export default function Chart({ labels, databases, title }: ChartProps) {
  const data = {
    labels: labels,
    datasets: databases,
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 17,
        },
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
    scales: {
      x: {
        ticks: {
          font: {
            size: 18, // x축 폰트 크기
          },
        },
      },
      y: {
        ticks: {
          font: {
            size: 18, // y축 폰트 크기
          },
          stepSize: 1, // y축 단위를 1로 설정
        },
      },
    },
  };

  return (
    <div className='w-full h-[45vh] max-h-[500px]'>
      <Bar data={data} options={options} />
    </div>
  );
}
