import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Rede Elas com Propósito — Mulheres que crescem juntas";
export const size = { width: 600, height: 315 };
export const contentType = "image/png";

export default async function Image() {
  const photoUrl = "https://landing-page-edneia.vercel.app/B8C0B3CC-F55E-4040-A866-1F5393045C70.png";
  const photo = await fetch(photoUrl, { cache: "force-cache" }).then((r) => {
    if (!r.ok) throw new Error("Falha ao carregar fotografia da Rede");
    return r.arrayBuffer();
  });
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: "#70283F", overflow: "hidden" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`data:image/png;base64,${Buffer.from(photo).toString("base64")}`} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute" }} />
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "18px 24px", background: "linear-gradient(0deg, rgba(68,13,36,.98), rgba(68,13,36,.66) 40%, rgba(68,13,36,0) 78%)" }}>
        <div style={{ display: "flex", color: "#F4D49B", fontSize: 17, fontWeight: 700 }}>REDE ELAS COM PROPÓSITO</div>
        <div style={{ display: "flex", color: "#FFFFFF", fontSize: 28, fontWeight: 700, lineHeight: 1.1, marginTop: 5 }}>Mulheres que crescem juntas</div>
      </div>
    </div>,
    size
  );
}
