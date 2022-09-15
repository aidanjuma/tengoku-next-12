import React from "react";
import parse from "html-react-parser";
import { DisplayInfoProps } from "@models/types";
import { handleFuzzyDate } from "@helpers";

const DisplayInfo = (props: DisplayInfoProps) => {
  return (
    <section id="display-info-section">
      {props.description && (
        <div className="w-full h-fit px-8 pt-4 pb-8">
          <h3 className="font-lexend font-normal mb-2">Description</h3>
          <div className="px-5 py-3 text-sm lg:text-xl rounded bg-onBackground">
            {parse(props.description)}
          </div>
        </div>
      )}
      <div className="w-full h-fit px-8 pt-2 pb-12">
        <h3 className="font-lexend font-normal mb-2">Other Info</h3>
        <div className="px-5 py-3 text-sm lg:text-xl rounded bg-onBackground">
          <ul className="ul-spacing">
            {props.genres && (
              <li>
                <p className="font-lexend font-medium">Genres: </p>
                {props.genres?.map((item: string, i: number) => {
                  const genre =
                    props.genres?.length === i + 1 ? item : `${item}, `;
                  return genre;
                })}
              </li>
            )}
            {props.status && (
              <li>
                <p className="font-lexend font-medium">Status: </p>
                {props.status}
              </li>
            )}
            {props.startDate && (
              <li>
                <p className="font-lexend font-medium">Started: </p>
                {handleFuzzyDate(props.startDate)}
              </li>
            )}
            {props.endDate && (
              <li>
                <p className="font-lexend font-medium">Ended: </p>
                {handleFuzzyDate(props.endDate)}
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DisplayInfo;
