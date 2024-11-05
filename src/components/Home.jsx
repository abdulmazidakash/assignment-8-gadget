import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
  const products = useLoaderData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {products.map(product => (
        <div key={product.product_id} className="card w-96 bg-base-100 shadow-xl">
          <figure><img src={product.product_image} alt={product.product_title} /></figure>
          <div className="card-body">
            <h2 className="card-title">{product.product_title}</h2>
            <p>{product.description}</p>
            <div className="card-actions justify-end">
              <Link to={`/products/${product.product_id}`} className="btn btn-primary">Details</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
