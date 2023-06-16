export default function BottomContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bottom-0 w-full space-y-[70px] ">{children}</div>
  );
}
