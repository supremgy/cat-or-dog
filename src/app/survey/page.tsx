import React from 'react';

const SurveyPage = () => {
  const survey = {
    step1: {
      question: '당신은 새로운 경험이나 아이디어를 받아들이는 것을 즐기시나요?',
      answer: [
        {
          content: '매우 그렇다',
          value: 5,
        },
        {
          content: '그렇다',
          value: 4,
        },
        {
          content: '보통이다',
          value: 3,
        },
        {
          content: '아니다',
          value: 2,
        },
        {
          content: '전혀 아니다',
          value: 1,
        },
      ],
    },
    step2: {
      question: '당신은 자주 불안하거나 스트레스를 받는 편인가요?',
      answer: [
        {
          content: '매우 그렇다',
          value: 5,
        },
        {
          content: '그렇다',
          value: 4,
        },
        {
          content: '보통이다',
          value: 3,
        },
        {
          content: '아니다',
          value: 2,
        },
        {
          content: '전혀 아니다',
          value: 1,
        },
      ],
    },
    step3: {
      question:
        '당신의 외향성을 1에서 5까지 점수로 매겨주세요. (1: 매우 내성적, 5: 매우 외향적) (주관식)',
      answer: undefined,
    },
    step4: {
      question:
        '다음 중 두 가지를 골라주세요. 당신의 성격을 가장 잘 나타내는 것은 무엇인가요?',
      answer: [
        {
          content: '다른 사람들을 도와주는 것을 좋아합니다',
          value: 4,
        },
        {
          content: '갈등 상황에서 중재를 잘 합니다',
          value: 3,
        },
        {
          content: '타인의 감정을 잘 이해합니다',
          value: 2,
        },
        {
          content: '남들과 협력하는 것을 즐깁니다',
          value: 1,
        },
      ],
    },
  };
  return <div className='main-theme'></div>;
};

export default SurveyPage;
