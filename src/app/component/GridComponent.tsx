export default function GridComponent({emoji, text, title}:USERDETAILS){

    return (
      <div className="space-y-4">
        <div className="w-14 h-14 rounded-2xl flex justify-center items-center bg-white ">
          {emoji}
        </div>
        <div className="text-3xl font-extrabold">{title}</div>
        <div className="text-sm text-[#31363c] font-semibold">{text}</div>
      </div>
    );
}

export interface USERDETAILS {
  emoji: string;
  title: string;
  text: string;
}