import { ReactNode, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  // const dispatch = useDispatch();

  return (
    <>
      {/* <Sidebar open={true} handleToggle={() => {}}/> */}
      {/* <NavbarComponent /> */}
      <div className="d-flex flex-column align-items-center w-100">
        <main className="layout">{children}</main>
      </div>
    </>
  );
};

export default Layout;
