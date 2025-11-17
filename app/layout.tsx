import "./globals.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../app/theme";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
