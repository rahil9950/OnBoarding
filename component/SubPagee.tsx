'use client'
import { Kadwa } from "next/font/google";
import Image from "next/image";
import { Dispatch, SetStateAction, useState} from "react";
import { StaticImageData } from "next/image";
import ProgressBar from "./ProgressBar";
import { headingAndQuestions } from "@/helper/headingAndQuestions";

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
  changeSubPage : number,
  setChangeSubpage : Dispatch<SetStateAction<number>>;
  subPageTotal? : number
}

export const SubPagee = ({page, setPage, totalQuestion, percentage, OPTIONS, changeSubPage, setChangeSubpage, subPageTotal} : Page1Props) => {
  const [selected, setSelected] = useState<string[]>([]);
  
  // Ensure we have valid data before accessing
  const pageData = headingAndQuestions[page-1];
  const subPageDetails = pageData?.subPageData?.[changeSubPage-1];
  
  // Handle case where data might not be available
  if (!subPageDetails) {
    return (
      <div className="flex justify-center items-center px-2 py-10 bg-[radial-gradient(circle,rgba(199,96,151,1)_0%,rgba(237,237,237,1)_100%)] min-h-screen">
        <div className="bg-white shadow-xl rounded-xl p-10 w-full max-w-4xl text-center">
          <p>Loading subpage data...</p>
        </div>
      </div>
    );
  }
  
  const toggleSelect = (title: string) => {
    setSelected((prev) =>
      prev.includes(title) ? prev.filter((x) => x !== title) : [...prev, title]
    );
  };
  
  const handleContinue = ()=>{
    if(changeSubPage === subPageTotal){
      setPage(page+1)
    } else {
      setChangeSubpage(changeSubPage+1)
    }
    return
  }

  return (
    <div className="flex justify-center px-2 py-10 bg-[radial-gradient(circle,rgba(199,96,151,1)_0%,rgba(237,237,237,1)_100%)] min-h-screen">
      <div className="bg-white shadow-xl rounded-xl p-4 md:p-10 w-full max-w-4xl my-4">
        
        {/* Heading */}
        <h1 className={`${kadwa.variable} font-bold text-3xl text-black md:text-4xl text-center`}>
          {subPageDetails.heading}
        </h1>

        {/* Subheading */}
        <p className="text-center text-gray-500 mt-3">
          {subPageDetails.question}
        </p>

        {/* Progress Info */}
        <div className="mt-8 text-center font-medium text-black">
          Questions - <span className="text-pink-500">{`${page}/${totalQuestion}`}</span>
        </div>

        {/* Progress Bar */}
        <div className="mt-2">
          <ProgressBar percentage={percentage}/>
        </div>

        {/* Question - Fixed the hardcoded text */}
        <h2 className="text-md font-bold text-black mt-10">
          {`${changeSubPage}. ${subPageDetails.heading || "What describes you best?"}`}
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
          <button className="px-5 py-2 rounded-lg border" onClick={handleContinue}>
            Skip for Now
          </button>

          <button className="px-6 py-2 rounded-lg bg-[#C76097] text-white" onClick={handleContinue}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};