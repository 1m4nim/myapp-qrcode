// pages/api/shorten.ts

import { NextApiRequest, NextApiResponse } from "next";

// リクエストのボディの型定義
interface RequestBody {
  longUrl: string;
}

// 短縮URLを生成する簡単な関数（例）
const generateShortenedUrl = (longUrl: string): string => {
  const randomString = Math.random().toString(36).substring(2, 8); // ランダムな文字列を生成
  return `http://short.ly/${randomString}`;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // POSTメソッドだけを許可
  if (req.method === "POST") {
    // 型定義を使ってbodyを明示的に型付け
    const { longUrl }: RequestBody = req.body;

    if (!longUrl) {
      // 長いURLが提供されていない場合はエラーを返す
      return res.status(400).json({ error: "Long URL is required" });
    }

    // longUrlを使用して短縮URLを生成
    const shortUrl = generateShortenedUrl(longUrl);

    // 成功した場合、短縮URLを返す
    return res.status(200).json({ shortUrl });
  }

  // 他のメソッドには404エラーを返す
  return res.status(404).json({ error: "Not Found" });
}
