import React from "react";
import samplePDF from "../../../assets/yellow-paper.pdf";
import img1 from "../../../images/comments1.png";
import img2 from "../../../images/comments2.png";
import AllPagesPDFViewer from "../../AllPagesPDFViewer/AllPagesPDFViewer";
const PaperBody = () => {
    return (
        <div className="paperBody container">
            <div className="paperBody__left">
                <AllPagesPDFViewer pdf={samplePDF} />
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
