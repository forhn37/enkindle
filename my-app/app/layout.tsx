import "./globals.css";
import Footercomp from "./ui/footercomp";
import Headercomp from './ui/headercomp';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <Headercomp />
        {children}
        <Footercomp />
        </body>
    </html>
  );
}
