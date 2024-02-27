import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  // mendefinisikan error dari react-router-dom
  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p>Sorry, an unexpected error has occured</p>
      <p>{error.statusText || error.message}</p>
      {/* conditional rendering, jika props error. statusText tidak bekerja, tampilkan error.message */}
    </div>
  );
};

export default ErrorPage;
