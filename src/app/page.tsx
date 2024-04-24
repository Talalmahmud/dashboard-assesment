import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard description",
  openGraph: {
    title: "Dashboard",
    description: "Hello.",
    url: "https://www.davegray.codes/",
    siteName: "Dashboard",
    type: "website",
    images: [
      {
        url: "/vercel.svg",
        secureUrl: "/vercel.svg",
        width: 1200,
        height: 630,
        alt: "Preview image for Dave Gray",
      },
    ],
  },
};
export default function Home() {
  return <div>Dashboard</div>;
}
