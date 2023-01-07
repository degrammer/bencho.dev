export default function Footer() {
  return (
    <footer>
      <div className="copy">
        © This is a personal site from Ruben Restrepo. Opinions expressed are solely my own and do not express the views
        or opinions of my employer.
        <br />
        All Rights Reserved. Animations by LottieFiles.
      </div>
      <div className="menu" role="navigation" aria-label="Footer menu navigation">
        <ul>
          <li>
            <a title="Go to main page" href="/">
              home
            </a>
          </li>
          <li>
            <a title="Read blog posts" href="#">
              posts
            </a>
          </li>
          <li>
            <a title="Check out my personal projects / ideas" href="#">
              projects
            </a>
          </li>
          <li>
            <a title="Learn more about me" href="about">
              about
            </a>
          </li>
          <li>
            <a title="Lets get in touch, contact me" href="/contact" tabIndex="4">
              contact
            </a>
          </li>
        </ul>
      </div>
      <div className="social">
        <a href="https://www.linkedin.com/in/rubenrestrepo/" target="_blank" title="Connect with me on LinkedIn">
          <div role="img" className="logo-card logo-linkedin"></div>
        </a>

        <a href="https://twitter.com/degrammer" target="_blank" title="Follow me on Twitter">
          <div role="img" className="logo-card logo-twitter"></div>
        </a>
        <a href="https://github.com/degrammer" target="_blank" title="Follow me on GitHub">
          <div role="img" className="logo-card logo-github"></div>
        </a>
      </div>
    </footer>
  );
}
