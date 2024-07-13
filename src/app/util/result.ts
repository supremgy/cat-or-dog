import { Member } from '../dashboard/page';
import { ResultType } from '../result/page';

const description = (total: number, result: ResultType) => {
  if (total >= 20) {
    return result.excellent.content;
  } else if (total < 20 && total >= 10) {
    return result.normal.content;
  } else {
    return result.consideration.content;
  }
};

const calculateTotalData = (teamResult: Member[]) => {
  const totalData = [0, 0, 0];

  teamResult.forEach((member) => {
    if (member.score >= 20) {
      totalData[0] += 1; // totalData의 0번째 요소에 1 더하기
    } else if (member.score < 20 && member.score >= 10) {
      totalData[1] += 1; // totalData의 1번째 요소에 1 더하기
    } else {
      totalData[2] += 1; // totalData의 2번째 요소에 1 더하기
    }
  });

  return totalData;
};

export { description, calculateTotalData };
