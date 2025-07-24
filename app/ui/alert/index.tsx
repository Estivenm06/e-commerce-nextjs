type AlertProps = {
  alert: {
    type: "error" | "success";
    message: "string";
  };
};

const Alert = ({ alert }: AlertProps) => {
  if (!alert) {
    return null;
  }
  return (
    <>
      {alert.type === "error" ? (
        <Error message={alert.message} />
      ) : (
        <Success message={alert.message} />
      )}
    </>
  );
};

export { Alert };

const Error = ({ message }: { message: "string" }) => {
  return (
    <>
      {/* <AlertUI icon={<ErrorIcon fontSize="inherit" />} severity="error" variant="filled" sx={{transition: '0.4s'}}>
            <AlertTitle>Error</AlertTitle>
            {error.message}
          </AlertUI> */}
    </>
  );
};

const Success = ({ message }: { message: "string" }) => {
  return (
    <>
      {/* <AlertUI icon={<ErrorIcon fontSize="inherit" />} severity="error" variant="filled" sx={{transition: '0.4s'}}>
        <AlertTitle>Error</AlertTitle>
        {error.message}
      </AlertUI> */}
    </>
  );
};
