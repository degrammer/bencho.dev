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
            <div className="card-image" role="img" aria-label="Image describing the recommended VS Code extensions" style={ { backgroundImage: "url('/joining-stateful.webp')"}}></div>
          </div>
          <div className="card-body">
            <h3><a href="/stateful" title="Read more about using Emmet expressions in VS Code, a productivity boost">I'm joining Stateful!</a></h3>
            <span>10 January 2023</span>
            <p>
             Read about why I'm leaving my position at Fusebit and decided to join Stateful,
             a developer tools focused company.
            </p>
          </div>
        </div>
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
            <h3>Top VS Code extensions that will make you a more productive developer</h3>
            <span>Coming soon</span>
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
      description: 'Welcome to bencho.dev blog, developer tools, community building, tutorials, full-stack javascript, personal projects',
      pageName: '',
      ogImage: 'bot.png',
    },
  }
}
