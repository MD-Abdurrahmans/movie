/** @format */

import {FiAirplay} from "react-icons/fi";
import {TbArrowBadgeRightFilled, TbArrowBadgeDownFilled, } from "react-icons/tb";
import {Link} from "react-router-dom";
import Containers from "../../shared/containers/Containers";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
const Navbar = () => {
const [toggle,setToggle] = useState(true);
const [searchBox,setSearchBox] = useState(true);



  const links = (
    <>
      {/* link 1 */}
      <li className='group relative'>
        <summary className='after:hidden'>
          Movies <TbArrowBadgeDownFilled />{" "}
        </summary>
        <ul className='p-2 bg-primary w-[400px] hidden overflow-y-auto  group-hover:block border-0 rounded-none top-5  z-50 md:top-9 absolute '>
          <div className='grid md:grid-cols-3 gap-4'>
            {/* one */}
            <div>
              <li>
                <Link to='' className='text-basic '>
                  <TbArrowBadgeRightFilled className='font-bold' /> Tamil
                </Link>
              </li>
              <li>
                <Link to='' className='text-basic '>
                  <TbArrowBadgeRightFilled className='font-bold' /> Kannada
                </Link>
              </li>
              <li>
                <Link to='' className='text-basic '>
                  <TbArrowBadgeRightFilled className='font-bold' /> Turkish
                </Link>
              </li>
              <li>
                <Link to='' className='text-basic '>
                  <TbArrowBadgeRightFilled className='font-bold' /> Tv,Show
                </Link>
              </li>
            </div>
            {/* two */}
            <div>
              <li>
                <Link to='' className='text-basic '>
                  <TbArrowBadgeRightFilled className='font-bold' /> Bollywood
                </Link>
              </li>
              <li>
                <Link to='' className='text-basic '>
                  <TbArrowBadgeRightFilled className='font-bold' /> Telugu
                </Link>
              </li>
              <li>
                <Link to='' className='text-basic '>
                  <TbArrowBadgeRightFilled className='font-bold' /> Korean
                </Link>
              </li>
              <li>
                <Link to='' className='text-basic '>
                  <TbArrowBadgeRightFilled className='font-bold' /> Spanish
                </Link>
              </li>
              <li>
                <Link to='' className='text-basic '>
                  <TbArrowBadgeRightFilled className='font-bold' /> HEVC
                  Collection
                </Link>
              </li>
              <li>
                <Link to='' className='text-basic '>
                  <TbArrowBadgeRightFilled className='font-bold' /> Others
                </Link>
              </li>
            </div>
            {/* three */}
            <div>
              <li>
                <Link to='' className='text-basic '>
                  <TbArrowBadgeRightFilled className='font-bold' /> Bollywood
                </Link>
              </li>
              <li>
                <Link to='' className='text-basic '>
                  <TbArrowBadgeRightFilled className='font-bold' /> Telugu
                </Link>
              </li>
              <li>
                <Link to='' className='text-basic '>
                  <TbArrowBadgeRightFilled className='font-bold' /> English,
                  Hollywood
                </Link>
              </li>
              <li>
                <Link to='' className='text-basic '>
                  <TbArrowBadgeRightFilled className='font-bold' /> Malayam
                </Link>
              </li>
              <li>
                <Link to={`/category/${'Actions'}`} className='text-basic '>
                  <TbArrowBadgeRightFilled className='font-bold' />
                 Actions
                </Link>
              </li>
              <li>
                <Link to='' className='text-basic '>
                  <TbArrowBadgeRightFilled className='font-bold' /> Tv,Web
                  Series
                </Link>
              </li>
            </div>
          </div>
        </ul>
      </li>

      {/* link 2 */}
      <li className='group relative'>
        <summary className='after:hidden'>
          Genres <TbArrowBadgeDownFilled />{" "}
        </summary>
        <ul className='p-2 bg-primary w-[400px] hidden  group-hover:block border-0 rounded-none  top-5  z-50 md:top-9  absolute '>
          <div className='grid md:grid-cols-3 gap-4'>
            {/* one */}
            <div>
              <li>
                <Link to='' className='text-basic '>
                  <TbArrowBadgeRightFilled className='font-bold' /> Anime
                </Link>
              </li>
              <li>
                <Link to='' className='text-basic '>
                  <TbArrowBadgeRightFilled className='font-bold' /> Biography
                </Link>
              </li>
              <li>
                <Link to='' className='text-basic '>
                  <TbArrowBadgeRightFilled className='font-bold' /> Horror
                </Link>
              </li>
              <li>
                <Link to='' className='text-basic '>
                  <TbArrowBadgeRightFilled className='font-bold' /> Romance
                </Link>
              </li>
            </div>
            {/* two */}
            <div>
              <li>
                <Link to='' className='text-basic '>
                  <TbArrowBadgeRightFilled className='font-bold' /> Sports
                </Link>
              </li>
              <li>
                <Link to='' className='text-basic '>
                  <TbArrowBadgeRightFilled className='font-bold' /> Animation &
                  cartoon Movies
                </Link>
              </li>
              <li>
                <Link to='' className='text-basic '>
                  <TbArrowBadgeRightFilled className='font-bold' /> Comedy
                </Link>
              </li>
              <li>
                <Link to='' className='text-basic '>
                  <TbArrowBadgeRightFilled className='font-bold' /> Drama
                </Link>
              </li>
              <li>
                <Link to='' className='text-basic '>
                  <TbArrowBadgeRightFilled className='font-bold' /> Mystery
                </Link>
              </li>
              <li>
                <Link to='' className='text-basic '>
                  <TbArrowBadgeRightFilled className='font-bold' /> Sci,fi
                </Link>
              </li>
              <li>
                <Link to='' className='text-basic '>
                  <TbArrowBadgeRightFilled className='font-bold' /> War
                </Link>
              </li>
            </div>
            {/* three */}
            <div>
              <li>
                <Link to='' className='text-basic '>
                  <TbArrowBadgeRightFilled className='font-bold' /> Bollywood
                </Link>
              </li>
              <li>
                <Link to='' className='text-basic '>
                  <TbArrowBadgeRightFilled className='font-bold' /> Telugu
                </Link>
              </li>
              <li>
                <Link to='' className='text-basic '>
                  <TbArrowBadgeRightFilled className='font-bold' /> English,
                  Hollywood
                </Link>
              </li>
              <li>
                <Link to='' className='text-basic '>
                  <TbArrowBadgeRightFilled className='font-bold' /> Malayam
                </Link>
              </li>
              <li>
                <Link to='' className='text-basic '>
                  <TbArrowBadgeRightFilled className='font-bold' />
                  Dual audio
                </Link>
              </li>
              <li>
                <Link to='' className='text-basic '>
                  <TbArrowBadgeRightFilled className='font-bold' /> Tv,Web
                  Series
                </Link>
              </li>
            </div>
          </div>
        </ul>
      </li>

      {/* link 3 */}
      <li className='group relative' >
        <summary className='after:hidden'>
          Special Categories <TbArrowBadgeDownFilled />{" "}
        </summary>
        <ul className='p-2 bg-primary w-[400px] hidden  group-hover:block border-0 rounded-none  top-5  z-50 md:top-9  absolute '>
          <div className='grid md:grid-cols-3 gap-4'>
            {/* one */}
            <div>
              <li>
                <Link to='' className='text-basic '>
                  <TbArrowBadgeRightFilled className='font-bold' /> IMDb TOP 250
                  Movies
                </Link>
              </li>
              <li>
                <Link to='' className='text-basic '>
                  <TbArrowBadgeRightFilled className='font-bold' /> Ray films
                </Link>
              </li>
              <li>
                <Link to='' className='text-basic '>
                  <TbArrowBadgeRightFilled className='font-bold' /> Oscar Wining
                  Movies
                </Link>
              </li>
            </div>
          </div>
        </ul>
      </li>

      {/* link 4 */}
      <li  >
        <Link to='' className='text-basic ' onClick={()=>setToggle(!toggle)} >
          <TbArrowBadgeRightFilled className='font-bold' /> Join Us On Telegram
        </Link>
      </li>

      {/* link 5 */}
      <li>
        <Link to='' className='text-basic '>
          <TbArrowBadgeRightFilled className='font-bold' /> Bsub Movies
        </Link>
      </li>
    </>
  );




  return (
    <div className='shadow-2xl'>
           <Containers>
        <div className="">
   
        <div className='navbar  '>
          <div className='navbar-start'>
            <div className=''>
              <div
                // tabIndex={0}
                onClick={()=>setToggle(!toggle)}
                role='button'
                className='btn btn-ghost lg:hidden z-10'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h8m-8 6h16'
                  />
                </svg>

              </div>
              <ul
                    
                className={`menu menu-sm ${toggle?'hidden': '' }  absolute   mt-3  z-50 p-2 shadow bg-primary rounded-box w-52 `}
              >
                {links}
              </ul>
            </div>
         
          <Link to='/' >
          <span className='text-basic text-xl flex '>
              {" "}
              <FiAirplay className='text-3xl mr-2' /> Movies
            </span>
          </Link>
          </div>
          <div className='navbar-center hidden lg:flex'>
            <ul className='menu menu-horizontal px-1'>{links}</ul>
          </div>
          <div className='navbar-end'>
            <div className='form-control'>
              <input
                type='text'
                placeholder='Search'
                className='input input-bordered w-24  hidden md:block text-black   h-10 md:w-auto'
              />
              <AiOutlineSearch className="text-3xl md:hidden cursor-pointer"  onClick={()=>setSearchBox(!searchBox)} />
            </div>
          </div>
        </div>




            </div>
            {/* search box for small size */}
            <div className='form-control'>
              <input
                type='text'
                placeholder='Search'
                className={`input input-bordered  ${searchBox?'hidden': 'block'}   rounded-none w-full   md:hidden text-black   h-10 md:w-auto`}
              />
            </div>
            </Containers>
    </div>
  );
};

export default Navbar;
