export default function BottomNav({data}:{data: JSX.Element}) {
  return (
    <div className="w-full px-20 py-4 flex border justify-between items-center">
      <div className="w-14 h-14 rounded-lg shadow-lg bg-gradient-to-r from-blue-700 to-purple-600 text-center items-center flex justify-center text-white font-extrabold">
        BS
      </div>
      <div className="w-[25%]">{data}</div>
    </div>
  );
}
