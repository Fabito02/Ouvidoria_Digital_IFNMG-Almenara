import "./Loading.css";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

const Loading = () => {
  return (
    <div className="loading-screen">
      <Icon icon="svg-spinners:gooey-balls-2" className="loading-icon" />
    </div>
  );
};

export default Loading;
