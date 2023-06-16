export default function StudentInteraction({
  data,
}: {
  data: NUMBERDETAILS[];
}) {
  return (
    <>
      <div className="w-[30%] font-[700] text-4xl text-black">
        Our numbers tells <br /> more about us.
      </div>
      <div className="ml-14 flex-1 flex justify-between items-center">
        {data.map(({ title, text }, i) => (
          <div key={i} className="space-y-2">
            <p className=" text-6xl font-bold text-[#41b5e6]">{title}</p>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export interface NUMBERDETAILS {
  title: string;
  text: string;
}
