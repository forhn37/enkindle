import Footercomp from "../../ui/common/footercomp";
import Headercomp from "../../ui/main/headercomp";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="flex flex-col justify-between">
        <Headercomp />
        {children}
        <Footercomp />
        </body>
    </html>
  );
}
