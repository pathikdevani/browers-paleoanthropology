import "./Content.scss";

function Content() {
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
            <div>
              <p>
                <strong>We would love to hear from you.</strong>
              </p>
              <p>
                Please complete our contact form and a Mondia representative
                <br />
                will be in touch with you shortly to provide assistance.
              </p>{" "}
            </div>
            <div>
              <div>
                <h3>General inquiries</h3>
                <p>
                  <strong>Mondia Group</strong>
                  <br />
                  Farqad Street
                  <br />
                  Internet city
                  <br />
                  35V5+M4
                  <br />
                  Dubai
                  <br />
                  United Arab Emirates
                </p>
                <p>
                  <a href="tel:+97145687391">+971 4 568 7391</a>
                  <br />
                  <a href="mailto:info@mondia.com">info@mondia.com</a>
                </p>{" "}
              </div>
            </div>
            <div>
              <div>
                <h3>Media inquiries</h3>
                <p>
                  <strong>Mondia Group</strong>
                  <br />
                  Farqad Street
                  <br />
                  Internet city
                  <br />
                  35V5+M4
                  <br />
                  Dubai
                  <br />
                  United Arab Emirates
                </p>
                <p>
                  <a href="tel:+97145687391">+971 4 568 7391</a>
                  <br />
                  <a href="mailto:info@mondia.com">info@mondia.com</a>
                </p>
              </div>
            </div>
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
