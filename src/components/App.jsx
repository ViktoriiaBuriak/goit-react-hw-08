import css from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import { fetchContacts } from "../redux/contactsOps";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading } from "../redux/contactsSlice";
import { Suspense, lazy, useEffect } from "react";
import Navigation from "./Navigation/Navigation";
import Loader from "../components/Loader/Loader"

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const RegistratioPage = lazy(() =>
  import("../pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));

function App() {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectLoading);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistratioPage />} />

          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
