import { Member } from '@/model/member';

const getRandomRGBA = () => {
  const r = Math.floor(Math.random() * 256); // Red 값 (0-255)
  const g = Math.floor(Math.random() * 256); // Green 값 (0-255)
  const b = Math.floor(Math.random() * 256); // Blue 값 (0-255)
  const a = Math.random().toFixed(2); // Alpha 값 (0.00-1.00)

  return `rgba(${r}, ${g}, ${b}, 0.2)`;
};

const getTeamCountsByScoreRange = (
  members: Member[]
): { high: number[]; medium: number[]; low: number[] } => {
  const scoreMap: { high: number[]; medium: number[]; low: number[] } = {
    high: [], // 20점 이상
    medium: [], // 10점 이상 20점 미만
    low: [], // 10점 미만
  };

  const teamIds = Array.from(new Set(members.map((m) => m.team_id)));

  teamIds.forEach((teamId) => {
    const highCount = members.filter(
      (m) => m.team_id === teamId && m.score >= 20
    ).length;
    const mediumCount = members.filter(
      (m) => m.team_id === teamId && m.score >= 10 && m.score < 20
    ).length;
    const lowCount = members.filter(
      (m) => m.team_id === teamId && m.score < 10
    ).length;

    scoreMap.high.push(highCount);
    scoreMap.medium.push(mediumCount);
    scoreMap.low.push(lowCount);
  });

  return scoreMap;
};

const getTeamAverageScores = (members: Member[]): number[] => {
  const teamIds = Array.from(new Set(members.map((m) => m.team_id)));
  const averages: number[] = [];

  teamIds.forEach((teamId) => {
    const teamMembers = members.filter((m) => m.team_id === teamId);
    const averageScore =
      teamMembers.reduce((sum, member) => sum + member.score, 0) /
      teamMembers.length;
    averages.push(averageScore);
  });

  return averages;
};

const getTeamScoreStandardDeviations = (members: Member[]): number[] => {
  const teamIds = Array.from(new Set(members.map((m) => m.team_id)));
  const SDData: number[] = [];

  teamIds.forEach((teamId) => {
    const teamMembers = members.filter((m) => m.team_id === teamId);
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
  getRandomRGBA,
  getTeamCountsByScoreRange,
  getTeamAverageScores,
  getTeamScoreStandardDeviations,
};
