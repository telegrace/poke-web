interface Props {}

const ErrorBoundary: React.FC<Props> = (props) => {
  console.log(props);
  return (
    <>
      <h3>
        <strong>ERROR</strong>
      </h3>
    </>
  );
};

export default ErrorBoundary;
