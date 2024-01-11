function HeaderSection() {
  return (
    <div className="projects-page">
      <div className="wrapper p-4 container-4xl">
        <h2 className="h2 text-secondary">All Projects</h2>
        <p className="">Gallery of all projects</p>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="projects-page">
      <HeaderSection />
    </section>
  );
}
