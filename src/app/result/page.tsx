import Header from '@/components/Header';
import ResultForm from '@/components/ResultForm';
import React from 'react';

export default function ResultPage() {
  const type = {
    cat: {
      emoji: '🐱',
      title: '당신은 고양이를 좋아하는 사람입니다!',
      detail:
        '당신은 독립적이고 새로운 경험을 받아들이는 것을 즐기는 성향을 가지고 있습니다. 고양이의 자유로운 성격과 조용한 생활을 선호하는 당신은 고양이와 잘 어울릴 수 있습니다. 고양이는 당신에게 차분한 위로와 평안을 제공해 줄 것입니다.',
    },
    dog: {
      emoji: '🐶',
      title: '당신은 강아지를 좋아하는 사람입니다!',
      detail:
        '당신은 외향적이고 사교적인 성향을 가지고 있으며, 다른 사람과의 상호작용을 즐깁니다. 강아지의 활발하고 친근한 성격은 당신의 사교적인 성향과 잘 맞습니다. 강아지는 당신에게 즐거움과 충성을 제공해 줄 것입니다.',
    },
  };

  return (
    <div className='main-theme'>
      <Header />
      <section className='mt-16'>
        <div className='w-full text-center font-bold text-2xl'>
          당신의 결과는?
        </div>
        <ResultForm type={type} />
      </section>
    </div>
  );
}
