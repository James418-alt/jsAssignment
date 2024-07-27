"use client";
import Structure from "@/app/components/Structure";
import { addData } from "@/app/global/slice";
import { data } from "@/data";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Page = () => {
  const level = usePathname();
  const index = level.indexOf("level");
  const nn = level.slice(index);
  const mainIndex = Number(nn.slice(nn.indexOf("el") + 2)) - 1;
  const val = data[mainIndex];

  return (
    <div>
      <Structure
        task={val.task}
        desc={val.desc}
        url={val.redirect}
        answer={val.answer}
        example={val.examples}
      />
    </div>
  );
};

export default Page;
