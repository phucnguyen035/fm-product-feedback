import { PlusIcon } from '@heroicons/react/solid';
import Link from 'next/link';

import { Button } from '../Button';

export default function ButtonAddFeedback() {
  return (
    <Link passHref href="/feedback/add">
      <a>
        <Button className="no-underline" variant="pink" prependIcon={<PlusIcon />}>
          Add feedback
        </Button>
      </a>
    </Link>
  );
}
