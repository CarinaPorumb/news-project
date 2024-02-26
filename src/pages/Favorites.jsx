import React, {useContext} from "react";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import {FavoritesContext} from "../store/favorites/context";
import {Alert} from "react-bootstrap";
import CustomPagination from "../components/CustomPagination";
import {removeFromFavorites} from "../store/favorites/actions";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DeleteIcon from '@mui/icons-material/Delete';
import {Link} from "react-router-dom";

function Favorites() {

    const {state, dispatch} = useContext(FavoritesContext);


    function handleFavoriteRemove(id) {
        const actionResult = removeFromFavorites(id);
        dispatch(actionResult);
    }

    console.log(state);

    return (
        <Layout>
            <Container className="align-content-center my-5 py-5">
                <div>
                    {state.news.length === 0 ? (
                            <Alert
                                variant="secondary"
                                className="text-center">
                                Nu ai produse la favorite!
                            </Alert>
                        )
                        : (<Row>
                            {state.news.map((news) => {
                                return (
                                    <Col xs={12} md={6} lg={3} key={news.id}>

                                        <Card
                                            className="NewsCard h-100 d-flex flex-column justify-content-between align-items-center rounded-2 shadow-sm">
                                            <Link to={`/news/${encodeURIComponent(news.id)}`}>
                                                <Card.Img variant="top" src={news.thumbnail}/>
                                                <Card.Body className="title">
                                                    <Card.Title className="text-center ">{news.title}</Card.Title>
                                                    <Card.Text>{news.description}</Card.Text>
                                                </Card.Body>
                                            </Link>
                                            <Button onClick={() => {
                                                handleFavoriteRemove(news.id)
                                            }}><DeleteIcon className="favButton"/>
                                            </Button>
                                        </Card>

                                    </Col>
                                )
                            })}
                        </Row>)
                    }
                </div>
                <CustomPagination baseUrl={`/favorites/`}/>
            </Container>
        </Layout>
    );
}

export default Favorites;
