import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider } from '@/components/website/theme-provider';
import Progressbar from '@/lib/progressbar';
import { siteConfig } from '@/lib/utils';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'framer-motion',
    'gsap',
    'lenis react',
    'reactscroll animation',
    'web animation',
    'design engineer',
    'image mousetrail',
    'spotlight',
    'tabs',
    'image reveal',
    'sparkles',
  ],
  authors: [
    {
      name: 'numann ahmed',
      url: 'https://numann-ahmed.com/',
    },
  ],
  creator: 'numann',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@numann_dev',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: '#ea580c',
          colorBackground: '#18181b',
          colorInputBackground: '#27272a',
          colorInputText: '#ffffff',
          colorText: '#ffffff',
          colorTextSecondary: '#a1a1aa',
          colorDanger: '#ef4444',
          colorSuccess: '#22c55e',
          colorWarning: '#f59e0b',
          colorNeutral: '#71717a',
          borderRadius: '0.5rem',
        },
        elements: {
          card: 'bg-zinc-900 border border-zinc-800 shadow-xl',
          headerTitle: 'text-white',
          headerSubtitle: 'text-zinc-400',
          socialButtonsBlockButton: 'bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700',
          socialButtonsBlockButtonText: 'text-white',
          formFieldLabel: 'text-zinc-300',
          formFieldInput: 'bg-zinc-800 border-zinc-700 text-white',
          footerActionLink: 'text-orange-500 hover:text-orange-400',
          formButtonPrimary: 'bg-orange-500 hover:bg-orange-600 text-white',
          userButtonPopoverCard: 'bg-zinc-900 border border-zinc-800',
          userButtonPopoverActionButton: 'text-zinc-300 hover:text-white hover:bg-zinc-800',
          userButtonPopoverActionButtonText: 'text-zinc-300',
          userButtonPopoverActionButtonIcon: 'text-zinc-400',
          userButtonPopoverFooter: 'hidden',
          userPreviewMainIdentifier: 'text-white',
          userPreviewSecondaryIdentifier: 'text-zinc-400',
          avatarBox: 'border-2 border-zinc-700',
        },
      }}
    >
      <html lang='en' suppressHydrationWarning>
        <body className={poppins.className}>
          <Progressbar>
            <ThemeProvider attribute='class'>
              <div className='isolate min-h-screen' vaul-drawer-wrapper=''>
                {children}
              </div>
            </ThemeProvider>
          </Progressbar>
        </body>
      </html>
    </ClerkProvider>
  );
}
