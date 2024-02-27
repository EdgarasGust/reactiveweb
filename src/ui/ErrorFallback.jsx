function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center bg-stone-400  ">
        <div
          className="w-screen rounded-md bg-red-400 py-20 text-center
          shadow-xl md:w-[700px] "
        >
          <h1 className="mb-10 text-2xl text-stone-300">
            Something went wrong 🤔
          </h1>
          <p className="mb-16 text-stone-300">{error.message}</p>
          <button
            className="rounded-xl border border-stone-400 px-4 py-2 text-stone-300 hover:scale-105 hover:bg-stone-200 hover:text-red-400"
            onClick={resetErrorBoundary}
          >
            Try again
          </button>
        </div>
      </div>
    </>
  );
}

export default ErrorFallback;
