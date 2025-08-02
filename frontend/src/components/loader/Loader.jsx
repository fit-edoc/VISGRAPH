// src/components/Loader.jsx
const Loader = () => (
  <div className="flex items-center justify-center h-32">
    <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-500 border-r-transparent"></div>
    <span className="sr-only">Loading...</span>
  </div>
);

export default Loader;
