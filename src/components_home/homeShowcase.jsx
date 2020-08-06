import React from 'react'
import BackgroundTwo from "../components_images/home/home_2"
import user_distribution from "../images/home/user1.png"
import Zoom from 'react-reveal/Zoom'
import Pulse from "react-reveal/Pulse"
import Fade from 'react-reveal/Fade'
import { ButtonWithArrow } from "../components_style/styled"

const HomeShowcase = () => {

  return (
    <div className="relative overflow-hidden bg-black w-full">
      <h1 className="absolute left-0 text-white text-2xl font-semibold transform -rotate-90 -ml-20 mt-60">ORDA.SHEF.AC.UK</h1>
      <div id="home_showcase" />      
      <BackgroundTwo className="ipadp:min-h-40 flex flex-wrap items-center justify-end py-5 transform hover:translate-x-12 transition duration-500">
        <div className="flex flex-wrap justify-start">
          <div className="lg:w-1/2 py-24 flex flex-wrap px-3 ipadp:pr-20 ipadp:pl-10">
            <Fade duration={1300} right>
            <div className="text-5xl 2xl:text-6xl font-semibold text-white" style={{textShadow: "#000000 0px 0px 0px", fontFamily: "TUoS Stephenson"}}>SHOWCASE</div>
            <div className="2xl:text-lg my-4 text-white font-semibold" style={{textShadow: "#8d8d8d 0px 0px 3px"}}>
              ORDA (Online Research Data) is the University of Sheffield&apos;s hub for sharing data, code, and other non-traditional research artefacts. ORDA includes a showcase of visual 
              representations of data built by staff and students at the University of Sheffield.
            </div>
            <a className="mt-8" href="https://orda.shef.ac.uk/visualisations" target="_blank" rel="noopener noreferrer">
              <ButtonWithArrow external type="GreyButton" className="group">Discover</ButtonWithArrow>
            </a>
            </Fade>
          </div>
        </div>
        
      </BackgroundTwo>
      
      <div className="ipadp:min-h-40 flex flex-wrap pt-8 ipadp:pt-24 pb-64 items-center justify-center" style={{background: '#fcfcfc'}}>
        <div className="md:w-6/12 md:pl-8 transform hover:scale-110 transition duration-500">
          <Pulse delay={2200}><img src={user_distribution} className="max-h-50" /></Pulse>
        </div>
        <Zoom cascade duration={1300}>
        <div className="md:w-5/12 px-3 lg:px-5 2xl:px-24 flex flex-wrap justify-center">
          <h1 className="text-2xl ipadp:text-4xl text-gray-700 text-center py-5" style={{fontFamily: "TUoS Stephenson"}}>ORDA User Regions</h1>
          <p className="text- gray-600">ORDA has welcomed visitors from over 148 countries and regions worldwide, providing a research data repository for storing and publishing 
            research data in the long term, and enabled university research data to be preseved, discovered, and accessed. 
          </p>
          <a className="mt-8" href="https://orda.shef.ac.uk" target="_blank" rel="noopener noreferrer">
            <ButtonWithArrow external className="group hover:bg-white hover:shadow-2xl hover:text-highlight_2 transition duration-500 ease-in-out">Go to ORDA</ButtonWithArrow>
          </a>
        </div>
        </Zoom>
      </div>

      <div className="w-full absolute bottom-0 -mb-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#fff" fillOpacity="1" d="M0,128L48,128C96,128,192,128,288,138.7C384,149,480,171,576,181.3C672,192,768,192,864,186.7C960,181,1056,171,1152,154.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

    </div>
  )
}

export default HomeShowcase