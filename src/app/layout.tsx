
import { Inter } from "next/font/google";
import { header } from "app/componentes/shared/Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <header/>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
