import { queryKeys } from '@/constants';
import { useStore } from '@/store';
import { getMembersByTeam } from '@/util/member';
import { useQuery } from '@tanstack/react-query';

const useGetMembersByTeam = () => {
  const team = useStore((state) => state.team);
  const { data, isSuccess } = useQuery({
    queryKey: [queryKeys.MEMBER, team],
    queryFn: () => getMembersByTeam(team),
    staleTime: 0,
  });

  return isSuccess ? data : [];
};

export const useMember = () => {
  const members = useGetMembersByTeam();
  return { members };
};
