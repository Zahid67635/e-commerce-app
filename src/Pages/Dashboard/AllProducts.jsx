import { useEffect, useState } from "react";
import ProductTable from "../../Components/ProductTable";
import Spinner from "../../Components/Spinner";
const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((er) => console.log(er));
  }, [products.length]);

  return (
    <div className="max-h-[80vh] overflow-y-auto">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="text-base text-violet-600">
                  <th>ID</th>
                  <th>Product Name & Photo</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th></th>
                </tr>
              </thead>
              {products.map((p) => (
                <ProductTable key={p.id} product={p} />
              ))}
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default AllProducts;
