import { PenSquare, Trash } from 'lucide-react';
import Link from 'next/link';

const ButtonAction = () => {
  return (
    <div>
      <Link href='/edit/id' className='btn text-white btn-accent mr-2'>
        <PenSquare /> Edit
      </Link>
      <button className='btn btn-error text-white'>
        <Trash /> Delete
      </button>
    </div>
  );
};

export default ButtonAction;
