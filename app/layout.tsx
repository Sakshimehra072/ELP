'use client'
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Josefin_Sans } from "next/font/google";
<<<<<<< HEAD
import { ThemeProvider } from '././utils/theme-provider';
import { Toaster } from "react-hot-toast";
import { Providers } from "./Provider";
import { SessionProvider } from "next-auth/react"
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import Loader from "./components/loader/Loader"
=======
import { ThemeProvider } from './utils/theme-provider';
import { Providers } from "./Provider";
import {Toaster} from 'react-hot-toast'
import {SessionProvider} from "next-auth/react"

>>>>>>> bc4c904da31581c701dce1b672f7afd58c3668ef

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Poppins",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Josefin",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${josefin.variable} antialiased !bg-white bg-no-repeat dark:bg-gradient-to-b dark:from-gray-900 dark:to-black duration-300`}
      >
        <Providers>
<<<<<<< HEAD
          <SessionProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <Custom>{children}</Custom>
              <Toaster position='top-center' reverseOrder={false} />
            </ThemeProvider>
          </SessionProvider>
=======
        <SessionProvider>
        <ThemeProvider attribute="class" defaultTheme= "system" enableSystem>
        {children}
        <Toaster position='top-center' reverseOrder={false}/>
        </ThemeProvider>
        </SessionProvider>
>>>>>>> bc4c904da31581c701dce1b672f7afd58c3668ef
        </Providers>
      </body>
    </html>
  );
}

const Custom: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoading } = useLoadUserQuery({});
  return (
    <>
      {
        isLoading ? <Loader /> : <>{children}</>
      }
    </>
  )
}