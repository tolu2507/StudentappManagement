import { Metadata } from "next";
import LayoutContainer from "./container/LayoutContrainer";

export const metadata: Metadata = {
  title: "Landing page",
  description: "welcome to the landing page of the application",
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-[100%] bg-[#f5f5f5] text-[#b5bec7]">
      <LayoutContainer />
      {children}
    </main>
  );
}
