import { Member } from '@/model/member';

async function getMembersByTeam(team: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_PATH}/api/member/${team}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch members');
  }

  return await response.json();
}

async function getAllMembers() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_PATH}/api/member`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    }
  );
  if (!response.ok) {
    throw new Error('Failed to fetch members');
  }

  return await response.json();
}

async function uploadMember(params: Member) {
  await fetch('/api/member', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });
}

export { getMembersByTeam, getAllMembers, uploadMember };
