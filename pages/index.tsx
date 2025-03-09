import { useState } from "react";
import { Input, Button, message } from "antd";
import { QRCodeCanvas } from "qrcode.react";
import "rc-picker/es/locale/common";
import "rc-picker/es/locale/en_US";

export default function Home() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleShorten = async () => {
    if (!url) return message.error("URLを入力してください");

    const res = await fetch("/api/shorten", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ originalUrl: url }),
    });

    const data = await res.json();
    if (res.ok) {
      setShortUrl(data.shortUrl);
      message.success("短縮URLを生成しました！");
    } else {
      message.error(data.error);
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: "50px auto", textAlign: "center" }}>
      <h2>QRコード付きURL短縮サービス</h2>
      <Input
        placeholder="URLを入力してください"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{ marginBottom: 10 }}
      />
      <Button type="primary" onClick={handleShorten}>
        短縮する
      </Button>
      {shortUrl && (
        <div style={{ marginTop: 20 }}>
          <p>
            短縮URL:{" "}
            <a href={shortUrl} target="_blank" rel="noopener noreferrer">
              {shortUrl}
            </a>
          </p>
          <QRCodeCanvas value={shortUrl} /> {/* QRコード表示 */}
        </div>
      )}
    </div>
  );
}
