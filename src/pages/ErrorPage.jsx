import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold mb-4">Oops!</h1>
      <p>Something went wrong while loading this page.</p>
      <p className="text-gray-500 mt-2">{error.statusText || error.message}</p>
    </div>
  );
}
