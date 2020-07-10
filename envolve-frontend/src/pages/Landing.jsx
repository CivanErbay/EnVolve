import React from "react"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Footer from "../components/Footer";

export default function Landing() {

    return (
        <>
            <h1>EnVolve</h1>
            <h5>Enhance education, involve pupils</h5>
            <div>
                <form>
                    <TextField id="standard-basic" label="Standard" />
                </form>
                <Button variant="contained">Submit</Button>
            </div>
            <Footer/>
        </>
    )
}