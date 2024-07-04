const Accountitem = ({ key, date, item, description, amount }) => {
  return (
    <>
      <div key={key}>
        <p>날짜{date}</p>
        <p>제목{item}</p>
        <p>내용{description}</p>
        <p>금액{amount}</p>
      </div>
    </>
  );
};

export default Accountitem;
