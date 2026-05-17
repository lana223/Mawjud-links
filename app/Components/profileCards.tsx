import LinkButton from "./LinksButton";
import { links } from "../data/links";
import { buttons } from "../data/buttons";
import DownloadAppsButton from "./DownloadAppsButton";

export default function ProfileCard() {
  return (
    <div className="flex flex-col gap-14 sm:gap-16 md:gap-20 lg:gap-24 items-center justify-center min-h-screen">
      {/* Header */}
    
         <div className="flex  justify-center ">
        <img
          src="/Images/mainheader.svg"
          alt="main header"
       className="
  w-[80%]
  max-w-[280px]
  sm:max-w-[320px]
  md:max-w-[360px]
  lg:max-w-[400px]
  xl:max-w-[440px]
  h-auto
  object-contain
"
        />
      </div>

      {/* Icons */}
      <div className="mt-9  ">
        <div className="flex flex-wrap  justify-center gap-4 mx-8 ">
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
<div className="w-full px-2 sm:px-4">
  <div
    className="
      flex flex-wrap justify-center items-center
      gap-1 sm:gap-2 md:gap-3
    "
  >
    {buttons.map((button, index) => (
      <div
        key={index}
        className="
          scale-75
          sm:scale-90
          md:scale-100
          origin-center
        "
      >
        <DownloadAppsButton
          icon1={button.icon1}
          ButtonUrl={button.ButtonUrl}
          Buttontitle={button.Buttontitle}
        />
      </div>
    ))}
  </div>
</div>
    </div>
  );
}
