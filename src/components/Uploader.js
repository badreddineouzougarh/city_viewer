import { Uploader } from "uploader"; // Installed by "react-uploader".
import { UploadDropzone } from "react-uploader";
import "./Uploader.css";

// Initialize once (at the start of your app).
const uploader = Uploader({
  apiKey: "free" // Get production API keys from Bytescale
});

// Configuration options: https://www.bytescale.com/docs/upload-widget/frameworks/react#customize
const options = { multi: true };

const UploaderTool = () => (
    <div className="uploader-container">
  <UploadDropzone uploader={uploader}
                  options={options}
                  onUpdate={files => alert(files.map(x => x.fileUrl).join("\n"))}
                  
                  width="1200px"
                  height="375px" 
                  />
                  </div>
);

export default UploaderTool;
