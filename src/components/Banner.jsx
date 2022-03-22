import React from "react";
import { mdiCopyright } from "@mdi/js";
import Icon from "@mdi/react";
import BannerImage from "/assets/img/bannerImg.svg";

const Banner = () => {
  return (
    <div className="bg-green-600 flex flex-col  justify-center pl-44 relative overflow-hidden">
      <h1 className="text-white text-6xl font-semibold flex ">
        Personote
        <Icon path={mdiCopyright} size={1} />
      </h1>
      <h2 className="text-white mt-1">
        The best task solution you have ever seen
      </h2>
      {/* <img
        className="absolute bottom-0 right-32 h-1/4 translate-y-3"
        src={BannerImage}
        alt=""
      /> */}
    </div>
  );
};

export default Banner;
