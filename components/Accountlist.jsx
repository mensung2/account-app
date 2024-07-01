import Accountitem from "./Accountitem";
import { AccountContext } from "./AccountContext";
import { useContext } from "react";

const Accountlist = () => {
  const { costs } = useContext(AccountContext);
  console.log(costs);
  return (
    <div>
      {costs.map((cost) => (
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
