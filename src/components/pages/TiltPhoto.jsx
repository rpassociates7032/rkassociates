import { useRef } from "react";

// Photo card that tilts in 3D toward the cursor.
export default function TiltPhoto({ src, alt }) {
  const cardRef = useRef(null);

  const handleMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width; // 0..1
    const y = (e.clientY - rect.top) / rect.height; // 0..1
    card.style.setProperty("--rx", `${(0.5 - y) * 18}deg`);
    card.style.setProperty("--ry", `${(x - 0.5) * 18}deg`);
  };

  const handleLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
  };

  return (
    <div className="tilt-scene">
      <div
        className="tilt-card"
        ref={cardRef}
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
      >
        <span className="tilt-accent" aria-hidden="true" />
        <img src={src} alt={alt} />
      </div>
    </div>
  );
}
