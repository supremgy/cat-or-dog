import { Member } from '@/model/member';
import { client } from './sanity';

async function updateMember(member: Member) {
  try {
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

async function fetchMembersByTeam(team: string): Promise<Member[]> {
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

async function fetchAllMembers(): Promise<Member[]> {
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

export { updateMember, fetchMembersByTeam, fetchAllMembers };
