import { useEffect, useState } from "react";
import { getInvitation } from "../utils/api";

export default function InvitationPage({ subdomain }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    getInvitation(subdomain)
      .then((res) => {
        if (!res) setNotFound(true);
        else setData(res);
      })
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, [subdomain]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-stone-400 text-sm">Memuat undangan...</p>
    </div>
  );

  if (notFound) return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-stone-400 text-sm">Undangan tidak ditemukan.</p>
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center">
      <pre className="text-sm">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}