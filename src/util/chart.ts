import { Member } from '@/model/member';
interface ScoreMapProps {
  high: number[];
  medium: number[];
  low: number[];
}
const getTeamCountsByScoreRange = (members: Member[]): ScoreMapProps => {
  const scoreMap: ScoreMapProps = {
    high: [], // 20점 이상
    medium: [], // 10점 이상 20점 미만
    low: [], // 10점 미만
  };

  const teamList = Array.from(new Set(members.map((m) => m.team)));

  teamList.forEach((team) => {
    const highCount = members.filter(
      (m) => m.team === team && m.score >= 20
    ).length;
    const mediumCount = members.filter(
      (m) => m.team === team && m.score >= 10 && m.score < 20
    ).length;
    const lowCount = members.filter(
      (m) => m.team === team && m.score < 10
    ).length;

    scoreMap.high.push(highCount);
    scoreMap.medium.push(mediumCount);
    scoreMap.low.push(lowCount);
  });

  return scoreMap;
};

const getTeamAverageScores = (members: Member[]): number[] => {
  const teamList = Array.from(new Set(members.map((m) => m.team)));
  const averages: number[] = [];

  teamList.forEach((team) => {
    const teamMembers = members.filter((m) => m.team === team);
    const averageScore =
      teamMembers.reduce((sum, member) => sum + member.score, 0) /
      teamMembers.length;
    averages.push(averageScore);
  });

  return averages;
};

const getTeamScoreStandardDeviations = (members: Member[]): number[] => {
  const teamList = Array.from(new Set(members.map((m) => m.team)));
  const SDData: number[] = [];

  teamList.forEach((teamId) => {
    const teamMembers = members.filter((m) => m.team === teamId);
    const averageScore =
      teamMembers.reduce((sum, member) => sum + member.score, 0) /
      teamMembers.length;
    const variance =
      teamMembers.reduce(
        (sum, member) => sum + Math.pow(member.score - averageScore, 2),
        0
      ) / teamMembers.length;
    const stddev = Math.sqrt(variance);
    SDData.push(stddev);
  });

  return SDData;
};

export {
  getTeamCountsByScoreRange,
  getTeamAverageScores,
  getTeamScoreStandardDeviations,
};
