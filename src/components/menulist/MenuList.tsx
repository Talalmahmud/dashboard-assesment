"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

const MenuList = (props: Props) => {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <div>
      {" "}
      <div
        className=" flex justify-between items-center hover:bg-slate-600 cursor-pointer"
        onClick={() => setMenuToggle(!menuToggle)}
      >
        <div className=" flex gap-2 ">
          <Image src={"/icons/home.svg"} height={20} width={20} alt="icon" />
          <p className=" text-[16px]">Properties</p>
        </div>
        {menuToggle ? (
          <Image
            src={"/icons/roundminus.svg"}
            height={16}
            width={16}
            alt="icon"
          />
        ) : (
          <Image
            src={"/icons/roundpluse.svg"}
            height={16}
            width={16}
            alt="icon"
          />
        )}
      </div>
      {menuToggle && (
        <div className=" ml-[26px] flex flex-col gap-[4px] ">
          <Link href={"/properties/sales"} className=" hover:bg-slate-600">
            <span className=" text-[14px]">Sales</span>
          </Link>
          <Link
            href={"/properties/short-terms"}
            className=" hover:bg-slate-200"
          >
            <span className=" text-[14px]">Short Terms</span>
          </Link>
          <Link href={"/properties/long-terms"} className=" hover:bg-slate-200">
            <span className=" text-[14px]">Long terms</span>
          </Link>
          <Link href={"/properties/all"} className=" hover:bg-slate-200">
            <span className=" text-[14px]">All</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MenuList;
