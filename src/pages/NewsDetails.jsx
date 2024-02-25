import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useFetch } from "../hooks/useFetch";
import { getNewsDetails } from "../api/adaptors";
import Button from "react-bootstrap/Button";
import "./NewsDetails.css";
import { dateFormatter } from "../utils/dateFormatter";
import { getNewsDetailsEndpoint } from "../api/endpoints";

function NewsDetails() {
	let { newsId } = useParams();
	newsId = decodeURIComponent(newsId);
	const newsDetailsEndpoint = getNewsDetailsEndpoint(newsId);
	const newsDetails = useFetch(newsDetailsEndpoint);
	const adaptedNewsDetails = getNewsDetails(newsDetails);

	const { title, description, image, date, author, content } = adaptedNewsDetails;
	const formattedDate = dateFormatter(date);

	return (
		<Layout>
			<Container className="NewsDetails my-5">
				<Row className="d-flex justify-content-center">
					<Col xs={12} lg={8}>
						<h1 className="pt-3 mb-5">{title}</h1>
						<p className="fw-bold">{description}</p>
						<div dangerouslySetInnerHTML={{ __html: image }} className="mb-4"></div>
						<div className="d-flex justify-content-between align-items-center mb-4">
							<div className="fw-bold">
								<p>{author}</p>
								<p className="mb-0">{formattedDate}</p>
							</div>
							<Button>Adaugă la favorite</Button>
						</div>
						<div dangerouslySetInnerHTML={{ __html: content }}></div>
					</Col>
				</Row>
			</Container>
		</Layout>
	);
}

export default NewsDetails;
