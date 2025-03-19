import React, { useState } from "react";
import axios from "axios";
import QRCode from "react-qr-code";

const ShortenUrl: React.FC = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const shortenUrl = async () => {
    if (!originalUrl) return;

    try {
      const response = await axios.get(
        `https://tinyurl.com/api-create.php?url=${encodeURIComponent(
          originalUrl
        )}`
      );
      setShortUrl(response.data);
    } catch (error) {
      console.error("URL短縮に失敗しました", error);
      alert("URL短縮に失敗しました");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>URL短縮 & QRコード生成</h2>
      <input
        type="text"
        value={originalUrl}
        onChange={(e) => setOriginalUrl(e.target.value)}
        placeholder="短縮するURLを入力"
        style={{ padding: "10px", width: "300px", marginBottom: "10px" }}
      />
      <br />
      <button
        onClick={shortenUrl}
        style={{ padding: "10px 20px", cursor: "pointer" }}
      >
        URL短縮
      </button>

      {shortUrl && (
        <div style={{ marginTop: "20px" }}>
          <p>
            短縮URL:{" "}
            <a href={shortUrl} target="_blank" rel="noopener noreferrer">
              {shortUrl}
            </a>
          </p>
          <QRCode value={shortUrl} size={150} />
        </div>
      )}
    </div>
  );
};

export default ShortenUrl;
