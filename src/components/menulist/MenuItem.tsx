import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const MenuItem = (props: Props) => {
  return (
    <div>
      <Link href={"/"}>
        {" "}
        <div className=" flex justify-between items-center hover:bg-slate-600">
          <div className=" flex gap-2">
            <Image
              src={"/icons/properties.svg"}
              height={20}
              width={20}
              alt="icon"
            />
            <p>Dashboard</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuItem;
