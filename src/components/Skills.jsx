const skills = [
  { name: "React", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "CSS", level: 80 },
  { name: "HTML", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Express.js", level: 85 },
  { name: "MongoDB", level: 90 },
  { name: "SQL", level: 90 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Bootstrap", level: 95 }
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Technical Skills</h2>
      <p>Here are some of the technologies and tools I am proficient in:</p>
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div className="skill-card" key={i}>
            <h4>{skill.name}</h4>
            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
