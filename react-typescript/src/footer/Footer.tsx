import './Footer.scss';


function Country() {
  return (
    <div className='country'>
      <div className='country-logo'>
        <img width="225" height="225" src="https://mondia.com/images/2022/02/algeria.png"  alt="" loading="lazy" srcSet="https://mondia.com/images/2022/02/algeria.png 225w, https://mondia.com/images/2022/02/algeria-150x150.png 150w" sizes="(max-width: 225px) 100vw, 225px" />
      </div>
      <div className='country-title'>
        <h3><strong>Algiers</strong></h3>
      </div>
      <div className='country-address'>
        <p>2, Rue Kaddour Rahim,<br/>Hussein Dey, 16040,<br/>Algiers, Algeria</p>
      </div>
    </div>
  )
}


function Footer() {
  return (
    <section className="footer">
        <div className='footer-container'>
          <Country />
          <Country />
          <Country />
          <Country />
          <Country />
          <Country />
          <Country />
          <Country />
          <Country />
          <Country />
          <Country />
          <Country />
          <Country />
          <Country />
        </div>
    </section>
  );
}

export default Footer;
