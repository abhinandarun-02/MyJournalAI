"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";


const Nav = () => {
  const user = {
    name:"Abhinand",
    image: "https://lh3.googleusercontent.com/ogw/AOLn63FcbYIDVfDEBHdYWlu-Fbt89Kjuia14VsPFhDiUgA=s32-c-mo"
  }

  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/images/Logo.svg'
          alt='logo'
          width={30}
          height={30}
          className='object-contain'
        />
        <p className='logo_text'>MyJournalAI</p>
      </Link>

      {/* Desktop Navigation */}
      <div className='sm:flex hidden'>
        {user ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href='/create-prompt' className='black_btn'>
              Create Post
            </Link>

            <button type='button' className='outline_btn'>
              Sign Out
            </button>

            <Link href='/profile'>
              <Image
                src={user.image}
                width={37}
                height={37}
                className='rounded-full'
                alt='profile'
              />
            </Link>
          </div>
        ) : (
          <>
            {
        
                <button
                  type='button'
                  key="Google"
                  className='black_btn'
                >
                  Sign in
                </button>
              }
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className='sm:hidden flex relative'>
        {user ? (
          <div className='flex'>
            <Image
              src={user.image}
              width={37}
              height={37}
              className='rounded-full'
              alt='profile'
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />

            {toggleDropdown && (
              <div className='dropdown'>
                <Link
                  href='/profile'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href='/create-prompt'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type='button'
                  className='mt-5 w-full black_btn'
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {<button
                  type='button'
                  key="Google"
                  className='black_btn'
                >
                  Sign in
                </button>
            }
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
