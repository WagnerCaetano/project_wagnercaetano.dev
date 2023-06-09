import "./globals.css";
import Head from "next/head";

async function Home() {
  return (
    <>
      <Head>
        <title>Wagner Caetano | Software Engineer</title>
        <meta name={"description"} title={"description"} content={"Wagner Caetano Landing Page Portfolio"} />
      </Head>

      <div className="min-h-screen">
        <div className="max-w-6xl mx-auto"></div>
      </div>
    </>
  );
}

export default Home;
