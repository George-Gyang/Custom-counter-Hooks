import React from "react";
import "../assets/footer.css"

const Footer = () => {


    const d = new Date()
    const year =d.getFullYear()

    return (
        <footer>
            <p>GeoTech development. All rights reserved. </p>
            <small> &copy; {year}</small>
        </footer>
    )
}

export default Footer;