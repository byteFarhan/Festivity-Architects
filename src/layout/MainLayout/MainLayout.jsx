import Aos from "aos";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
