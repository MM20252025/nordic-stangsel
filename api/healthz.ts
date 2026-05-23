export default function handler(_req: unknown, res: {
  status: (code: number) => {
    json: (body: { status: string }) => void;
  };
}) {
  return res.status(200).json({ status: "ok" });
}
