import React from "react";
import img1 from "../../../images/comments1.png";
import img2 from "../../../images/comments2.png";
const PaperBody = () => {
    return (
        <div className="paperBody container">
            <div className="paperBody__left">
                <h2>1 Introduction</h2>
                <p>1.1 Motivation</p>
                <p>
                    In this work we present the Arweave protocol, a new
                    blockchain-like data structure called the blockweave. The
                    protocol is designed to provide scalable and permanent
                    on-chain data storage in a sustainable manner. The
                    blockweave forms the underlying data structure of the
                    permaweb - the array of data, websites, and decentralised
                    applications hosted on the blockweave, accessible on normal
                    web browsers.
                </p>
                <p>
                    In this paper, we will introduce several technological
                    innovations that, together, allow Arweave to offer unique
                    utility in the on-chain data storage space, including:
                    blockweave, blockshadows, AIIA, decentralised content
                    policies, and their mechanism design. Our collective ability
                    to store and share information between individuals and
                    across time to new generations has been essential to
                    humanity’s successes. Despite our best efforts, however,
                    throughout history, our methods of storing knowledge have
                    been vulnerable to destruction and the information subject
                    to loss or alteration – sometimes with intentional malice,
                    and more often accidentally. Just as in the ancient world,
                    modern history is full of examples of the destruction,
                    alteration, and loss of vital information, from fires at
                    libraries and archives [41, 22, 35], to book burning in
                    authoritarian states [57]. Today, with a wealth of digital
                    information surrounding us, we can easily begin to assume
                    that because information is readily available online today,
                    it can’t be altered or lost. Unfortunately, this is
                    foundationally untrue [21, 37]. Although the internet is a
                    wildly successful system of distributed information
                    dissemination, it currently lacks a complementary system of
                    decentralised, permanent knowledge storage. 
                </p>
                <p>
                    Almost all of the pages making up the web today are housed
                    within centralised data stores, each typically controlled by
                    one organisation or even one individual. This means that
                    when accessing information online, we are wholly reliant on
                    these centralised organisations and individuals continuing
                    to allow us to do so. Access can be revoked at any time, or
                    the data can simply be unintentionally lost or degraded.
                    Serving information on the internet incurs server and other
                    upkeep costs, meaning whole websites, applications, and
                    information stores can simply disappear when funds are no
                    longer available for maintenance. Another significant risk
                    of this centralised data storage model is that the data is
                    vulnerable to manipulation by these
                </p>
            </div>
            <div className="paperBody__right">
                <div>
                    <p>Comments</p>
                </div>
                <div>
                    {comments.map((x) => (
                        <div className="comments__card">
                            <img src={x.img} alt="" />
                            <div>
                                <div>
                                    <p>{x.name}</p>
                                    <p>{x.date}</p>
                                </div>
                                <p>{x.comment}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PaperBody;

export const comments = [
    {
        img: img1,
        name: "Albert Einstein",
        comment:
            "How does this effect my theory on the relativity of space, and time?",
        date: "Today 11:23",
    },
    {
        img: img2,
        name: "Ivan Uemlianin",
        comment: "Falsifies it, sir. ",
        date: "Today 11:23",
    },
];
