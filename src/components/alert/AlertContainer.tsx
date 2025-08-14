import { useSelector } from "react-redux";
import { createPortal } from "react-dom";

import { Alert as AlertType } from "@/store/alert/alertSlice";
import Alert from "@/components/alert/Alert";
import { RootState } from "@/store";

function AlertContainer() {
  const alerts = useSelector((state: RootState) => state.alerts.items);

  if (!alerts || !Array.isArray(alerts) || alerts.length === 0) {
    return createPortal(
      <div className="alert-container"></div>,
      document.body
    );
  }

  return createPortal(
    <div className="alert-container">
      {alerts.map((alert: AlertType) => (
        <Alert
          key={alert.id}
          id={alert.id}
          text={alert.text}
          type={alert.type as 'success' | 'error'}  
          duration={alert.duration || 2300}
        />
      ))} 
    </div>,
    document.body
  );
}

export default AlertContainer;

