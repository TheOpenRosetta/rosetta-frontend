import React, { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import img from "../../images/neural-network.png";
import Particles from "react-particles-js";
const Developers = () => {
    return (
        <section>
            <Nav />
            <div className="developers__section">
                <div className="developers__wrapper">
                    <h2>For Developers</h2>
                    <p>
                        The most powerful open source knowledge graph with novel
                        rich contextual information built for today’s web. Build
                        on it today with our open APIs.{" "}
                    </p>
                    <button>See Developer Docs</button>
                </div>
                <div className="open__knowledge">
                    <h2>The richest open knowledge graph online</h2>
                    <div className="container">
                        <div className="info__single">
                            <h2>270mm+</h2>
                            <p>Authors</p>
                        </div>
                        <div className="info__single">
                            <h2>136mm+</h2>
                            <p>Papers</p>
                        </div>
                        <div className="info__single">
                            <h2>1.8bn+</h2>
                            <p>Citations</p>
                        </div>
                    </div>
                </div>
                <div className="neural-network-img">
                    <Mux></Mux>
                </div>
                <div className="developers__wrapper">
                    <h2>Join Discord</h2>
                    <p>
                        Join our discord, and chat with other Rosetta
                        developers.
                    </p>
                    <a href="https://discord.gg/mgU3QP9M">
                        <button>Join Discord</button>
                    </a>
                </div>
            </div>

            <Footer></Footer>
        </section>
    );
};

export default Developers;

const Mux = () => {
    const size = useWindowSize();
    const [num, setNum] = useState(550);
    useEffect(() => {
        if (size.width < 500) {
            setNum(100);
        } else if (size.width < 770) {
            setNum(200);
        } else if (size.width < 1200) {
            setNum(300);
        } else {
            setNum(550);
        }
    }, [size]);
    return (
        <Particles
            params={{
                particles: {
                    number: {
                        value: num,
                        speed: 1,
                    },
                    size: {
                        value: 2,
                        random: true,
                        anim: {
                            speed: 2,
                            size_min: 1,
                        },
                    },
                    move: {
                        enable: true,
                        speed: 0.5,
                    },
                },
                interactivity: {
                    events: {
                        onhover: {
                            enable: true,
                            mode: "repulse",
                        },
                    },
                },
            }}
        />
    );
};

// Hook
function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}
