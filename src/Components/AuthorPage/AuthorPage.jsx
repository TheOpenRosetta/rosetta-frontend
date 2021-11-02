import mark from "../../images/check mark.png";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
const AuthorPage = () => {
    return (
        <>
            <Nav></Nav>
            <section className="authorPage">
                <div>
                    <h2>
                        How to earn cryptocurrencies with real value on Rosetta 
                    </h2>
                    <div>
                        <p>
                            <img src={mark} alt="" />
                            Zero fees to participate
                        </p>
                        <p>
                            <img src={mark} alt="" />
                            Zero contracts
                        </p>
                        <p>
                            <img src={mark} alt="" />
                            Get paid today
                        </p>
                    </div>
                </div>
                <div className="container">
                    <div>
                        <p>
                            Authors can play three roles in the peer-to-peer
                            network that enables them to earn extra income.These
                            are:
                        </p>
                        <div>
                            <p>1. submitting replicable papers</p>
                            <p>2. validating papers</p>
                            <p>3. being a judge for validation</p>
                        </div>
                        <p>
                            Because Rosetta is built on game theory we require
                            stakes anytime an action is performed to have a
                            disincentive for fraudulent actions.{" "}
                        </p>
                    </div>
                    <div>
                        <p>
                            1. Instantly publishing replicable papers for free. 
                        </p>
                        <p>
                            The first, submitting replicable papers, is simple.
                            Authors publish instantly to share their paper with
                            the network. Alongside their paper they share all
                            their research outputs to allow for replicability,
                            and get more citations. Rewards aren’t given unless
                            the paper is replicable to incentivise the
                            scientific method.
                        </p>
                        <p>
                            Rewards are given based on the quality of work on
                            that paper. ImpactScore is a personalised pagerank
                            algorithm that measures the quality of the paper by
                            it’s citations, and their weight. Every paper
                            submitted creates an open market for the paper, and
                            each author gets their respective allocation of
                            paper tokens. Authors choose the percentage of
                            contribution weight at the time of publication to
                            remove rank order, and divide the paper tokens
                            fairly. 
                        </p>
                        <p>
                            Based on the ownership percentage of the paper
                            tokens for the paper, is how much rewards go to that
                            owner. Authors can choose to sell the tokens at any
                            time to anyone. This allows anyone to earn rewards
                            from the knowledge commons based on a paper's
                            quality, and creates signals around the quality of a
                            paper before citations accrue because people buy
                            into it in anticipation of influential citations
                            accruing, and the rewards distributed to that paper
                            increasing.
                        </p>
                    </div>
                    <div>
                        <p>2. Validating work </p>
                        <p>
                            Because papers are published instantly the
                            validators job in the network is to ensure that the
                            paper replicates. This ensures the truthfulness of
                            the paper. Quality is then determined by open
                            markets. Every paper has reward pools available for
                            validators to earn for replicating the work. If a
                            paper is falsified, fraudulent, or plagiarism it
                            goes to a set of democratic judges.   
                        </p>
                    </div>
                    <div>
                        <p>3. Judges </p>
                        <p>
                            Because papers are published instantly the
                            validators job in the network is to ensure that the
                            paper replicates. This ensures the truthfulness of
                            the paper. Quality is then determined by open
                            markets. Every paper has reward pools available for
                            validators to earn for replicating the work. If a
                            paper is falsified, fraudulent, or plagiarism it
                            goes to a set of democratic judges. 
                        </p>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    );
};

export default AuthorPage;
