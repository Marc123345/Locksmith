import type { Metadata } from 'next';
import Script from 'next/script';
import '../../index.css';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

export default function PPCLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Script
        src="//cdn.callrail.com/companies/307561553/12e405e4012e7d3ccce9/12/swap.js"
        strategy="beforeInteractive"
      />
    </>
  );
}
