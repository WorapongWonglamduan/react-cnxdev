import React /* useEffect, useMemo, useState */ from "react";
// import { useSelector } from "react-redux";
// import LoadingToRedirect from "./LoadingToRedirect";
// import { currentAdmin } from "../function/apiAuth";
// import Navbar from "../components/layouts/Navbar";
import NavbarAdmin from "../components/layouts/NavbarAdmin";

const AdminRoute = ({ children }) => {
  //   const user = useSelector((state) => state.user);
  //   const memoizedUser = useMemo(() => user, [user]);
  //   const [isAdmin, setIsAdmin] = useState(false);
  //   useEffect(() => {
  //     if (memoizedUser && memoizedUser.token) {
  //       currentAdmin(memoizedUser.token)
  //         .then(() => {
  //           setIsAdmin(true);
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //           setIsAdmin(false);
  //         });
  //     }
  //   }, [memoizedUser]);

  return (
    <>
      <NavbarAdmin />
      {children}
    </>
  );
};

export default AdminRoute;
