function BtnExpAndMin({ onClick, isActive }) {
  return (
    <i
      className={`${
        isActive
          ? "fa-solid fa-down-left-and-up-right-to-center"
          : `fa-solid fa-up-right-and-down-left-from-center`
      }`}
      aria-label="button to spread"
      title="Expand area"
      onClick={onClick}
    ></i>
  );
}

export default BtnExpAndMin;
