import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Button = ({
  children,
  onClick = () => {},
  type = "submit",
  className = "",
}) => {
  return (
    <button
      type={type}
      className={classnames(
        "px-6 py-2 rounded-lg   transition duration-300 ease-in-out  active:scale-95",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  className: PropTypes.string,
};

export default Button;
