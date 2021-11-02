import React from "react";
import img from "../../../images/discover.png";
const Discover = () => {
    return (
        <div className="marketPrice discover">
            <div className="container">
                <p>The new way to discover</p>
                <p>
                    The academic search engine reimagined to get you the most
                    relevant results before citations accrue.
                </p>
            </div>
            <div className="container">
                <div>
                    <div>
                        <p>Novel Quality Signals </p>
                        <p>
                            Because the crowd discovers quality papers before
                            citations accrue, and has skin in the game by
                            purchasing tokens we can give you the most relevant
                            results before citations accrue.
                        </p>
                    </div>
                    <div>
                        <p>Influential Citations </p>
                        <p>
                            Every citation has its influence added at the time
                            of publication to determine its weight.
                        </p>
                    </div>
                    <div>
                        <p>Enriched Knowledge Graph</p>
                        <p>
                            Surf your way through interesting connections
                            between co-authors, citations, and papers in our
                            enriched knowledge graph to discover new knowledge.
                        </p>
                    </div>
                </div>
                <div>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Discover;
