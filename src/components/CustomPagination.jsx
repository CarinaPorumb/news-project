import Pagination from 'react-bootstrap/Pagination';
import React from 'react';
import {useNavigate} from "react-router-dom";
import "./CustomPagination.css"

function CustomPagination({active = 1, baseUrl}) {

    let navigate = useNavigate();

    let items = [];

    for (let number = 1; number <= 3; number++) {
        items.push(
            <Pagination.Item className="customPage" key={number} active={number === active}
                             onClick={() => {navigate(`${baseUrl}?page=${number}`)}}

            >{number}</Pagination.Item>
        );
    }

    return (
        <div>
            <Pagination className="d-flex justify-content-center mt-5 " size="sm">{items}</Pagination>
        </div>
    )
}

export default CustomPagination;