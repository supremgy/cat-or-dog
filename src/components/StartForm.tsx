'use client';
import { FormEvent, useState } from 'react';

interface FormData {
  team: string;
  nickname: string;
}

const StartForm = () => {
  const formAction = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data: FormData = {
      team: formData.get('team') as string,
      nickname: formData.get('nickname') as string,
    };
    console.log(data);
  };
  const [selectedTeam, setSelectedTeam] = useState<string>('');
  const handleTeamChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTeam(event.target.value);
  };
  return (
    <form onSubmit={formAction} className='text-center'>
      <div className='flex flex-col my-10 gap-2'>
        <select
          id='team'
          name='team'
          className={`w-full h-9 p-2 font-medium rounded-md ${
            selectedTeam === '' ? 'text-gray-400' : 'text-teal-600'
          }`}
          value={selectedTeam}
          onChange={handleTeamChange}
          required
        >
          <option value='' disabled selected>
            팀을 선택하세요
          </option>
          <option value='DevOps'>DevOps Team</option>
          <option value='Product'>Product Team</option>
          <option value='Success'>Success Team</option>
          <option value='기업 부설 연구소'>기업 부설 연구소</option>
        </select>
        <input
          type='text'
          name='nickname'
          placeholder='닉네임을 입력하세요'
          className='w-full h-9 p-2 font-medium rounded-md valid:text-teal-600'
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
