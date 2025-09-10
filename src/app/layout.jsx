import "./globals.css";

export const metadata = {
  title: "Thread App",
  description: "Partagez des threads ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" bg-gray-950">{children}</body>
    </html>
  );
}
