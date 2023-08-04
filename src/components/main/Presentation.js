import Button from "../../common/Button.js";
import { svgPatternCircle } from "../../data/mediadata";
import { svgPatternRing } from "../../data/mediadata";

export default function Presentation() {
  return (
    <>
      <section id="presentation">
        <div className="pattern-ring-1">
          <svgPatternRing.SvgComponent />
        </div>

        <div className="is-flex is-justify-content-flex-end is-justify-content-center-mobile">
          <div className="img-profile">
            <span></span>
            <div className="pattern-circle">
              <svgPatternCircle.SvgComponent />
            </div>
          </div>
        </div>
        <div className="columns is-flex-mobile is-flex-direction-column-mobile">
          <div className="column is-8-fullhd is-8-tablet order-1 is-flex is-align-items-center">
            <div>
              <h1 className="has-text-centered-mobile">
                <p className="line-height">
                  {" "}
                  Nice to meet you! I'm{" "}
                  <span className="underlined-text">Adam Keyes.</span>
                </p>
              </h1>
              <div className="about-me">
                <p className="mt-7 has-text-grey-lighter has-text-centered-mobile">
                  Based in the UK, I’m a front-end developer passionate about
                  building accessible web apps that users love.
                </p>
              </div>
              <div className="mt-7 has-text-centered-mobile">
                <Button type="anchor" content="Contact Me" href="/#" />
              </div>
            </div>
          </div>
          <div className="column order-0 container-profile is-flex is-justify-content-flex-end is-justify-content-center-mobile "></div>
        </div>
      </section>
    </>
  );
}
