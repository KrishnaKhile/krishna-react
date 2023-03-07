// import { Table } from "react-bootstrap";
import Login from "./components/Login";
// import Bootable from "./components/bootTable";
// import Controlled from "./components/Controlled";

import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
// import Login from "./components/Login";
import Page404 from "./components/Page404";
import SubmitParams from "./components/SubmitParams";
import Useparams from "./components/Useparams";
import Nestedexp from "./components/Nestedexp";
import NesAbout from "./components/NesAbout";
import EditProfile from "./components/EditProfile";
import Protected from "./components/Protected";
import Setting from "./components/Setting";
import MuiCurd from "./components/MuiCurd";
import EditNor from "./components/EditNor";
import StateObjectWithHooks from "./components/StateObjectWithHooks";
// import CustomNav from "./components/CustomNav";

function App() {
  return (
    <>
      {/* <Home /> */}
      {/* <Login /> */}
      {/* <Bootable /> */}
      {/* <Controlled /> */}

      <NavBar />
      {/* <CustomNav> </CustomNav> */}
      <Routes>
        <Route path="/" element={<Protected Component={Home}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/submitparams" element={<Protected Component={SubmitParams}/>} />
        <Route
          path="/useparams/:name/:email/:pass/:add/:about"
          element={<Useparams />}
        />
        <Route path="/*" element={<Page404 />} />
        <Route path="/nestedroute/" element={<Protected Component={Nestedexp}/>}>
          <Route path="nesabout" element={<NesAbout />} />
          <Route path="editprofile" element={<EditProfile />} />
          <Route path="setting" element={<Setting />} />
        </Route>
      </Routes>

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submitparams" element={<SubmitParams />} />
        <Route
          path="/StateObjectWithHooks"
          element={<StateObjectWithHooks />}
        />
        <Route
          path="/useparams/:name/:email/:pass/:add/:about"
          element={<Useparams />}
        />
        <Route path="/*" element={<Page404 />} />
        <Route path="/nestedroute/" element={<Nestedexp />}>
          <Route path="nesabout" element={<NesAbout />} />
          <Route path="editprofile" element={<EditProfile />} />
          <Route path="setting" element={<Setting />} />
          <Route
            path="setting/EditNor/:nor_id/:nor_name/:nor_shortcode/:nor_email/:nor_mobile"
            element={<EditNor />}
          />
          <Route path="muicurd" element={<MuiCurd />} />
        </Route>
      </Routes> */}
    </>
  );
}

export default App;
