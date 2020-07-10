import {Link} from "react-router-dom";
import React from "react";

export default function Header() {
    return (
        <div><Link to="/"><h1>EnVolve</h1></Link>
            <h5>Enhance education, involve pupils</h5>
        </div>
    )
}