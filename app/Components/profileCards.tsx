import LinkButton from "./LinksButton";
import { links } from "../Data/links";
import { buttons } from "../Data/Buttons";
import DownloadAppsButton from "./DownloadAppsButton";

export default function ProfileCard() {
  return (
    <div className="flex flex-col gap-10 ">
      {/* Header */}
     <div className="flex items-center justify-center my-6">
  <img
    src="/mainheader.svg"
    alt="main header"
    className="
      w-[60%]
      max-w-[140px]
      sm:max-w-[200px]
      md:max-w-[250px]
      lg:max-w-[300px]
      h-auto
      object-contain
    "
  />
</div>

      {/* Icons */}
      <div className="mt-4 w-[50%] ">
        <div className="flex flex-wrap justify-center gap-4  ">
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
      <div className="my-8">
        <div className="flex flex-wrap justify-center gap-4 my-4">
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
