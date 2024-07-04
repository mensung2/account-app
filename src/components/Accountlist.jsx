import Accountitem from "./Accountitem";

import { useSelector } from "react-redux";

const Accountlist = () => {
  const accounts = useSelector((state) => state.accounts);
  return (
    <div>
      {accounts.map((cost) => (
        <Accountitem
          key={cost.id}
          date={cost.date}
          item={cost.item}
          description={cost.description}
          amount={cost.amount}
        />
      ))}
    </div>
  );
};

export default Accountlist;
