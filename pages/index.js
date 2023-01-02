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
            <div className="card-image"></div>
          </div>
          <div className="card-body">
            <h3>Five productivity VS Code extensions for Front End developers that will change the way you work.</h3>
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
        <div className="card">
          <div className="card-image-container">
            <div className="card-image"></div>
          </div>
          <div className="card-body">
            <h3>Five productivity VS Code extensions for Front End developers that will change the way you work.</h3>
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
        <div className="card">
          <div className="card-image-container">
            <div className="card-image"></div>
          </div>
          <div className="card-body">
            <h3>Five productivity VS Code extensions for Front End developers that will change the way you work.</h3>
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
        <div className="card">
          <div className="card-image-container">
            <div className="card-image"></div>
          </div>
          <div className="card-body">
            <h3>Five productivity VS Code extensions for Front End developers that will change the way you work.</h3>
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
        <div className="card">
          <div className="card-image-container">
            <div className="card-image"></div>
          </div>
          <div className="card-body">
            <h3>Five productivity VS Code extensions for Front End developers that will change the way you work.</h3>
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
        <div className="card">
          <div className="card-image-container">
            <div className="card-image"></div>
          </div>
          <div className="card-body">
            <h3>Five productivity VS Code extensions for Front End developers that will change the way you work.</h3>
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
        <div className="card">
          <div className="card-image-container">
            <div className="card-image"></div>
          </div>
          <div className="card-body">
            <h3>Five productivity VS Code extensions for Front End developers that will change the way you work.</h3>
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
        <div className="card">
          <div className="card-image-container">
            <div className="card-image"></div>
          </div>
          <div className="card-body">
            <h3>Five productivity VS Code extensions for Front End developers that will change the way you work.</h3>
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
        <div className="card">
          <div className="card-image-container">
            <div className="card-image"></div>
          </div>
          <div className="card-body">
            <h3>Five productivity VS Code extensions for Front End developers that will change the way you work.</h3>
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
        <div className="card">
          <div className="card-image-container">
            <div className="card-image"></div>
          </div>
          <div className="card-body">
            <h3>Five productivity VS Code extensions for Front End developers that will change the way you work.</h3>
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
      title: 'bencho.dev | Welcome'
    },
  }
}
