import { ToastContainer } from "react-toastify";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./Providers";
export const metadata = {
  title: "Thread App",
  description: "Partagez des threads ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" bg-gray-950">
        <AuthProvider>{children}</AuthProvider>
        <ToastContainer position="bottom-right" />
      </body>
    </html>
  );
}
