import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cleaning & Moving in London | London Home Services Group',
  description: 'Explore cleaning and moving services in London, from end-of-tenancy cleaning to house removals and packing. London pilot enquiries.',
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // Browser extensions can inject attributes into <html> before React hydrates.
  return (
    <html lang="en-GB" suppressHydrationWarning={process.env.NODE_ENV === 'development'}>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
