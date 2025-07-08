import React, { useRef, useState } from 'react';

export default function FileUpload() {
  const fileInput = useRef<HTMLInputElement>(null);
  const [uploaded, setUploaded] = useState<File | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploaded(e.target.files[0]);
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: 16, borderRadius: 8, maxWidth: 400 }}>
      <h4>File Upload</h4>
      <input
        type="file"
        ref={fileInput}
        onChange={handleUpload}
        style={{ marginBottom: 12 }}
      />
      {uploaded && (
        <div>
          <b>Uploaded:</b> {uploaded.name} ({Math.round(uploaded.size / 1024)} KB)
        </div>
      )}
    </div>
  );
}
