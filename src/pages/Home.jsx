import React from "react";

import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import {getNewsCategoriesEndpoint} from "../api/endpoints";
import {useFetch} from "../hooks/useFetch";
import {getNewsList} from "../api/adaptors";
import NewsCardList from "../components/NewsCardList";
import {Link} from "react-router-dom";
import "./Home.css"

function Home() {
	const technologyNewsEndpoint = getNewsCategoriesEndpoint("technology", 1, 3);
	const footballNewsEndpoint = getNewsCategoriesEndpoint("football", 1, 3);
	const booksNewsEndpoint = getNewsCategoriesEndpoint("books", 1, 3);
	const museumsNewsEndpoint = getNewsCategoriesEndpoint("museum", 1, 3);
	const artNewsEndpoint = getNewsCategoriesEndpoint("art", 1, 3);
	const fashionNewsEndpoint = getNewsCategoriesEndpoint("fashion", 1, 3);

	let technologyData = useFetch(technologyNewsEndpoint);
	let footballData = useFetch(footballNewsEndpoint);
	let booksData = useFetch(booksNewsEndpoint);
	let museumsData = useFetch(museumsNewsEndpoint);
	let artData = useFetch(artNewsEndpoint);
	let fashionData = useFetch(fashionNewsEndpoint);

	const adaptedTechnologyData = getNewsList(technologyData);
	const adaptedFootballData = getNewsList(footballData);
	const adaptedBooksData = getNewsList(booksData);
	const adaptedMuseumsData = getNewsList(museumsData);
	const adaptedArtData = getNewsList(artData);
	const adaptedFashionData = getNewsList(fashionData);

	return (
		<Layout>
			<section className="fashion my-5">
				<Container>
					<h1 className="my-5 pt-5 mx-2 category">Fashion</h1>
					<NewsCardList newsList={adaptedFashionData} />
					<p className="textStyle">
                        See all news related to fashion in the Fashion section{" "}
						<Link to="/category/fashion" className="linkStyle">Fashion</Link>
						.
					</p>
				</Container>
			</section>

			<section className="art my-5">
				<Container>
					<h1 className="my-5 pt-5 mx-2 category">Art</h1>
					<NewsCardList newsList={adaptedArtData} />
					<p className="textStyle">
                        See all news related to art in the Art section{" "}
						<Link to="/category/art" className="linkStyle">Art</Link>
						.
					</p>
				</Container>
			</section>

			<section className="books my-5">
				<Container>
					<h1 className="my-5 pt-5 mx-2 category">Books</h1>
					<NewsCardList newsList={adaptedBooksData} />
					<p className="textStyle">
                        See all news related to books in the Books section{" "}
						<Link to="/category/books" className="linkStyle">Books</Link>
						.
					</p>
				</Container>
			</section>

			<section className="museum my-5">
				<Container>
					<h1 className="my-5 pt-5 mx-2 category">Museum</h1>
					<NewsCardList newsList={adaptedMuseumsData} />
					<p className="textStyle">
                        See all news related to museums in the Museum section{" "}
						<Link to="/category/museum" className="linkStyle">Museum</Link>
						.
					</p>
				</Container>
			</section>

			<section className="tech my-5">
				<Container>
					<h1 className="my-5 pt-5 mx-2 category">Tech</h1>
					<NewsCardList newsList={adaptedTechnologyData} />
					<p className="textStyle">
                        See all news related to tech in the Tech section{" "}
						<Link to="/category/technology" className="linkStyle">Tech</Link>
						.
					</p>
				</Container>
			</section>

			<section className="football my-5">
				<Container>
					<h1 className="my-5 pt-5 mx-2 category">Football</h1>
					<NewsCardList newsList={adaptedFootballData}/>
					<p className="textStyle">
                        See all news related to football in the Football section{" "}
						<Link to="/category/football" className="linkStyle">Football</Link>
						.
					</p>
				</Container>
			</section>

			<section className="favorites my-5">
				<Container>
					<h1 className="my-5 pt-5 mx-2 category">Favorites</h1>
					<p className="pb-3 textStyle">
						Visit the <Link to="/favorites" className="linkStyle">Favorites</Link> section to see the news you've added.
					</p>
				</Container>
			</section>
		</Layout>
	);
}

export default Home;
