import React from "react";
import Form from "../Form";
import SocialMedia from "../SocialMedia";

import "./contact.scss";

export default function Contact() {
  return (
    <>
      <SocialMedia />
      <p className="contact__separation">Or</p>
      <Form />
    </>
  );
}
