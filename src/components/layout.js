import React from "react";
import { Link } from "gatsby";
import { FaTwitter } from "react-icons/fa";
import "./layout.css";
import { Helmet } from "react-helmet";

const ListLink = props => (
    <li
        style={{
            display: `inline-block`,
            marginRight: `1rem`,
            padding: `.5rem`
        }}
    >
        <Link
            to={props.to}
            style={{
                color: `snow`,
                textShadow: `none`,
                backgroundImage: `none`
            }}
        >
            {props.children}
        </Link>
    </li>
);

export default ({ children }) => (
    <div id={`body`} /*style={{ minHeight: `100vh` }}*/>
        <Helmet>
            <meta name="theme-color" content="#8C2929" />
            <title>Xmas Shark</title>
        </Helmet>
        <div
            id={`header`}
            style={{
                backgroundColor: `#8B2D2D`,
                fontWeight: `bold`,
                padding: `7px 7px`
            }}
        >
            <Link
                to="/"
                style={{
                    fontWeight: `bold`,
                    fontSize: `24pt`,
                    paddingLeft: `15px`,
                    textShadow: `none`,
                    backgroundImage: `none`,
                    color: `snow`
                }}
            >
                The Xmas Shark
            </Link>
            <ul style={{ listStyle: `none` }}>
                <ListLink to="/">Home</ListLink>
                <ListLink to="/about/">About</ListLink>
                <ListLink to="/merch/">Merch</ListLink>
            </ul>
        </div>
        <div
            style={{
                margin: `0 auto`,
                maxWidth: 650,
                padding: `0 1rem 50px`
            }}
        >
            {children}
        </div>
        <footer
            style={{
                position: `fixed`,
                bottom: `0`,
                padding: `15px 30px`,
                width: `100%`,
                textAlign: `right`
            }}
        >
            <div>
                <a
                    href="https://twitter.com/TheXmasShark"
                    style={{
                        backgroundImage: `none`,
                        color: `#1DA1F2`
                    }}
                >
                    <FaTwitter size="18pt" />
                </a>
            </div>
        </footer>
    </div>
);
