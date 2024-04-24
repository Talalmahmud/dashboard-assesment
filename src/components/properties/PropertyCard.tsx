import Image from "next/image";
import React from "react";

type Props = {};

const PropertyCard = (props: Props) => {
  return (
    <div className=" flex flex-col  bg-slate-100 ">
      <div className=" relative overflow-auto h-[250px] w-[343px] md:w-[265px] ">
        <Image src={"/im1.avif"} alt="image" fill />

        <div className=" absolute top-[4px] left-[4px] overflow-auto h-[18px] w-[18px] ">
          <Image src={"/icons/star.svg"} alt="image" fill />
        </div>
        <div className=" absolute top-0 right-0 w-[70px] bg-slate-600/60 text-white h-[28px] text-[12px] flex justify-center items-center">
          R32423
        </div>
      </div>
      <div className=" flex flex-col justify-start gap-[4px] text-[14px] px-[16px]  pt-[10px] pb-[6px]">
        <p>Title</p>
        <p>35,00 &euro; / month</p>
        <div className=" flex  items-center gap-[16px]">
          <div className=" flex gap-[4px] items-center">
            <Image src={"/icons/bed.svg"} height={18} width={18} alt="image" />
            <p>5</p>
          </div>
          <div className=" flex gap-[4px] items-center">
            <Image
              src={"/icons/square-area.svg"}
              height={18}
              width={18}
              alt="image"
            />
            <p>
              400
              <span className="">
                m<sup>2</sup>
              </span>
            </p>
          </div>
          <div className=" flex gap-[4px] items-center">
            <Image
              src={"/icons/square-layouting.svg"}
              height={18}
              width={18}
              alt="image"
            />
            <p>
              105{" "}
              <span className="">
                m<sup>2</sup>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
