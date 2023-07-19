import LoadingSpinner from '@/components/loadingSpinner';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="w-full flex flex-1 place-content-center h-screen">
      <LoadingSpinner />
    </div>
  );
}
