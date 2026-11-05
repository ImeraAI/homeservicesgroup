import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cleaning & Moving in London | London Home Services Group',
  description: 'Explore cleaning and moving services in London, from end-of-tenancy cleaning to house removals and packing. London pilot enquiries.',
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-GB"><body><a className="skip-link" href="#main">Skip to content</a>{children}</body></html>;
}
