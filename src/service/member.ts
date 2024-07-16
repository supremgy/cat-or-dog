import { Member } from '@/model/member';
import { client } from './sanity';
import { headers } from 'next/headers';

export async function updateMember(member: Member) {
  try {
    // team 이름을 기반으로 team 문서의 _id 조회
    const team = await client.fetch(
      `
      *[_type == "team" && name == $name]{
        _id
      }[0]
    `,
      { name: member.team }
    );

    if (!team) {
      throw new Error(`Team "${member.team}" not found`);
    }

    const teamId = team._id;

    // 기존 멤버 조회
    const existingMembers = await client.fetch(
      `
      *[_type == "member" && nickname == $nickname && team._ref == $teamId]{
        _id, score
      }
    `,
      { nickname: member.nickname, teamId }
    );

    if (existingMembers.length > 0) {
      // 기존 멤버가 존재하면 score 업데이트
      const existingMember = existingMembers[0];
      const result = await client
        .patch(existingMember._id)
        .set({ score: member.score })
        .commit();

      return result;
    } else {
      // 기존 멤버가 존재하지 않으면 새로운 멤버 추가
      const result = await client.create({
        _type: 'member',
        nickname: member.nickname,
        team: {
          _type: 'reference',
          _ref: teamId,
        },
        score: member.score,
      });

      return result;
    }
  } catch (error) {
    console.error('Error adding or updating member:', error);
    throw new Error('Failed to add or update member');
  }
}

export async function fetchMembersByTeam(team: string): Promise<Member[]> {
  try {
    const members = await client.fetch(
      `
       *[_type == "member" && team->name == $team]{
        "team": team->name,
        nickname,
        score
      }
      `,
      { team }
    );

    return members;
  } catch (error) {
    console.error('Error fetching members', error);
    throw new Error('Failed to fetch members');
  }
}

export async function fetchAllMembers(): Promise<Member[]> {
  try {
    const members = await client.fetch(
      `
        *[_type == "member"] | order(team->name asc) {
        "team": team->name,
        nickname,
        score
      }
      `
    );
    return members;
  } catch (error) {
    console.error('Error fetching members', error);
    throw new Error('Failed to fetch members');
  }
}

export async function getMembersByTeam(team: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_PATH}/api/member/${team}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
      },
      cache: 'no-store',
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch members');
  }

  return await response.json();
}

export async function getAllMembers() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_PATH}/api/member`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
      },
      cache: 'no-store',
    }
  );
  if (!response.ok) {
    throw new Error('Failed to fetch members');
  }

  return await response.json();
}
