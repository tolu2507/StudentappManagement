import { gridData } from "../lib/data";
import GridComponent from "./GridComponent";
import ButtonComponent from "./button";

export default function GridColumn() {
  return (
    <div className="p-[70px] w-full rounded-[100px] columns-2 shadow-md bg-gradient-to-tr from-[#79d0e8] via-[#cdb1e4] to-[#ec8299] ">
      <div className="h-full w-full p-4 flex flex-col justify-between font-extrabold text-[60px]">
        We add value to <br /> our student&apos;s <br /> journey
        <div className="text-white w-[40%] font-normal text-lg">
          <ButtonComponent text="Learn More" />
        </div>
      </div>
      <div className="h-full w-full rounded p-4 grid grid-cols-2 gap-5">
        {gridData.map(({ emoji, title, text }, i) => (
          <GridComponent key={i} emoji={emoji} title={title} text={text} />
        ))}
      </div>
    </div>
  );
}
