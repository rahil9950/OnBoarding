'use client'
import { Kadwa } from "next/font/google";
import { SubPageOne } from "@/helper/SubPageDetails";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { StaticImageData } from "next/image";
import ProgressBar from "./ProgressBar";
import { SubPageParent } from "./SubPageParent"; 
import {headingAndQuestions} from "@/helper/headingAndQuestions"
const kadwa = Kadwa({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-kadwa"
});

interface Page1Props {
  page : number,
  setPage: Dispatch<SetStateAction<number>>;
  totalQuestion : number,
  percentage : number,
  OPTIONS: { title: string; logo : StaticImageData }[],
  subPages? : boolean,
  subPageTotal? : number,
}

export const Page1 = ({page,  setPage, totalQuestion  ,percentage ,OPTIONS ,subPages , subPageTotal} : Page1Props) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [showSubPage ,setShowSubPage ] = useState<boolean>(false);
  const headsAndQue = headingAndQuestions[page-1];

  const toggleSelect = (title: string) => {
    setSelected((prev) =>
      prev.includes(title) ? prev.filter((x) => x !== title) : [...prev, title]
    );
  };
  // const getOptions = () => {
  //     switch (page) {
  //       case 1:
  //         return SubPageOne;
  //       case 2:
  //         return pageTwoButtonTextAndLogo;
  //       case 3:
  //         return pageThreeButtonTextAndLogo;
  //       case 4:
  //         return pageFourButtonTextAndLogo;
  //       default:
  //         return [];
  //     }
  //   };
    const handleNextStep = ()=>{
  if(!subPages){
    setPage(page+1)
  }
  if(subPages){
    setShowSubPage(true)
  }
  return
}
  return (
    <> 
    {
      subPages && showSubPage ? (<SubPageParent  page={page}
            setPage={setPage}
            totalQuestion={totalQuestion}
            percentage={percentage}
            OPTIONS={SubPageOne}
            subPage={true}
            subPageTotal={subPageTotal}
            />
            
          ) : (
        <><div className="flex justify-center px-2 py-10 bg-[radial-gradient(circle,rgba(199,96,151,1)_0%,rgba(237,237,237,1)_100%)] h-full md:h-lvh">
      <div className="bg-white shadow-xl rounded-xl p-10 w-full max-w-4xl">
         
        {/* Heading */}
        <h1 className={`${kadwa.variable} font-bold text-3xl     text-black md:text-4xl text-center`}>
          {headsAndQue.heading}
        </h1>

        {/* Subheading */}
        <p className="text-center text-gray-500 mt-3">
          {headsAndQue.subHeading}
        </p>

        {/* Progress Info */}
        <div className="mt-8 text-center font-medium text-black">
          Questions - <span className="text-pink-500">{`${page}/${totalQuestion}`}</span>
        </div>

        {/* Progress Bar */}
        <div className="mt-2">
          <ProgressBar percentage={percentage}/>
        </div>

        {/* Question */}
        <h2 className="text-md font-bold  text-black mt-10">
          {`${page}.${headsAndQue.question}`}
          <span className="text-gray-400 ml-2 text-xs">(Select as many as you like)</span>
        </h2>

        {/* Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5">
          {OPTIONS.map((item, idx) => (
            <div
              key={idx}
              onClick={() => toggleSelect(item.title)}
              className={`flex items-center gap-3 border p-2 cursor-pointer transition rounded-tr-lg rounded-bl-lg
                ${selected.includes(item.title)
                  ? "border-[#C76097] bg-pink-50"
                  : "border-gray-300 bg-white"
                }`}
            >
              <div className="bg-pink-100 h-12 w-12 rounded-full flex items-center justify-center">
                <Image src={item.logo} width={30} height={30} alt="icon" />
              </div>
              <p className="font-medium text-black text-sm">{item.title}</p>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-10">
          <button className="px-5 py-2 rounded-lg border" onClick={handleNextStep}>
            Skip for Now
          </button>

          <button className="px-6 py-2 rounded-lg bg-[#C76097] text-white" onClick={handleNextStep}>
            Next Step
          </button>
        </div>
      </div>
    </div></>
      ) 
    }
  
    </>
  )
};




