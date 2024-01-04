const Spinner = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <span className="text-5xl font-bold text-green-300 shadow-sm shadow-green-300">
        L
      </span>
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-sky-600 shadow-sm shadow-green-300 mx-2"></div>
      <span className="text-5xl font-bold text-green-300 shadow-sm shadow-green-300">
        ading...
      </span>
    </div>
  );
};

export default Spinner;
