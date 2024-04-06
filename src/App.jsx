import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Text from "./components/text/Text";
import Image from "./components/images/Image";
import Document from "./components/documents/Document";
import Website from "./components/websites/Website";

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />

        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/text" element={<Text />} />
            <Route path="/images" element={<Image/>} />
            <Route path="/documents" element={<Document/>} />
            <Route path="/websites" element={<Website/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

// import React, { useState } from 'react';
// import axios from 'axios';

// const TextToPDFForm = () => {
//     const [text, setText] = useState('');
    
//     const handleSubmit = async (e) => {
//         e.preventDefault();
        
//         try {
//             const response = await axios.post('http://localhost:3000/generate-pdf', { text }, { responseType: 'blob' });
            
//             // Create blob URL for downloading PDF
//             const blob = new Blob([response.data]);
//             const url = window.URL.createObjectURL(blob);
            
//             // Create anchor tag for downloading
//             const link = document.createElement('a');
//             link.href = url;
//             link.setAttribute('download', 'generated_pdf.pdf');
//             document.body.appendChild(link);
//             link.click();
            
//             // Clean up
//             URL.revokeObjectURL(url);
//             document.body.removeChild(link);
            
//             alert('PDF generated successfully and downloaded!');
//         } catch (error) {
//             console.error('Error generating PDF:', error);
//             alert('Error generating PDF. Please try again.');
//         }
//     };
    
//     return (
//         <form onSubmit={handleSubmit}>
//             <textarea value={text} onChange={(e) => setText(e.target.value)} />
//             <button type="submit">Generate PDF</button>
//         </form>
//     );
// };

// export default TextToPDFForm;
