import Head from "next/head";

export default function NotFound() {
  return (
    <>
    <Head>
    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
    </Head>
    <main className="not-found-container">
      <lottie-player
        src="https://assets2.lottiefiles.com/packages/lf20_PQVrLJyOsd.json"
        background="transparent"
        speed="1"
        loop
        autoplay
      ></lottie-player>
    </main>
    </>
  );
}
