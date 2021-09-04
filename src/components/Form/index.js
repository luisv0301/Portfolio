import React, { useRef, useState } from "react";
import Button from "../shared/Button";
import "./form.scss";

export default function Form() {
  const [uploadingEmail, setUploadingEmail] = useState(false);
  const form = useRef(null);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setUploadingEmail(true);
    const formData = new FormData(form.current);
    fetch("https://getform.io/f/2af8ac6d-3a01-47ff-8cb1-8973e8652073", {
      method: "POST",
      body: formData,
    })
      .then(() => {
        console.log("your form was submitted");
        setUploadingEmail(false);
        form.current.reset();
      })
      .catch((e) => {
        setUploadingEmail(false);
        console.log(e);
      });
  };

  return (
    <form onSubmit={handleOnSubmit} ref={form} className="form">
      <label htmlFor="name" className="form__label">
        Name:
      </label>
      <input
        id="name"
        name="name"
        type="text"
        required
        className="form__input"
      />
      <label htmlFor="email" className="form__label">
        Email:
      </label>
      <input
        id="email"
        name="email"
        type="email"
        required
        className="form__input"
      />
      <label htmlFor="message" className="form__label">
        Message:
      </label>
      <textarea
        id="message"
        name="message"
        required
        className="form__textarea"
      ></textarea>
      {uploadingEmail && (
        <p className="form__message">Your email is being send...</p>
      )}
      <Button type="submit" />
    </form>
  );
}
