import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'عَ نَدْهَة | تجربة انتظار أذكى لمطعمك', description: 'منصة البيجر الذكي والمنيو الرقمي للمطاعم' };
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="ar" dir="rtl"><body>{children}</body></html>; }
