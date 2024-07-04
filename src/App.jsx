import Layout from "./components/Layout";
import Accountcontainer from "./components/Accountcontainer";
import { useSelector } from "react-redux";

const App = () => {
  const accounts = useSelector((state) => state.accounts);
  
  console.log(accounts);

  return (
    <Layout>
      <Accountcontainer />
    </Layout>
  );
};

export default App;
