type Props = {
  icon: string;
  url: string;
  title: string;
};

{
  /*export default function LinkButton({ icon, url, title }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
       className="flex flex-col items-center gap-6"
    >
      <div className="
       mr-2 gap-6 flex flex-col items-center justify-center rounded-3xl 
      ">
        <img
          src={icon}
          alt="social icon"
          className="w-36 h-36 shadow-2xl rounded-full "
        />
        <h3 className="text-xl sm:text-base md:text-2xl font-semibold text-white">{title}</h3>
      </div>
    </a>
  );
}
  */
}

export default function LinkButton({ icon, url, title }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-3"
    >
      <div
        className="
        w-32 h-32
        sm:w-20 sm:h-20 
        md:w-40 md:h-40 
        rounded-full 
        flex items-center justify-center
      "
      >
        <img
          src={icon}
          alt="social icon"
          className="w-[70%] h-[70%] object-contain sm:shadow-sm md:shadow-xl
        shadow-xl rounded-full 
"
        />
      </div>

      <h3 className="text-lg sm:text-base md:text-lg font-semibold text-white">
        {title}
      </h3>
    </a>
  );
}
