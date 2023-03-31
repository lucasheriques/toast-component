import React from "react";

import Toast from "../Toast";
import { ToastContext } from "../ToastProvider/ToastProvider";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { currentToasts: toasts, killToast } = React.useContext(ToastContext);
  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map(({ id, message, variant }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast
            variant={variant}
            message={message}
            killToast={() => killToast(id)}
          />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
