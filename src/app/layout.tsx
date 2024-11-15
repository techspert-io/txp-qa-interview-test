import { ApplicationName } from '@/libs/react/router/breadcrumbs';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Paper } from '@mui/material';
import { AppProvider } from '@toolpad/core';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: ApplicationName,
  description: 'Simple application for test automation',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const style = {
    height: '100%',
  };

  return (
    <html lang="en" style={style}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ ...style, paddingTop: 24, paddingBottom: 24 }}
      >
        <AppProvider sx={style}>
          <Paper
            sx={{
              ...style,
              width: '75%',
              marginBottom: 'auto',
              marginLeft: 'auto',
              marginRight: 'auto',
              paddingTop: 2,
              paddingBottom: 2,
            }}
          >
            {children}
          </Paper>
        </AppProvider>
      </body>
    </html>
  );
}
