'use client'
import { Kadwa } from "next/font/google";
import { Dispatch, SetStateAction, useState } from "react";
import {SubPageOne , SubpageTwo  } from "@/helper/SubPageDetails"
import { StaticImageData } from "next/image";
import { SubPagee } from "./SubPagee";
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
  OPTIONS?: { title: string; logo : StaticImageData }[],
  subPage? : boolean,
  subPageTotal? : number
}

export const SubPageParent = ({page,  setPage, totalQuestion  ,percentage  ,subPageTotal} : Page1Props) => {
  const [changeSubPage , setChangeSubPage] = useState<number>(1);
  const getOptions = () => {
      switch (changeSubPage) {
        case 1:
          return SubPageOne;
        case 2:
          return SubpageTwo;
        default:
          return [];
      }
    };
    const renderSubpage = ()=>{
      switch(changeSubPage){
        case 1 : {
          return (
            <SubPagee  page={page}
                  setPage={setPage}
                  totalQuestion={totalQuestion}
                  percentage={percentage}
                  OPTIONS={getOptions()}  
                  changeSubPage={changeSubPage}
                  setChangeSubpage={setChangeSubPage}
                  subPageTotal={subPageTotal}
                  />
          )
        }
        case 2 : {
          return (
            <SubPagee  page={page}
                  setPage={setPage}
                  totalQuestion={totalQuestion}
                  percentage={percentage}
                  OPTIONS={getOptions()}
                  changeSubPage={changeSubPage}
                  setChangeSubpage={setChangeSubPage}
                  subPageTotal={subPageTotal}
                  />
          )
        }
      }
    }
  return (
    <div>
         {renderSubpage()}         
    </div>
  )
};




