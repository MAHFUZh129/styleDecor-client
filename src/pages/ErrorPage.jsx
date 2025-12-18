import { Link, useRouteError } from "react-router";
import { FaHome, FaExclamationTriangle } from "react-icons/fa";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-100 via-white to-blue-200 px-4">
      <div className="text-center max-w-lg">

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <FaExclamationTriangle className="text-6xl text-red-400" />
        </div>

        {/* Title */}
        <h1 className="text-7xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          404
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl md:text-3xl font-bold mt-4 text-gray-800">
          Oops! Page Not Found
        </h2>

        {/* Message */}
        <p className="text-gray-600 mt-4 leading-relaxed">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        {/* Error message (optional) */}
        {error?.statusText || error?.message ? (
          <p className="mt-2 text-sm text-red-500">
            {error.statusText || error.message}
          </p>
        ) : null}

        {/* Button */}
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full
            bg-gradient-to-r from-primary to-secondary
            text-white font-semibold shadow-lg hover:scale-105 transition"
          >
            <FaHome />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
