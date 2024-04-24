import React from "react";

type Props = {};

const PropertiesFilter = (props: Props) => {
  return (
    <div className=" w-full  text-gray-500 flex flex-col gap-[16px] border-[1px] bg-white">
      <div className=" flex border-b-[1px] ">
        <button className="h-[35px] text-[14px] px-[8px] flex justify-center items-center border-[1px]">
          Results
        </button>
        <button className="h-[35px] text-[14px] px-[8px] flex justify-center items-center border-[1px]">
          Results
        </button>
      </div>
      <div className=" flex px-[16px] flex-col xl:flex-row items-center gap-[24px]">
        <div className=" flex flex-col gap-[2px]">
          <p className="">Search</p>
          <select
            name="cars"
            id="cars"
            className=" w-[343px] md:w-[736px] xl:w-[120px] border-[1px] border-slate-200  "
          >
            <option value="volvo">Everywhere</option>
            <option value="saab">saab</option>
            <option value="opel">opel</option>
            <option value="audi">audi</option>
          </select>
        </div>

        <div className=" flex flex-col gap-[2px]">
          <p>Match</p>
          <div className=" flex items-center">
            <div className=" h-[22px] w-[22px] flex justify-center items-center  bg-gray-400 ">
              <input type="checkbox" className=" w-[14px] h-[14px]" />
            </div>
            <input
              type="text"
              className=" w-[321px] md:w-[714px] xl:w-[218px] outline-none border-[1px] px-[8px] text-[14px] "
              placeholder="Select"
            />
          </div>
        </div>

        <div className=" flex flex-col gap-[2px]">
          <div className=" flex items-center gap-[8px] text-[14px]">
            <p>Location</p>
            <div className=" flex items-center gap-[2px]">
              <div className=" h-[14px] w-[14px] text-[14px] flex justify-center items-center rounded-[4px] bg-white border-[1px] border-blue-800 text-blue-800 ">
                +
              </div>
              <p className=" text-blue-800">Add</p>
            </div>
            <div className=" flex items-center gap-[2px]">
              <div className=" h-[14px] w-[14px] text-[14px] flex justify-center items-center rounded-[4px] bg-white border-[1px] border-blue-800 text-blue-800 ">
                -
              </div>
              <p className=" text-blue-800">Reset</p>
            </div>
          </div>
          <div className=" flex items-center">
            <input
              type="text"
              className=" w-[343px] md:w-[736px] xl:w-[384px] outline-none border-[1px] px-[8px] text-[14px] "
            />
          </div>
        </div>
        <div className=" flex flex-col gap-[2px]">
          <div className=" flex items-center gap-[8px] text-[14px]">
            <p>Type</p>
            <div className=" flex items-center gap-[2px]">
              <div className=" h-[14px] w-[14px] text-[14px] flex justify-center items-center rounded-[4px] bg-white border-[1px] border-blue-800 text-blue-800 ">
                +
              </div>
              <p className=" text-blue-800">Add</p>
            </div>
            <div className=" flex items-center gap-[2px]">
              <div className=" h-[14px] w-[14px] text-[14px] flex justify-center items-center rounded-[4px] bg-white border-[1px] border-blue-800 text-blue-800 ">
                -
              </div>
              <p className=" text-blue-800">Reset</p>
            </div>
          </div>
          <div className=" flex items-center">
            <input
              type="text"
              className=" w-[343px] md:w-[736px] xl:w-[300px] outline-none border-[1px] px-[8px] text-[14px] "
            />
          </div>
        </div>
      </div>
      <div className=" px-[16px] pb-[16px] flex flex-col lg:flex-row items-center gap-[24px]">
        <div className=" flex flex-col gap-[2px]">
          <p>Bedrooms</p>
          <select
            name="cars"
            id="cars"
            className=" w-[343px] md:w-[736px] xl:w-[180px] border-[1px] border-slate-200 "
          >
            <option value="volvo">Single</option>
            <option value="saab">Double</option>
          </select>
        </div>

        <div className=" flex flex-col gap-[2px]">
          <p>Bathrooms</p>
          <select
            name="cars"
            id="cars"
            className=" w-[343px] md:w-[736px] xl:w-[180px] border-[1px] border-slate-200  "
          >
            <option value="volvo">Small</option>
            <option value="saab">Large</option>
            <option value="opel">Medium</option>
            <option value="audi">All</option>
          </select>
        </div>

        <div className=" flex flex-col gap-[2px]">
          <div className=" flex items-center gap-[8px] text-[14px]">
            <p>Price Form</p>
          </div>
          <div className=" relative flex items-center">
            <input
              type="text"
              className=" w-[343px] md:w-[736px] xl:w-[180px] outline-none border-[1px] px-[20px] text-[14px] "
            />
            <div className=" absolute top-[3px] left-[8px] text-[12px]">
              &euro;
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-[2px]">
          <div className=" flex items-center gap-[8px] text-[14px]">
            <p>Price To</p>
          </div>
          <div className=" relative flex items-center">
            <input
              type="text"
              className="  w-[343px] md:w-[736px] xl:w-[180px] outline-none border-[1px] px-[20px] text-[14px] "
            />
            <div className=" absolute top-[3px] left-[8px] text-[12px]">
              &euro;
            </div>
          </div>
        </div>

        <div className=" flex flex-col gap-[2px]">
          <p>Public status</p>
          <select
            name="cars"
            id="cars"
            className=" w-[343px] md:w-[736px] xl:w-[300px] border-[1px] border-slate-200  "
          >
            <option value="volvo">Online</option>
            <option value="saab">Offlin</option>
            <option value="opel">Live</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default PropertiesFilter;
