import Header from '@/components/Header';
import StartForm from '@/components/StartForm';

export default function Home() {
  return (
    <div className='main-theme'>
      <Header />
      <section className='flex flex-col items-center mt-36 gap-10'>
        <div className='text-4xl font-semibold'>Cat🐱? or Dog🐶?</div>
        <div className='text-xl text-center'>
          고양이인가요? 강아지인가요?
          <br /> 당신의 애완동물 선호도를 알아보세요!
        </div>
      </section>
      <StartForm />
    </div>
  );
}
