import { useState } from "react";

import type { AlertType } from "../utils/types";

const useAlert = () => {
  const [alert, setAlert] = useState<AlertType>(null);

  // showAlert function to display alerts
  const showAlert = (alert: AlertType) => {
    if (alert === null) {
      return;
    }
    setAlert(alert);
    // Automatically hide the alert after 3 seconds
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  return { alert, showAlert };
};

export { useAlert };
