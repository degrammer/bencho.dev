import Head from 'next/head';
import Image from 'next/image';
import bencho from '../public/bencho.webp';

export default function About() {
  return (
    <>
      <Head>
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
      </Head>
      <main>
        <article>
          <h1>About me</h1>
          <div className="about">
            <div className="profile">
              <span className="name">Hello, I'm Ruben Restrepo (bencho)</span>
              <p>
                More than ten years of professional experience creating software, seven years working remotely, with a
                product-focused mindset, obsessed with delivering value to customers. High proficiency in English,
                native Spanish speaker, strong communicator, hardworking team player. Community builder and speaker.{' '}
              </p>
              <p>
                I like to think about myself as a generalist with dynamic specializations, some times I'm 100% focused
                working on the backend, and when I have the opportunity I like to hack around Front end stuff, I'm
                pretty comfortable jumping between a Figma file and a bash script.
              </p>
              <h2>I like to talk about</h2>
              <div className="card-icons">
                <div className="card-icon">
                  <div role="img" className="logo-card logo-vscode"></div>
                  <span>VS Code Extensions</span>
                </div>
                <div className="card-icon">
                  <div role="img" className="logo-card logo-javascript"></div>
                  <span>JavaScript</span>
                </div>
                <div className="card-icon">
                  <div role="img" className="logo-card logo-github"></div>
                  <span>Open Source projects</span>
                </div>
                <div className="card-icon">
                  <div role="img" className="logo-card logo-oauth"></div>
                  <span>OAuth 2.0</span>
                </div>
                <div className="card-icon">
                  <div role="img" className="logo-card logo-nodejs"></div>
                  <span>Node.js</span>
                </div>
                <div className="card-icon">
                  <div role="img" className="logo-card logo-deno"></div>
                  <span>Deno</span>
                </div>
                <div className="card-icon">
                  <div role="img" className="logo-card logo-react"></div>
                  <span>React</span>
                </div>
                <div className="card-icon">
                  <div role="img" className="logo-card logo-nextjs"></div>
                  <span>Next.js</span>
                </div>
              </div>
            </div>

            <div className="photo">
              <lottie-player
                class="particle"
                src="https://assets2.lottiefiles.com/private_files/lf30_qgah66oi.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
              <Image src={bencho} alt="Bencho profile picture" />
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
      pageName: 'about',
      ogImage: 'bot.png',
      title: 'bencho.dev | About me',
      description:
        'About bencho.dev blog, technical articles about React, Next.js, VS Code Extensions, Node.js, Deno, OAuth 2.0, JavaScript',
    },
  };
}
