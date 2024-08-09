const AccItem = ({ num, title, text, curOpen, onOpen }) => {
  const isOpen = num === curOpen;

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={() => onOpen(num)}>
      <div className="number">{num}</div>
      <div className="title">{title}</div>
      <div className="icon">{isOpen ? "-" : "+"}</div>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
};

export default AccItem;
