import './globals.css'
import Footer from './footer'
import Header from './header'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import Script from 'next/script'
config.autoAddCss = false

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
            <head />
            <body>
                <Header />
                <main>{children}</main>
                <Footer />

                {process.env.NODE_ENV === 'development' ? (
                    <>
                        <Script src="https://unpkg.com/@popperjs/core@2/dist/umd/popper.min.js"></Script>
                        <Script src="https://unpkg.com/tippy.js@6/dist/tippy-bundle.umd.js"></Script>
                    </>
                ) : (
                    <>
                        <Script src="https://unpkg.com/@popperjs/core@2"></Script>
                        <Script src="https://unpkg.com/tippy.js@6"></Script>
                    </>
                )}
            </body>
        </html>
    )
}
