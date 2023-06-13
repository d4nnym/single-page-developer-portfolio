import { skills } from "../../data/data";

export default function Skills() {
  const skillsList = skills.map((skill) => {
    return (
      <li key={skill.name} className="column  is-full-mobile is-half-tablet is-one-third-fullhd  has-text-centered-mobile my-5">
        <article>
          <h2>{skill.name}</h2>
          <p>{skill.experience}</p>
        </article>
      </li>
    );
  });

  return (
    <>
      <section className="sections" id="skills">
        <ul className="columns is-flex is-flex-wrap-wrap py-7">{skillsList}</ul>
      </section>
    </>
  );
}
