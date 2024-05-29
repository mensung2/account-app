import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accountcontainer from "../../components/Accountcontainer";

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accountcontainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default router;
