export const List = ({ children }) => {
  if (!Array.isArray(children)) return null;

  return (
    <div className="ss">
      <div className="h4">
        {children.map((time, index) => (
          <div key={index} className="time-item">
            {time}
          </div>
        ))}
      </div>
    </div>
  );
};
