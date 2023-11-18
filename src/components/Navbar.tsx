import { BookOpenCheck } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='navbar bg-neutral-100'>
      <div className='container'>
        <div className='flex-1'>
          <Link href='/' className='text-2xl'>
            <BookOpenCheck size={36} color='#88559b' />
          </Link>
        </div>
        <div className='flex-none'>
          <Link href='/create' className='btn btn-ghost text-2xl'>
            Create post
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
