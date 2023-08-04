export default function Button({ type, content, href, propeties = "" }) {
  if (type === "anchor") {
    return (
      <>
        <a href={href} type="button" className={"button-primary " + propeties}>
          {content}
        </a>
      </>
    );
  }
  if (type === "submit") {
    return (
      <>
        <button type="submit" className={"button-primary " + propeties}>
          {content}
        </button>
      </>
    );
  } else {
    return (
      <>
        <button type="button" className={"button-primary " + propeties}>
          {content}
        </button>
      </>
    );
  }
}
