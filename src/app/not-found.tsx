import Image from 'next/image';
import Link from 'next/link';
 
export default function NotFound(): React.JSX.Element {
  return (
    <div className='flex flex-col items-center justify-center h-screen px-5'>
     <div className='flex flex-col items-center justify-center gap-4 text-center bg-gray-100 p-10 rounded-lg '>
      <Image src="/assets/error.png" alt="404" width={300} height={300} className='bg-white p-4 rounded-lg' />
      <h2 className='text-4xl font-bold'> Not Found</h2>
      <p className='text-gray-500'>Could not find requested page</p>
      <Link href="/" className='text-blue-500 font-bold'>Return Home</Link>
      </div> 
    </div>
  );
}
