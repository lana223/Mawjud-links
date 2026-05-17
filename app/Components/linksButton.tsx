type Props = {
  icon: string;
  url: string;
  title: string;
};



export default function LinkButton({ icon, url, title }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center "
    >
      <div
        className="
        w-32 h-32
        sm:w-20 sm:h-20 
        md:w-40 md:h-40 
        rounded-full 
        flex flex-col gap-2 items-center 
      "
      >
        <img
          src={icon}
          alt="social icon"
          className="w-[70%] h-auto object-contain sm:shadow-sm md:shadow-xl
        shadow-xl rounded-full 
"
        /> 
        
        <h3 className="text-2xl sm:text-base md:text-lg font-semibold text-white">
        {title}
        </h3>

      </div>

     
    </a>
  );
}
