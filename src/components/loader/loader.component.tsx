import "./loader.component.scss";
import { FC } from "react";
import { Circles } from "react-loader-spinner";

type LoaderProps = {
  message?: string;
};
const LoaderComponent: FC<LoaderProps> = ({ message }) => {
  return (
    <div className="loader">
      <Circles wrapperClass="loader--icon" />

      {message && <p className="loader--text">{message}</p>}
    </div>
  );
};

export default LoaderComponent;
