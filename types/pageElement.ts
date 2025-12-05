import { StaticImageData } from "next/image";
export interface PageOneItem {
  title: string;
  logo: StaticImageData; // this is the correct type for imported Next.js images
}