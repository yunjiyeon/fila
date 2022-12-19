/*
	검색기능 추가
	useSearchParams - 현재 위치에 대한 URL의 쿼리 문자열을 읽고 수정하는 데 사용되는 라우터 훅

	주소 뒤에 /?q=파라메터
*/

import React from "react";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductsCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import Collection from "./Collection";

const ProductAll = () => {
	const [productsList, setProductsList] = useState([]);
	let [query, setQuery] = useSearchParams(); 

	const getProducts = async () => {
		let keyword = query.get("q") || "";
		let url = `https://my-json-server.typicode.com/yunjiyeon/fila/products?q=${keyword}`;
		let response = await fetch(url);
		let data = await response.json();
		setProductsList(data);
	};

	useEffect(() => {
		getProducts();
	}, [query]); 

	return (
		<div>
			<Container>
				<Row>
					{productsList.map((menu) => (
						<Col sm={6} lg={3}>
							<ProductCard item={menu} />
						</Col>
					))}
				</Row>
			</Container>
      <Container>
        <Row>
          <Col>
            <Collection />
          </Col>
        </Row>
      </Container>
		</div>
	);
};

export default ProductAll;
