const API_URL = import.meta.env.VITE_API_URL;

export async function getInvitation(subdomain) {
  const res = await fetch(`${API_URL}/api/invitations/${subdomain}`);
  if (res.status === 404) return null;
  if (!res.ok) throw new Error('Server error');
  return res.json();
}

export async function createInvitation(data) {
  const res = await fetch(`${API_URL}/api/invitations`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Server error');
  return res.json();
}