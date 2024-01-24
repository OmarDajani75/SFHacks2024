/** @jsxImportSource astro */
<Fragment>
  import {RxHamburgerMenu}
  {`   from "react-icons/rx"`};
  <html>
    <head> </head>
    <a
      style="display:block;max-width:100px;min-width:60px;position:absolute;left:180px;top:0;width:10%;z-index:10000"
      href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=red"
      target="_blank"
    >
      <img
        class="mlh-trust-badge"
        src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg"
        alt="Major League Hacking 2024 Hackathon Season"
        style="width:100%"
      />
    </a>
    <nav>
      <a class="nav--left" href="/">
        <img class="nav--logo" src="/sfhacks/headlogo.svg" alt="Nav-Logo" />
        {/** <h1 class="nav--title">SF Hacks 2024</h1> */}
      </a>

      <div class="nav--right">
        <ul class="nav--list">
          {/** <li>
      <a href="/about--us/" class="nav--button">About Us</a>
    </li> */}
          <li>
            <a href="/faq/" class="nav--button">
              FAQ
            </a>
          </li>
          {/** <li>
      <a href="/schedule/" class="nav--button">Schedule</a>
    </li> */}
          <li>
            <a href="/sponsors/" class="nav--button">
              Sponsors
            </a>
          </li>
          <li>
            <a
              href="https://bit.ly/sfhacks2024-apply"
              target="_blank"
              class="register--button"
            >
              Register
            </a>
          </li>
        </ul>
      </div>

      {/** mobile version */}

      <div class="dropdown">
        <button class="dropbtn register--button nav--button">
          Dropdown
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a href="/faq/">FAQ</a>
          {/** <a href="/schedule/">Schedule</a> */}
          <a href="/sponsors/">Sponsors</a>
        </div>
      </div>
    </nav>

    <style>{`
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    nav {
      overflow: hidden;
      margin-top: 0%;
      height: 90px;
      width: 100vw;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: auto;
      background-color: #132a3e;
      color: white;
    }

    .nav--left {
      margin-left: 5%;
      display: flex;
      flex-direction: row;
      margin-right: auto;
      justify-content: left;
      align-items: center;
      gap: 10%;
      overflow-wrap: normal;
      color: black;
    }

    .nav--logo {
      object-fit: contain;
      height: 5rem;
    }

    .nav--title {
      font-size: 40px;
      min-width: max-content;
      color: white;
    }

    .nav--right {
      width: 25%;
      margin-right: 5%;
    }

    @media (max-width: 1100px) {
      .nav--right {
        display: none;
      }

      .img {
        display: none;
      }
    }

    .nav--list {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      font-size: 1.25rem;
    }

    .nav--button {
      padding-bottom: 0.75rem;
      margin: 1em;
    }

    .nav--button:hover {
      border-color: #132a3e;
      border-bottom: 0.25em solid;
      cursor: pointer;
      transition: 0.2s ease-in;
    }

    .register--button {
      background-color: #2b455c;
      color: #ffd6ec;
      padding-left: 25px;
      padding-right: 25px;
      padding-top: 15px;
      padding-bottom: 15px;
      border-radius: 1.5rem;
      margin: 1em 1em;
    }

    /* mobile version */

    @media (max-width: 540px) {
      .nav--title {
        font-size: 1.5rem;
      }

      .img {
        display: none;
      }
    }

    @media (min-width: 1100px) {
      .dropdown {
        display: none;
      }
    }

    /* The dropdown container */
    .dropdown {
      float: left;
      overflow: hidden;
      margin-right: 5%;
      direction: rtl;
    }

    /* Dropdown button */
    .dropdown .dropbtn {
      font-size: 16px;
      border: none;
      outline: none;
      color: white;
      padding: 14px 16px;
      background-color: inherit;
      font-family: inherit; /* Important for vertical align on mobile phones */
      margin: 0; /* Important for vertical align on mobile phones */
      background-color: #2b455c;
    }

    .dropbtn:hover {
      background-color: #466987;
    }

    /* Add a red background color to navbar links on hover */
    .a:hover,
    .dropbtn {
      background-color: red;
    }

    /* Dropdown content (hidden by default) */
    .dropdown-content {
      margin-top: 5px;
      border-radius: 5px;
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 1;
    }

    /* Links inside the dropdown */
    .dropdown-content a {
      float: none;
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      text-align: left;
    }

    /* Add a grey background color to dropdown links on hover */
    .dropdown-content a:hover {
      background-color: #ddd;
    }

    /* Show the dropdown menu on hover */
    .dropdown:hover .dropdown-content {
      display: block;
    }
  `}</style>
  </html>
</Fragment>;
