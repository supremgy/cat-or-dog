'use client';
import { FormEvent, useState } from 'react';

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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let hasError = false;

    if (!form.team.length) {
      setError((prev) => ({ ...prev, team: true }));
      hasError = true;
    } else {
      setError((prev) => ({ ...prev, team: false }));
    }

    if (!form.nickname.length) {
      setError((prev) => ({ ...prev, nickname: true }));
      hasError = true;
    } else {
      setError((prev) => ({ ...prev, nickname: false }));
    }

    if (!hasError) {
      console.log(form);
    }
    setTimeout(() => {
      setError({ team: false, nickname: false });
    }, 1000);
  };
  return (
    <form onSubmit={handleSubmit} className='text-center'>
      <div className='flex flex-col my-10 gap-2'>
        <select
          id='team'
          value={form.team}
          onChange={(event) =>
            setForm((prev) => ({
              ...prev,
              team: event.target.value,
            }))
          }
          className={`w-full h-10 p-2 font-medium rounded-md ${
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
          className={`w-full h-10 p-2 font-medium rounded-md text-teal-600 ${
            error.nickname && 'animate-shake border-2 border-red-600'
          }`}
        />
      </div>

      <button
        type='submit'
        className='bg-[#373737] rounded-lg w-full h-12 text-white active:bg-black hover:bg-slate-800 duration-150 '
      >
        설문 시작하기
      </button>
    </form>
  );
};

export default StartForm;
