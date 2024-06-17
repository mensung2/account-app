import { useState } from "react";

const Accountform = ({ setCosts, costs }) => {
  const [date, setDate] = useState(null);
  const [item, setItem] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  const handelSubmit = (e) => {
    e.preventDefault();
    if (!date) {
      return alert("날짜를 입력하세요.");
    }

    const newCost = {
      id: Date.now(),
      date: date,
      item: item,
      amount: amount,
      description: description,
    };

    setCosts([...costs, newCost]);

    setDate(null);
    setItem("");
    setDescription("");
    setAmount(0);
  };

  return (
    <form onSubmit={handelSubmit}>
      <div>
        <p>날짜</p>
        <input
          type="date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        ></input>
        <p>항목</p>
        <input
          type="text"
          placeholder="지출 항목"
          value={item}
          onChange={(e) => {
            setItem(e.target.value);
          }}
        ></input>
        <p>내용</p>
        <input
          type="text"
          placeholder="지출 내용"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></input>
        <p>금액</p>
        <input
          type="number"
          value={amount}
          onChange={(e) => {
            setAmount(parseInt(e.target.value));
          }}
        ></input>
        <button>기록</button>
      </div>
    </form>
  );
};

export default Accountform;
