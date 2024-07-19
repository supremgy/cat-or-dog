import Introduce from '@/components/Introduce';
import StartForm from '@/components/StartForm';

import { Team } from '@/model/team';
import { getTeams } from '@/service/team';

export const metadata = {
  title: 'Home',
};

export default async function Home() {
  const teamData: Team[] = await getTeams();
  const teams = teamData.map((team) => team.name);

  return (
    <div className='main-theme h-dvh overflow-y-auto'>
      <Introduce />
      <StartForm teams={teams} />
    </div>
  );
}
