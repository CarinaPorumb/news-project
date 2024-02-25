import React from "react";

import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import { getNewsCategoriesEndpoint } from "../api/endpoints";
import { useFetch } from "../hooks/useFetch";
import { getNewsList } from "../api/adaptors";
import NewsCardList from "../components/NewsCardList";
import { Link } from "react-router-dom";

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
					<h1 className="my-5 pt-5 mx-2">Fashion</h1>
					<NewsCardList newsList={adaptedFashionData} />
					<p>
						Vezi toate știrile legate de arta în secțiunea{" "}
						<Link to="/category/fashion" className="text-secondary">Fashion</Link>
						.
					</p>
				</Container>
			</section>

			<section className="art my-5">
				<Container>
					<h1 className="mb-5 pt-3">Art</h1>
					<NewsCardList newsList={adaptedArtData} />
					<p>
						Vezi toate știrile legate de arta în secțiunea{" "}
						<Link to="/category/art" className="text-secondary">
							Art
						</Link>
						.
					</p>
				</Container>
			</section>

			<section className="books my-5">
				<Container>
					<h1 className="mb-5 pt-3">Carti</h1>
					<NewsCardList newsList={adaptedBooksData} />
					<p>
						Vezi toate știrile legate de carti în secțiunea{" "}
						<Link to="/category/books" className="text-secondary">Carti</Link>
						.
					</p>
				</Container>
			</section>

			<section className="museum my-5">
				<Container>
					<h1 className="mb-5 pt-3">Muzee</h1>
					<NewsCardList newsList={adaptedMuseumsData} />
					<p>
						Vezi toate știrile legate de muzee în secțiunea{" "}
						<Link to="/category/museum" className="text-secondary">Muzee</Link>
						.
					</p>
				</Container>
			</section>

			<section className="tech my-5">
				<Container>
					<h1 className="mb-5 pt-3">Tech</h1>
					<NewsCardList newsList={adaptedTechnologyData} />
					<p>
						Vezi toate știrile legate de tehnologie în secțiunea{" "}
						<Link to="/category/technology" className="text-secondary">Tech</Link>
						.
					</p>
				</Container>
			</section>

			<section className="football my-5">
				<Container>
					<h1 className="mb-5 pt-3">Fotbal</h1>
					<NewsCardList newsList={adaptedFootballData} />
					<p>
						Vezi toate știrile legate de tehnologie în secțiunea{" "}
						<Link to="/category/football" className="text-secondary">Fotbal</Link>
						.
					</p>
				</Container>
			</section>

			<section className="favorites my-5">
				<Container>
					<h1 className="mb-5 pt-3">Favorite</h1>
					<p>Vrei să îți salvezi știrile favorite pentru a le reciti mai încolo?</p>
					<p>În cadrul fiecărei știri găsești un buton prin care poți adăuga știrea la favorite.</p>
					<p className="pb-3">
						Vizitează secțiunea{" "}
						<Link to="/favorites" className="text-secondary">Favorite</Link>{" "}
						pentru a vedea știrile adăugate.
					</p>
				</Container>
			</section>
		</Layout>
	);
}

export default Home;
