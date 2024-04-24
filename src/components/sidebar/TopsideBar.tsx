"use client";
import React, { useContext } from "react";
import { Context } from "../ContextProvider";
import Image from "next/image";

type Props = {};

const TopsideBar = (props: Props) => {
  const context = useContext(Context);
  return (
    <div
      className=" h-[30px] w-full bg-[#3269a8] px-[16px] flex items-center"
      onClick={() => context?.setSideBarToggle(!context.sideBarToggle)}
    >
      <div className=" h-[20px] w-[20px] cursor-pointer bg-black flex items-center justify-center  ">
        <Image src={"/icons/appbar.svg"} height={15} width={15} alt="image" />
      </div>
    </div>
  );
};

export default TopsideBar;
