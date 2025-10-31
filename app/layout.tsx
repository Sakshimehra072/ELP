// // import { Geist, Geist_Mono } from "next/font/google";

// import "./globals.css";
// import { Poppins } from "next/font/google";
// import { Josefin_Sans } from "next/font/google";
// import { ClientProviders } from "./components/ClientProviders";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   variable: "--font-Poppins",
// });

// const josefin = Josefin_Sans({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   variable: "--font-Josefin",
// });

// export const metadata = {
//   title: "LMS - Learning Management System",
//   description: "LMS is a platform for students to learn and get help from teachers",
//   keywords: "Programming, MERN, Redux, Machine Learning",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${poppins.variable} ${josefin.variable} antialiased !bg-white bg-no-repeat dark:bg-gradient-to-b dark:from-gray-900 dark:to-slate-900 duration-300`}
//       >
//         <ClientProviders>
//           {children}
//         </ClientProviders>
//       </body>
//     </html>
//   );
// }

import "./globals.css";
import { Poppins } from "next/font/google";
import { Josefin_Sans } from "next/font/google";
import { ClientProviders } from "./components/ClientProviders";

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

export const metadata = {
  title: "LMS - Learning Management System",
  description: "LMS is a platform for students to learn and get help from teachers",
  keywords: "Programming, MERN, Redux, Machine Learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
      

//       className={`${poppins.variable} ${josefin.variable} antialiased !bg-white bg-no-repeat 
//   dark:bg-gradient-to-b dark:from-gray-900 dark:to-slate-900 duration-300 
//   min-h-screen w-full 
//   px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12
//   py-4 sm:py-6 md:py-8 lg:py-10
//   transition-all`}
// suppressHydrationWarning
// >

  className={`${poppins.variable} ${josefin.variable} antialiased !bg-white bg-no-repeat dark:bg-gradient-to-b dark:from-gray-900 dark:to-slate-900 duration-300`}
        suppressHydrationWarning
      >

        {/* Pre-hydration script to set theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const theme = savedTheme || (prefersDark ? 'dark' : 'light');
                  
                  document.documentElement.classList.add(theme);
                  if (theme === 'dark') {
                    document.documentElement.style.colorScheme = 'dark';
                  }
                } catch (e) {
                  // Ignore errors (e.g., localStorage not available)
                }
              })();
            `,
          }}
        />
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
