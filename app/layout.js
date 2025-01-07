import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { NotificationProvider } from "./context/NotificationContext";


const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500","600" ,"700"],
});

export const metadata = {
  title: "Synesis Blog",
  description: "Nextjs Blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NotificationProvider>
      <body className={`${roboto.variable} antialiased`}>
        <Navbar/>
        {children}
      </body>
      </NotificationProvider>
    </html>
  );
}
