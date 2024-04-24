import Properties from "@/components/properties/Properties";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className=" h-[800px] overflow-auto">
      <Properties />
    </div>
  );
};

export default page;
