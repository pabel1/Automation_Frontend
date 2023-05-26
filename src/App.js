import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { getToken } from "./Component/Help";
import PrivateRoute from "./Component/Router/PrivateRouter";
import PublicRoute from "./Component/Router/PublicRouter";
import { userLoggedIn } from "./features/Auth/authSlice";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import RentRoom from "./pages/RentRoom";
import SignUpPage from "./pages/SignUpPage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = getToken();
    console.log(token);
    if (token) {
      dispatch(
        userLoggedIn({
          access_token: token,
          // user: result.data.user,
        })
      );
    }
  }, []);

  return (
    <div className="App">
      {/* <Routes>
        <Route
          path="/login"
          element={!token ? <LoginPage /> : <Navigate to={"/"} replace />}
        />
        <Route
          path="/signup"
          element={!token ? <SignUpPage /> : <Navigate to={"/"} replace />}
        />
        <Route
          path="/"
          element={
            token ? <DashboardPage /> : <Navigate to={"/login"} replace />
          }
        />
        <Route
          path="/rent"
          element={token ? <RentRoom /> : <Navigate to={"/login"} replace />}
        />
      </Routes> */}
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <SignUpPage />
            </PublicRoute>
          }
        />

        <Route
          path="/"
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/rent"
          element={
            <PrivateRoute>
              <RentRoom />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
