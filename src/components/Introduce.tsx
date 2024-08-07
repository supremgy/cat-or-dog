import Image from 'next/image';
import React from 'react';
import InfoGrab from '../../public/infograb.svg';
export default function Introduce() {
  return (
    <section className='flex flex-col items-center mt-36 gap-10'>
      <Image src={InfoGrab} alt='InfoGrab' height={45} />
      <div className='text-xl text-center'>
        안녕하세요!
        <br />
        <span className='font-bold'>Frontend</span> 개발자,
        <span className='font-bold'>이길영</span>입니다!
        <br />
        <div className='flex'>
          <span className='flex  items-center'>
            <Image src={InfoGrab} alt='InfoGrab' height={16} />
          </span>
          <span>에 적합한 인재인지</span>
        </div>
        <p>설문조사를 통해 알아보세요!</p>
      </div>
    </section>
  );
}
