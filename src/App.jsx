// import { Outlet } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// const App = () => {
//   return (
//     <div className="bg-[#F7F7F7]">
//       <Navbar />
//       <main className="mt-72 bg-[#F7F7F7]">
//         <Outlet />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default App;

import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const location = useLocation();
  
  // Check if the current path is the product details page
  const isProductDetailsPage = location.pathname.startsWith("/products/");

  return (
    <div className="bg-[#F7F7F7]">
      <Navbar />
      {/* Conditionally apply mt-72 only when not on product details page */}
      <main className={`${isProductDetailsPage ? 'pb-16' : 'mt-96'} bg-[#F7F7F7]`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;

