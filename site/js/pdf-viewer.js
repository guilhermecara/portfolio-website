// 1. Point to your specific CV file relative to view.html
const url = './cv/guilherme-cardoso-de-araujo-cv-fr.pdf';

// 2. Configure the worker (must match the core library version)
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

// 3. Fetch and render the document
const loadingTask = pdfjsLib.getDocument(url);

loadingTask.promise.then(pdf => {
    console.log('CV loaded successfully. Total pages:', pdf.numPages);
    
    // Fetch the first page of the CV
    return pdf.getPage(1);
}).then(page => {
    // 4. Set scale (1.5 is usually a good baseline for A4/Letter size documents on desktop)
    const scale = 1.5; 
    const viewport = page.getViewport({ scale: scale });
    
    // 5. Prepare the canvas
    const canvas = document.getElementById('pdf-render');
    const context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    
    const renderContext = {
        canvasContext: context,
        viewport: viewport
    };
    
    // 6. Render the page
    page.render(renderContext).promise.then(() => {
        console.log('CV page rendered');
    });
}).catch(error => {
    console.error('Error loading the CV:', error);
});