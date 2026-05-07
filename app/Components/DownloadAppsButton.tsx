
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
      className="  "
    >
     <div
  className="
    
    flex items-center justify-center
  "
>
       <img
    src={icon1}
    alt="app icon"
    className="
     
      object-contain
    "
  />
        
      </div>
    </a>
  );
}
