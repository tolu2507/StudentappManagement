import Image from "next/image";

export default function ImageComponent() {
  return (
    <div className="w-full flex justify-end h-[400px] relative overflow-hidden">
      <div className="w-[400px] h-2/3 rounded-t-[100px] justify-center rounded-b-[100px]  bg-gradient-to-tr from-[rgb(77,179,227)] to-[#ec6e8c] absolute items-center flex bottom-0  ">
        <div className="relative w-[350px] h-[500px] object-cover">
          <Image src="/result.png" alt="female" fill className="bg-none" quality={100} />
        </div>
      </div>
    </div>
  );
}
