
// import React, { useEffect, useState } from "react";
// import {
//   Award,
//   FileText,
//   Download,
//   Eye,
//   CalendarDays,
//   ShieldCheck,
//   LoaderCircle,
//   AlertCircle,
//   RefreshCw,
//   X,
//   ExternalLink,
// } from "lucide-react";

// import certificateService from "../../services/certificateService";
// import "./PublicDisclosure.css";

// const API_BASE_URL = (
//   import.meta.env.VITE_API_URL || "http://localhost:5000/api"
// ).replace(/\/api\/?$/, "");

// const getPdfUrl = (pdfUrl) => {
//   if (!pdfUrl) return "";

//   if (/^https?:\/\//i.test(pdfUrl)) {
//     return pdfUrl;
//   }

//   return `${API_BASE_URL}${pdfUrl.startsWith("/") ? "" : "/"}${pdfUrl}`;
// };

// const formatDate = (date) => {
//   if (!date) return "Date not specified";

//   const parsedDate = new Date(date);

//   if (Number.isNaN(parsedDate.getTime())) {
//     return "Date not specified";
//   }

//   return parsedDate.toLocaleDateString("en-IN", {
//     day: "2-digit",
//     month: "long",
//     year: "numeric",
//   });
// };

// const PublicDisclosure = () => {
//   const [certificates, setCertificates] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [selectedCertificate, setSelectedCertificate] = useState(null);

//   const fetchCertificates = async () => {
//     try {
//       setLoading(true);
//       setError("");

//       const response = await certificateService.getPublished();

//       const data = Array.isArray(response)
//         ? response
//         : response?.data || [];

//       setCertificates(
//         data.filter((certificate) => certificate.isPublished !== false)
//       );
//     } catch (err) {
//       console.error("Certificate fetching error:", err);

//       setError(
//         err.response?.data?.message ||
//           "Unable to load certificates. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCertificates();
//   }, []);

//   const handleDownload = (certificate) => {
//     const pdfUrl = getPdfUrl(certificate.pdfUrl);

//     if (!pdfUrl) return;

//     const link = document.createElement("a");
//     link.href = pdfUrl;
//     link.download = `${certificate.title || "certificate"}.pdf`;
//     link.target = "_blank";
//     link.rel = "noopener noreferrer";

//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <main className="public-disclosure-page">

//       {/* HERO */}
//       <section className="disclosure-hero">
//         <div className="disclosure-hero-pattern" />

//         <div className="disclosure-container disclosure-hero-content">
//           <div className="disclosure-eyebrow">
//             <ShieldCheck size={16} />
//             <span>Transparency & Accountability</span>
//           </div>

//           <h1>
//             Public <span>Disclosure</span>
//           </h1>

//           <p>
//             Access our institutional certificates, recognitions and
//             official documents. We believe in transparency and making
//             important institutional information accessible to everyone.
//           </p>

//           <div className="disclosure-hero-meta">
//             <span>
//               <FileText size={16} />
//               Official Documents
//             </span>

//             <span>
//               <ShieldCheck size={16} />
//               Verified Records
//             </span>
//           </div>
//         </div>

//         <div className="disclosure-hero-watermark">
//           SNGA
//         </div>
//       </section>

//       {/* CERTIFICATE SECTION */}
//       <section className="disclosure-certificates">
//         <div className="disclosure-container">

//           <div className="disclosure-section-heading">
//             <div>
//               <span className="disclosure-section-label">
//                 INSTITUTIONAL DOCUMENTS
//               </span>

//               <h2>Certificates & Recognitions</h2>

//               <p>
//                 Explore the official certificates and documents
//                 published by Shifan Noor Global Academy.
//               </p>
//             </div>

//             <div className="disclosure-document-count">
//               <Award size={19} />
//               <div>
//                 <strong>{certificates.length}</strong>
//                 <span>Published Documents</span>
//               </div>
//             </div>
//           </div>

//           {loading && (
//             <div className="disclosure-state">
//               <LoaderCircle className="disclosure-spinner" size={34} />
//               <h3>Loading certificates</h3>
//               <p>Please wait while we retrieve the documents.</p>
//             </div>
//           )}

//           {!loading && error && (
//             <div className="disclosure-state disclosure-error">
//               <AlertCircle size={36} />
//               <h3>Unable to load documents</h3>
//               <p>{error}</p>

//               <button
//                 type="button"
//                 onClick={fetchCertificates}
//                 className="disclosure-retry"
//               >
//                 <RefreshCw size={16} />
//                 Try Again
//               </button>
//             </div>
//           )}

