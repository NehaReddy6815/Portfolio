const certifications = [
  {
    title: "Full Stack Web Development",
    issuer: "Apna College",
    year: "2024",
  },
  {
    title: "Creat-a-thon 6.0 RunnerUp",
    issuer: "IEEE|Dayananda Sagar College of Engineering",
    year: "2024",
  },
  {
    title: "Third position at Ideathon IEEE PELS",
    issuer: "IEEE|PELS|Dayananda Sagar College of Engineering",
    year: "2024",
  },
    {
    title: "TCS ion Career Edge",
    issuer: "TCS",
    year: "2024",
  }
];

function Certifications() {
  return (
    <section id="certifications" className="certifications">
      <h2>Certifications</h2>
      <div className="cert-grid">
        {certifications.map((cert, i) => (
          <div className="cert-card" key={i} onClick={() => cert.link !== "#" && window.open(cert.link, "_blank")}>
            <h3>{cert.title}</h3>
            <p>{cert.issuer} - {cert.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
