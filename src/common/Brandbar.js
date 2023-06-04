import { websites } from "../data/mediadata";

export default function Brandbar() {

  const websiteList = websites.map((website) => {
    return(
    <li key={website.name} className="px-4">
      <a href="/#" >
      <img src={website.src}  alt=" " />
      </a>
    </li>)
  })

  return (
    <>
      <div className="column">
        <span className="brand">adamkeyes</span>
      </div>
      <div className="column is-flex is-justify-content-flex-end">
        <ul className="is-flex is-align-items-center">{websiteList}</ul>
        </div>
    </>
  );
}
