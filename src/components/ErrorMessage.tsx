type ErrorMessageProps = {
  message: string;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="text-red-500 bg-red-100 p-4 m-4 rounded-md ">
      <p>{message}</p>
      <button className="mt-2 text-blue-500 underline">
        <a href="./">Topへ</a>
      </button>
    </div>
  );
};

export default ErrorMessage;
