import {useParams, useSearchParams} from "react-router-dom";
import {getNewsCategoriesEndpoint} from "../api/endpoints";
import {getNewsList} from "../api/adaptors";
import {Container} from "react-bootstrap";
import {useFetch} from "../hooks/useFetch";
import Layout from "../components/Layout";
import NewsCardList from "../components/NewsCardList";
import CustomPagination from "../components/CustomPagination";

function NewsCategory() {

	const [searchParams] = useSearchParams();
	const currentPage = Number(searchParams.get("page")) || 1;

	const { categoryId } = useParams();
	const newsCategoryEndpoint = getNewsCategoriesEndpoint(categoryId, currentPage);
	const news = useFetch(newsCategoryEndpoint);
	const adaptedNewsList = getNewsList(news);

	let title = "";
	switch (categoryId) {
		case "technology":
			title = "Tech";
			break;

		case "football":
			title = "Fotbal";
			break;

		case "favorites":
			title = "Favorites";
			break;

		case "museum":
			title = "Museum";
			break;

		case "books":
			title = "Books";
			break;

		case "art":
			title = "Art";
			break;

		case "fashion":
			title = "Fashion";
			break;

		default:
			break;
	}

	return (
		<Layout>
			<Container className="my-5">
				<h1 className="mb-5 pt-3">{title}</h1>
				<NewsCardList newsList={adaptedNewsList} />
				<CustomPagination active={currentPage} baseUrl={`/category/${categoryId}`}/>
			</Container>
		</Layout>
	);
}

export default NewsCategory;
