import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";

const Navbar = () => {
  return (


    <nav className="mt-8">
      	<div className="border border-[#9538E2] p-1 w-11/12 mx-auto rounded-2xl">
        <div className=" h-[594px] mx-auto bg-[#9538E2] rounded-2xl">
        <div className="flex justify-between px-16 py-4 items-center">
            <div className="">
            <Link to="/" className="btn btn-ghost normal-case text-xl text-white">Gadget Heaven</Link>
            </div>

            <div className="flex gap-12">
              <button className="btn bg-[#9538E2] border-none text-white hover:text-black">Home</button>
              <button className="btn bg-[#9538E2] border-none text-white hover:text-black">Statistics</button>
              <button className="btn bg-[#9538E2] border-none text-white hover:text-black">Dashboard</button>
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

          <div className="w-8/12 mx-auto text-center text-white my-8">
            <h1 className="text-5xl font-bold mb-8">Upgrade Your Tech Accessorize with <br /><span>Gadget Heaven Accessories</span></h1>
            <p className="font-semibold">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            <button className="btn btn-outline my-8 bg-white border-none rounded-full text-[#9538E2]">Shop Now</button>
          </div>

        </div>
        </div>

        <div className="border border-white p-4 w-8/12 mx-auto rounded-lg mb-4 relative bottom-52">
          <img className="w-[1000px] h-[511px] mx-auto rounded-lg object-cover" src="https://i.ibb.co/tX0q7t7/banner.jpg" alt="" />
        </div>
    </nav>
  );
};

export default Navbar;
