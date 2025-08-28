import type { Metadata } from "next";
import "./styles/global.css";

export const metadata: Metadata = {
  title: "Cassino - Roleta, caça-níqueis, cartas e muito mais! | BetAki",
  description: "",
  icons: {
    icon: "/favicon.svg",
    //shortcut: '/favicon-16x16.png',
    //apple: '/favicon-mascara.png',
  },
  keywords: ["cassino", "roleta", "caça-níqueis", "cartas", "betaki"],
  authors: [
    {
      name: "BetAki [ contato@betaki.bet.br ]",
      url: "https://betaki.bet.br/games",
    },
  ],
  openGraph: {
    type: "website",
    url: "https://betaki.bet.br/games",
    title: "Cassino - Roleta, caça-níqueis, cartas e muito mais! | BetAki",
    description: "Cassino - Roleta, caça-níqueis, cartas e muito mais!",
    siteName: "BetAki",
    images: [{
      url: '/compartilhar.jpg',
    }],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-shark-950 antialiased" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
