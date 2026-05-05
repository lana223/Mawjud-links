

type Props = {
  icon1: string;
  ButtonUrl: string;
  Buttontitle?: string;
};
export default function DownloadAppsButton({
  icon1,
  ButtonUrl,
  Buttontitle,
}: Props) {
  return (
    <a
      href={ButtonUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-row items-center  "
    >
      <div
        className="
       w-40 
        flex items-center justify-center
        gap-4
       
      "
      >
        <img
          src={icon1}
          alt="app icon"
             className="w-38 h-38 object-contain scale-110"
        />

        
      </div>
    </a>
  );
}
