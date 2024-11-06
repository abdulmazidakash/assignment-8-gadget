
import { useLoaderData } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";


const ProductDetail = () => {
  const product = useLoaderData();

  return (
    <div>
      <div className="w-12/12 mx-auto h-[400px] bg-[#9538E2] text-center text-white pt-10 ">
        <h2 className="text-4xl font-bold">Product Details</h2>
        <p className="font-semibold mt-2">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      <div className="w-8/12 mx-auto bg-[#F7F7F7] shadow-xl -mt-52 flex p-6 rounded-2xl items-center">
        <div className="w-[424px]">
          <img className="rounded-2xl" src={product.product_image} alt={product.product_title} />
        </div>
        <div className="card-body">
          <h2 className="card-title text-3xl">{product.product_title}</h2>
          <p className="font-bold text-xl">Price: ${product.price}</p>
          <p className="badge badge-accent badge-outline">In Stock</p>
          <p>{product.description}</p>
          <p className="font-semibold">Specifications:</p>
          <ol className="list-decimal ml-6">
            {product.specification.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ol>
          <p className="font-semibold">Rating:</p>

          {/* rating div  */}

          <div className="items-center text-xl"> 
            <div className="rating mr-2 items-center font-semibold">
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            </div>
            {product.rating}
          </div>

          <div className="flex items-center gap-4">
          <button className="btn bg-[#9538E2] mt-4 w-[193px] rounded-full font-bold text-white hover:text-black">Add to Cart <div className="indicator">
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
                  </div></button>
                  <div tabIndex={0} role="button" className="btn border border-gray-400  btn-circle bg-white avatar mt-4">
                  <div className="rounded-full text-4xl">
                    <FaRegHeart />
                  </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

