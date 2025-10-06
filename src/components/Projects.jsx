const projects = [
  {
    title: "Connectify – Social Media App",
    desc: "A social media platform where users can post, like, comment, and message each other seamlessly.",
    link: "#"
  },
  {
    title: "Portfolio Website",
    desc: "A responsive and interactive personal portfolio built with React and Vite, showcasing projects and skills.",
    link: "https://github.com/NehaReddy6815/Portfolio"
  },
  {
    title: "AI-Powered Sports App",
    desc: "An AI-driven app for analyzing sports performance and providing insights to players and coaches.",
    link: "#"
  },
  {
    title: "Airbnb-Style Booking Platform",
    desc: "A web platform inspired by Airbnb, built with React and Web3 integrations for decentralized bookings.",
    link: "#"
  },
  {
    title: "Mini Games Hub",
    desc: "A collection of five simple, fun games allowing users to play and enjoy casual gaming online.",
    link: "#"
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((proj, i) => (
          <div className="card" key={i} onClick={() => window.open(proj.link, "_blank")}>
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
