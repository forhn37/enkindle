import "./globals.css";
import Footercomp from "./ui/common/footercomp";
import Headercomp from './ui/main/headercomp';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
