import React from "react";

import "../../../common/styles/content.scss";
import data from "../../../common/data.json";

type InquirieType = {
  title: string;
  office_name: string;
  address: string[];
  mobile: string;
  emails: string[];
};

type InquirieProps = {
  item: InquirieType;
};

function Inquirie(props: InquirieProps) {
  return (
    <div>
      <div>
        <div>
          <h3>{props.item.title}</h3>
          <p>
            <strong>{props.item.office_name}</strong>
            {props.item.address.map((e) => {
              return (
                <React.Fragment key={e}>
                  <br />
                  {e}
                </React.Fragment>
              );
            })}
          </p>
          <p>
            <a href={`tel:${props.item.mobile.split("").join()}`}>
              {props.item.mobile}
            </a>

            {props.item.emails.map((email) => {
              return (
                <React.Fragment key={email}>
                  <br />
                  <a href={`mailto:${email}`}>{email}</a>
                </React.Fragment>
              );
            })}
          </p>
        </div>
      </div>
    </div>
  );
}

function Content() {
  console.log(data);
  return (
    <section className="content">
      <div className="content_container">
        <h1>
          <span>
            Contact<span className="green_dot">.</span>
          </span>
        </h1>
        <div className="inquiries_form_container">
          <div className="inquiries_container">
            {data.inquiries.map((item) => {
              return <Inquirie key={item.title} item={item} />;
            })}
          </div>

          <div className="form_container">
            <form>
              <div>
                <label hidden>Full Name</label>
                <input placeholder="Full Name" name="name" />
              </div>

              <div>
                <label hidden>Email</label>
                <input placeholder="Email" name="email" />
              </div>

              <div>
                <label hidden>Country</label>
                <input placeholder="Country" name="country" />
              </div>

              <div>
                <label hidden>Company</label>
                <input placeholder="Company" name="company" />
              </div>

              <div>
                <label hidden>Message</label>
                <textarea rows={4} placeholder="Message" name="message" />
              </div>

              <div>
                This site is protected by reCAPTCHA and the Google
                <a href="https://policies.google.com/privacy">
                  Privacy Policy
                </a>{" "}
                and
                <a href="https://policies.google.com/terms">
                  Terms of Service
                </a>{" "}
                apply.{" "}
              </div>

              <div>
                <button type="submit">
                  <span>
                    <span></span>
                    <span>Send Message</span>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
