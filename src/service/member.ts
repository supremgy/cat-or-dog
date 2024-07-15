import { Member } from '@/model/member';
import { client } from './sanity';

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
