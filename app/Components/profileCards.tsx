import LinkButton from "./linksButton";
import { links } from "../Data/links";


{/*export default function ProfileCard() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center rounded-3xl  w-full text-center">
            
      <div className="my-30">
        <img alt="" src="/mainheader.svg" className=" w-110 mx-auto ">
        </img>
      </div>
           

      <div className="flex flex-row gap-6 mx-auto justify-center">
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
  );
}
*/}


export default function ProfileCard() {
  return (
    <div className="flex flex-col gap-10 items-center justify-center w-full max-w-4xl mx-auto text-center">

      {/* Header */}
      <div className="my-6 sm:my-6 md:my-12">
        <img
          alt=""
          src="/mainheader.svg"
          className="w-[80%] sm:w-[80%] md:w-[100%] sm:h-[60%] md:h-[100%] max-w-3xl mx-auto"
        />
      </div>

      {/* Icons */}
      <div className="flex flex-wrap justify-center gap-6">
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
  );
}