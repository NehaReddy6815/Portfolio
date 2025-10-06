import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const socials = [
  { name: "GitHub", icon: <FaGithub />, link: "https://github.com/NehaReddy6815" },
  { name: "LinkedIn", icon: <FaLinkedin />, link: "https://linkedin.com/in/neha-reddy-20ab18213" },
  { name: "Instagram", icon: <FaInstagram />, link: "https://instagram.com/NehaaaaReddy" },
];

function Socials() {
  return (
    <section id="socials" className="socials">
      <h2>Connect with Me</h2>
      <p>Follow me on social media or reach out directly through these platforms.</p>
      <div className="social-icons">
        {socials.map((social, i) => (
          <a
            key={i}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            title={social.name}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </section>
  );
}

export default Socials;
