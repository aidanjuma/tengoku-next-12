import { processITitle } from "@helpers";
import { InfoTitleProps, TitleLanguage } from "@models/types";

const InfoTitle = (props: InfoTitleProps) => {
  const romaji = processITitle(props.title, TitleLanguage.romaji);
  const native = processITitle(props.title, TitleLanguage.native);

  return (
    <div className="text-white max-h-40 pt-4">
      <h2 className="font-lexend font-medium text-2xl text-center pb-2">
        {romaji}
      </h2>
      <h6 className="font-zenmaru font-medium text-base text-center text-offwhite">
        {native}
      </h6>
    </div>
  );
};

export default InfoTitle;
