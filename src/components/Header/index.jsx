"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import BagIcon from './BagIcon';
import { useSelector } from 'react-redux';

const Header = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cart } = useSelector(state=>state);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const [bag, setBag] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };


  // State to manage the visibility of the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Define the menu items
  const menuItems = [
    { text: 'Home', href: '/' },
    { text: 'About Us', href: '/about-us' },
    { text: 'Urns', href: '/#products' },
  ];

  return (
    <div className="bg-[#FFFFFF] px-3 py-2 flex justify-between h-18 shadow z-10 relative">
      <div className="flex block gap-3">
        <Link className="flex" href="/">
          <Image width={200} height={45} src={"/img/Mask Group.png"} alt="" />
          <Image width={120} height={34} src={"/img/galatea.png"} alt="" />
        </Link>
      </div>
      <div className="flex items-center">
        {/* Mobile Menu (Hamburger) */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          {/* Mobile Menu Popup */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white z-20 shadow">
              <ul className="flex flex-col items-center gap-5 p-4 z-50">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href} onClick={closeMobileMenu}>
                      {item.text}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/auth/signup">
                    <Image 
                      width={28} 
                      height={30} 
                      src={"/icons/User.svg"} 
                      alt="man icon" 
                    />
                  </Link>
                </li>
                <li onClick={openModal}>
                  <Link href="/">
                    <Image 
                      width={25} 
                      height={33} 
                      src={"/icons/Bag.svg"} 
                      alt="bag icon" 
                    />
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        {/* Desktop Menu */}
        <ul className={`hidden md:flex flex-row gap-5 ${isMobileMenuOpen ? 'hidden' : ''}`}>
          {menuItems.map((item, index) => (
            <li className="my-auto" key={index}>
              <Link href={item.href} onClick={closeMobileMenu}>
                {item.text}
              </Link>
            </li>
          ))}
          <li className="my-auto">
            <Link href="/auth/signup">
              <Image 
                width={28} 
                height={30} 
                src={"/icons/User.svg"} 
                alt="man icon" 
              />
            </Link>
          </li>
          <BagIcon bag={bag} setBag={setBag}/>
        </ul>
        {
          bag && (
          <div className="absolute top-full right-5 w-[300px] bg-white z-20 shadow">
            <h1 className="text-center text-[#747067] font-medium">Added to your bag</h1>
              {
                cart.items.length > 0 && cart.items.map((item, index)=>(
                  <div key={index} className="flex">
                  <Image width={40} height={40} src={item.image} alt={item.title} />
                  <div className="flex flex-col">
                    <h2>{item.title}</h2>
                    <h5>${item.price}</h5>
                  </div>
                </div>
                ))
              }
              <div className="flex justify-center">
                <Link className="btn-submit" href="/shopping-cart">View Bag</Link>
              </div>
          </div>
          )
        }
       
      </div>
    </div>
  );
};

export default Header;