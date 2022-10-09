import "../../../common/styles/header.scss";

function Header() {
  return (
    <section className="header">
      <div className="container">
        <div className="logo">
          <a href="https://mondia.com">
            <img
              width="1418"
              height="550"
              src="https://mondia.com/images/2022/02/Mondia_Logo_Reversed.png"
              alt=""
              loading="lazy"
              srcSet="https://mondia.com/images/2022/02/Mondia_Logo_Reversed.png 1418w, https://mondia.com/images/2022/02/Mondia_Logo_Reversed-300x116.png 300w, https://mondia.com/images/2022/02/Mondia_Logo_Reversed-1024x397.png 1024w, https://mondia.com/images/2022/02/Mondia_Logo_Reversed-768x298.png 768w"
              sizes="(max-width: 1418px) 100vw, 1418px"
            />
          </a>
        </div>
        <div className="menu">
          <ul className="menu-list">
            <li>
              <a href="https://mondia.com/mondia-home/about-mondia/">
                <span>
                  <span>About</span>
                </span>
              </a>
            </li>
            <li>
              <a href="https://mondia.com/mondia-home/about-mondia/">
                <span>
                  <span>Mondia Digital</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="call-us">
          <ul className="menu-list">
            <li>
              <a href="https://mondia.com/mondia-home/about-mondia/">
                <span>
                  <span>Call us</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="email-us">
          <ul className="menu-list">
            <li>
              <a href="https://mondia.com/mondia-home/about-mondia/">
                <span>
                  <span>info@mondia.com</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Header;
