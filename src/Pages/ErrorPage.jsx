import React from 'react';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-6">
      <div className="max-w-xl w-full text-center bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl p-10">
        {/* Error Code */}
        <h1 className="text-7xl font-extrabold bg-gradient-to-r from-red-400 to-pink-500 text-transparent bg-clip-text mb-4">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl font-semibold mb-3">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-400 mb-8">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => window.history.back()}
            className="px-5 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
          >
            Go Back
          </button>

          <button
            onClick={() => (window.location.href = '/')}
            className="px-5 py-2 rounded-lg bg-red-500 hover:bg-red-600 transition"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
