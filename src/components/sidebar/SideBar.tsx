"use client";
import React, { useContext, useState } from "react";
import { Context } from "../ContextProvider";
import Image from "next/image";
import Link from "next/link";
import MenuList from "../menulist/MenuList";
import MenuItem from "../menulist/MenuItem";

type Props = {};

const SideBar = (props: Props) => {
  const context = useContext(Context);
  return (
    <div>
      {context?.sideBarToggle ? (
        <div className=" w-full fixed md:relative z-30 md:z-0  transition-all min-h-screen  md:w-[250px] bg-black text-white p-[16px]">
          <p className=" text-[22px] flex justify-center items-center  pb-[60px]">
            CornDash
          </p>
          <p
            className=" block md:hidden fixed top-5 right-4 z-10 "
            onClick={() => context.setSideBarToggle(false)}
          >
            x
          </p>
          <div className=" flex flex-col gap-[8px]">
            <MenuItem />
            <MenuList />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SideBar;
