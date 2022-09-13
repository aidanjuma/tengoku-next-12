import React from "react";
import parse from "html-react-parser";
import { DisplayInfoProps } from "@models/types";

const DisplayInfo = (props: DisplayInfoProps) => {
  return (
    <section id="display-info-section">
      <div className="w-full h-fit max-h-96 px-8 mt-8">
        <h3 className="font-lexend font-normal mb-2">Description</h3>
        <div className="px-5 py-3 text-sm lg:text-xl rounded bg-onBackground">
          {parse(props.description!)}
        </div>
      </div>
    </section>
  );
};

export default DisplayInfo;
