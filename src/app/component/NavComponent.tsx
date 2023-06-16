import Link from "next/link";
export default function NavComponent() {
  return (
    <>
      <div className="w-14 h-14 rounded-lg shadow-lg bg-gradient-to-r from-blue-700 to-purple-600 text-center items-center flex justify-center text-white font-extrabold">
        BS
      </div>
      <div className="flex w-[30%] font-semibold space-x-2 justify-between items-center">
        {["Home", "Countries", "Service", "Testimonial", "Contact"].map(
          (item) => (
            <Link key={item} href={`/${item}`}>
              {item}
            </Link>
          )
        )}
      </div>
    </>
  );
}
