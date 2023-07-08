'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <h4>Go back to the beginning</h4>
      <button onClick={() => router.push('/')}>Home</button>
    </div>
  );
}
