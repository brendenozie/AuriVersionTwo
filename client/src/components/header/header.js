import { Fragment } from 'react'
import {Link} from 'react-router-dom'

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

export default function NavigationArea() {
  return (
    <>
      {/* Navigation  */}
      <nav className='relative container mx-auto p-6'>
        {/* // Flex container */}
        <div className='flex items-center justify-between'>
            {/* logo */}
            <div className='pt-2'>
            <img src='/img/core-img/auri.png' alt='placeholder' style={{width : '120px', height : '80px' }}/>
            </div>
            {/* Menu Items  */}
            <div className='hidden space-x-6 md:flex'>
            <a href='/' className='hover:text-darkGrayishBlue'>Catalog</a>
            <a href='/' className='hover:text-darkGrayishBlue'>Delivery</a>
            <a href='/' className='hover:text-darkGrayishBlue'>About</a>
            <a href='/' className='hover:text-darkGrayishBlue'>Contacts</a>
            </div>

            {/* Button */}

            {/* <a  href='/' className='hidden p-3 px-6 pt-2 text-white bg-brightBlue rounded-full baseline hover:bg-brightRedLight md:block'>Get Started</a> */}

            {/* Header Icons  */}
            <div class="hidden xl:flex items-center space-x-5 items-center">
              <div class="relative border-2 border-gray-200 rounded-lg mx-auto text-gray-600 flex items-center ">
                    <input
                        class="bg-white h-10 pl-2 pr-8 text-sm focus:outline-none"
                        type="search" name="search" placeholder="Search items"/>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 pt-0.5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                {/* Sign In / Register       */}
                <a className="flex items-center hover:text-gray-200" href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>          
                <a className="flex items-center hover:text-gray-200" href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                <span class="flex absolute -mt-5 ml-4">
                    <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                    </span>
                    </span>
                </a>
            </div>
        </div>
      </nav>
    </>
  )
}
