import { Button } from "@mui/material";
import React from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Book.css";


const Book = (props) => {
    const history = useNavigate();

    const { _id, name, author, description, price, available, image } = props.book;

    const deleteHandler = async() => {


        await axios.delete(`http://localhost:5000/books/${_id}`)
            .then((res) => res.data)
            .then(() => history("/"))
            .then(() => history("/books"));
    }

    return (
        <div className="card">
            <img src={image} alt={name} />
            <article>
                By {author}
            </article>

            <h3>{name}</h3>
            <p>Description: {description}</p>
            <h3>Price: {price}</h3>
            {/* <p>Availability: {available}</p> */}

            <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: 'auto' }}>Update</Button>&nbsp;
            <Button onClick={deleteHandler} sx={{ mt: 'auto' }}>Delete</Button>
        </div>
    )
}

export default Book
