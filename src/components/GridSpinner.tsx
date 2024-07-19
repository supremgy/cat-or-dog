'use client';
import { GridLoader } from 'react-spinners';

type Props = {
  color?: string;
};
export default function GridSpinner({ color = 'green' }: Props) {
  return (
    <div className='h-dvh flex items-start pt-32 justify-center'>
      <GridLoader color={color} size={30} />
    </div>
  );
}
