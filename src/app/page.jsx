import Image from "next/image";
import ToggleThemes from "./components/toggleTheme";
import ImageSlider from "./components/swipers/slider1/slider1";

export default function Home() {
  return (
   <div className="flex flex-col">
    <ImageSlider /> 
   </div>
  );
}
