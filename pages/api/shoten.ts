import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { nanoid } from "nanoid";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { originalUrl } = req.body;
  if (!originalUrl) {
    return res.status(400).json({ error: "URL is required" });
  }

  const shortId = nanoid(6); // 6文字の短縮ID生成

  try {
    await addDoc(collection(db, "shortened_urls"), {
      shortId,
      originalUrl,
      clicks: 0,
      createdAt: new Date(),
    });

    return res
      .status(200)
      .json({ shortUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/s/${shortId}` });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Failed to shorten URL", details: error });
  }
}
