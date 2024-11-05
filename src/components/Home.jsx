

import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
  const products = useLoaderData();

  return (
    <div className="w-12/12 mx-auto bg-[#F7F7F7] pb-16">
      <div className="w-11/12 mx-auto">
      <h3 className="text-3xl font-bold text-center py-16">Explore Cutting-Edge Gadgets</h3>
      
      <div className="grid grid-cols-[250px_1fr] gap-4 my-8">
        {/* Sidebar Section */}
        <div className="space-y-2 bg-white rounded-lg p-4 h-[420px] shadow-lg">
          <button className="btn w-full rounded-3xl hover:bg-[#9538E2] hover:text-white">All Products</button>
          <button className="btn w-full rounded-3xl hover:bg-[#9538E2] hover:text-white">Laptops</button>
          <button className="btn w-full rounded-3xl hover:bg-[#9538E2] hover:text-white">Phones</button>
          <button className="btn w-full rounded-3xl hover:bg-[#9538E2] hover:text-white">Accessories</button>
          <button className="btn w-full rounded-3xl hover:bg-[#9538E2] hover:text-white">Smart Watches</button>
          <button className="btn w-full rounded-3xl hover:bg-[#9538E2] hover:text-white">MacBook</button>
          <button className="btn w-full rounded-3xl hover:bg-[#9538E2] hover:text-white">Iphone</button>
        
        </div>

        {/* Products Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map(product => (
            <div key={product.product_id} className="w-full shadow-lg bg-white p-4 rounded-lg">
              <figure><img className="w-full rounded-lg h-[181px] object-cover" src={product.product_image} alt={product.product_title} /></figure>
              <div className="my-2 p-2">
                <h2 className="card-title my-2 font-bold">{product.product_title}</h2>
                <p className="mb-2 font-semibold text-sm text-gray-600">Price: $ {product.price}</p>
                <div className="card-actions">
                  <Link to={`/products/${product.product_id}`} className="btn btn-outline rounded-full hover:bg-[#9538E2] hover:text-white text-[#9538E2]">View Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;

