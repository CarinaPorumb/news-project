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

    //Art
    const booksNewsEndpoint = getNewsCategoriesEndpoint("books", 1, 3);
    const filmNewsEndpoint = getNewsCategoriesEndpoint("film", 1, 3);
    const musicNewsEndpoint = getNewsCategoriesEndpoint("music", 1, 3);
    //Lifestyles
    const travelNewsEndpoint = getNewsCategoriesEndpoint("travel", 1, 3);
    const wellnessNewsEndpoint = getNewsCategoriesEndpoint("wellness", 1, 3);
    const fashionNewsEndpoint = getNewsCategoriesEndpoint("fashion", 1, 3);
	//Sus & Env
	const sustainabilityNewsEndpoint = getNewsCategoriesEndpoint("sustainability", 1, 3);
	const environmentNewsEndpoint = getNewsCategoriesEndpoint("environment", 1, 3);
	//Science
	const technologyNewsEndpoint = getNewsCategoriesEndpoint("technology", 1, 3);
	const scienceNewsEndpoint = getNewsCategoriesEndpoint("science", 1, 3);
    //Sport
    const footballNewsEndpoint = getNewsCategoriesEndpoint("football", 1, 3);
    const sportsNewsEndpoint = getNewsCategoriesEndpoint("sport", 1, 3);
	//World
	const politicsNewsEndpoint = getNewsCategoriesEndpoint("politics", 1, 3);
	const societyNewsEndpoint = getNewsCategoriesEndpoint("society", 1, 3);
	const educationNewsEndpoint = getNewsCategoriesEndpoint("education", 1, 3);
    //-------------------------------------------------------------------------------------


    let booksData = useFetch(booksNewsEndpoint);
    let educationData = useFetch(educationNewsEndpoint);
    let filmData = useFetch(filmNewsEndpoint);
    let musicData = useFetch(musicNewsEndpoint);
    let travelData = useFetch(travelNewsEndpoint);
    let sustainabilityData = useFetch(sustainabilityNewsEndpoint);
    let wellnessData = useFetch(wellnessNewsEndpoint);
    let fashionData = useFetch(fashionNewsEndpoint);
    let environmentData = useFetch(environmentNewsEndpoint);
    let politicsData = useFetch(politicsNewsEndpoint);
    let societyData = useFetch(societyNewsEndpoint);
    let footballData = useFetch(footballNewsEndpoint);
    let sportsData = useFetch(sportsNewsEndpoint);
    let technologyData = useFetch(technologyNewsEndpoint);
    let scienceData = useFetch(scienceNewsEndpoint);

    const adaptedBooksData = getNewsList(booksData);
    const adaptedEducationData = getNewsList(educationData);
    const adaptedFilmData = getNewsList(filmData);
    const adaptedMusicData = getNewsList(musicData);
    const adaptedTravelData = getNewsList(travelData);
    const adaptedSustainabilityData = getNewsList(sustainabilityData);
    const adaptedWellnessData = getNewsList(wellnessData);
    const adaptedFashionData = getNewsList(fashionData);
    const adaptedEnvironmentData = getNewsList(environmentData);
    const adaptedPoliticsData = getNewsList(politicsData);
    const adaptedSocietyData = getNewsList(societyData);
    const adaptedFootballData = getNewsList(footballData);
    const adaptedSportsData = getNewsList(sportsData);
    const adaptedTechnologyData = getNewsList(technologyData);
    const adaptedScienceData = getNewsList(scienceData);


    return (
		<Layout>
			<section className="books my-5">
				<Container>
					<h1 className="my-5 pt-5 mx-2 category">Books</h1>
					<NewsCardList newsList={adaptedBooksData}/>
					<p className="textStyle">
						See all news related to books in the Books section{" "}
						<Link to="/category/books" className="linkStyle">Books</Link>
						.
					</p>
				</Container>
			</section>
			<section className="film my-5">
				<Container>
					<h1 className="my-5 pt-5 mx-2 category">Film</h1>
					<NewsCardList newsList={adaptedFilmData}/>
					<p className="textStyle">
						See all news related to film in the Film section{" "}
						<Link to="/category/film" className="linkStyle">Film</Link>
						.
					</p>
				</Container>
			</section>
			<section className="music my-5">
				<Container>
					<h1 className="my-5 pt-5 mx-2 category">Music</h1>
					<NewsCardList newsList={adaptedMusicData}/>
					<p className="textStyle">
						See all news related to music in the Music section{" "}
						<Link to="/category/music" className="linkStyle">Music</Link>
						.
					</p>
				</Container>
			</section>
			<section className="travel my-5">
				<Container>
					<h1 className="my-5 pt-5 mx-2 category">Travel</h1>
					<NewsCardList newsList={adaptedTravelData}/>
					<p className="textStyle">
						See all news related to travel in the Travel section{" "}
						<Link to="/category/travel" className="linkStyle">Travel</Link>
						.
					</p>
				</Container>
			</section>
			<section className="wellness my-5">
				<Container>
					<h1 className="my-5 pt-5 mx-2 category">Wellness</h1>
					<NewsCardList newsList={adaptedWellnessData}/>
					<p className="textStyle">
						See all news related to wellness in the Wellness section{" "}
						<Link to="/category/wellness" className="linkStyle">Wellness</Link>
						.
					</p>
				</Container>
			</section>
			<section className="fashion my-5">
				<Container>
					<h1 className="my-5 pt-5 mx-2 category">Fashion</h1>
					<NewsCardList newsList={adaptedFashionData}/>
					<p className="textStyle">
						See all news related to fashion in the Fashion section{" "}
						<Link to="/category/fashion" className="linkStyle">Fashion</Link>
						.
					</p>
				</Container>
			</section>
			<section className="environment my-5">
				<Container>
					<h1 className="my-5 pt-5 mx-2 category">Environment</h1>
					<NewsCardList newsList={adaptedEnvironmentData}/>
					<p className="textStyle">
						See all news related to environment in the Environment section{" "}
						<Link to="/category/environment" className="linkStyle">Environment</Link>
						.
					</p>
				</Container>
			</section>
			<section className="sustainability my-5">
				<Container>
					<h1 className="my-5 pt-5 mx-2 category">Sustainability</h1>
					<NewsCardList newsList={adaptedSustainabilityData}/>
					<p className="textStyle">
						See all news related to sustainability in the Sustainability section{" "}
						<Link to="/category/sustainability" className="linkStyle">Sustainability</Link>
						.
					</p>
				</Container>
			</section>
			<section className="science my-5">
				<Container>
					<h1 className="my-5 pt-5 mx-2 category">Science</h1>
					<NewsCardList newsList={adaptedScienceData}/>
					<p className="textStyle">
						See all news related to science in the Science section{" "}
						<Link to="/category/science" className="linkStyle">Science</Link>
						.
					</p>
				</Container>
			</section>
			<section className="tech my-5">
				<Container>
					<h1 className="my-5 pt-5 mx-2 category">Technology</h1>
					<NewsCardList newsList={adaptedTechnologyData}/>
					<p className="textStyle">
						See all news related to tech in the Tech section{" "}
						<Link to="/category/technology" className="linkStyle">Technologys</Link>
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
			<section className="sport my-5">
				<Container>
					<h1 className="my-5 pt-5 mx-2 category">More sports</h1>
					<NewsCardList newsList={adaptedSportsData}/>
					<p className="textStyle">
						See all news related to other sports in the More Sports section{" "}
						<Link to="/category/sport" className="linkStyle">More Sports</Link>
						.
					</p>
				</Container>
			</section>
			<section className="education my-5">
				<Container>
					<h1 className="my-5 pt-5 mx-2 category">Education</h1>
					<NewsCardList newsList={adaptedEducationData}/>
					<p className="textStyle">
						See all news related to education in the Education section{" "}
						<Link to="/category/education" className="linkStyle">Education</Link>
						.
					</p>
				</Container>
			</section>
			<section className="politics my-5">
				<Container>
					<h1 className="my-5 pt-5 mx-2 category">Politics</h1>
					<NewsCardList newsList={adaptedPoliticsData}/>
					<p className="textStyle">
						See all news related to politics in the Politics section{" "}
						<Link to="/category/politics" className="linkStyle">Politics</Link>
						.
					</p>
				</Container>
			</section>
			<section className="society my-5">
				<Container>
					<h1 className="my-5 pt-5 mx-2 category">Society</h1>
					<NewsCardList newsList={adaptedSocietyData}/>
					<p className="textStyle">
						See all news related to society in the Society section{" "}
						<Link to="/category/society" className="linkStyle">Society</Link>
						.
					</p>
				</Container>
			</section>
			<section className="favorites my-5">
				<Container>
					<h1 className="my-5 pt-5 mx-2 category">Favourites</h1>
					<p className="pb-3 textStyle">
						Visit the <Link to="/favorites" className="linkStyle">Favourites</Link> section to see the news
						you've added.
					</p>
				</Container>
			</section>

		</Layout>
	);
}

export default Home;
