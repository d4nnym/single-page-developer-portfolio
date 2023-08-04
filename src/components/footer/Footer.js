import Brandbar from "../../common/Brandbar";
import Button from "../../common/Button.js";
import Input from "../../common/Input";
import TextTarea from "../../common/TextTarea";
import { useState } from "react";
import { svgPatternRing } from "../../data/mediadata";

export default function Footer() {
  const [isSuccess, setIsSuccess] = useState(" ");
  const [formErrors, setFormErrors] = useState({
    nameError: false,
    emailError: false,
    messageError: false,
  });

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSuccess("input-success");
    setFormErrors({
      nameError: formData.fullname === "",
      emailError:
        !/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(
          formData.email
        ),
      messageError: formData.message === "",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <footer className="position-relative">
        <div className="body">
          <section className="columns py-7 contact">
            <div className="column is-6">
              <h2>Contact</h2>
              <p className="my-6">
                I would love to hear about your project and how I could help.
                Please fill in the form, and I’ll get back to you as soon as
                possible.
              </p>
            </div>
            <div className="column is-6 form-control">
              <form onSubmit={handleSubmit}>
                <Input
                  type="text"
                  name="fullname"
                  id="name"
                  change={handleChange}
                  error={formErrors.nameError}
                  isSuccess={isSuccess}
                  placeHolder="name"
                />
                <Input
                  type="text"
                  name="email"
                  id="email"
                  change={handleChange}
                  error={formErrors.emailError}
                  isSuccess={isSuccess}
                  placeHolder="email"
                />
                <TextTarea
                  name="message"
                  id="message"
                  change={handleChange}
                  error={formErrors.messageError}
                  isSuccess={isSuccess}
                  placeHolder="message"
                />
                <Button
                  type="submit"
                  content="SEND MESSAGE"
                  href=""
                  propeties=""
                />
              </form>
            </div>
          </section>
          <section className="columns section-border py-6">
            <Brandbar />
          </section>
        </div>
        <div className="pattern-ring-3">
          <svgPatternRing.SvgComponent />
        </div>
      </footer>
    </>
  );
}
