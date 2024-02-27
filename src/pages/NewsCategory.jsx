import {useParams, useSearchParams} from "react-router-dom";
import {getNewsCategoriesEndpoint} from "../api/endpoints";
import {getNewsList} from "../api/adaptors";
import {Container} from "react-bootstrap";
import {useFetch} from "../hooks/useFetch";
import Layout from "../components/Layout";
import NewsCardList from "../components/NewsCardList";
import CustomPagination from "../components/CustomPagination";
import "./Home.css"

function NewsCategory() {

	const [searchParams] = useSearchParams();
	const currentPage = Number(searchParams.get("page")) || 1;

	const { categoryId } = useParams();
	const newsCategoryEndpoint = getNewsCategoriesEndpoint(categoryId, currentPage);
	const news = useFetch(newsCategoryEndpoint);
	const adaptedNewsList = getNewsList(news);

	let title = "";
	switch (categoryId) {
		case "books":
			title = "Books";
			break;
		case "film":
			title = "Film";
			break;
		case "music":
			title = "Music";
			break;
		case "travel":
			title = "Travel";
			break;
		case "wellness":
			title = "Wellness";
			break;
		case "fashion":
			title = "Fashion";
			break;
		case "environment":
			title = "Environment";
			break;
		case "sustainability":
			title = "Sustainability";
			break;
		case "technology":
			title = "Technology";
			break;
		case "science":
			title = "Science";
			break;
		case "education":
			title = "Education";
			break;
		case "politics":
			title = "Politics";
			break;
		case "society":
			title = "Society";
			break;
		case "football":
			title = "Football";
			break;
		case "sport":
			title = "More Sports";
			break;
		case "favorites":
			title = "Favorites";
			break;
		default:
			break;
	}

	return (
		<Layout>
			<Container className="my-5">
				<h1 className=" category">{title}</h1>
				<NewsCardList newsList={adaptedNewsList} />
				<CustomPagination active={currentPage} baseUrl={`/category/${categoryId}`}/>
			</Container>
		</Layout>
	);
}

export default NewsCategory;
