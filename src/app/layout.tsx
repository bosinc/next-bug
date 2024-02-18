import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams(): {
  locale: string;
}[] {
  return [{ locale: "en" }, { locale: "cn" }];
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: Record<string, any>;
}): JSX.Element {
  return (
    <html lang={locale} style={{ height: "100dvh" }}>
      <body className={inter.className}>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
