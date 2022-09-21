import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import LoginRegister from "./routes/LoginRegister";
import Home from "./routes/Home";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
      <Route
          exact
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route path="/Login" element={<LoginRegister />} />
        <Route path="/Register" element={<LoginRegister />} />
      </Routes>
    </>
  );
}

export default App;
