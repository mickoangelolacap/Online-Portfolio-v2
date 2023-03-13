import { useState } from "react";
import { Modal, Button, Form, Image } from "react-bootstrap";
import SocmedImages from "../assets/images/Socmed";

import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import AnimatedCursor from "react-animated-cursor";
import "react-toastify/dist/ReactToastify.css";

const ContactModal = (props) => {
  const [validated, setValidated] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();

      // emailjs
      emailjs
        .sendForm(
          "gmail",
          "template_19cjpx3",
          event.target,
          "user_zbu7H13gy9FIzOpILX6yR"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      setName("");
      setEmail("");
      setMessage("");

      toast.success("Message sent successfully! 🚀", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setValidated(true);
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      animation={false}
      dialogClassName="contactModal"
      centered
    >
      <Modal.Header className="modalHeader" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h1 className="modalTitle">
            Yo <strong className="text-primary">!</strong>
          </h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalBody">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="validationCustom01">
            <Form.Label className="formLabel">Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              name="user_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="validationCustom02">
            <Form.Label className="formLabel">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="validationCustom03">
            <Form.Label className="formLabel">How can I help?</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </Form.Group>
          <Button type="submit">Send Message</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer className="modalFooter">
        <a
          href="https://www.facebook.com/mickoangelolacap/"
          target="_blank"
          rel="noreferrer"
          className="socmed"
        >
          <Image src={SocmedImages.FacebookDark} className="socmedImg" fluid />
        </a>
        <a
          href="https://www.instagram.com/mickoangelolacap/"
          target="_blank"
          rel="noreferrer"
          className="socmed"
        >
          <Image src={SocmedImages.InstagramDark} className="socmedImg" fluid />
        </a>
        <a
          href="https://t.me/mickoangelolacap"
          target="_blank"
          rel="noreferrer"
          className="socmed"
        >
          <Image src={SocmedImages.TelegramDark} className="socmedImg" fluid />
        </a>
        <a
          href="https://github.com/mickoangelolacap"
          target="_blank"
          rel="noreferrer"
          className="socmed"
        >
          <Image src={SocmedImages.GithubDark} className="socmedImg" fluid />
        </a>
        <a
          href="https://www.linkedin.com/in/mickoangelolacap/"
          target="_blank"
          rel="noreferrer"
          className="socmed"
        >
          <Image src={SocmedImages.LinkedinDark} className="socmedImg" fluid />
        </a>
        <a
          href="https://www.behance.net/mickoalacap"
          target="_blank"
          rel="noreferrer"
          className="socmed"
        >
          <Image src={SocmedImages.BehanceDark} className="socmedImg" fluid />
        </a>
      </Modal.Footer>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <AnimatedCursor
        innerSize={8}
        outerSize={50}
        color="250, 163, 7"
        outerAlpha={0.1}
        innerScale={0.7}
        outerScale={2}
        trailingSpeed={8}
      />
    </Modal>
  );
};

export default ContactModal;
