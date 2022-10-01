import { FuzzyDate, ITitle } from "@consumet/extensions/dist/models/types";
import { TitleLanguage } from "@models/types";

const evaluateTitleLanguage = (
  titleObj: ITitle,
  language: TitleLanguage
): string | undefined => {
  switch (language) {
    case "ENGLISH":
      return titleObj.english;
    case "NATIVE":
      return titleObj.native;
    case "ROMAJI":
      return titleObj.romaji;
  }
};

export const processITitle = (
  titleObj: string | ITitle,
  language: TitleLanguage
) => {
  const title: string | undefined =
    typeof titleObj === "string"
      ? titleObj
      : evaluateTitleLanguage(titleObj, language);

  return title;
};

export const handleFuzzyDate = (date: FuzzyDate) => {
  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  if (date.day && date.month && date.year)
    return `${date.day} ${MONTHS[date.month - 1]} ${date.year}`;
};
