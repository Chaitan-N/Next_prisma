import React from 'react';
import { SocialsCard } from './components/SocialsCard';

export default async function Home() {
  return (
    <>
      <div className='flex flex-col gap-16 md:gap-24'>
        {/* Content */}
        <div className='flex animate-in flex-col justify-center gap-8 pb-12 text-center'>
          <div>
            <h1 className='animate-in text-5xl font-bold tracking-tight text-primary sm:text-[4rem] sm:leading-[5rem]'>
              Yash Godara
            </h1>
            <h3>
              <span className='animate-in text-secondary'>Student </span>
              {' | '}
              <span className='animate-in text-secondary'>Developer</span>
            </h3>
          </div>

          <div>
            <h6
              className='animate-in text-2xl font-medium tracking-tight text-brand'
              style={{ '--index': 1 } as React.CSSProperties}
            >
              Exciting Things Coming Soon 🚧
            </h6>

            <p
              className='animate-in text-lg font-medium tracking-tight text-secondary'
              style={{ '--index': 1 } as React.CSSProperties}
            >
              Stay tuned for updates{' '}
              <span className='animate-in text-secondary'>🚀</span>
            </p>
          </div>
        </div>
        {/* Socials Card */}
        <SocialsCard />
      </div>
    </>
  );
}
