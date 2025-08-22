import './globals.css';

export const metadata = {
  title: 'AcquaSentry Dashboard',
  description: 'Monitoreo Predictivo del Agua',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
