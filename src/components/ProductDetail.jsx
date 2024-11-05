import { useLoaderData } from "react-router-dom";

const ProductDetail = () => {
  const product = useLoaderData();

  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <figure><img src={product.product_image} alt={product.product_title} /></figure>
      <div className="card-body">
        <h2 className="card-title">{product.product_title}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
