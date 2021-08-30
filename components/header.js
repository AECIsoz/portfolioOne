class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
      .header-container {
        display: flex;
        justify-content: space-between;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
    }
    .nav-container {
        display: inline-flex;
        height: 120px;
        justify-content: center;
    }
    .logo {
        width: 15%;
    }
    .left, .right {
        display: inline-flex;
        justify-content: space-around;
        align-items: center;
        background-color: #555E56;
        width: 42.5%;
    }
    .menu-items {
        display: inline-flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        padding: 0;
    }
    .nav-container li {
        display: flex;
        padding: 10px;
        border-radius: 5px;
        transition: background-color 1s ease-in
    }
    .nav-container li:hover {
        background-color: #CCE3D0;
    }
    .nav-container a, .small-header-menu a {
        text-transform: uppercase;
        text-decoration-line: none;
        font-family: 'Lato', sans-serif;
        color: white;
        transition: color;
    }
    .nav-container a:hover, .small-header-menu a:hover {
        color: black;
    }

    .header-small {
        display: none;
    }
    /* header for medium and small screens */
    
    .small-header-logo {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
    }
    .small-header-logo img {
        height: 80px;
    }
    .small-header-menu {
        display: flex;
        background-color: #555E56;
    }
    .small-header-menu ul {
        display: inline-flex;
        justify-content: space-evenly;
        width: 100%;
    }
    .small-header-menu li {
        display: flex;
    }
    
    @media only screen and (max-width: 900px) {
        .header-container {
            display: none;
        }
        .header-small {
            display: block;
        }
    }
    @media only screen and (max-width: 500px) {
        a {
            font-size: 0.8rem;
        }
    }
      </style>
      <header>
        <nav class="header-container" id="header">
            <div class="nav-container left">
                <ul class="menu-items">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#">Projects</a></li>
                </ul>
            </div>
            <div class="nav-container logo" id="logotype">
                <img src="./resources/400PngdpiLogo.png" alt="logo with black whispy symbol above the words isoz creative web">
            </div>
            <div class="nav-container right">
                <ul class="menu-items">
                    <li><a href="#">Services</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </div>
        </nav>

        <!-- header medium and small screens -->
        <nav class="header-small">
            <div class="small-header-logo">
                <img src="./resources/400PngdpiLogo.png" alt="logo with black whispy symbol above the words isoz creative web">
            </div>
            <div class="small-header-menu">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
      </header>
    `;
  }
}

customElements.define('header-component', Header);

function makeGray() {
    document.getElementById('logotype').style.backgroundColor = '#cce3d0';
}

document.addEventListener('scroll', makeGray);