import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import InvitationPage from "./pages/InvitationPage";

function getSubdomain() {
  const host = window.location.hostname;
  const parts = host.split(".");
  if (parts.length >= 3 && parts[0] !== "www") return parts[0];
  return null;
}

export default function App() {
  const [subdomain, setSubdomain] = useState(null);

  useEffect(() => {
    setSubdomain(getSubdomain());
  }, []);

  if (subdomain) return <InvitationPage subdomain={subdomain} />;
  return <HomePage />;
}