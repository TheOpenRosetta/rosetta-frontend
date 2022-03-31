import React, { useState } from "react";
import { Document, Page } from "react-pdf";

const AllPagesPDFViewer = (props) => {
  const [numPages, setNumPages] = useState(null);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const { pdf } = props;

  return (
    <div className="all-page-container">
      <Document
      file={pdf}
      options={{ workerSrc: "/pdf.worker.js" }}
      onLoadSuccess={onDocumentLoadSuccess}
    >
      {Array.from(new Array(numPages), (el, index) => (
        <Page key={`page_${index + 1}`} pageNumber={index + 1} />
      ))}
    </Document>
    </div>
  );
};

export default AllPagesPDFViewer;