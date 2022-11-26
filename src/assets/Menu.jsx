export const Menu = ({ className, color = '#000000' }) => {
  return (
    <>
      <svg
        className={className}
        width="38"
        height="26"
        viewBox="0 0 38 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.25 0.5H37.75V4.66667H0.25V0.5ZM0.25 10.9167H37.75V15.0833H0.25V10.9167ZM0.25 21.3333H37.75V25.5H19H0.25V21.3333Z"
          fill={color}
        />
      </svg>
    </>
  );
};
