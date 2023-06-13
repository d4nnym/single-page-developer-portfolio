
export default function Button({ type, content, href }) {
  if (type === "anchor") {
    return (
      <>
        <a href={href} type="button" className="button-primary">
          {content}
        </a>
      </>
    );
  } else {
    return (
      <>
        <button type="button" className="button-primary">
          {content}
        </button>
      </>
    );
  }
}
