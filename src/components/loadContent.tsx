import React, { useState } from "react";

function LoadContent() {
    const [ShowMore, setShowMore] = useState(false);
    const extraContent = (
        <div>
            <p className="extra-content">Extended</p>
        </div>
    );
    const linkName = ShowMore ? "Show Less << " : "Show More >> ";
    return (
        <div className="App">
            <a
                className="read-more-link"
                onClick={() => {
                    setShowMore(!ShowMore);
                }}
            >
                <h2>{linkName}</h2>
            </a>
            {ShowMore && extraContent}
        </div>
    );
}

export default LoadContent;
