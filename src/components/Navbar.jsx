import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../utils/constants.js';
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";


const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav style={{backgroundColor: "#030821"}} className={`${styles.paddingX} w-full py-5 flex justify-center items-center fixed top-0 z-20`}>
      <div className='w-full flex justify-between items-start max-w-6xl mx-auto'>
        <Link to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className='text-[18px] font-bold cursor-pointer flex text-[#ff740a]'>AJ</p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li key={link.id}
              className={`${active === link.title
                ? "text-[#ff740a] border-b-3 border-[#ff740a]"
                : "text-gray-300"
                } hover:text-[#ff740a] text-[18px] font-medium cursor-pointer hover:border-b-3 hover:border-[#ff740a]`}
              onClick={() => setActive(link.title)}>
              <a href={`#${link.id}`}> {link.title} </a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 m-auto min-w-[140px] z-10 rounded-xl`}>

            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li key={link.id}
                  className={`${active === link.title
                    ? "text-[#ff740a] border-b-3 border-[#ff740a]"
                    : "text-gray-300"
                    } font-poppins font-medium curosr-pointer text-[16px]`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}>
                  <a href={`#${link.id}`}> {link.title} </a>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </nav >
  )
}

export default Navbar