


// import { Link, useLocation } from "react-router-dom";
// import { FaRegHeart } from "react-icons/fa";
// import { useEffect, useState } from "react";

// const Navbar = () => {
//   const location = useLocation();
//   const [isProductDetailsPage, setIsProductDetailsPage] = useState(false);

//   // Check if we're on the product details page
//   useEffect(() => {
//     setIsProductDetailsPage(location.pathname.startsWith("/products/"));
//   }, [location]);

//   return (
//     <nav className={`pt-8 ${isProductDetailsPage ? 'bg-white' : 'bg-[#F7F7F7]'}`}>
//       {/* Conditionally apply the border based on the page */}
//       <div className={`${!isProductDetailsPage ? 'border border-[#9538E2]' : ''} p-1 w-11/12 mx-auto rounded-2xl`}>
//         {/* Add conditional height only for non-product details page */}
//         <div className={`${isProductDetailsPage ? '' : 'h-[650px]'} ${isProductDetailsPage ? 'bg-white' : 'bg-[#9538E2]'} rounded-2xl p-8`}>
//           <div className="flex justify-between px-8 py-4 items-center">
//             <div>
//               <Link to="/" className={`btn btn-ghost normal-case text-xl ${isProductDetailsPage ? 'text-black' : 'text-white'}`}>
//                 Gadget Heaven
//               </Link>
//             </div>

//             <div className="flex gap-8">
//               <button className={`btn ${isProductDetailsPage ? 'bg-white text-black' : 'bg-[#9538E2] text-white'} border-none hover:text-black`}>
//                 Home
//               </button>
//               <button className={`btn ${isProductDetailsPage ? 'bg-white text-black' : 'bg-[#9538E2] text-white'} border-none hover:text-black`}>
//                 Statistics
//               </button>
//               <button className={`btn ${isProductDetailsPage ? 'bg-white text-black' : 'bg-[#9538E2] text-white'} border-none hover:text-black`}>
//                 Dashboard
//               </button>
//             </div>

//             <div className="flex-none">
//               <div className="dropdown dropdown-end">
//                 <div tabIndex={0} role="button" className="btn btn-sm btn-ghost btn-circle bg-white mr-4">
//                   <div className="indicator">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-5 w-5"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor">
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//                     </svg>
//                     <span className="badge badge-sm indicator-item">8</span>
//                   </div>
//                 </div>
//                 <div
//                   tabIndex={0}
//                   className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
//                   <div className="card-body">
//                     <span className="text-lg font-bold">8 Items</span>
//                     <span className="text-info">Subtotal: $999</span>
//                     <div className="card-actions">
//                       <button className="btn btn-primary btn-block">View cart</button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="dropdown dropdown-end">
//                 <div tabIndex={0} role="button" className="btn btn-sm btn-ghost btn-circle bg-white avatar">
//                   <div className="rounded-full text-xl">
//                     <FaRegHeart />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Banner and image section, shown only if not on product details page */}
//           {!isProductDetailsPage && (
//             <div className="w-9/12 mx-auto text-center text-white mt-12 mb-8">
//               <div className="my-1">
//                 <h1 className="text-5xl font-bold mb-4">
//                   Upgrade Your Tech Accessorize with <br />Gadget Heaven Accessories
//                 </h1>
//               </div>
//               <p className="font-semibold mb-8">
//                 Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
//               </p>
//               <button className="btn btn-outline bg-white border-none rounded-full text-[#9538E2]">Shop Now</button>
//             </div>
//           )}

//           {!isProductDetailsPage && (
//             <div className="border border-white p-4 w-9/12 mx-auto rounded-lg mt-2">
//               <img className="w-full h-auto mx-auto rounded-lg object-cover" src="https://i.ibb.co/tX0q7t7/banner.jpg" alt="Banner" />
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { Link, useLocation } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { useEffect, useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [isProductDetailsPage, setIsProductDetailsPage] = useState(false);

  // Check if we're on the product details page
  useEffect(() => {
    setIsProductDetailsPage(location.pathname.startsWith("/products/"));
  }, [location]);

  return (
    <nav className={`${!isProductDetailsPage ? 'pt-8' : ''} ${isProductDetailsPage ? 'bg-white' : 'bg-[#F7F7F7]'}`}>
      {/* Conditionally apply the border based on the page */}
      <div className={`${!isProductDetailsPage ? 'border border-[#9538E2]' : ''} p-1 w-11/12 mx-auto rounded-2xl`}>
        {/* Add conditional height only for non-product details page */}
        <div className={`${isProductDetailsPage ? '' : 'h-[650px]'} ${isProductDetailsPage ? 'bg-white' : 'bg-[#9538E2]'} rounded-2xl p-8`}>
          <div className="flex justify-between px-8 py-4 items-center">
            <div>
              <Link to="/" className={`btn btn-ghost normal-case text-xl ${isProductDetailsPage ? 'text-black' : 'text-white'}`}>
                Gadget Heaven
              </Link>
            </div>

            <div className="flex gap-8">
              <button className={`btn ${isProductDetailsPage ? 'bg-white text-black' : 'bg-[#9538E2] text-white'} border-none hover:text-black`}>
                Home
              </button>
              <button className={`btn ${isProductDetailsPage ? 'bg-white text-black' : 'bg-[#9538E2] text-white'} border-none hover:text-black`}>
                Statistics
              </button>
              <button className={`btn ${isProductDetailsPage ? 'bg-white text-black' : 'bg-[#9538E2] text-white'} border-none hover:text-black`}>
                Dashboard
              </button>
            </div>

            <div className="flex-none">
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-sm btn-ghost btn-circle bg-white mr-4">
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="badge badge-sm indicator-item">8</span>
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                  <div className="card-body">
                    <span className="text-lg font-bold">8 Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                      <button className="btn btn-primary btn-block">View cart</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-sm btn-ghost btn-circle bg-white avatar">
                  <div className="rounded-full text-xl">
                    <FaRegHeart />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Banner and image section, shown only if not on product details page */}
          {!isProductDetailsPage && (
            <div className="w-9/12 mx-auto text-center text-white mt-12 mb-8">
              <div className="my-1">
                <h1 className="text-5xl font-bold mb-4">
                  Upgrade Your Tech Accessorize with <br />Gadget Heaven Accessories
                </h1>
              </div>
              <p className="font-semibold mb-8">
                Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
              </p>
              <button className="btn btn-outline bg-white border-none rounded-full text-[#9538E2]">Shop Now</button>
            </div>
          )}

          {!isProductDetailsPage && (
            <div className="border border-white p-4 w-9/12 mx-auto rounded-lg mt-2">
              <img className="w-full h-auto mx-auto rounded-lg object-cover" src="https://i.ibb.co/tX0q7t7/banner.jpg" alt="Banner" />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;




