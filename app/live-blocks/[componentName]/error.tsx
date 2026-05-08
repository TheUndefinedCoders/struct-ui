'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 dark:bg-[#000000] bg-white">
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Something went wrong!</h2>
      <p className="text-slate-500">{error.message}</p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
      >
        Try again
      </button>
    </div>
  );
}
