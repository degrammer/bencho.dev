export default function About() {
  return (
    <main>
      <article>
      <h1>About me</h1>
      <div className="about">
        <div className="profile">
          <span className="name">Hello, I'm Ruben Restrepo (bencho)</span>
          <p>
            More than ten years of professional experience creating software, seven years working remotely, with a
            product-focused mindset, obsessed with delivering value to customers. High proficiency in English, native
            Spanish speaker, strong communicator, hardworking team player. Community builder and speaker.{' '}
          </p>
          <p>
            I like to think about myself as a generalist with dynamic specializations, some times I'm 100% focused
            working on the backend, and when I have the opportunity I like to hack around Front end stuff, I'm pretty
            comfortable jumping between a Figma file and a bash script.
          </p>
          <h2>I like to talk about</h2>
          <div className="card-icons">
            <div className="card-icon">
              <div className="logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png" />
              </div>
              <span>VS Code Extensions</span>
            </div>
            <div className="card-icon">
              <div className="logo">
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" />
              </div>
              <span>JavaScript</span>
            </div>
            <div className="card-icon">
              <div className="logo">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
              </div>
              <span>Open Source projects</span>
            </div>
            <div className="card-icon">
              <div className="logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Oauth_logo.svg" />
              </div>
              <span>OAuth 2.0</span>
            </div>
            <div className="card-icon">
              <div className="logo">
                <img src="https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png" />
              </div>
              <span>Node.js</span>
            </div>
            <div className="card-icon">
              <div className="logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Deno.svg/1200px-Deno.svg.png" />
              </div>
              <span>Deno</span>
            </div>
            <div className="card-icon">
              <div className="logo">
                <img src="https://ionicframework.com/docs/icons/logo-react-icon.png" />
              </div>
              <span>React</span>
            </div>
            <div className="card-icon">
              <div className="logo">
                <img src="data:image/png;base64,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" />
              </div>
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
          <img src="bencho.jpeg" />
        </div>
      </div>
      </article>
    </main>
  );
}

export async function getStaticProps(context) {
    return {
      props: {
        title: 'bencho.dev | About me'
      },
    }
  }
