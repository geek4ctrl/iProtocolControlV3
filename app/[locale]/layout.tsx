import { GeistSans } from 'geist/font/sans'
import './globals.css'

// import { useMessages } from "use-intl"
import { NextIntlClientProvider, useMessages } from 'next-intl';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'iProtocol Control V3',
  description: 'The fastest way to build apps with Next.js and Supabase',
}

type Props = {
  children: React.ReactNode;
  params: {
    locale: "en" | "fr" | "it"
  }
}

const RootLayout: React.FC<Props> = ({
  children,
  params: { locale }
}) => {
  const messages = useMessages();

  return (
    <html lang={locale} className={GeistSans.className}>

      <NextIntlClientProvider messages={messages}>

        <body className="bg-background text-foreground">
          <main className="min-h-screen flex flex-col items-center">
            {children}
          </main>
        </body>

      </NextIntlClientProvider>


    </html>
  )
}

export default RootLayout;