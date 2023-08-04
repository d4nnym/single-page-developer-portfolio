export default function TextTarea({
  name,
  change,
  error,
  isSuccess,
  placeHolder,id
}) {
  return (
    <>
      <div>
        <textarea
          name={name}
          placeholder={placeHolder}
          id={id}
          cols="30"
          rows="5"
          onChange={change}
          className={
            "textarea is-medium my-3 px-4 custom-input " +
            (!error ? isSuccess : "input-error")
          }
        ></textarea>
        {error ? (
          <>
            <p className="is-size-7 has-text-danger has-text-right">
              Sorry, invalid format here
            </p>
          </>
        ) : null}
      </div>
    </>
  );
}
