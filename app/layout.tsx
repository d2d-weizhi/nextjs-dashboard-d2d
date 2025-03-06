<<<<<<< HEAD
<<<<<<< HEAD
import '@/app/ui/global.css';
import { inter } from "@/app/ui/fonts";

=======
>>>>>>> 5386755 (Re-added the starting example.)
=======
>>>>>>> origin/main
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
<<<<<<< HEAD
<<<<<<< HEAD
      <body className={`${inter.className} antialiased`}>{children}</body>
=======
      <body>{children}</body>
>>>>>>> 5386755 (Re-added the starting example.)
=======
      <body>{children}</body>
>>>>>>> origin/main
    </html>
  );
}
