import Swal from "sweetalert2";

// eslint-disable-next-line no-unused-vars
export const HocAlert = (MainComponent) => {
  const NewComponent = (props) => {
    const Alert = (title, message, icon) => {
      return Swal.fire({
        title,
        text: message,
        icon,
        showCancelButton: true,
        confirmButtonColor: "green",
        cancelButtonColor: "#d33",
        confirmButtonText: "تایید ",
        cancelButtonText: "لغو",
      });
    };

    const notif = (message,icon) => {
      return Swal.fire({
        icon,
        text: message,
        showCancelButton: false,
        confirmButtonColor: "green",
        confirmButtonText: "تایید ",
      });
    };

    return <MainComponent {...props} Alert={Alert} notif={notif} />;
  };
  return NewComponent;
};

export default HocAlert;
