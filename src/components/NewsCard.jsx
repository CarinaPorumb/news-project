import React, {useContext} from "react";
import {Link} from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import "./NewsCard.css";
import {getNewsDetails} from "../api/adaptors";
import {getNewsDetailsEndpoint} from "../api/endpoints";
import {useFetch} from "../hooks/useFetch";
import {FavoritesContext} from "../store/favorites/context";
import {addToFavorites} from "../store/favorites/actions";

function NewsCard({ newsId, imgSrc, title, description }) {

	const newsDetailsEndpoint = getNewsDetailsEndpoint(newsId);
	const newsDetails = useFetch(newsDetailsEndpoint);
	const adaptedNewsDetails = getNewsDetails(newsDetails);
	const {thumbnail } = adaptedNewsDetails;

	const { dispatch } = useContext(FavoritesContext);
	function handleAddToFavorites(news) {
		const actionResult = addToFavorites(news);
		dispatch(actionResult);
	}

	return (
		<Card className="NewsCard h-100 d-flex flex-column justify-content-between align-items-center rounded-2 shadow-sm">
			<Link to={`/news/${encodeURIComponent(newsId)}`}>
				<Card.Img variant="top" src={imgSrc} />
				<Card.Body className="title">
					<Card.Title className="text-center ">{title}</Card.Title>
					<Card.Text>{description}</Card.Text>
				</Card.Body>
			</Link>
			<Button
				onClick={() => {
					handleAddToFavorites({
						id: newsId,
						thumbnail,
						title,
						description
					});
				}}><FavoriteTwoToneIcon className="favButton"/></Button>
		</Card>
	);
}

export default NewsCard;