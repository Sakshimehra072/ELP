'use client'

import { Toaster } from "react-hot-toast";
import { Providers } from "../Provider";
import { SessionProvider } from "next-auth/react"
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import Loader from "./Loader/Loader";
import { ThemeProvider } from '../utils/theme-provider';

interface ClientProvidersProps {
  children: React.ReactNode;
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

export const ClientProviders: React.FC<ClientProvidersProps> = ({ children }) => {
  return (
    <Providers>
      <SessionProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Custom>
            {children}
          </Custom>
          <Toaster position='top-center' reverseOrder={false} />
        </ThemeProvider>
      </SessionProvider>
    </Providers>
  );
};


