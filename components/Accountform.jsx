const Accountform = () => {
  return (
    <form>
      <div>
        <p>날짜</p>
        <input type="date" name="date" id="datebox"></input>
        <p>항목</p>
        <input
          type="text"
          placeholder="지출 항목"
          name="title"
          id="titlebox"
        ></input>
        <p>내용</p>
        <input
          type="text"
          placeholder="지출 내용"
          name="content"
          id="contentbox"
        ></input>
        <p>금액</p>
        <input type="number"></input>
        <button id="makelist" type="submit">
          기록
        </button>
      </div>
    </form>
  );
};

export default Accountform;
