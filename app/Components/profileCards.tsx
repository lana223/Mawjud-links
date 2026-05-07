import LinkButton from "./LinksButton";
import { links } from "../Data/links";
import { buttons } from "../Data/Buttons";
import DownloadAppsButton from "./DownloadAppsButton";

export default function ProfileCard() {
  return (
    <div className="flex flex-col gap-14 sm:gap-16 md:gap-20 lg:gap-24 items-center justify-center min-h-screen">
      {/* Header */}
    
         <div className="flex  justify-center ">
        <img
          src="/mainheader.svg"
          alt="main header"
       className="
  w-[70%]
  max-w-[160px]
  sm:max-w-[200px]
  md:max-w-[240px]
  lg:max-w-[280px]
  xl:max-w-[320px]
  h-auto
  object-contain
"
        />
      </div>

      {/* Icons */}
      <div className="mt-6  ">
        <div className="flex flex-wrap  justify-center gap-4  ">
          {links.map((link, index) => (
            <LinkButton
              key={index}
              icon={link.icon}
              url={link.url}
              title={link.title}
            />
          ))}
        </div>
      </div>
   
     
      {/* Download buttons */}
      <div className="">
        <div className="flex flex-wrap justify-center gap-4">
          {buttons.map((button, index) => (
            <DownloadAppsButton
              key={index}
              icon1={button.icon1}
              ButtonUrl={button.ButtonUrl}
              Buttontitle={button.Buttontitle}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
