import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
    </Head>
      <main>
      <div className="hero">
        <div className="hero-text">
          <h2>Developer Tools, Community Building, Tutorials, Full-Stack JavaScript, Personal Projects</h2>
        </div>
        <div className="zen-animation">
          <lottie-player
            src="https://assets7.lottiefiles.com/packages/lf20_O2ci8jA9QF.json"
            background="transparent"
            speed="0.3"
            class="hero-container"
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
      <div className="middle-section">
      <h2>Latest blog posts</h2>
         <div className="posts-container">
        <div className="card">
          <div className="card-image-container">
            <div className="card-image" role="img"  aria-label="Image describing how Emmet expressions can be a productivity boost in VS Code" style={ { backgroundImage: "url('/emmet-blogpost.webp')"}}></div>
          </div>
          <div className="card-body">
            <h3>
            <a href="/emmet-expressions" title="Read more about using Emmet expressions in VS Code, a productivity boost">
            Using Emmet expressions in VS Code, a productivity boost
            </a>
              </h3>
            <span>06 January 2023</span>
            <p>
            Emmet is a web-developer’s toolkit for boosting HTML & CSS code writing.

With Emmet, you can type expressions (abbreviations) similar to CSS selectors and convert them into code fragment with a single keystroke
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-image-container">
            <div className="card-image" role="img" aria-label="Image describing the recommended VS Code extensions" style={ { backgroundImage: "url('/top-vscode-extensions.webp')"}}></div>
          </div>
          <div className="card-body">
            <h3>Top Five VS Code extensions that will make you a more productive developer</h3>
            <span>06 January 2023</span>
            <p>
              Stop copy pasting markup, learn how to use this vscode extensions that will change the way you work for
              ever.
            </p>
            <a href="#" title="Read more">
              Read more
            </a>
          </div>
        </div>
        </div>
      </div>
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      title: 'bencho.dev | Welcome',
      description: 'Welcome to bencho.dev blog, technical articles about React, Next.js, VS Code Extensions, Node.js, Deno, OAuth 2.0, JavaScript',
    },
  }
}
