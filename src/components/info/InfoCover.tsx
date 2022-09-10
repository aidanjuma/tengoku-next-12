import React from "react";
import { InfoCoverData } from "@models/types";

const InfoCover = (props: InfoCoverData) => (
  <section id="info-cover-section" className="w-full h-80 lg:h-96">
    <div
      className="banner h-full"
      style={{
        backgroundImage: `url(${props.cover})`,
      }}
    ></div>
  </section>
);

export default InfoCover;
