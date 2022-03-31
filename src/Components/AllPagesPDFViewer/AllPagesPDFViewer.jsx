import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import "./_allPagesPDFViewer.scss";

const AllPagesPDFViewer = ({ pdf }) => {
    const [pdfName, setPdfName] = useState("");
    const [pdfPageNumber, setPdfPageNumber] = useState("");
    const [pageNumber, setPageNumber] = useState(1);
    const [scale, setScale] = useState(1);
    const [numPages, setNumPages] = useState(null);
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPdfName("Protecting Your Financial Legacy");
        setPdfPageNumber(numPages);
    }
    const handleZoomIn = () => {
        if (scale < 1.5) {
            setScale((prev) => prev + 0.1);
        }
    };
    const handleZoomOut = () => {
        if (scale > 0.7) {
            setScale((prev) => prev - 0.1);
        }
    };

    return (
        <>
            <div className="all-page-container">
                <Document
                    file={pdf}
                    options={{ workerSrc: "/pdf.worker.js" }}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    {Array.from(new Array(numPages), (el, index) => {
                        return (
                            <Page
                                key={`page_${index + 1}`}
                                pageNumber={index + 1}
                                scale={scale}
                            />
                        );
                    })}
                </Document>
            </div>
            <div className="all-page-container-bottom">
                <span>{pdfName}</span>
                <span className="pdf-page">
                    <span>{pageNumber}</span> / {numPages}
                </span>
                <span className="zoom-feature">
                    <span onClick={handleZoomIn}>
                        <Icon
                            height={18}
                            icon="akar-icons:zoom-in"
                            color="#e0e0e0"
                        />
                    </span>
                    <span onClick={handleZoomOut}>
                        <Icon
                            height={18}
                            icon="akar-icons:zoom-out"
                            color="#e0e0e0"
                        />
                    </span>
                </span>
            </div>
        </>
    );
};

export default AllPagesPDFViewer;
