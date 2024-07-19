'use client';
import { GridLoader } from 'react-spinners';

type Props = {
  color?: string;
};
export default function GridSpinner({ color = 'green' }: Props) {
  return <GridLoader color={color} size={30} />;
}
