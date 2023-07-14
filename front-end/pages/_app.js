import Layout from "@/components/layout";
import { createTheme, NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useRouter } from "next/router";
import { useState } from "react";

const lightTheme = createTheme({
  type: 'light',
  // theme: {
  //   colors: {...}, // optional
  // }
})

const darkTheme = createTheme({
  type: 'dark',
  // theme: {
  //   colors: {...}, // optional
  // }
})

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [homeSelect, setHomeSelect] = useState(1);
  const [hotCompanySelect, setHotCompanySelect] = useState(1);
  const [hotingSelect, setHotingSelect] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [otherSelect, setOtherSelect] = useState(1);

  return (
    // 2. Use at the root of your app
    <NextThemesProvider
      defaultTheme="light"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className
      }}>
      <NextUIProvider>
        <Layout>
          <Component
            homeSelect={homeSelect} onHomeSelect={(v) => setHomeSelect(v)}
            hotCompanySelect={hotCompanySelect} onSelect={(v) => setHotCompanySelect(v)}
            hotingSelect={hotingSelect} topSelect={(v) => setHotingSelect(v)}
            currentPage={currentPage} pageSelect={(v) => setCurrentPage(v)}
            otherSelect={otherSelect} setOtherSelect={(v) => setOtherSelect(v)}
          />
        </Layout>
      </NextUIProvider>
    </NextThemesProvider>
  );
}
