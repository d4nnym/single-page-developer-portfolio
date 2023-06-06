export default function Presentation() {
  return (
    <>
      <section
        className="columns is-flex is-align-items-center profile-width "
        id="presentation"
      >
        <div className="column is-7">
          <div>
            <h1 className="heading-xl">
              <p className="line-height">
                {" "}
                Nice to meet you! I'm{" "}
                <span className="underlined-text">Adam Keyes.</span>
              </p>
            </h1>
            <p className="mt-7 container-60 has-text-grey-lighter">
              Based in the UK, I’m a front-end developer passionate about
              building accessible web apps that users love.
            </p>
          </div>
          <div className="mt-7">
            <button>Hola</button>
          </div>
        </div>
        <div className="column is-flex is-justify-content-flex-end is-justify-content-center-mobile">
          <span className="img-profile"></span>
        </div>
      </section>
    </>
  );
}
