import Header from '@/components/Header';
import SurveyForm from '@/components/SurveyForm';
import React from 'react';

export interface Answer {
  content: string;
  value: number;
}
export interface Survey {
  question: string;
  answer?: Answer[] | undefined;
}

export default function SurveyPage() {
  //db date fetching
  const survey: Survey[] = [
    {
      question: `<p>
        지원자는 <b>Frontend</b> 개발자로서 <b>프로젝트 및 디자인 기획</b>에 참여하고, 뛰어난 <b>소프트 스킬</b>로 실무와 프로젝트에서 <b>팀원을 리드</b>한 경험이 있습니다. InfoGrab에 적합한 인재상인가요?
        </p>`,
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
          content: '🤔 아니다',
          value: 2,
        },
        {
          content: '😔 전혀 아니다',
          value: 1,
        },
      ],
    },
    {
      question: `<p>
      지원자는 최근 DangDangWalk라는 프로젝트에서 팀원들과 <b>Agile</b> 방법론을 채택하여 <b>매일 StandUp 미팅과 3일 주기로 Sprint</b> 미팅을 진행하여 효율적이고 유연한 개발을 진행한 경험이 있습니다. InfoGrab 개발 문화에 적합한 인재인가요?
      </p>`,
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
          content: '🤔 아니다',
          value: 2,
        },
        {
          content: '😔 전혀 아니다',
          value: 1,
        },
      ],
    },
    {
      question:
        '다음 중 InfoGrab에 가장 적합한 Frontend 인재상을 두 가지 골라주세요.',
      answer: [
        {
          content: '🚀 애자일 개발 문화에 익숙하신 분',
          value: 5,
        },
        {
          content: '🤝 커뮤니케이션 및 협업 능력을 갖추신 분',
          value: 4,
        },
        {
          content: '💻 학습 역량보다 기술 역량이 더 좋으신 분',
          value: 3,
        },
        {
          content: '🔧 데브옵스에 대한 이해가 깊으신 분',
          value: 2,
        },
        {
          content: '🧠 알고리즘이나 CS 지식이 뛰어나신 분',
          value: 1,
        },
      ],
    },
    {
      question: `<p>지원자가 InfoGrab 팀에 적합한 인재상인지 점수를 매겨주세요.<br/>(1~10점)</p>`,
    },
  ];

  return (
    <div className='main-theme h-dvh overflow-y-auto relative'>
      <Header />
      <SurveyForm survey={survey} />
    </div>
  );
}
