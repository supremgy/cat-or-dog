import StartForm from '@/components/StartForm';

export default function Home() {
  return (
    <div className='bg-[#82C5B6] flex flex-col items-center w-full h-dvh'>
      <section className='flex flex-col items-center mt-40 gap-10 my-10 mx-4'>
        <div className='text-5xl font-semibold'>Cat🐱? or Dog🐶?</div>
        <div className='text-xl text-center'>
          고양이인가요? 강아지인가요?
          <br /> 당신의 애완동물 선호도를 알아보세요!
        </div>
      </section>
      <StartForm />
    </div>
  );
}
