function Button({ children, btnType, disabled = false, onClick }) {
  const buttonStyles =
    "rounded-3xl px-6 py-3 text-sm active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 disabled:active:scale-100";

  if (btnType === "primary") {
    return (
      <button
        disabled={disabled}
        className={`btn-primary ${buttonStyles}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  } else if (btnType === "secondary") {
    return (
      <button
        disabled={disabled}
        className={`btn-secondary ${buttonStyles}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}

export default Button;
