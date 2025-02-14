import { createContext, useState, useContext } from "react";
import styles from "./ToastProvider.module.css";
import Toast from "./Toast";


const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

const ToastProvider = ({ children }) => {

  const [toasts, setToasts] = useState([]);

  const showToast = (message, type) => {
    const id = Date.now();
    // console.log(id);
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className={styles.toastContainer}>
        {toasts.map((toast) => (
          <Toast key={toast.id} message={toast.message} type={toast.type} />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export default ToastProvider;

// // Using Library // //
// import React from "react";
// import { ToastContainer, toast, Bounce } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const ToastProvider = () => {
//   return (
//     <ToastContainer
//       position="bottom-center"
//       autoClose={3000}
//       hideProgressBar={false}
//       newestOnTop={false}
//       closeOnClick={false}
//       rtl={false}
//       pauseOnFocusLoss
//       draggable
//       pauseOnHover
//       theme="colored"
//       transition={Bounce}
//     />
//   );
// };

// export const showToast = (message, type = "default") => {
//     switch (type) {
//       case "success":
//         toast.success(message);
//         break;
//       case "error":
//         toast.error(message);
//         break;
//       case "warning":
//         toast.warning(message);
//         break;
//       case "info":
//         toast.info(message);
//         break;
//       default:
//         toast(message);
//     }
//   };

// export default ToastProvider;
