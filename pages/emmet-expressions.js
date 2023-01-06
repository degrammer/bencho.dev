import Image from 'next/image';
import snippetExample from '../public/posts/emmet/snippet-example.webp';

const PAGE_TITLE = 'Boosting your VSCode productivity using Emmet Expressions';
const CARD_IMAGE = 'emmet-blogpost.webp';

export default function Post() {
  return (
    <main className="post-content">
      <div className="article-header">
        <div className="card">
          <div className="card-image-container">
            <div className="card-image" style={{ backgroundImage: `url(${CARD_IMAGE})` }}></div>
          </div>
        </div>
        <h1>{PAGE_TITLE}</h1>
      </div>
      <article>
        <p>
          What’s one of the most common things every developer does? Yeah, you got it, writing code. We spend most of
          our time typing; we write "poems" to our machines so they can run and execute programmed tasks for our
          application users; we make our user's life easier by automating repetitive tasks or processes, sometimes at
          the cost of developer happiness or comfort to create such applications.
        </p>
        <p>
          IDEs are one of the main tools developers use at a daily basis, and it offers powerful features that increase
          their productivity; from IntelliSense providing code completion, parameter information, inline documentation,
          code snippets, and usage examples. This code completion is based on language semantics, and analysis coming
          from the source code.
        </p>
        <p>
          VSCode is one of the most popular IDEs, it’s free and provides an amazing development environment experience,
          let's learn how you can be more productive writing HTML and CSS using an amazing tool called Emmet. If you're
          a front end developer or just hack your own language with Emmet, you will find this article really useful.
        </p>
        <p>
          Usually, when writing repetitive code, the underlying programming language offers built-in mechanisms, like
          functions, so you can encapsulate them and call them every time you need them, from the tooling perspective,
          IDE offers code blocks in the form of snippets, so you don’t need to write over and over again the same
          things, let’s see an example: In VSCode, there are built-in code snippets you can use to prevent typing blocks
          of code (conditionals, loops, try-catch statements); they’re pretty common expressions. You can use them by
          typing and pressing the tab key or using light bulb suggestions.
        </p>
        <video autoPlay loop muted playsInline>
          <source src="posts/emmet/try-catch.mp4" type="video/mp4" />
        </video>
        <p>
          There are more productivity tools available, but most are around code suggestions in their different flavors:
          refactoring, code completion, AI suggestions, etc.
        </p>
        <p>
          One of the most underrated features VSCode provides is Emmet expressions, they are like the missing piece in
          terms of developer productivity, and as you will see, it can save you tons of time when writing code.
        </p>
        <p>
          Emmet expressions take Web developers' code writing experience to the next level. Stop for a minute reading
          this article, and write the following markup in VSCode: Five siblings divs, each of them with a child span
          with the value Item 1, Item 2, and so, where the div number corresponds to the corresponding number of the
          div, in the end, you will end up with something like:
        </p>
        <div className="lateral">
          <Image
            className="float"
            src={snippetExample}
            height={581}
            width={476}
            alt="Example of using try catch code snippet"
          />
          <div>
            <p>
              Now you did it. How did you do it? You probably defined the first div, copy-pasted the other items, and
              then replaced the corresponding item numbers. Did you ever wonder if there is a better way to do such a
              mundane task? Entering Emmet Expressions to the rescue!
            </p>
            <p>In the same HTML file you created the previous example, type the following:</p>
            <div className="emmet-expression">{'div*5>span{Item $}'}</div>
            <p>
              Awesome, right? That’s an Emmet expression, already supported by VSCode by default. You don’t need to
              install any extension. Think about them as dynamic snippets defined at runtime instead of having them
              previously defined
            </p>
          </div>
        </div>
        <h2>Syntax</h2>
        <p>
          Writing Emmet expressions will feel similar to how CSS selectors work in the context of the position of the
          elements and their attributes.
        </p>
        <p>Elements are usually HTML tags, but you can even define your tags with Emmet.</p>

        <div className="tip">
          <p>
            If you have the suggestion documentation fly-out enabled, you will see a preview of the result of the Emmet
            expression. To enable it, just click the information icon. The preview will be enabled by default after that
          </p>
          <video autoPlay loop muted playsInline>
            <source src="posts/emmet/emmet-preview-enabled.mp4" type="video/mp4" />
            <source src="posts/emmet/emmet-preview-enabled.webm" type="video/webm" />
          </video>
        </div>
        <h2>Nesting operators</h2>
        <p>
          Nesting operators are used to position abbreviation elements inside generated tree: whether it should be
          placed inside or near the context element.
        </p>
        <a href="https://docs.emmet.io/abbreviations/syntax/" target="_blank">
          Read more at the official docs
        </a>
        <div className="emmet-tool">
          <div className="syntax-item">
            <div className="syntax-header">
              <div className="symbol">{'>'}</div>
              <div className="name">
                <h1>Child</h1>
                <p>Nest elements inside each other</p>
              </div>
            </div>
            <div className="example">
              <video autoPlay loop muted playsInline>
                <source src="posts/emmet/example-child.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="syntax-item">
            <div className="syntax-header">
              <div className="symbol">{'+'}</div>
              <div className="name">
                <h1>Sibling</h1>
                <p>Place elements near each other, on the same level</p>
              </div>
            </div>
            <div className="example">
              <video autoPlay loop muted playsInline>
                <source src="posts/emmet/example-sibling.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="syntax-item">
            <div className="syntax-header">
              <div className="symbol">{'^'}</div>
              <div className="name">
                <h1>Climb-up</h1>
                <p> Climb one level up the tree and change context where following elements should appear</p>
              </div>
            </div>
            <div className="example">
              <video autoPlay loop muted playsInline>
                <source src="posts/emmet/example-climb-up.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="syntax-item">
            <div className="syntax-header">
              <div className="symbol">{'^'}</div>
              <div className="name">
                <h1>Climb-up n levels</h1>
                <p> Climb n levels up the tree and change context where following elements should appear</p>
              </div>
            </div>
            <div className="example">
              <video autoPlay loop muted playsInline>
                <source src="posts/emmet/example-climb-up-two-levels.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="syntax-item">
            <div className="syntax-header">
              <div className="symbol">{'*'}</div>
              <div className="name">
                <h1>Multiplication</h1>
                <p> Define how many times element should be outputted</p>
              </div>
            </div>
            <div className="example">
              <video autoPlay loop muted playsInline>
                <source src="posts/emmet/example-multiplication.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="syntax-item">
            <div className="syntax-header">
              <div className="symbol">{'*'}</div>
              <div className="name">
                <h1>Multiplication (define digits)</h1>
                <p> Define how many digits and times element should be outputted</p>
              </div>
            </div>
            <div className="example">
              <video autoPlay loop muted playsInline>
                <source src="posts/emmet/example-multiplication-digits.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="syntax-item">
            <div className="syntax-header">
              <div className="symbol">{'*'}</div>
              <div className="name">
                <h1>Multiplication (define start number)</h1>
                <p> Define starting number and times element should be outputted</p>
              </div>
            </div>
            <div className="example">
              <video autoPlay loop muted playsInline>
                <source src="posts/emmet/example-multiplication-start.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="syntax-item">
            <div className="syntax-header">
              <div className="symbol">{'*'}</div>
              <div className="name">
                <h1>Multiplication (descending order)</h1>
                <p> Define times element should be outputted in descending order</p>
              </div>
            </div>
            <div className="example">
              <video autoPlay loop muted playsInline>
                <source src="posts/emmet/example-multiplication-desc.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="syntax-item">
            <div className="syntax-header">
              <div className="symbol">{'$'}</div>
              <div className="name">
                <h1>Numbering</h1>
                <p>
                  {' '}
                  With multiplication * operator you can repeat elements, but with $ you can number them. Place $
                  operator inside element’s name, attribute’s name or attribute’s value to output current number of
                  repeated element
                </p>
              </div>
            </div>
            <div className="example">
              <video autoPlay loop muted playsInline>
                <source src="posts/emmet/example-numbering.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="syntax-item">
            <div className="syntax-header">
              <div className="symbol">{'$'}</div>
              <div className="name">
                <h1>Numbering (define text placeholder)</h1>
                <p>
                  {' '}
                  With multiplication * operator you can repeat elements, but with $ you can number them. Place $
                  operator inside element’s name, attribute’s name or attribute’s value to output current number of
                  repeated element
                </p>
              </div>
            </div>
            <div className="example">
              <video autoPlay loop muted playsInline>
                <source src="posts/emmet/example-numbering-placeholder.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="syntax-item">
            <div className="syntax-header">
              <div className="symbol">{'{}'}</div>
              <div className="name">
                <h1>Text</h1>
                <p> Use curly braces to add text to element</p>
              </div>
            </div>
            <div className="example">
              <video autoPlay loop muted playsInline>
                <source src="posts/emmet/example-numbering-placeholder..mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="syntax-item">
            <div className="syntax-header">
              <div className="symbol">{'()'}</div>
              <div className="name">
                <h1>Grouping</h1>
                <p> Grouping subtrees in complex abbreviations</p>
              </div>
            </div>
            <div className="example">
              <video autoPlay loop muted playsInline>
                <source src="posts/emmet/example-grouping.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="syntax-item">
            <div className="syntax-header">
              <div className="symbol">{'()'}</div>
              <div className="name">
                <h1>Grouping</h1>
                <p> Multiple grouping subtrees in complex abbreviations</p>
              </div>
            </div>
            <div className="example">
              <video autoPlay loop muted playsInline>
                <source src="posts/emmet/example-grouping-multiple.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="syntax-item">
            <div className="syntax-header">
              <div className="symbol">{'!'}</div>
              <div className="name">
                <h1>HTML5</h1>
                <p>Alias of html:5</p>
              </div>
            </div>
            <div className="example">
              <video autoPlay loop muted playsInline>
                <source src="posts/emmet/html-abbr.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      title: PAGE_TITLE,
      description:
        'Learn how to use Emmet expressions, a web-developer’s toolkit for boosting HTML & CSS code writing. With Emmet, you can type expressions (abbreviations) similar to CSS selectors and convert them into code fragment with a single keystroke',
      ogImage: CARD_IMAGE,
    },
  };
}
