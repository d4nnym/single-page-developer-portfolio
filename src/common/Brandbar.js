import { websites } from "../data/mediadata";

export default function Brandbar() {
  
  const websiteList = websites.map((website) => {
    return (
      <li key={website.name} className="website">
        <a href="/#">
          <website.SvgComponent className="svg-component"/>
        </a>
      </li>
    );
  })

  return (
    <>
      <div className="column is-flex-mobile is-justify-content-center-mobile">
        <span className="brand line-height">adamkeyes</span>
      </div>
      <div className="column is-flex is-justify-content-flex-end is-justify-content-center-mobile">
        <ul className="is-flex is-align-items-center">{websiteList}</ul>
      </div>
    </>
  );
}
