import Image from 'next/image';
import snippetExample from '../public/posts/emmet/snippet-example.webp';

const PAGE_TITLE = "I'm joining Stateful";
const CARD_IMAGE = 'joining-stateful.webp';

export default function Post() {
  return (
    <main className="post-content">
      <div className="article-header">
        <div className="card">
          <div className="card-image-container">
            <div
              className="card-image card-image-stateful"
              role="img"
              aria-labelledby="emmet-expressions-blog-post"
              style={{ backgroundImage: `url(${CARD_IMAGE})` }}
            ></div>
          </div>
        </div>
        <h1 id="emmet-expressions-blog-post">{PAGE_TITLE}</h1>
      </div>
      <article>
        <p>
          Breaking news ;), I'm super excited to share that I'm joining{' '}
          <a href="https://stateful.com/" target="_blank">
            Stateful
          </a>
          , a developer tools focused company.
        </p>
        <p>
          If you're reading this blog post, you may wonder, what's Stateful? why are you leaving Fusebit? what happened?
        </p>
        <p>
          Ok, ok, let me start by clarifying, that I really enjoyed my time at Fusebit, and I feel super sad that the
          product (and the company) is shutting down, blame the current market conditions, the upcoming recession, tech
          layoffs, etc. It's a shame, the product is wonderful and I truly believe it's solving a problem in the
          integration space.
        </p>
        <p>
          I learned so many things while being at Fusebit, I can say I know the best (and the worst) parts of dealing
          with popular SaaS APIs. I had to write integration code, read many developer docs and onboard users to
          interact with different APIs.
        </p>
        <p>
          I've been working with developer products focused companies for a while, it started with{' '}
          <a href="https://auth0.com/" target="_blank">
            Auth0
          </a>{' '}
          around 5 years ago. I realized I wanted to continue to work with similar companies where developer experience
          is a top priority
        </p>
        <p>
          So, with the news that I was forced to be on the market again, December 2022, was crazy for me; my first
          though was, giving the current market conditions plus the normal hiring freeze during the holidays, that
          finding a new job will be challenging and extremely slow.
        </p>
        <p>
          To my surprise, and thanks to Fusebit founders network, I had the opportunity to connect with amazing startups
          willing to offer me at least an interview. I started an interview sprint, I think, it was probably at least
          two interviews per day, it was exhausting, since I had technical tests, interviews with CEOs, CTOs, recruiters
          and engineers. All that time I was dealing with anxiety and I couldn't focus too much, add to that I had to
          take care of my little baby girl of 5 months. My original plan was to relax and enjoy some time with my family
          somewhere, but I canceled all my plans giving the financial uncertainty I was facing at the moment, I didn't
          have an answer for how long this search could take. The time was terrible from many perspectives.
        </p>
        <p>
          Fortunately, I ended up with several job offers. All those companies where really cool, one of them was
          Stateful, I was hesitant at the beginning, but when I talked with the founders, something clicked to me about
          the product, they're re-imagining the developer experience around how to run projects's README files. If you
          are a developer, I encourage you to look at it and let me know what you think.
        </p>
        <p>
          There is also another product called{' '}
          <a href="https://stateful.com/#marquee" target="_blank">
            Marquee
          </a>{' '}
          that's a supercharged new homescreen for VS Code, take a look at the following video:
        </p>
        <div className="marquee-in-action">
          <video controls loop muted playsInline>
            <source src="posts/stateful/marquee-walkthrough.mp4" type="video/mp4" />
          </video>
        </div>
        <p>
          Once again, I'm super excited to start contributing to these projects and interact with the developer
          community and find new ways to improve their productivity.
        </p>
        <div className="card-icon">
          <a href="https://github.com/stateful/vscode-marquee" target="_blank" title="Checkout marquee project on GitHub">
            <div role="img" className="logo-card logo-github"></div>
            <span>Checkout the Marquee VS Code extension GitHub repo</span>
          </a>
        </div>
        <div className="card-icon">
          <a href="https://github.com/stateful/vscode-runme" target="_blank" title="Checkout runme project on GitHub">
            <div role="img" className="logo-card logo-github"></div>
            <span>Checkout the runme VS Code extension GitHub repo</span>
          </a>
        </div>
      </article>
    </main>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      title: PAGE_TITLE,
      pageName: 'stateful',
      description:
        "Read about why I'm leaving my position at Fusebit and decided to join Stateful, a developer tools focused company.",
      ogImage: CARD_IMAGE,
    },
  };
}
