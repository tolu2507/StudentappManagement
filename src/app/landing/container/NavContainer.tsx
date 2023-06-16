export default function NavContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <nav className=" py-4 px-20 flex justify-between items-center">
      {children}
    </nav>
  );
}

export function NavSectionContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="py-4 px-20 flex justify-between">{children}</section>
  );
}

export function NavSectionStudentContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="my-8 py-4 px-20 flex ">{children}</section>;
}

export function NavGridContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="my-8 py-4 px-20 flex h-[700px] text-black">{children}</section>;
}
