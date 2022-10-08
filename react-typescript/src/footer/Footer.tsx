import React from "react";
import "./Footer.scss";

import * as data from "../data";

type CountryType = {
  src: string;
  srcset: string;
  title: string;
  address: string[];
};

type CountryProps = {
  item: CountryType;
};

function Country(props: CountryProps) {
  return (
    <div className="country">
      <div className="country-logo">
        <img
          width="225"
          height="225"
          src={props.item.src}
          alt=""
          loading="lazy"
          srcSet={props.item.srcset}
          sizes="(max-width: 225px) 100vw, 225px"
        />
      </div>
      <div className="country-title">
        <h3>
          <strong>{props.item.title}</strong>
        </h3>
      </div>
      <div className="country-address">
        <p>
          {props.item.address.map((e) => {
            return (
              <React.Fragment key={e}>
                <br />
                {e}
              </React.Fragment>
            );
          })}
        </p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <section className="footer">
      <div className="footer-container">
        {data.countries.map((country) => {
          return <Country key={country.title} item={country} />;
        })}
      </div>
    </section>
  );
}

export default Footer;
