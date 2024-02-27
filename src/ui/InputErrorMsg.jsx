function InputErrorMsg({ msg }) {
  return (
    <p
      className="text-sm text-red-700 dark:text-red-500 font-semibold"
      role="alert "
    >
      {msg}
    </p>
  );
}

export default InputErrorMsg;
