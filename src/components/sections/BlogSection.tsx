import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';

const BlogSection = () => {
  const blogSectionRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { duration: 0.8, ease: 'power2.out' },
        scrollTrigger: {
          trigger: blogSectionRef.current,
          start: '50% bottom',
        },
      });

      tl.fromTo(
        '.blog-title',
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
        },
      ).fromTo(
        '.blog-card',
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
        },
      );
    },
    { scope: blogSectionRef },
  );

  return (
    <section
      id="blogs"
      ref={blogSectionRef}
      className="container grid min-h-screen place-content-center py-28"
    >
      <>
        <div className="mb-5 flex items-center justify-center gap-x-5">
          <div className="h-[1px] w-16 bg-secondary-200 dark:bg-neutral-500" />
          <header className="text-sm uppercase tracking-wider text-secondary-200 dark:text-primary-500">
            Blogs
          </header>
          <div className="h-[1px] w-16 bg-secondary-200 dark:bg-neutral-500" />
        </div>
        <div className="flex justify-center">
          <p className="blog-title mb-10 w-full text-center font-light tracking-wide text-secondary-200 dark:text-neutral-500 lg:w-6/12 lg:text-heading">
            Here is my blog space that I share collection of insights how
            I&apos;ve learned and understood throughout my career.
          </p>
        </div>
      </>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="blog-card dark:bg-primary-600 space-y-3 rounded-xl bg-secondary-400 p-5"
          >
            <p className="line-clamp-2 font-medium tracking-wide text-secondary-200 dark:text-secondary-400">
              Lorem ipsum dolor sit amet.
            </p>
            <time className="font-mono text-sm font-light text-secondary-200 dark:text-primary-500">
              Sept 14, 2023
            </time>
            <p className="line-clamp-5 font-light text-secondary-200 dark:text-primary-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
              vitae cupiditate incidunt vel natus accusantium inventore facere
              nesciunt perspiciatis, ut possimus, aliquam est velit, ratione
              quaerat unde aperiam tempora magnam.
            </p>
          </div>
        ))}
      </div>
      <div className="mt-10 flex flex-col items-center justify-center gap-y-5">
        <div
          className="after:bg-primary-600 border-primary-600 relative flex h-14 w-48 items-center justify-center border text-primary-100 after:absolute after:left-0 after:top-0 after:h-[100%] after:w-[0%] after:transition-all after:duration-500
        hover:text-secondary-400 hover:after:w-[100%] dark:text-primary-500 dark:hover:text-secondary-300"
        >
          <p className="relative z-20 uppercase tracking-wide">View Blogs</p>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
