'use client';
import { useStore } from '@/store';
import { useRouter } from 'next/navigation';
import { FormEvent, useEffect, useState } from 'react';
import Button from './Button';
import { signIn } from 'next-auth/react';

interface StartFormProps {
  team: string;
  nickname: string;
  password?: string;
}
interface StartErrorProps {
  team: boolean;
  nickname: boolean;
  password?: boolean;
}

const StartForm = () => {
  const [buttonText, setButtonText] = useState('시작하기');
  const [form, setForm] = useState<StartFormProps>({
    team: '',
    nickname: '',
    password: '',
  });
  const [error, setError] = useState<StartErrorProps>({
    team: false,
    nickname: false,
    password: false,
  });

  const setTeam = useStore((state) => state.setTeam);
  const setNickname = useStore((state) => state.setNickname);
  const resetAllData = useStore((state) => state.resetAllData);

  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
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

    if (form.team === 'admin') {
      if (!form.password) {
        setError((prev) => ({ ...prev, password: true }));

        hasError = true;
      } else {
        setError((prev) => ({ ...prev, password: false }));
      }
    }

    if (!hasError) {
      setTeam(form.team);
      setNickname(form.nickname);
      if (form.team === 'admin') {
        const response = await signIn('admin-credential', {
          redirect: false,
          team: form.team,
          nickname: form.nickname,
          password: form.password,
        });

        console.log('response : ', response);

        if (response?.ok) {
          router.push('/dashboard');
          return;
        } else {
          setError((prev) => ({ ...prev, nickname: true, password: true }));
          setTimeout(() => {
            setError({ team: false, nickname: false, password: false });
          }, 1000);
          return;
        }
      }
      router.push('/survey');
    }

    setTimeout(() => {
      setError({ team: false, nickname: false, password: false });
    }, 1000);
  };

  useEffect(() => {
    resetAllData();
  }, []);

  useEffect(() => {
    form.team === 'admin'
      ? setButtonText('대시보드로 이동')
      : setButtonText('시작하기');
  }, [form.team]);

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
          <option value='admin'>Admin</option>
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
          className={`z-20 input-theme text-teal-600 ${
            error.nickname && 'animate-shake border-2 border-red-600'
          }`}
        />

        <input
          type='password'
          onChange={(event) =>
            setForm((prev) => ({
              ...prev,
              password: event.target.value,
            }))
          }
          placeholder='비밀번호를 입력하세요'
          className={`input-theme text-teal-600 duration-200 z-10 ${
            form.team == 'admin' ? ' translate-y-0' : ' -translate-y-12'
          } ${error.password && 'animate-shake border-2 border-red-600'}  `}
        />
      </div>
      <Button
        type='submit'
        text={buttonText}
        className={`w-full h-12 text-xl duration-200 ${
          form.team !== 'admin' && '-translate-y-12'
        }`}
      />
    </form>
  );
};

export default StartForm;
