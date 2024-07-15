import Swal from "sweetalert2";

export const SwalHooks = () => {
  const SwalSucces = ({
    title = "Success !",
    text = "You clicked the button!",
  }) => {
    return Swal.fire({
      title: title,
      text: text,
      icon: "success",
    });
  };

  const SwalFail = ({
    title = "Error !",
    text = "You clicked the button!",
  }) => {
    return Swal.fire({
      title: title,
      text: text,
      icon: "error",
    });
  };

  return { SwalSucces, SwalFail };
};
