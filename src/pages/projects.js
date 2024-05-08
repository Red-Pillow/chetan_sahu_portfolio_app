import AnimatedText from '@/components/AnimatedText';
import { GithubIcon } from '@/components/Icons';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import groupchatapp from '../../public/images/projects/groupchat_create_join_page.png'
import freelancr from '../../public/images/projects/freelancr.png';
import nodejs from '../../public/images/Icons/node.png';
import blogapp from '../../public/images/projects/BlogApp.gif';
import expensetracker from '../../public/images/projects/ExpenseTracker.gif';
import mongodb from '../../public/images/Icons/mongodb.png';
import react from '../../public/images/Icons/react.png';
import rest from '../../public/images/Icons/rest_api.png';
import socket from '../../public/images/svgs/socket.webp';
import java from '../../public/images/Icons/java.png';
import spring from '../../public/images/Icons/spring.png';
import mysql from '../../public/images/Icons/mysql.png';
import js from '../../public/images/Icons/js.png';
import { motion } from 'framer-motion';

const FramerImage = motion(Image);

const SkillIcons = ({ name, src, className }) => {
  return (
    <div className='group relative flex justify-center'>
      <div
        className={`w-14 h-14 sm:w-10 sm:h-10 border-2 border-white  overflow-hidden bg-fill bg-white mr-2 transition-all hover:scale-[1.1] ${className}`}
      >
        <Image src={src} alt={name} />
      </div>
      <span className='absolute -bottom-5 text-center z-50 bg-gray-500 text-white rounded mr-2 px-2 opacity-0 group-hover:opacity-100 transition-all font-medium sm:text-sm whitespace-nowrap'>
        {name}
      </span>
    </div>
  );
};

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
  props,
}) => {
  return (
    <article className='w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />
      <Link
        href={link}
        target='_blank'
        className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
      >
        <FramerImage
          src={img}
          alt={title}
          className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
        />
      </Link>

      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>
          {type}
        </span>
        <Link
          href={link}
          target='_blank'
          className='hover:underline underline-offset-2'
        >
          <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>
            {title}
          </h2>
        </Link>
        <div className='flex justify-start'></div>
        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>
          {summary}
        </p>
        <div className='flex justify-start my-2'>
          {props.map(({ name, src }, index) => (
            <SkillIcons src={src} name={name} key={index} />
          ))}
        </div>

        <div className='mt-2 flex items-center'>
          <Link href={github} target='_blank' className='w-10'>
            <GithubIcon className='hover:scale-[1.1] transition-all' />
          </Link>
          <Link
            href={link}
            target='_blank'
            className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base hover:scale-[1.1] transition-all'
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, summary, img, link, github, props }) => {
  return (
    <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' />

      <Link
        href={link}
        target='_blank'
        className='w-full cursor-pointer overflow-hidden rounded-lg'
      >
        <FramerImage
          src={img}
          alt={title}
          className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base'>
          {type}
        </span>
        <Link
          href={link}
          target='_blank'
          className='hover:underline underline-offset-2'
        >
          <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>
            {title}
          </h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>
          {summary}
        </p>
        <div className='flex justify-start my-2'>
          {props.map(({ name, src }, index) => (
            <SkillIcons src={src} name={name} key={index} />
          ))}
        </div>
        <div className='w-full mt-2 flex items-center justify-between'>
          <Link href={github} target='_blank' className='w-10 md:w-6'>
            <GithubIcon className='hover:scale-[1.1] transition-all' />
          </Link>
          <Link
            href={link}
            target='_blank'
            className='rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base hover:scale-[1.1] transition-all'
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  const project1 = [
    { src: js, name: 'Javascript' },
    { src: nodejs, name: 'Nodejs' },
    { src: mysql, name: 'MySQL' },
    { src: rest, name: 'RESTAPI' },
  ];
  const project2 = [
    { src: js, name: 'Javascript' },
    { src: nodejs, name: 'Nodejs' },
    { src: mysql, name: 'MySQL' },
    { src: rest, name: 'RESTAPI' },
    { src: socket, name: 'Socket.io'},
  ];
  const project3 = [
    { src: js, name: 'JavaScript' },
    { src: react, name: 'React' },
  ];
  return (
    <>
      <Head>
        <title>Chetan Sahu | Projects Page</title>
        <meta name='description' content='any description' />
      </Head>

      <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText
            text='Simple, Creation, Modern!'
            className='mb-16 xl:!text-7xl lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
          />

          <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
            <div className='col-span-12'>
              <FeaturedProject
                title='Expense Tacker App'
                img={expensetracker}
                summary='A fullstack expense tracking app built with Node.js Express.js supporting JWT authenticated users to create,edit and track expenses of different categorical expenses. App supports users to access premium subscription feature to download monthly and yearly expense report integrating Razorpay payment gateway API, realtime leader board feature ranks users based on expenses'
                link='http://myexpensetrakr.publicvm.com/'
                github='https://github.com/Red-Pillow/Expense-Tracker-App'
                type='Personal Project'
                props={project1}
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title='RealTime GroupChat App'
                img={groupchatapp}
                summary='A realtime groupchat app, built with Node.js, Express.js for RestfulAPIs. Socket.io for seamless group chat and one-to-one private chat with JWT-based user authentication for enhanced security. The app App supports multimedia sharing of images as well as videos in real time.'
                link='http://groupchatapp.publicvm.com/'
                github='https://github.com/Red-Pillow/GroupChatApp'
                type='Personal Project'
                props={project2}
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title='BlogApp'
                img={blogapp}
                summary='A a fully functional Blog App using Node.js,Express.js and Sequelize ORM over MySQL that implements RESTful routes and CRUD functionalities to allow the users to view a list of blogs, create new blogs and comment on the blogs.'
                link='https://github.com/Red-Pillow/BlogApp'
                github='https://github.com/Red-Pillow/BlogApp'
                type='Blogging App'
                props={project3}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
