import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";


export default function LayoutRoute() {
   return (
      <main role="main">
         <Header />
         <Outlet />
         <Footer />
      </main>
   );
}