//           {!loading && !error && certificates.length === 0 && (
//             <div className="disclosure-state">
//               <FileText size={42} />
//               <h3>No certificates published yet</h3>
//               <p>
//                 Official institutional documents will appear here
//                 once they are published.
//               </p>
//             </div>
//           )}

//           {!loading && !error && certificates.length > 0 && (
//             <div className="disclosure-grid">
//               {certificates.map((certificate, index) => {
//                 const pdfUrl = getPdfUrl(certificate.pdfUrl);

//                 return (
//                   <article
//                     className="disclosure-card"
//                     key={certificate.id}
//                     style={{
//                       "--card-index": index,
//                     }}
//                   >
//                     <div className="disclosure-card-top">
//                       <div className="disclosure-file-icon">
//                         <FileText size={25} />
//                       </div>

//                       <span className="disclosure-pdf-tag">
//                         PDF DOCUMENT
//                       </span>
//                     </div>

//                     <div className="disclosure-card-content">
//                       <span className="disclosure-category">
//                         {certificate.category || "Institutional Document"}
//                       </span>

//                       <h3>{certificate.title}</h3>

//                       {certificate.description && (
//                         <p className="disclosure-description">
//                           {certificate.description}
//                         </p>
//                       )}

//                       {certificate.issuer && (
//                         <div className="disclosure-issuer">
//                           Issued by: <strong>{certificate.issuer}</strong>
//                         </div>
//                       )}

//                       <div className="disclosure-date">
//                         <CalendarDays size={15} />
//                         <span>
//                           {formatDate(certificate.issueDate)}
//                         </span>
//                       </div>
//                     </div>

//                     <div className="disclosure-card-actions">
//                       <button
//                         type="button"
//                         className="disclosure-view-btn"
//                         onClick={() =>
//                           setSelectedCertificate(certificate)
//                         }
//                         disabled={!pdfUrl}
//                       >
//                         <Eye size={16} />
//                         View Document
//                       </button>

//                       <button
//                         type="button"
//                         className="disclosure-download-btn"
//                         onClick={() => handleDownload(certificate)}
//                         disabled={!pdfUrl}
//                         aria-label={`Download ${certificate.title}`}
//                       >
//                         <Download size={17} />
//                       </button>
//                     </div>
//                   </article>
//                 );
//               })}
//             </div>
//           )}

//         </div>
//       </section>

//       {/* FOOTER NOTE */}
//       <section className="disclosure-footer-note">
//         <div className="disclosure-container">
//           <ShieldCheck size={22} />

//           <div>
//             <strong>Institutional Transparency</strong>
//             <p>
//               This page provides access to the official documents
//               published by Shifan Noor Global Academy.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* PDF PREVIEW MODAL */}
//       {selectedCertificate && (
//         <div
//           className="disclosure-modal-overlay"
//           onClick={() => setSelectedCertificate(null)}
//         >
//           <div
//             className="disclosure-modal"
//             onClick={(event) => event.stopPropagation()}
//           >
//             <div className="disclosure-modal-header">
//               <div>
//                 <FileText size={19} />
//                 <div>
//                   <strong>{selectedCertificate.title}</strong>
//                   <span>PDF Document Preview</span>
//                 </div>
//               </div>

//               <div className="disclosure-modal-actions">
//                 <button
//                   type="button"
//                   onClick={() => handleDownload(selectedCertificate)}
//                   title="Download PDF"
//                 >
//                   <Download size={18} />
//                 </button>

//                 <a
//                   href={getPdfUrl(selectedCertificate.pdfUrl)}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   title="Open in new tab"
//                 >
//                   <ExternalLink size={18} />
//                 </a>

//                 <button
//                   type="button"
//                   onClick={() => setSelectedCertificate(null)}
//                   title="Close preview"
//                 >
//                   <X size={20} />
//                 </button>
//               </div>
//             </div>

//             <iframe
//               src={`${getPdfUrl(selectedCertificate.pdfUrl)}#toolbar=1&navpanes=0`}
//               title={selectedCertificate.title}
//               className="disclosure-pdf-frame"
//             />
//           </div>
//         </div>
//       )}

//     </main>
//   );
// };

// export default PublicDisclosure;



