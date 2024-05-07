import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import profilePic from '../../public/images/profile/chetan_about.png';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';

const about = () => {
  return (
    <>
      <Head>
        <title>Chetan Sahu | About Page</title>
        <meta name='description' content='any description' />
      </Head>

      <main className='flex w-full flex-col items-center justify-center dark:text-light max-w-7xl mx-auto'>
        <Layout className='pt-16'>
          <AnimatedText
            text='About Chetan'
            className='mb-16 xl:!text-7xl lg:!text-6xl sm:!text-5xl xs:!text-4xl sm:mb-8'
          />
          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            <div className='col-span-4 flex flex-col items-start justify-start xl:col-span-4 lg:col-span-8 lg:order-2 md:order-2 md:col-span-8'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>
                Biography
              </h2>
              <p className='font-medium mb-4'>
                Hey! <span class="start-icon">&#128075;</span> I'm Chetan
              </p>
              <p className='font-medium mb-4'>
                As a full-stack developer, I bring a strong programming background with problem-solving expertise
                in Data Structures & Algorithms, specialize in Python and JavaScript. Experienced in API design
                 with Node.js and Express, I thrive in crafting robust web applications.
              </p>
              <p className='font-medium mb-4'>
                My recent projects, the Expense Tracker App and RealTime GroupChat App, showcases my ability
                to deliver efficient solutions leveraging modern tech stacks. I build apps ensuring secure authentication,
                efficient data modeling, and deployments on cloud services such as AWS integrating sophisticated CI/CD such as Jenkins.
              </p>
              <p className='font-medium mb-4'>
                Noteworthy achievements, includes high rankings in Leetcode contests and 4 <span class="start-icon">&#11088;</span>  at Codechef,
                underscores my dedication to continuous improvement and my robust problem-solving capabilities.
                I'm committed to continuous improvement and tackling challenges head-on.</p>
              <p className='font-medium'>
                Seeking opportunities to contribute to cutting-edge projects and drive technological
                advancements in the tech industry.
              </p>
            </div>
            <div className='col-span-4 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark w-[85%] mx-auto dark:border-light xl:col-span-4 lg:col-span-8 lg:order-1 lg:max-w-lg md:order-1 md:col-span-8'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[1.5rem] bg-dark dark:bg-light' />
              <Image
                src={profilePic}
                alt='Jinventor'
                className='w-full h-auto rounded-2xl'
                priority
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;

