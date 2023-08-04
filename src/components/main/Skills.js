import { skills } from "../../data/data";
import { svgPatternRing } from "../../data/mediadata";

export default function Skills() {
  const skillsList = skills.map((skill) => {
    return (
      <li
        data-aos="zoom-in"
        data-aos-easing="ease-in-sine"
        data-aos-duration="350"
        key={skill.name}
        className="column is-full-mobile is-half-tablet is-one-third-fullhd  has-text-centered-mobile my-5"
      >
        <article>
          <h2>{skill.name}</h2>
          <p>{skill.experience}</p>
        </article>
      </li>
    );
  });

  return (
    <>
      <section className="sections position-relative" id="skills">
        <ul className="columns is-flex is-flex-wrap-wrap py-7">{skillsList}</ul>
        <div className="pattern-ring-2">
          <svgPatternRing.SvgComponent />
        </div>
      </section>
    </>
  );
}
