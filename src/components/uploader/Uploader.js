import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useState } from "react";

const UploaderTool = () => {
  const [files, setFiles] = useState([]);
  
  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles);
  };

  return (
    <div className="container mt-4 border  border-black">
      <div className="form-group">
        <div className="border-dotted p-4 mb-3 rounded">
          <div className="input-group mb-3">
            <div className="custom-file">
              <input
                id="inputGroupFile01"
                type="file"
                className="custom-file-input"
                multiple
                onChange={handleFileChange}
              />
              <label className="custom-file-label" htmlFor="inputGroupFile02">
                Choose file or drop it here...
              </label>
            </div>
          </div>

          {/* Display selected file names */}
          {files.length > 0 && (
            <ul className="list-group mt-2">
              {files.map((file, index) => (
                <li key={index} className="list-group-item">
                  {file.name}
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </div>
  );
};

export default UploaderTool;
