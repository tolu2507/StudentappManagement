'use client'
export default function ButtonComponent({ text }: { text: string }) {
  return (
    <button
      type="button"
      className="w-full py-4 px-6 bg-black rounded-2xl border-none shadow-md shadow-gray-500 text-[500]"
      onClick={() => console.log("helloworld")}
    >
      {text}
    </button>
  );
}
