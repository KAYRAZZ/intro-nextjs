import "./globals.css";
import Nav from "./components/Nav";
import ButtonNextPrevious from "./components/ButtonNextPrevious";

export const metadata = {
  title: "Introduction à Next.JS",
  description: "Site d'initiation à Next.JS",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link async defer rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/atom-one-dark.min.css"></link>
      </head>
      <body className="relative md:min-h-screen">
        <Nav />
        <section className="z-0 mx-4 py-6 text-justify flex justify-center items-center flex-col">
          <div style={{ width: "min(90%, 750px)" }}>
            {children}
            <ButtonNextPrevious />
          </div>
        </section>
      </body>
    </html>
  );
}
