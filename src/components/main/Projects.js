import { Fragment } from "react";
import Button from "../../common/Button.js";
import { projectImages } from "../../data/mediadata.js";

export default function Projects() {
  const projects = projectImages.map((project) => {
    const tools = project.tools.map((tool, j) => {
      return (
        <span key={tool + j} className="pr-2 is-uppercase">
          {tool}
        </span>
      );
    });

    return (
      <Fragment key={project.id}>
        <article
          data-aos="flip-right"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          className="card custom-card pt-0 my-4"
        >
          <div className="thumbnail">
            <picture>
              <source srcSet={project.srcLarge} media="(min-width:768px)" />
              <img src={project.srcSmall} alt={project.alt} />
            </picture>
          </div>
          <div>
            <div className="my-2">
              <h3>{project.name}</h3>
            </div>
            <div className="grey-lighter">{tools}</div>
          </div>
          <div>
            <div className="action-buttons">
              <ul className="list-buttons">
                <li>
                  <Button
                    type="anchor"
                    content={project.page.content}
                    href={project.page.href}
                    propeties=""
                  />
                </li>
                <li>
                  <Button
                    type="anchor"
                    content="View Code"
                    href="/#"
                    propeties=""
                  />
                </li>
              </ul>
            </div>
          </div>
        </article>
      </Fragment>
    );
  });

  return (
    <section className="sections" id="projects">
      <div className="is-flex is-justify-content-space-between is-align-items-center">
        <h2 className="title-1">Projects</h2>
        <Button type="anchor" content="Contact Me" href="/#" />
      </div>
      <div className="is-flex is-flex-wrap-wrap is-justify-content-space-between my-4 ">
        {projects}
      </div>
    </section>
  );
}
