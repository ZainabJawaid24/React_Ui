import React from "react";
import './App.css';
import img1 from "./assets/react.tailwind.jpeg";
import img2 from "./assets/atm.machine.jpg";
import img3 from "./assets/internet.banking.jpg";
import img4 from "./assets/manageroffice.jpg";
import img5 from "./assets/credit.card.jpeg";
import img6 from "./assets/website.banner.webp";
import img7 from "./assets/digital.payment.jpg";

function Ui(){

  return(
<>    
<nav className="bg-neutral-primary fixed w-full z-20 top-0 start-0 navbar">
  <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <span className="self-center text-3xl text-white text-heading font-semibold whitespace-nowrap">
        <span className="text-blue-600">B</span>ank <span className="text-blue-600">.</span></span>
    </a>
    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button type="button" className="text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none btn">Join Us</button>
        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/></svg>
        </button>
    </div>
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-default rounded-base bg-neutral-secondary-soft md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-neutral-primary">
        <li>
          <a href="#" className="block py-2 px-3 text-white bg-brand rounded-sm md:bg-transparent md:text-fg-brand md:p-0 hover:text-blue-600" aria-current="page">About Us</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-white rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent hover:text-blue-600">Team</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-white rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent hover:text-blue-600">Our App</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-white rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent hover:text-blue-600">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<section className="text-gray-400 bg-gray-900 body-font header">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-white main">Banking Has
        <br className="hidden lg:inline-block"/>Become <span className="text-blue-600">easy</span>
      </h1>
      <p className="mb-8 leading-relaxed text-gray-300">Copper mug try-hard pitchfork pour-over freegan heirloom<br/>neutra
         air plant cold-pressed tacos poke beard tote bag.<br/>Heirloom echo park mlkshk tote bag selvage</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-900 rounded text-sm btn2">Lets Get Started</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img src={img1} className="object-cover object-center rounded"/>
    </div>
  </div>
</section>
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl lg:text-6xl font-medium title-font mb-4 text-white track">Track <span className="text-blue-600">Tour</span> Budget</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img src={img2} class="absolute inset-0 w-full h-full object-cover object-center"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 opacity-0 hover:opacity-100 background">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1 headings">THE SUBTITLE</h2>
            <h1 class="title-font text-lg font-medium text-gray-600 mb-3">Shooting Stars</h1>
            <p class="leading-relaxed text-gray-400">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img src={img3} class="absolute inset-0 w-full h-full object-cover object-center"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 opacity-0 hover:opacity-100 background">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1 headings">THE SUBTITLE</h2>
            <h1 class="title-font text-lg font-medium text-gray-600 mb-3">The Catalyzer</h1>
            <p class="leading-relaxed text-gray-400">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
       <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img src={img4} class="absolute inset-0 w-full h-full object-cover object-center"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 opacity-0 hover:opacity-100 background">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1 headings">THE SUBTITLE</h2>
            <h1 class="title-font text-lg font-medium text-gray-600 mb-3">The 400 Blows</h1>
            <p class="leading-relaxed text-gray-400">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img src={img5} class="absolute inset-0 w-full h-full object-cover object-center"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 opacity-0 hover:opacity-100 background">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1 headings">THE SUBTITLE</h2>
            <h1 class="title-font text-lg font-medium text-gray-600 mb-3">Neptune</h1>
            <p class="leading-relaxed text-gray-400">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img src={img6} class="absolute inset-0 w-full h-full object-cover object-center"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 opacity-0 hover:opacity-100  background">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1 headings">THE SUBTITLE</h2>
            <h1 class="title-font text-lg font-medium text-gray-600 mb-3">Holden Caulfield</h1>
            <p class="leading-relaxed text-gray-400">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img src={img7} class="absolute inset-0 w-full h-full object-cover object-center"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 opacity-0 hover:opacity-100 background">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1 headings">THE SUBTITLE</h2>
            <h1 class="title-font text-lg font-medium text-gray-600 mb-3">Alper Kamu</h1>
            <p class="leading-relaxed text-gray-400">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="text-gray-400 body-font relative contact">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Contact Us</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-gray-400">Name</label>
            <input type="text" id="name" name="name" class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-gray-400">Email</label>
            <input type="email" id="email" name="email" class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-gray-400">Message</label>
            <textarea id="message" name="message" class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div class="p-2 w-full">
          <button class="flex mx-auto text-white bg-blue-600 border-0 py-2 px-8 focus:outline-none hover:bg-blue-900 text-lg btn3">Send</button>
        </div>
        <div class="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
          <a class="text-blue-600">example@email.com</a>
          <p class="leading-normal my-5">49 Smith St.
            <br/>Saint Cloud, MN 56301
          </p>
          <span class="inline-flex">
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-4 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-4 text-gray-500">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a class="ml-4 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</section>
</>
  )
}
export default Ui;