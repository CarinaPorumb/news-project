import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import "./NewsCard.css";

function NewsCard({ newsId, imgSrc, title, description }) {
	return (
		<Card className="NewsCard h-100 d-flex flex-column justify-content-between align-items-center rounded-2 shadow-sm">
			<Link to={`/news/${encodeURIComponent(newsId)}`}>
				<Card.Img variant="top" src={imgSrc} />
				<Card.Body className="title">
					<Card.Title className="text-center ">{title}</Card.Title>
					<Card.Text>{description}</Card.Text>
				</Card.Body>
			</Link>
			<Button><FavoriteTwoToneIcon className="favButton"/></Button>
		</Card>
	);
}

export default NewsCard;