import React from "react";
import parse from "html-react-parser";
import { handleFuzzyDate } from "@helpers";
import { FuzzyDate } from "@consumet/extensions/dist/models";

interface DisplayInfoProps {
  description?: string;
  genres?: string[];
  startDate?: FuzzyDate;
  endDate?: FuzzyDate;
  status?: string;
}

const DisplayInfo = (props: DisplayInfoProps) => {
  return (
    <section id="info">
      <div className="p-8">
        {props.description && (
          <div className="w-full h-fit">
            <h3 className="font-lexend font-normal mb-2">Description</h3>
            <div className="px-5 py-3 mb-4 text-sm lg:text-xl rounded bg-onBackground">
              {parse(props.description)}
            </div>
          </div>
        )}
        {(props.genres || props.status || props.startDate || props.endDate) && (
          <div className="w-full h-fit">
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
                {props.startDate?.day &&
                  props.startDate?.month &&
                  props.startDate?.year && (
                    <li>
                      <p className="font-lexend font-medium">Start: </p>
                      {handleFuzzyDate(props.startDate)}
                    </li>
                  )}
                {props.endDate?.day &&
                  props.endDate?.month &&
                  props.endDate?.year && (
                    <li>
                      <p className="font-lexend font-medium">End: </p>
                      {handleFuzzyDate(props.endDate)}
                    </li>
                  )}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DisplayInfo;
