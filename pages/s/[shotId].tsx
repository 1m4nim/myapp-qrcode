import { useEffect } from "react";
import { useRouter } from "next/router";
import { db } from "../../firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { Spin, message } from "antd";

export default function RedirectPage() {
  const router = useRouter();
  const { shortId } = router.query;

  useEffect(() => {
    if (!shortId) return;

    const fetchUrl = async () => {
      const docRef = doc(db, "shortened_urls", shortId as string);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        message.error("URLが見つかりません");
        return;
      }

      const data = docSnap.data();
      await updateDoc(docRef, { clicks: (data.clicks || 0) + 1 });
      window.location.href = data.originalUrl;
    };

    fetchUrl();
  }, [shortId]);

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <Spin size="large" />
      <p>リダイレクト中...</p>
    </div>
  );
}
