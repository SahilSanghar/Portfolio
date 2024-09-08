import React, { ReactNode } from 'react';

export default function Home({ children }: { children: ReactNode }) {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        {children}
      </div>
    </main>
  );
}
