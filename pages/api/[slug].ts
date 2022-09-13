import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  revalidated?: boolean;
  message?: string;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.REVALIDATE_SECRET) {
    return res.status(401).json({ message: 'Invalid token' });
  }
  const {
    query: { slug },
  } = req;
  
  try {
    await res.revalidate(`/blogs/${slug}`);
    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send({ message: 'Error revalidating' });
  }
}