import React, { useEffect, useState } from "react";
import {
  ShieldCheck,
  FileText,
  Award,
  Download,
  Eye,
  CalendarDays,
  LoaderCircle,
  AlertCircle,
  RefreshCw,
  X,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";

import certificateService from "../../services/certificateService";
import "./PublicDisclosure.css";

const API_BASE_URL = (
  import.meta.env.VITE_API_URL || "http://localhost:5000/api"
).replace(/\/api\/?$/, "");

const getPdfUrl = (pdfUrl) => {
  if (!pdfUrl) return "";

  if (/^https?:\/\//i.test(pdfUrl)) {
    return pdfUrl;
  }

  return `${API_BASE_URL}${pdfUrl.startsWith("/") ? "" : "/"}${pdfUrl}`;
};

const formatDate = (date) => {
  if (!date) return "Date not specified";

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return "Date not specified";
  }

  return parsedDate.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

const PublicDisclosure = () => {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const fetchCertificates = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await certificateService.getPublished();

      const data = Array.isArray(response)
        ? response
        : Array.isArray(response?.data)
          ? response.data
          : [];

      setCertificates(
        data.filter((item) => item.isPublished !== false)
      );
    } catch (err) {
      console.error("Public certificates error:", err);

      setError(
        err.response?.data?.message ||
          "We couldn't load the documents. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCertificates();
  }, []);

  // Close PDF preview with Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedCertificate(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Prevent background scrolling while preview is open
  useEffect(() => {
    document.body.style.overflow = selectedCertificate
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedCertificate]);

  const handleDownload = (certificate) => {
    const pdfUrl = getPdfUrl(certificate.pdfUrl);

    if (!pdfUrl) return;

    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = `${certificate.title || "SNGA-Certificate"}.pdf`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="public-disclosure-page">

      {/* =====================================================
          HERO — CINEMATIC PUBLIC DISCLOSURE
      ===================================================== */}

      <section className="disclosure-hero">

        <div className="disclosure-hero__image" />
        <div className="disclosure-hero__grid" />
        <div className="disclosure-hero__glow" />

        <div
          className="disclosure-hero__watermark"
          aria-hidden="true"
        >
          SNGA
        </div>

        <div className="disclosure-container disclosure-hero__container">

          <div className="disclosure-hero__topline">
            <span>SHIFAN NOOR GLOBAL ACADEMY</span>
            <span>INSTITUTIONAL INFORMATION</span>
          </div>

          <div className="disclosure-hero__content">

            <div className="disclosure-hero__eyebrow">
              <ShieldCheck size={17} />
              <span>TRANSPARENCY & ACCOUNTABILITY</span>
            </div>

            <h1>
              Public
              <br />
              <em>Disclosure.</em>
            </h1>

            <p>
              Access our institutional certificates, recognitions
              and official documents. We believe in transparency
              and making important institutional information
              accessible to everyone.
            </p>

            <div className="disclosure-hero__meta">

              <div>
                <FileText size={17} />
                <span>Official Documents</span>
              </div>

              <div>
                <ShieldCheck size={17} />
                <span>Verified Records</span>
              </div>

            </div>

          </div>

          <div className="disclosure-hero__bottom">
            <span>SHIFAN NOOR GLOBAL ACADEMY · CBSE</span>

            <span className="disclosure-hero__scroll">
              SCROLL TO EXPLORE
              <i />
            </span>
          </div>

        </div>

        <div className="disclosure-hero__bottom-line" />

      </section>


      {/* =====================================================
          CERTIFICATE COLLECTION
      ===================================================== */}

      <section className="disclosure-documents">

        <div className="disclosure-container">

          <div className="disclosure-documents__heading">

            <div className="disclosure-documents__intro">

              <span className="disclosure-section-kicker">
                INSTITUTIONAL DOCUMENTS
              </span>

              <h2>
                Certificates &
                <br />
                <em>Recognitions.</em>
              </h2>

              <p>
                Explore the official certificates and institutional
                documents published by Shifan Noor Global Academy.
              </p>

            </div>

            <div className="disclosure-count">

              <div className="disclosure-count__icon">
                <Award size={23} />
              </div>

              <div>
                <strong>{certificates.length}</strong>
                <span>Published Documents</span>
              </div>

            </div>

          </div>


          {/* LOADING */}

          {loading && (
            <div className="disclosure-state">
              <LoaderCircle
                size={36}
                className="disclosure-spinner"
              />

              <h3>Loading documents</h3>

              <p>
                Please wait while we retrieve the published certificates.
              </p>
            </div>
          )}


          {/* ERROR */}

          {!loading && error && (
            <div className="disclosure-state disclosure-state--error">

              <AlertCircle size={38} />

              <h3>Unable to load documents</h3>

              <p>{error}</p>

              <button
                type="button"
                onClick={fetchCertificates}
                className="disclosure-retry"
              >
                <RefreshCw size={16} />
                Try Again
              </button>

            </div>
          )}


          {/* EMPTY */}

          {!loading && !error && certificates.length === 0 && (
            <div className="disclosure-state">

              <FileText size={42} />

              <h3>No documents published yet</h3>

              <p>
                Official certificates and recognitions will appear
                here once they are published by the academy.
              </p>

            </div>
          )}


          {/* CERTIFICATE GRID */}

          {!loading && !error && certificates.length > 0 && (

            <div className="disclosure-grid">

              {certificates.map((certificate, index) => {

                const pdfUrl = getPdfUrl(certificate.pdfUrl);

                return (
                  <article
                    className="disclosure-card"
                    key={certificate.id}
                    style={{
                      "--card-index": index,
                    }}
                  >

                    <div className="disclosure-card__top">

                      <div className="disclosure-card__file">
                        <FileText size={27} />
                      </div>

                      <span className="disclosure-card__tag">
                        PDF DOCUMENT
                      </span>

                      <span className="disclosure-card__number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                    </div>


                    <div className="disclosure-card__body">

                      <span className="disclosure-card__category">
                        {certificate.category || "Institutional Document"}
                      </span>

                      <h3>{certificate.title}</h3>

                      {certificate.description && (
                        <p className="disclosure-card__description">
                          {certificate.description}
                        </p>
                      )}

                      {certificate.issuer && (
                        <div className="disclosure-card__issuer">
                          Issued by
                          <strong>{certificate.issuer}</strong>
                        </div>
                      )}

                      <div className="disclosure-card__date">
                        <CalendarDays size={15} />
                        <span>{formatDate(certificate.issueDate)}</span>
                      </div>

                    </div>


                    <div className="disclosure-card__actions">

                      <button
                        type="button"
                        className="disclosure-card__view"
                        onClick={() =>
                          setSelectedCertificate(certificate)
                        }
                        disabled={!pdfUrl}
                      >
                        <Eye size={16} />
                        View Document
                        <ArrowUpRight size={15} />
                      </button>

                      <button
                        type="button"
                        className="disclosure-card__download"
                        onClick={() => handleDownload(certificate)}
                        disabled={!pdfUrl}
                        aria-label={`Download ${certificate.title}`}
                        title="Download PDF"
                      >
                        <Download size={17} />
                      </button>

                    </div>

                  </article>
                );
              })}

            </div>

          )}

        </div>

      </section>


      {/* =====================================================
          TRANSPARENCY FOOTER
      ===================================================== */}

      <section className="disclosure-trust">

        <div className="disclosure-container disclosure-trust__inner">

          <div className="disclosure-trust__icon">
            <ShieldCheck size={25} />
          </div>

          <div>
            <strong>Committed to Institutional Transparency</strong>

            <p>
              This page provides access to the official documents
              published by Shifan Noor Global Academy.
            </p>
          </div>

          <span className="disclosure-trust__mark">
            SNGA
          </span>

        </div>

      </section>


      {/* =====================================================
          PDF PREVIEW MODAL
      ===================================================== */}

      {selectedCertificate && (

        <div
          className="disclosure-modal-overlay"
          onClick={() => setSelectedCertificate(null)}
        >

          <div
            className="disclosure-modal"
            onClick={(event) => event.stopPropagation()}
          >

            <div className="disclosure-modal__header">

              <div className="disclosure-modal__title">

                <FileText size={20} />

                <div>
                  <strong>{selectedCertificate.title}</strong>
                  <span>Certificate Preview · PDF</span>
                </div>

              </div>

              <div className="disclosure-modal__actions">

                <button
                  type="button"
                  onClick={() => handleDownload(selectedCertificate)}
                  title="Download PDF"
                >
                  <Download size={18} />
                </button>

                <a
                  href={getPdfUrl(selectedCertificate.pdfUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open PDF in new tab"
                >
                  <ExternalLink size={18} />
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedCertificate(null)}
                  title="Close preview"
                >
                  <X size={20} />
                </button>

              </div>

            </div>

            <iframe
              src={`${getPdfUrl(selectedCertificate.pdfUrl)}#toolbar=1&navpanes=0`}
              title={selectedCertificate.title}
              className="disclosure-modal__frame"
            />

          </div>

        </div>

      )}

    </main>
  );
};

export default PublicDisclosure;
