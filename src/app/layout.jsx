import "./globals.css";

export const metadata = {
  title: "Thread App",
  description: "Partagez des threads ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
