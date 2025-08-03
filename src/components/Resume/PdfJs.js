import React, { useRef, useState, useEffect } from "react";
import * as PDFJS from "pdfjs-dist";

// Individual page component
function PdfPage({ page, pageNumber }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!page || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const viewport = page.getViewport({ scale: 1.8 }); // Increased size
    
    // Set canvas size
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    
    const renderContext = {
      canvasContext: canvas.getContext("2d"),
      viewport: viewport,
    };
    
    page.render(renderContext).promise.catch((error) => {
      console.error("Page render error:", error);
    });
  }, [page]);

  return (
    <div style={{ marginBottom: "30px", textAlign: "center" }}>
      <div style={{ marginBottom: "10px", fontWeight: "bold", color: "#333" }}>
        Page {pageNumber}
      </div>
      <canvas 
        ref={canvasRef} 
        style={{ 
          maxWidth: "100%", 
          height: "auto",
          border: "1px solid #ddd",
          borderRadius: "4px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          margin: "10px 0"
        }}
      />
    </div>
  );
}

export default function PdfJs({ src }) {
  PDFJS.GlobalWorkerOptions.workerSrc =
    "https://unpkg.com/pdfjs-dist@5.3.31/build/pdf.worker.min.mjs";

  const [pdfDoc, setPdfDoc] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    console.log("Loading PDF from:", src);
    setLoading(true);
    setError(null);
    
    const loadingTask = PDFJS.getDocument(src);
    loadingTask.promise.then(
      (loadedDoc) => {
        console.log("PDF loaded successfully:", loadedDoc);
        setPdfDoc(loadedDoc);
        
        // Load all pages
        const pagePromises = [];
        for (let i = 1; i <= loadedDoc.numPages; i++) {
          pagePromises.push(loadedDoc.getPage(i));
        }
        
        Promise.all(pagePromises).then((loadedPages) => {
          setPages(loadedPages);
          setLoading(false);
        });
      },
      (error) => {
        console.error("PDF load error:", error);
        setError("Error loading PDF: " + error.message);
        setLoading(false);
      }
    );
  }, [src]);

  if (loading) {
    return <div style={{ padding: "20px", textAlign: "center" }}>Loading PDF...</div>;
  }

  if (error) {
    return <div style={{ padding: "20px", textAlign: "center", color: "red" }}>{error}</div>;
  }

  return (
    <div style={{ 
      maxWidth: "100%",
      margin: "0 auto",
      padding: "20px"
    }}>
      {pages.map((page, index) => (
        <PdfPage key={index} page={page} pageNumber={index + 1} />
      ))}
    </div>
  );
}
