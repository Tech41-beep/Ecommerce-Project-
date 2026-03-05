import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";

function RootLayout() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="pt-[140px]">
        <Outlet />
      </main>
      <Footer></Footer>
    </>
  );
}

export default RootLayout;
