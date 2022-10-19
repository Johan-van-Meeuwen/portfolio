import React from "react"

const FORM_ENDPOINT = "https://public.herotofu.com/v1/aef4adf0-4fb1-11ed-8970-6943e4ac8982"

export default function ContactForm() {
  const [status, setStatus] = React.useState();
  const handleSubmit = (e) => {
    e.preventDefault();

    // Anything you need to inject dynamically
    const injectedData = {
      DYNAMIC_DATA_EXAMPLE: 123,
    };
    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    Object.assign(data, injectedData);

    fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 422) {
          Object.keys(injectedData).forEach((key) => {
            const el = document.createElement("input");
            el.type = "hidden";
            el.name = key;
            el.value = injectedData[key];

            e.target.appendChild(el);
          });

          e.target.submit();
          throw new Error("Please finish the captcha challenge");
        }

        if (response.status !== 200) {
          throw new Error(response.statusText);
        }

        return response.json();
      })
      .then(() => setStatus("I'll be in touch soon."))
      .catch((err) => setStatus(err.toString()));
  };

  if (status) {
    return (
      <main className="success-body">
        <h3 className="success-message-title">Thank you!</h3>
        <p className="success-message-body">{status}</p>
      </main>
    );
  }

  return (
    <main>
      <h1 id="contact">I'd love to hear from you!</h1>

        <form
          action={FORM_ENDPOINT}
          onSubmit={handleSubmit}
          method="POST"
          target="_blank"
        >
          <div className="form-name">
            <label htmlFor="name">Your name</label>
            <input type="text" placeholder="Fellow Frontend Enthusiast" name="name" required />
          </div>
          <div className="form-email">
            <label htmlFor="email">Your email</label>
            <input type="email" placeholder="Email" name="email" required />
          </div>
          <div className="form-message">
            <label htmlFor="message">Your message</label>
            <textarea rows="12" placeholder="What would you like to say?" name="message" required />
          </div>
          <div>
            <button type="submit" className="project-button form-button">Send</button>
          </div>
        </form>

    </main>
  );
};
