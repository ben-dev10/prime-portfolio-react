function Header() {
  return (
    <div className="">
      <div className="wrapper container-4xl p-4 px-6">
        <h1 className="h1 text-secondary">More About Me</h1>
        <p>
          I'm guessing you've asking yourself a couple of questions right now,
          "who is this guy anyway?". Well I'm going to answer them right now!
        </p>

        <div className="hero-img"></div>
      </div>
    </div>
  );
}

function Persona() {
  const year = new Date();
  const age: number = 2002;

  return (
    <div className="">
      <div className="wrapper container-4xl p-4 px-6">
        <h1 className="h3 text-secondary">Persona</h1>
        <p>
          My name is <span>Bernard Quarshie</span>, a Ghanaian by birth and I'm{" "}
          <span>{year.getFullYear() - age}</span> years old. As at the time of
          development, I'm currently offering{" "}
          <b className="text-accent">Mechanical Engineering</b> at KNUST and
          will be completing, hopefully in September 2024.
        </p>
        <div className="hero-img"></div>

        <h3 className="h4 mt-3 text-secondary">Skills & Interests</h3>
        <p>
          As you may have noticed by now, I'm really passionate about design and
          web development: or crafting UIs in general - an interest that was
          ignited somewhat by accident during the pandemic in 2020.
        </p>

        <p className="mt-2">
          Most of what I know is self taught, thanks to <span>YouTube</span> and
          the amazing Open Source communities on GitHub.{" "}
        </p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <main>
      <Header />
      <Persona />
    </main>
  );
}
