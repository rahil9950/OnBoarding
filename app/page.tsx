"use client";

import { Page1 } from "@/component/Page1";
import { useState } from "react";
import ResidentDetail from "@/component/ResidentDetail";

import {
  pageOneButtonTextAndLogo,
  pageTwoButtonTextAndLogo,
  pageThreeButtonTextAndLogo,
  pageFourButtonTextAndLogo,
} from "@/helper/page1";

export default function Page() {
  const [page, setPage] = useState(1);

  const totalQuestion = 5;
  const totalPages = 5;
  const percentage = Math.round((page / totalPages) * 100);

  const getOptions = () => {
    switch (page) {
      case 1:
        return pageOneButtonTextAndLogo;
      case 2:
        return pageTwoButtonTextAndLogo;
      case 3:
        return pageThreeButtonTextAndLogo;
      case 4:
        return pageFourButtonTextAndLogo;
      default:
        return [];
    }
  };

  // 🔥 NEW PROP YOU WANT TO SEND TO PAGE COMPONENT
  const extraData = "This is extra shared prop";

  // 🔥 SWITCH CASE TO RENDER THE RIGHT PAGE COMPONENT
  const renderPage = () => {
    switch (page) {
      case 1:
        return (
          <Page1
            page={page}
            setPage={setPage}
            totalQuestion={totalQuestion}
            percentage={percentage}
            OPTIONS={getOptions()}
            subPages={false}
          />
        );

      case 2:
        return (
          <Page1
            page={page}
            setPage={setPage}
            totalQuestion={totalQuestion}
            percentage={percentage}
            OPTIONS={getOptions()}
            subPages={false}
          />
        );

      case 3:
        return (
          <Page1
            page={page}
            setPage={setPage}
            totalQuestion={totalQuestion}
            percentage={percentage}
            OPTIONS={getOptions()}
            subPages={false}
          />
        );

      case 4:
        return (
          <Page1
            page={page}
            setPage={setPage}
            totalQuestion={totalQuestion}
            percentage={percentage}
            OPTIONS={getOptions()}
            subPages={true}
            subPageTotal={2}
            
          />
        );
         case 5:
          return (
          <ResidentDetail
            page={page}
            totalQuestion={totalQuestion}
            percentage={percentage}
           />
          )

      default:
        return <div>End</div>
        // <div> <Page1
        //     page={page}
        //     setPage={setPage}
        //     totalQuestion={totalQuestion}
        //     percentage={percentage}
        //     OPTIONS={pageOneButtonTextAndLogo}
        //     subPages={false}

        //   /></div>;
    }
  };

  return <div>{renderPage()}</div>;
}
