function Projects() {
  const projectList = [
    { title: "Portfolio Website", desc: "Built using React + Vite" },
    { title: "AI Sports App", desc: "AI-powered performance analysis" },
    { title: "Crypto Dashboard", desc: "Blockchain + Web3-based tracker" },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projectList.map((proj, index) => (
          <div className="card" key={index}>
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
