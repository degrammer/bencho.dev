import React from "react";
import Image from 'next/image'
export default function Header() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isActive, setIsActive] = React.useState(false);


    const onMobileMenuClick = () => {
       setIsOpen(!isOpen);
    };

    const toggleMenu =() => {
        setIsActive(!isActive);
    };

  return (
    <header className={ isOpen ? 'opened-menu' : ''}>
      <div className="hamb-menu mobile-only">
        <a onClick={onMobileMenuClick}>
          <svg>
            <defs>
              <filter id="hamburguer-menu">
                <feGaussianBlur in="SourceGraphic" stdDeviation="2.2" result="blur" />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
                  result="hamburguer-menu"
                />
                <feComposite in="SourceGraphic" in2="hamburguer-menu" operator="atop" />
              </filter>
            </defs>
          </svg>
          <div className="plates">
            <div className={ isActive ? 'plate plate4 active': 'plate plate4'} onClick={toggleMenu}>
              <svg class="burger" version="1.1" height="100" width="100" viewBox="0 0 100 100">
                <path class="line line1" d="M 50,35 H 30" />
                <path class="line line2" d="M 50,35 H 70" />
                <path class="line line3" d="M 50,50 H 30" />
                <path class="line line4" d="M 50,50 H 70" />
                <path class="line line5" d="M 50,65 H 30" />
                <path class="line line6" d="M 50,65 H 70" />
              </svg>
              <svg class="x" version="1.1" height="100" width="100" viewBox="0 0 100 100">
                <path class="line" d="M 34,32 L 66,68" />
                <path class="line" d="M 66,32 L 34,68" />
              </svg>
            </div>
          </div>
        </a>
      </div>
      <nav>
        <ul>
          <li className="logo-container">
            <Image src="benchologo.svg" width={80} height={80} alt="Bencho logo" />
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
            <a title="Lets get in touch, learn more about me" href="/about">
              about
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
