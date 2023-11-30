import { useCallback, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

import { TOAST_TYPES } from "./ToastTypes";

import "./ToastMessage.css";

const ToastMessage = ({ type, message, delay }) => {
  const toastNotification = useCallback(() => {
    switch (type) {
      case TOAST_TYPES.INFO:
        toast.info(message, { toastId: "infoToast", delay: delay ?? 0 });
        break;
      case TOAST_TYPES.SUCCESS:
        toast.success(message, { toastId: "successToast", delay: delay ?? 0 });
        break;
      case TOAST_TYPES.ERROR:
        toast.error(message, { toastId: "errorToast", delay: delay ?? 0 });
        break;
      case TOAST_TYPES.WARN:
        toast.warn(message, { toastId: "warToast", delay: delay ?? 0 });
        break;
      default:
        toast(message, { toastId: "defaultToast", delay: delay ?? 0 });
        break;
    }
  }, [delay, message, type]);

  useEffect(() => {
    toastNotification();
  }, [toastNotification]);

  return (
    <ToastContainer
      autoClose={3500}
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick
      draggable
      pauseOnHover
      theme="light"
    />
  );
};

export default ToastMessage;
