import Header from '@/components/Header';
import SurveyForm from '@/components/SurveyForm';
import React from 'react';

export default function SurveyPage() {
  //db date fetching
  const survey = {
    openness: {
      question: '당신은 새로운 경험이나 아이디어를 받아들이는 것을 즐기시나요?',
      answer: [
        {
          content: '😆 매우 그렇다',
          value: 5,
        },
        {
          content: '😁 그렇다',
          value: 4,
        },
        {
          content: '🙂 보통이다',
          value: 3,
        },
        {
          content: '🙁 아니다',
          value: 2,
        },
        {
          content: '🫨 전혀 아니다',
          value: 1,
        },
      ],
    },
    neuroticism: {
      question: '당신은 자주 불안하거나 스트레스를 받는 편인가요?',
      answer: [
        {
          content: '🤯 매우 그렇다',
          value: 5,
        },
        {
          content: '😤 그렇다',
          value: 4,
        },
        {
          content: '🙂 보통이다',
          value: 3,
        },
        {
          content: '🙂‍↔️ 아니다',
          value: 2,
        },
        {
          content: '😆 전혀 아니다',
          value: 1,
        },
      ],
    },
    extroversion: {
      question:
        '당신의 외향성을 1(내향적)에서 10(외향적)까지 점수로 매겨주세요.',
    },
    agreeableness: {
      question:
        '다음 중 두 가지를 골라주세요. 당신의 성격을 가장 잘 나타내는 것은 무엇인가요?',
      answer: [
        {
          content: '👂 친구의 어려움을 경청합니다',
          value: 1,
        },
        {
          content: '🗣️ 다른 사람의 의견을 존중합니다',
          value: 2,
        },
        {
          content: '🤝 화합을 위해 노력합니다',
          value: 3,
        },
        {
          content: '🎉 친구의 기쁨에 함께 기뻐합니다',
          value: 4,
        },
        {
          content: '⚖️ 모든 사람에게 공정하게 대합니다',
          value: 5,
        },
      ],
    },
  };

  return (
    <div className='main-theme relative'>
      <Header />
      <SurveyForm survey={survey} />
    </div>
  );
}
