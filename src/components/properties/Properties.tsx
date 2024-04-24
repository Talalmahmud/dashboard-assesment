import React from "react";
import PropertyCard from "./PropertyCard";
import PropertiesFilter from "./PropertiesFilter";
import Image from "next/image";

type Props = {};

const Properties = (props: Props) => {
  return (
    <div className=" w-full min-h-[800px] overflow-auto">
      <PropertiesFilter />
      <div className=" flex flex-col gap-[16px] py-[4px]  border-[1px] p-[16px]">
        <div className=" flex flex-col md:flex-row items-start md:items-center gap-[8px] justify-between">
          <div className=" flex items-center gap-[16px]">
            <div className=" flex items-center shadow-md">
              <div className=" flex gap-[4px] bg-green-700 px-[8px] py-[4px]">
                <Image src={"/icons/home.svg"} height={18} width={18} alt="" />
                <p className=" text-white text-[14px]">Own</p>
              </div>
              <div className=" flex gap-[4px] bg-white px-[8px] py-[4px]">
                <Image src={"/icons/share.svg"} height={16} width={18} alt="" />
                <p className=" text-[14px]">Network</p>
              </div>
            </div>
            <div className=" flex gap-[4px] bg-sky-600 px-[8px] py-[4px]">
              <Image src={"/icons/pluse.svg"} height={16} width={18} alt="" />
              <p className=" text-[14px]">New</p>
            </div>
          </div>
          <div className=" flex gap-[8px] items-center">
            <button className=" h-[24px] w-[28px] flex justify-center items-center px-[8px] shadow-md border-[1px] text-[12px] ">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Zm8.25-3.75a.75.75 0 0 1 .75.75v2.25h2.25a.75.75 0 0 1 0 1.5h-2.25v2.25a.75.75 0 0 1-1.5 0v-2.25H7.5a.75.75 0 0 1 0-1.5h2.25V7.5a.75.75 0 0 1 .75-.75Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </button>
            <button className=" h-[24px] w-[28px] px-[8px] flex justify-center items-center shadow-md border-[1px] text-[12px] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.792 2.938A49.069 49.069 0 0 1 12 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 0 1 1.541 1.836v1.044a3 3 0 0 1-.879 2.121l-6.182 6.182a1.5 1.5 0 0 0-.439 1.061v2.927a3 3 0 0 1-1.658 2.684l-1.757.878A.75.75 0 0 1 9.75 21v-5.818a1.5 1.5 0 0 0-.44-1.06L3.13 7.938a3 3 0 0 1-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <button className=" h-[24px] px-[8px] shadow-md border-[1px] text-[12px] ">
              Clear
            </button>
            <button className=" h-[24px] bg-[#3269a8] text-white px-[8px] shadow-md border-[1px] text-[12px]">
              Search
            </button>
          </div>
        </div>
        <div className=" flex flex-col md:flex-row  items-start md:items-center justify-between">
          <div className=" flex items-center gap-[24px]">
            <div className="flex">
              <div className=" h-[28px] w-[32px] flex items-center justify-center border-[1px]">
                <Image
                  src={"/icons/printer.svg"}
                  height={18}
                  width={18}
                  alt=""
                />
              </div>
              <div className=" h-[28px] w-[32px] flex items-center justify-center border-[1px]">
                <Image
                  src={"/icons/printer.svg"}
                  height={18}
                  width={18}
                  alt=""
                />
              </div>
              <div className=" h-[28px] w-[32px] flex items-center justify-center border-[1px]">
                <Image
                  src={"/icons/printer.svg"}
                  height={18}
                  width={18}
                  alt=""
                />
              </div>
              <div className=" h-[28px] w-[32px] flex items-center justify-center border-[1px]">
                <Image
                  src={"/icons/printer.svg"}
                  height={18}
                  width={18}
                  alt=""
                />
              </div>
            </div>
            <div className=" flex">
              <div className=" h-[28px] w-[32px] flex items-center justify-center border-[1px]">
                <Image
                  src={"/icons/printer.svg"}
                  height={18}
                  width={18}
                  alt=""
                />
              </div>
              <div className=" h-[28px] w-[32px] flex items-center justify-center border-[1px]">
                <Image
                  src={"/icons/printer.svg"}
                  height={18}
                  width={18}
                  alt=""
                />
              </div>
              <div className=" h-[28px] w-[32px] flex items-center justify-center border-[1px]">
                <Image
                  src={"/icons/printer.svg"}
                  height={18}
                  width={18}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className=" flex gap-[8px] items-center">
            <div>
              <select
                name="cars"
                id="cars"
                className=" w-[38px] text-[12px] outline-none border-[1px] "
              >
                <option value="volvo">10</option>
                <option value="saab">20</option>
                <option value="opel">30</option>
                <option value="audi">50</option>
              </select>
            </div>
            <div className=" w-[20px] cursor-pointer relative overflow-auto text-[12px] outline-none border-[1px]  ">
              <Image
                src={"/icons/doublegreater.svg"}
                height={16}
                width={16}
                alt=""
              />
            </div>
            <div className=" w-[20px] cursor-pointer relative overflow-auto text-[12px] outline-none border-[1px]  ">
              <Image
                src={"/icons/lessthan.svg"}
                height={16}
                width={16}
                alt=""
              />
            </div>
            <div className=" w-[20px] cursor-pointer relative overflow-auto text-[12px] outline-none border-[1px]  ">
              <Image
                src={"/icons/greaterthan.svg"}
                height={16}
                width={16}
                alt=""
              />
            </div>

            <div className=" w-[20px] cursor-pointer relative overflow-auto text-[12px] outline-none border-[1px]  ">
              <Image
                src={"/icons/doubleless.svg"}
                height={16}
                width={16}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className=" flex flex-wrap justify-center items-center gap-[12px] pt-[8px]">
          <PropertyCard />
          <PropertyCard /> <PropertyCard /> <PropertyCard />
          <PropertyCard /> <PropertyCard /> <PropertyCard />
          <PropertyCard /> <PropertyCard /> <PropertyCard />
        </div>
      </div>
    </div>
  );
};

export default Properties;
