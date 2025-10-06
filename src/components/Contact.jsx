import emailjs from "emailjs-com";

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then(() => alert("Message sent!"))
      .catch(() => alert("Failed to send message."));
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Name" required/>
        <input type="email" name="email" placeholder="Your Email" required/>
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit" className="btn">Send</button>
      </form>
    </section>
  );
}

export default Contact;
