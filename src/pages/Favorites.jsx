import React, {useContext} from "react";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import {FavoritesContext} from "../store/favorites/context";
import NewsCardList from "../components/NewsCardList";
import {Alert} from "react-bootstrap";
import CustomPagination from "../components/CustomPagination";

function Favorites() {

    const {state, dispatch} = useContext(FavoritesContext);

    console.log(state)
    // function handleFavoriteRemove(id) {
    //     const actionResult = removeFromFavorites(id);
    //     dispatch(actionResult);
    // }

    return (
        <Layout>
            <Container>
                <div className="m-5 p-5">
                    {state.news.length === 0 ? (
                            <Alert
                                variant="secondary"
                                className="text-center">
                                Nu ai produse la favorite!
                            </Alert>
                        )
                        : (<NewsCardList newsList={state.news}/>)}
                </div>
                <CustomPagination baseUrl={`/favorites/`}/>
            </Container>
        </Layout>
    );
}

export default Favorites;
