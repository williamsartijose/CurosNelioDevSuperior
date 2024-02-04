import "./styles.css";
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import * as productService from "../../../Services/product-service.ts";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../../models/product.ts";

export default function ProductDetails() {
  const params = useParams();

  const [product, setproduct] = useState<ProductDTO>();

  //o useEffect recebe 2 argumento 1ºArgumentoFunçao() =>  { }, 2ºArgumentoListaObjeto que ele vai observar[]
  useEffect(() => {
   productService.findById(Number(params.productId))
    .then((response) => {
      console.log(response.data);
      setproduct(response.data);
    });

  }, []);

  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        {product && <ProductDetailsCard product={product} />}
        <div className="dsc-btn-page-container">
          <ButtonPrimary text="Comprar" />
          <Link to="/">
            <ButtonInverse text="Inicio" />
          </Link>
        </div>
      </section>
    </main>
  );
}
