export default function Input({
  type,
  name,
  change,
  error,
  isSuccess,
  placeHolder,
  id,
}) {
  return (
    <>
      <div>
        <input
          type={type}
          name={name}
          id={id}
          onChange={change}
          onInvalid={(e) => e.preventDefault()}
          className={
            "input is-medium my-3 px-4 custom-input " +
            (!error ? isSuccess : "input-error")
          }
          placeholder={placeHolder}
        />
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
