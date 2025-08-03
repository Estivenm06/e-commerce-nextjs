"use client";
import { Toast } from "@ui5/webcomponents-react";
import { useStoreContext } from "../../context/context";

const Alert = () => {
  const { alert } = useStoreContext();
  
  if (!alert) {
    return null;
  }
  if (alert.type === "warning") {
    return <WarningAlert message={alert.message} />;
  }
  if (alert.type === "success") {
    return <SuccessAlert message={alert.message} />;
  }
  if (alert.type === "error") {
    return <ErrorAlert message={alert.message} />;
  }
  return null;
};

export { Alert };

const ErrorAlert = ({ message }: { message: string }) => {
  return (
    <Toast className="py-5 px-5 bg-red-500 font-bold" open duration={5000}>
      {message}
    </Toast>
  );
};

const SuccessAlert = ({ message }: { message: string }) => {
  return (
    <Toast className="py-5 px-5 bg-green-500 font-bold" open duration={5000}>
      {message}
    </Toast>
  );
};

const WarningAlert = ({ message }: { message: string }) => {
  return (
    <Toast className="py-5 px-5 bg-yellow-500 font-bold" open duration={5000}>
      {message}
    </Toast>
  );
};
