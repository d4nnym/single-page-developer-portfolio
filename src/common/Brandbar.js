import { websites } from "../data/mediadata";

export default function Brandbar() {
  const websiteList = websites.map((website) => {
    return (
      <li key={website.name} className="px-4">
        <a href="/#">
          <img src={website.src} alt=" " className="websites"/>
        </a>
      </li>
    );
  });

  return (
    <>
      <div className="column is-flex-mobile is-justify-content-center-mobile">
        <span className="brand">adamkeyes</span>
      </div>
      <div className="column is-flex is-justify-content-flex-end is-justify-content-center-mobile">
        <ul className="is-flex is-align-items-center">{websiteList}</ul>
      </div>
    </>
  );
}
