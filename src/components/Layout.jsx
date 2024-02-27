import React, {useEffect, useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Layout.css";
import Button from "react-bootstrap/Button";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

function Layout(props) {

    const [isVisible, setIsVisible] = useState(false);

    function handleScroll() {
        window.scrollTo({
            top: 0, behavior: "smooth"
        });
    }

    useEffect(() => {
        const handleVisibility = () => {
            if (window.scrollY > window.innerHeight / 2) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener("scroll", handleVisibility)

        return () => window.removeEventListener("scroll", handleVisibility);
    }, []);

    return (
		<div className="Layout">
			<Header/>
			<main>{props.children}</main>
			<Button
				className="scrollTop"
				onClick={handleScroll}
				style={{visibility: isVisible ? "visible" : "hidden"}}
			><ArrowDropUpIcon/></Button>
			<Footer/>
		</div>
	);
}

export default Layout;
