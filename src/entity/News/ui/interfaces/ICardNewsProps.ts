import { INews } from "@/shared/config/interfaces/INews.ts";
import { Dispatch, SetStateAction } from "react";

export interface ICardNewsProps {
  news: INews;
  setNews: Dispatch<SetStateAction<INews[]>>;
}
