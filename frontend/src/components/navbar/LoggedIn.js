import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

const LoggedIn = ({ children }) => {
  const location = useLocation();
  const [showNavBar, setShowNavBar] = useState(false);

  useEffect(() => {
    const seenPages = ['/posts', '/profile'];
    if (seenPages.includes(location.pathname)) {
      setShowNavBar(true);
    } else {
      setShowNavBar(false);
    }
  }, [location]);

  return <div>{showNavBar && children}</div>;
};

export default LoggedIn;