import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';

// ** Component Import
import IconMouse from '../icons/IconMouse';
import IconBgHero from '../icons/IconBgHero';

const HeroSection = () => {
  const heroSectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '.hero-animation',
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.25,
          delay: 2.5,
          stagger: 0.5,
          ease: 'power2.inOut',
        },
      );

      gsap.fromTo(
        '.scroll-animation',
        {
          y: '100',
        },
        {
          y: '2.5',
          duration: 1.5,
          delay: 3,
          ease: 'power4.out',
        },
      );
    },
    { scope: heroSectionRef },
  );

  return (
    <section
      ref={heroSectionRef}
      className="relative flex min-h-screen flex-col items-start justify-center lg:flex-row lg:items-center lg:justify-start"
    >
      <IconBgHero className="absolute right-0 text-primary-500/25 dark:text-primary-200" />
      <div className="container">
        <div className="space-y-5">
          <div className="heading">
            <h1
              aria-hidden={true}
              className="hero-animation font-light uppercase tracking-wider text-secondary-200 dark:text-primary-500 lg:text-heading"
            >
              Hi, I&apos;m Myat Min Aung 👋
            </h1>
          </div>
          <h1
            aria-hidden={true}
            className="hero-animation dark:text-secondary-400 text-4xl font-medium tracking-wider text-secondary-200 lg:text-8xl"
          >
            On a mission to innovate, problem-solve, and craft robust digital
            solutions.
          </h1>
          <div className="flex flex-col gap-x-10 lg:flex-row lg:items-start lg:pt-10">
            <div className="mt-4 hidden h-[1px] w-96 bg-secondary-100 dark:bg-primary-400 lg:block" />
            <div className="heading flex-1">
              <p className="hero-animation w-full font-light tracking-wider text-secondary-200 dark:text-primary-500 lg:text-heading">
                As a passionate frontend developer, I specialize in translating
                ideas into seamless, user-centric web experiences.
              </p>
            </div>
          </div>
        </div>
        <div className="scroll-animation absolute bottom-5 z-20 flex items-center gap-x-1">
          <IconMouse className="dark:text-secondary-400 w-4 text-secondary-200" />
          <p className="dark:text-secondary-400 text-sm text-secondary-200">
            Scroll <br />
            To Explore
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
