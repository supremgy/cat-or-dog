'use client';
import { useStore } from '@/store';
import { useRouter } from 'next/navigation';
import { FormEvent, useEffect, useState } from 'react';
import Button from './Button';

interface StartFormProps {
  team: string;
  nickname: string;
}
interface StartErrorProps {
  team: boolean;
  nickname: boolean;
}

const StartForm = () => {
  const [form, setForm] = useState<StartFormProps>({ team: '', nickname: '' });
  const [error, setError] = useState<StartErrorProps>({
    team: false,
    nickname: false,
  });

  const setTeam = useStore((state) => state.setTeam);
  const setNickname = useStore((state) => state.setNickname);
  const resetAllData = useStore((state) => state.resetAllData);

  const router = useRouter();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let hasError = false;

    if (!form.team) {
      setError((prev) => ({ ...prev, team: true }));
      hasError = true;
    } else {
      setError((prev) => ({ ...prev, team: false }));
    }

    if (!form.nickname) {
      setError((prev) => ({ ...prev, nickname: true }));
      hasError = true;
    } else {
      setError((prev) => ({ ...prev, nickname: false }));
    }

    if (!hasError) {
      setTeam(form.team);
      setNickname(form.nickname);
      router.push('/survey');
    }

    setTimeout(() => {
      setError({ team: false, nickname: false });
    }, 1000);
  };

  useEffect(() => {
    resetAllData();
  }, []);
  return (
    <form onSubmit={handleSubmit} className='text-center mx-8 mb-4'>
      <div className='flex flex-col my-10 gap-2 items-center '>
        <select
          id='team'
          value={form.team}
          onChange={(event) =>
            setForm((prev) => ({
              ...prev,
              team: event.target.value,
            }))
          }
          className={`input-theme ${
            form.team === '' ? 'text-gray-400' : 'text-teal-600'
          }  ${error.team && 'animate-shake border-2 border-red-600'}`}
        >
          <option value='' disabled>
            팀을 선택하세요
          </option>
          <option value='DevOps'>DevOps Team</option>
          <option value='Product'>Product Team</option>
          <option value='Success'>Success Team</option>
          <option value='기업 부설 연구소'>기업 부설 연구소</option>
        </select>

        <input
          type='text'
          value={form.nickname}
          onChange={(event) =>
            setForm((prev) => ({
              ...prev,
              nickname: event.target.value,
            }))
          }
          placeholder='닉네임을 입력하세요'
          className={`input-theme text-teal-600 ${
            error.nickname && 'animate-shake border-2 border-red-600'
          }`}
        />
      </div>
      <Button type='submit' text='시작하기' className='w-full h-12 text-xl' />
    </form>
  );
};

export default StartForm;
