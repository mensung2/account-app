import Accountitem from "./Accountitem";

const Accountlist = ({ costs }) => {
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
