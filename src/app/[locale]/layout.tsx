import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export default async function RootLayout({
  children,
  modalPages,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  modalPages: React.ReactNode;
  params: Record<string, any>;
}>) {
  const messages = await getMessages(locale);
  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
      timeZone="America/Los_Angeles"
    >
      {children}
      {modalPages}
    </NextIntlClientProvider>
  );
}
