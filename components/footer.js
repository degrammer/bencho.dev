export default function Footer() {
  return (
    <footer>
      <div className="copy">
        © This is a personal site from Ruben Restrepo. Opinions expressed are solely my own and do not express the views
        or opinions of my employer.
        <br />
        All Rights Reserved. Animations by LottieFiles.
      </div>
      <div className="menu">
        <ul>
          <li className="logo-container">
            <a title="Navigate to home page" href="/">
              {' '}
              <span>bencho</span>
              <span>.dev</span>{' '}
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
            <a title="Lets get in touch, learn more about me" href="about">
              about
            </a>
          </li>
        </ul>
      </div>
      <div className="social">
        <a href="#" title="Follow me on Twitter">
          <img role="image" width="30px" height="30px" src="twitter.svg" alt="Follow me on Twitter" />
        </a>
        <a href="#" title="Follow me on GitHub">
          <img role="image" width="30px" height="30px" src="github.svg" alt="Follow me on GitHub" />
        </a>
      </div>
    </footer>
  );
}
