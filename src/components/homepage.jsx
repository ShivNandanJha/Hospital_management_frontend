// import React from "react";

import { Spotlight } from "../components/ui/spotlight";
import Tabs from '../pages/tab'
import Feature from '../pages/feature'
import Faqs from '../pages/faqs'
import Success from '../pages/success'
import  Contact  from "../pages/contact";

export default function SpotlightPreview() {
  return (
  <div>
      <div className = "h-[60rem] w-90% rounded-md flex md:items-center md:justify-center bg-black/[0.96]  antialiased bg-grid-white/[0.02] relative overflow-hidden">
     
      <Spotlight
        className = "-top-40 left-0 md:left-60 md:-top-20"
        fill      = "white"
        />
        
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
      <h1
        className = "text-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Understand User Flow.

        <span className="sm:block"> Increase Conversion. </span>
      </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Spotlight effect is a great way to draw attention to a specific part
          of the page. Here, we are drawing the attention towards the text
          section of the page. I don&apos;t know why but I&apos;m running out of
          copy.
        </p>
      </div>
      </div>
      <Tabs />
      <Feature />
      <Success/>
      <Faqs />
      <Contact/>
      
      </div>
  );
}
