import React, { useEffect } from "react";

const Alert = ({ type, message, removeAlert }) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      removeAlert();
    }, 3000);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  return <p className={`alert alert-${type}`}>{message}</p>;
};

export default Alert;
