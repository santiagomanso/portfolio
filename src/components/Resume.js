import React, { useState } from 'react'
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


export default function MyApp() {

    const pdf = 'https://localhost:3000/cv.pdf'

    //eslint-disable-next-line
    const [numPages, setNumPages] = useState(14);
    //eslint-disable-next-line
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
  
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Document
          file = { pdf }
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    );
  }
