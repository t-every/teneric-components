import { NextSeo } from 'next-seo';
import React from 'react';
import Link from 'next/link';
import { Button } from 'teneric-components'
import Logo from '../assets/teneric-components.svg';
import Checkmark from '../assets/checkmark.svg';
import { Footer } from '../components/sections/footer';

import packageInfo from '../../package.json';
import { NextPage } from 'next';
const version = packageInfo.version;

const Feature: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <div className="flex gap-1 items-center">
    <Checkmark />
    <span className="font-bold">{children}</span>
  </div>
);

const Step: React.FC<{
  count: number;
  title: string;
  subTitle: string;
  code: JSX.Element;
}> = (props) => (
  <div className="flex flex-col gap-1 items-center">
    <div className="h-6 w-6 mb-2 text-sm rounded-full bg-gradient-900 text-gradient-50 flex items-center justify-center">
      {props.count}
    </div>
    <div className="font-bold">{props.title}</div>
    <div className="text-green-700 text-sm">{props.subTitle}</div>
    <code className="mt-2 border border-gradient-200 py-2 px-4 rounded font-bold bg-white w-full text-center">
      {props.code}
    </code>
  </div>
);

const Steps = () => (
  <div className="grid  grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8 my-12">
    <Step
      count={1}
      title="Install package"
      subTitle="It weighs less than xx kb"
      code={
        <code>
          <span className="text-gradient-600">yarn add</span>{' '}
          <span className="text-gradient-800">teneric-components</span>
        </code>
      }
    ></Step>
    <Step
      count={2}
      title="Add Button to your app"
      subTitle="You can..."
      code={
        <>
          <span className="text-gradient-600">{'<div>'}</span>
          <span className="text-gradient-800">{'<Button/>'}</span>
          <span className="text-gradient-600">{'</div>'}</span>
        </>
      }
    ></Step>
    <Step
      count={3}
      title="Start coding!"
      subTitle="Call ..."
      code={
        <>
          <span className="text-gradient-600">{'<Button'}</span>
          <span className="text-gradient-800">{' text=""/>'}</span>
        </>
      }
    ></Step>
  </div>
);

const Features = () => (
  <div className="my-12 grid gap-x-8 gap-y-5 grid-cols-2 md:grid-cols-3">
    <Feature>Easy to use</Feature>
    <Feature>Customizable</Feature>
    <Feature>Emoji Support</Feature>
  </div>
);

const Home: NextPage = () => {
  return (
    <div className="overflow-x-hidden">
      <NextSeo
        title={'teneric-components - a T-Every lib'}
        openGraph={{
          images: [
            {
              url: `https://i.imgur.com/8rodcFL.png`,
              width: 1200,
              height: 630,
            },
          ],
        }}
        description="teneric-components."
      />
      <header className="bg-gradient-to-b from-gradient-50 to-white bg-opacity-10">
        <div className="container  flex flex-col items-center relative">
          <div>
            <Logo
              role="img"
              className="relative animate-slide-in transition-all duration-200 -mt-8 md:mt-10"
              style={{
                willChange: 'filter',
              }}
            />
          </div>
          <div className="text-center my-12 relative duration-200">
            <h1 className="text-3xl md:text-4xl animate-enter font-bold text-gradient-900">
              A T-Every library
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gradient-600 mt-2">
              Enjoy
            </h2>
          </div>

          <div className="text-gradient-600 my-2">
            <Link href="/docs">
              <a className="underline">Documentation</a>
            </Link>
            {' · '}
            <span>v{version}</span>
          </div>

          <Features />
          <Steps />
          <div className="w-full max-w-4xl">
            <div className="my-14">
              <h2 className="ml-5 text-2xl font-bold">Examples</h2>
              <Button 
                text="aa"
                textColor="black"
                backgroundColor="#00ac5c"
                textColorHover="black"
                backgroundColorHover="#00cfa2"
                // type="submit"
                letterSpacing="2px"
                fontSize="14px"
                fontWeight="600"
              />
            </div>
          </div>
        </div>
      </header>
      <Footer noBadge />
    </div>
  );
}

export default Home;