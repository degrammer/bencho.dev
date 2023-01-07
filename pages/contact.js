import Head from 'next/head';
import Image from 'next/image';
import bencho from '../public/bencho.webp';

export default function Card() {
  return (
    <>
      <Head>
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
      </Head>
      <main>
        <article>
          <div className="about social-card">
            <div className="profile">
              <span className="name">Hello, I'm Ruben Restrepo (bencho)</span>

              <h1>If you want to reach out to me, you can use the following channels</h1>
              <div className="card-icons">
                
                <div className="card-icon">
                <a href="https://www.linkedin.com/in/rubenrestrepo/" target="_blank" title="Connect with me on LinkedIn">
                  <div role="img" className="logo-card logo-linkedin"></div>
                  <span>Connect with me on LinkedIn</span>
                  </a>
                </div>
                <div className="card-icon">
                <a href="https://www.twitter.com/degrammer" target="_blank" title="Connect with me on Twitter">
                  <div role="img" className="logo-card logo-twitter"></div>
                  <span>My Twitter messages are open</span>
                  </a>
                </div>

                <p>Or you can send me an email to <a href="mailto:contact@bencho.dev">contact at bencho.dev</a> </p>
                
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
      pageName: 'contact',
      ogImage: 'bot.png',
      title: 'Contact Ruben Restrepo (bencho)',
      description: 'Contact me via LinkedIn or Twitter messages',
    },
  };
}
