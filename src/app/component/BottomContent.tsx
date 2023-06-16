import ButtonComponent from "@/app/component/button";

export default function BottomContent() {
  return (
    <div className="w-full bg-gradient-radial from-[#d1a8ed]/50 border-0 bg-blend-lighten ">
      <div className="font-bold text-black text-center text-5xl">
        Start learning today.
        <br />
        Grow your career
      </div>
      <div className=" my-10 font-semibold text-center">
        Aenean tempor tortotr in metus pretusium , sed facibus <br /> ligula
        naccumusan consequat.
      </div>
      <div className=" my-10 items-center flex justify-center">
        <div className="w-[200px]">
          <ButtonComponent text={"learning now"} />
        </div>
      </div>
    </div>
  );
}
