import "./styles.css";
import SearchBar from "../../../components/SearchBar";
import CatalogCard from "../../../components/CatalogCard";
import ButtonNextPage from "../../../components/ButtonNextPage";
import * as ProductService from '../../../Services/product-service';
import { useEffect, useState } from "react";
import { ProductDTO } from "../../../models/product";

type QueryParams = {
  page: number;
  name: string;
}

export default function Catalog() {

  const [products, setProducts] = useState<ProductDTO[]>([]);

  const [queryParams, setQueryParam] = useState<QueryParams>({
    page:1,
    name:""
  });


  useEffect(() => {
    ProductService.findPageRequest(queryParams.page, queryParams.name)
      .then(response => {
        setProducts(response.data.content);
      })
  }, [queryParams]);

  function handleSearch(searchText: string) {
    setQueryParam({...queryParams, name: searchText});
  }

  return (
    <main>
      <section id="catalog-details-section " className="dsc-container">
        <SearchBar onSearch={handleSearch}/>

        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
          {
            products.map(
              product => <CatalogCard key={product.id} product={product} />)
          }
        </div>

        <ButtonNextPage text="Carregar Mais" />
      </section>
    </main>
  );
}