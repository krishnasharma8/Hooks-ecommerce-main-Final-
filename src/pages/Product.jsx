// import { Fragment, useEffect, useState } from "react";
// import Banner from "../components/Banner/Banner";
// import { Container } from "react-bootstrap";
// import ShopList from "../components/ShopList";
// import { products } from "../utils/products";
// import { useParams } from "react-router-dom";
// import ProductDetails from "../components/ProductDetails/ProductDetails";
// import ProductReviews from "../components/ProductReviews/ProductReviews";
// import useWindowScrollToTop from "../hooks/useWindowScrollToTop";

// const Product = () => {
//   const { id } = useParams();
//   const [selectedProduct, setSelectedProduct] = useState(
//     products.filter((item) => parseInt(item.id) === parseInt(id))[0]
//   );
//   const [relatedProducts, setRelatedProducts] = useState([]);
//   useEffect(() => {
//     window.scrollTo(0, 0);
//     setSelectedProduct(
//       products.filter((item) => parseInt(item.id) === parseInt(id))[0]
//     );
//     setRelatedProducts(
//       products.filter(
//         (item) =>
//           item.category === selectedProduct?.category &&
//           item.id !== selectedProduct?.id
//       )
//     );
//   }, [selectedProduct, id]);

//   useWindowScrollToTop();

//   return (
//     <Fragment>
//       <Banner title={selectedProduct?.productName} />
//       <ProductDetails selectedProduct={selectedProduct} />
//       <ProductReviews selectedProduct={selectedProduct} />
//       <section className="related-products">
//         <Container>
//           <h3>You might also like</h3>
//         </Container>
//         <ShopList productItems={relatedProducts} />
//       </section>
//     </Fragment>
//   );
// };

// export default Product;

import { Fragment, useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import { Container } from "react-bootstrap";
import ShopList from "../components/ShopList";
import { products } from "../utils/products";
import { useParams } from "react-router-dom";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import ProductReviews from "../components/ProductReviews/ProductReviews";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";

const Product = () => {
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useWindowScrollToTop();

  // Set selected product when `id` changes
  useEffect(() => {
    const product = products.find(
      (item) => parseInt(item.id) === parseInt(id)
    );
    setSelectedProduct(product || null); // fallback to null if not found
  }, [id]);

  // Set related products when `selectedProduct` changes
  useEffect(() => {
    if (selectedProduct) {
      const related = products.filter(
        (item) =>
          item.category === selectedProduct.category &&
          item.id !== selectedProduct.id
      );
      setRelatedProducts(related);
    }
  }, [selectedProduct]);

  // Show "Product Not Found" if not found
  if (!selectedProduct) {
    return (
      <Container style={{ padding: "50px 0", textAlign: "center" }}>
        <h2>Product Not Found</h2>
      </Container>
    );
  }

  return (
    <Fragment>
      <Banner title={selectedProduct.productName} />
      <ProductDetails selectedProduct={selectedProduct} />
      <ProductReviews selectedProduct={selectedProduct} />
      <section className="related-products">
        <Container>
          <h3>You might also like</h3>
        </Container>
        <ShopList productItems={relatedProducts} />
      </section>
    </Fragment>
  );
};

export default Product;
