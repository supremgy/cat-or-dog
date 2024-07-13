import Chart from '@/components/Chart';
import Header from '@/components/Header';
import React from 'react';
interface Animals {
  cat: number;
  dog: number;
}
interface Props {
  DevOps: Animals;
  Product: Animals;
  Success: Animals;
  Laboratory: Animals;
}
export default function DashBoardPage() {
  const data = {
    DevOps: {
      cat: 12,
      dog: 6,
    },
    Product: {
      cat: 4,
      dog: 7,
    },
    Success: {
      cat: 23,
      dog: 11,
    },
    Laboratory: {
      cat: 10,
      dog: 2,
    },
  };
  const calculateAverage = (data: Props) => {
    const DevOpsCatAverage =
      (data.DevOps.cat / (data.DevOps.cat + data.DevOps.dog)) * 10;
    const ProductCatAverage =
      (data.Product.cat / (data.Product.cat + data.Product.dog)) * 10;
    const SuccessCatAverage =
      (data.Success.cat / (data.Success.cat + data.Success.dog)) * 10;
    const LaboratoryCatAverage =
      (data.Laboratory.cat / (data.Laboratory.cat + data.Laboratory.dog)) * 10;

    const DevOpsDogAverage =
      (data.DevOps.dog / (data.DevOps.cat + data.DevOps.dog)) * 10;
    const ProductDogAverage =
      (data.Product.dog / (data.Product.cat + data.Product.dog)) * 10;
    const SuccessDogAverage =
      (data.Success.dog / (data.Success.cat + data.Success.dog)) * 10;
    const LaboratoryDogAverage =
      (data.Laboratory.dog / (data.Laboratory.cat + data.Laboratory.dog)) * 10;
    return {
      catAverage: [
        DevOpsCatAverage,
        ProductCatAverage,
        SuccessCatAverage,
        LaboratoryCatAverage,
      ],
      dogAverage: [
        DevOpsDogAverage,
        ProductDogAverage,
        SuccessDogAverage,
        LaboratoryDogAverage,
      ],
    };
  };

  const { catAverage, dogAverage } = calculateAverage(data);

  const calculateStandardDeviation = (data: Props) => {
    const dogStandardDeviations: number[] = [];
    const catStandardDeviations: number[] = [];

    const computeStandardDeviation = (values: number[]): number => {
      const mean = values.reduce((a, b) => a + b, 0) / values.length;
      const variance =
        values.reduce((a, b) => a + Math.pow(b - mean, 2), 0) /
        (values.length - 1);
      return Math.sqrt(variance);
    };

    const teams: (keyof Props)[] = Object.keys(data) as (keyof Props)[];

    const catValues = teams.map((team) => data[team].cat);
    const dogValues = teams.map((team) => data[team].dog);

    catStandardDeviations.push(computeStandardDeviation(catValues));
    dogStandardDeviations.push(computeStandardDeviation(dogValues));

    teams.forEach((team) => {
      catStandardDeviations.push(computeStandardDeviation([data[team].cat]));
      dogStandardDeviations.push(computeStandardDeviation([data[team].dog]));
    });

    return { dogStandardDeviations, catStandardDeviations };
  };
  const { dogStandardDeviations, catStandardDeviations } =
    calculateStandardDeviation(data);

  return (
    <div className='main-theme h-fit'>
      <Header />
      <section className='flex flex-col gap-10'>
        <Chart
          title='팀별 총합 차트'
          catData={[
            data.DevOps.cat,
            data.Product.cat,
            data.Success.cat,
            data.Laboratory.cat,
          ]}
          dogData={[
            data.DevOps.dog,
            data.Product.dog,
            data.Success.dog,
            data.Laboratory.dog,
          ]}
        />
        <Chart
          title='팀별 평균 차트'
          catData={catAverage}
          dogData={dogAverage}
        />
        <Chart
          title='팀별 표준편차 차트'
          catData={catStandardDeviations}
          dogData={dogStandardDeviations}
        />
      </section>
    </div>
  );
}
