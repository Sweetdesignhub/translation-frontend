import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../../../styles/components/document.module.css";
import Language from "../../common/Language";

function Document() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [detectedLanguage, setDetectedLanguage] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("");
  const [translatedPdfUrl, setTranslatedPdfUrl] = useState("");
  const [supportedLanguages, setSupportedLanguages] = useState([]);

  useEffect(() => {
    fetchSupportedLanguages();
  }, []);

  const fetchSupportedLanguages = async () => {
    try {
      const response = await axios.get(
        "https://translation-backend-jyki.onrender.com/supported-languages"
      );
      setSupportedLanguages(response.data);
    } catch (error) {
      console.error("Error fetching supported languages:", error);
    }
  };

  const handleFileChange = async (event) => {
    setSelectedFile(event.target.files[0]);

    // Send the uploaded PDF file to the backend for language detection
    const formData = new FormData();
    formData.append("pdf", event.target.files[0]);

    try {
      const response = await axios.post(
        "https://translation-backend-jyki.onrender.com/detect-language",
        formData
      );
      const detectedLanguageCode = response.data.detectedLanguage;
      const detectedLanguageName = supportedLanguages.find(
        (lang) => lang.code === detectedLanguageCode
      )?.name;
      setDetectedLanguage(detectedLanguageName || detectedLanguageCode);
    } catch (error) {
      console.error("Error detecting PDF language:", error);
    }
  };

  const handleLanguageChange = (event) => {
    setTargetLanguage(event.target.value);
  };

  const handleTranslate = async () => {
    if (!selectedFile || !targetLanguage) {
      alert("Please select a file and target language");
      return;
    }

    const formData = new FormData();
    formData.append("pdf", selectedFile);

    try {
      const response = await axios.post(
        `https://translation-backend-jyki.onrender.com/translate?target=${targetLanguage}`,
        formData,
        {
          responseType: "blob",
        }
      );

      const translatedPdfBlob = new Blob([response.data], {
        type: "application/pdf",
      });
      const translatedPdfUrl = URL.createObjectURL(translatedPdfBlob);
      setTranslatedPdfUrl(translatedPdfUrl);

      alert("PDF translated successfully, now you can download");
    } catch (error) {
      console.error("Error translating PDF:", error);
      alert("Error translating PDF");
    }
  };

  const handleDownloadPdf = () => {
    const a = document.createElement("a");
    a.href = translatedPdfUrl;
    a.download = "translated.pdf";

    a.onload = () => {
      alert("Downloaded successfully!");
    };

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(translatedPdfUrl);
  };

  return (
    <div className={`${styles.document}`}>
      <Language />

      <div className={`${styles.box}`}>
        <div>
          {detectedLanguage && <p>Detected Language: {detectedLanguage}</p>}
          <h4>Translate PDF</h4>
          <input type="file" accept=".pdf" onChange={handleFileChange} />

          <select value={targetLanguage} onChange={handleLanguageChange}>
            <option value="">Select Target Language</option>
            {supportedLanguages.map((language) => (
              <option key={language.code} value={language.code}>
                {language.name}
              </option>
            ))}
          </select>
          <button className={`${styles.btn}`} onClick={handleTranslate}>
            Translate
          </button>
          {translatedPdfUrl && (
            <div style={{ marginTop: "2rem" }}>
              <h4>Translated PDF</h4>
              <button className={`${styles.btn}`} onClick={handleDownloadPdf}>
                Download Translated PDF
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Document;
