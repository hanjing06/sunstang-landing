export function GET() {
  return Response.json(
    {
      status: "ok",
      service: "sunstang-landing",
      timestamp: new Date().toISOString(),
    },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    },
  );
}
