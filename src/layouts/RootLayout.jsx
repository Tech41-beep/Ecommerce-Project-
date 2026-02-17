import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import TopBar from "../components/TopBar";

function RootLayout() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="pt-[140px]">
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
