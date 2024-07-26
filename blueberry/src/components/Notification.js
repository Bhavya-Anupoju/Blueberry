const Notification = ({ message, show }) => {
  return (
    show && (
      <div className="fixed top-0 left-1/2 transform -translate-x-1/2 mt-4 px-4 py-2 bg-green-500 text-white rounded shadow-lg">
        {message}
      </div>
    )
  );
};

export default Notification;
