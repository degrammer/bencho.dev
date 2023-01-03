import Header from '../components/header';
import Footer from '../components/footer';

export default function Home() {
  return (
    <>
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
            class="test"
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
      <article>
         <h2>Latest blog posts</h2>
         <div className="posts-container">
        <div className="card">
          <div className="card-image-container">
            <div className="card-image" style={ { backgroundImage: "url('/emmet-blogpost.jpeg')"}}></div>
          </div>
          <div className="card-body">
            <h3>Using Emmet Expressions in VS Code, a productivity boost</h3>
            <span>29 November 2022</span>
            <p>
            Emmet is a web-developer’s toolkit for boosting HTML & CSS code writing.

With Emmet, you can type expressions (abbreviations) similar to CSS selectors and convert them into code fragment with a single keystroke
            </p>
            <a href="/vs-code-emmet-expressions" title="Read more">
              Read more
            </a>
          </div>
        </div>
        <div className="card">
          <div className="card-image-container">
            <div className="card-image" style={ { backgroundImage: "url('/top-vscode-extensions.jpeg')"}}></div>
          </div>
          <div className="card-body">
            <h3>Top Five VS Code extensions that will make you a more productive developer</h3>
            <span>29 November 2022</span>
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
      </article>
     
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      title: 'bencho.dev | Welcome',
      description: 'Welcome to bencho.dev blog, technical articles about React, Next.js, VS Code Extensions, Node.js, Deno, OAuth 2.0, JavaScript'
    },
  }
}
