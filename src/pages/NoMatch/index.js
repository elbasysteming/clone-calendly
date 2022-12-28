import React from "react";
import { useLocation } from "react-router-dom";

export const NoMatch = () => {
    let location = useLocation();

    return (
        <div className="container">
            <h3>
                No match for <code>{location.pathname} 😥</code>
            </h3>
        </div>
    );
};
