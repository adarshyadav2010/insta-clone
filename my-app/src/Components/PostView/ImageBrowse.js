import React, { useState, useRef } from "react";

function FileInput() {
  const fileInput = useRef(null);
  const [selectedFile, setSelectedFile] = useState("");

  const handleFileSelection = () => {
    const filePath = fileInput.current.value;
    setSelectedFile(filePath);
  };

  return (
    <>
      <input type="file" placeholder="No Files Chosen" ref={fileInput} id="input1" onChange={handleFileSelection} />
      <input type="text" value={selectedFile} readOnly id="subInput1" />
    </>
  );
}

export default FileInput;