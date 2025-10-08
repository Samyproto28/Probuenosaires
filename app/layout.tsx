import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Suspense } from "react"
import { LayoutClient } from "./layout-client"
import Script from "next/script"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Fundación Pro Buenos Aires",
  description: "Desde 1998 trabajamos por el desarrollo sustentable de Argentina",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body
        className={`font-sans ${inter.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <Script
          id="prevent-hydration-mismatch"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function removeProblematicAttributes() {
                  const attributesToRemove = ['bis_skin_checked', 'bis_register'];
                  
                  attributesToRemove.forEach(attr => {
                    const elements = document.querySelectorAll(\`[\${attr}]\`);
                    elements.forEach(el => el.removeAttribute(attr));
                  });
                  
                  const processedElements = document.querySelectorAll('[__processed_]');
                  processedElements.forEach(el => {
                    Array.from(el.attributes).forEach(attr => {
                      if (attr.name.startsWith('__processed_')) {
                        el.removeAttribute(attr.name);
                      }
                    });
                  });
                }

                removeProblematicAttributes();
                
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', removeProblematicAttributes);
                } else {
                  removeProblematicAttributes();
                }
                
                const observer = new MutationObserver(function(mutations) {
                  mutations.forEach(function(mutation) {
                    if (mutation.type === 'attributes') {
                      const target = mutation.target;
                      const attrName = mutation.attributeName;
                      
                      if (attrName === 'bis_skin_checked' ||
                          attrName === 'bis_register' ||
                          (attrName && attrName.startsWith('__processed_'))) {
                        target.removeAttribute(attrName);
                      }
                    }
                  });
                });
                
                observer.observe(document.body || document.documentElement, {
                  attributes: true,
                  subtree: true,
                  attributeFilter: ['bis_skin_checked', 'bis_register', '__processed_']
                });
              })();
            `
          }}
        />
        <div id="__next" suppressHydrationWarning={true}>
          <Suspense fallback={<div>Loading...</div>}>
            <LayoutClient>{children}</LayoutClient>
          </Suspense>
        </div>
      </body>
    </html>
  )
}
