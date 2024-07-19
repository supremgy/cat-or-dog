import dynamic from 'next/dynamic';

const SyncLoader = dynamic(
  () => import('react-spinners').then((lib) => lib.SyncLoader),
  {
    ssr: false,
  }
);
interface Props {
  color?: string;
  size?: number;
}
export default function Loader({ color = '#ffffffad', size }: Props) {
  return (
    <div className='absolute size-full flex justify-center items-center z-10'>
      <SyncLoader color={color} size={size} />
    </div>
  );
}
