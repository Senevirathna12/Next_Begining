export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{
          backgroundColor: 'lightblue',
          padding:'1rem',
        }} >Header</header>
        {children}
        <footer style={{
          backgroundColor: 'lightblue',
          padding:'1rem',
        }}>Footer</footer>
      </body>
    </html>
  );
}
