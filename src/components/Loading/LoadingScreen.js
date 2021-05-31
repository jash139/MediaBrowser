import React, { useState } from "react";

import LoadingIcon from "./LoadingIcon";

import "./LoadingScreen.css";

function Loading() {
    const [showLoadingScreen, setShowLoadingScreen] = useState(true);
    setTimeout(() => {
        setShowLoadingScreen(false);
    }, 1500);
    return (
        <React.Fragment>
            { showLoadingScreen && <div className="loading-screen">
                <div>
                    <div className="loading-icon">
                        <LoadingIcon />
                    </div>
                </div>
            </div>}
        </React.Fragment>
    );
}

export default Loading;