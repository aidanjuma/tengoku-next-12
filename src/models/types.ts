import { ITitle } from "@consumet/extensions/dist/models/types";

export interface ContentType {
  medium: "ANIME" | "MANGA";
  status: "POPULAR" | "TRENDING";
}

export interface InfoCoverData {
  image?: string;
  title: string | ITitle;
}

export enum TitleLanguage {
  native = "NATIVE",
  romaji = "ROMAJI",
  english = "ENGLISH",
}
