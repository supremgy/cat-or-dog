import StartForm from '@/components/StartForm';
import Image from 'next/image';
import InfoGrab from '../../public/infograb.svg';
import { Team } from '@/model/team';

async function fetchTeams() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/team`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch teams');
  }

  return await response.json();
}

export default async function Home() {
  const teamData: Team[] = await fetchTeams();
  const teams = teamData.map((team) => team.name);

  return (
    <div className='main-theme h-dvh overflow-y-auto'>
      <section className='flex flex-col items-center mt-36 gap-10'>
        <Image src={InfoGrab} alt='InfoGrab' height={45} />
        <div className='text-xl text-center'>
          안녕하세요!
          <br />
          <span className='font-bold'>Frontend</span> 개발자,
          <span className='font-bold'>이길영</span>입니다!
          <br />
          <div className='flex'>
            <span className='flex  items-center'>
              <Image src={InfoGrab} alt='InfoGrab' height={16} />
            </span>
            <span>에 적합한 인재인지</span>
          </div>
          <p>설문조사를 통해 알아보세요!</p>
        </div>
      </section>
      <StartForm teams={teams} />
    </div>
  );
}
