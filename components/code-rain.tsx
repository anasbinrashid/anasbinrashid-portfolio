"use client";

import { useEffect, useState } from "react";

interface CodeDrop {
  id: number;
  x: number;
  delay: number;
  duration: number;
  char: string;
  opacity: number;
  fontSize: number;
}

const CODE_CHARS = "01{}[]<>/=+*&|!?#@$%^~;:.,abcdefghijklmnopqrstuvwxyz";

export function CodeRain() {
  const [drops, setDrops] = useState<CodeDrop[]>([]);

  useEffect(() => {
    const generated: CodeDrop[] = [];
    for (let i = 0; i < 40; i++) {
      generated.push({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 20,
        duration: 8 + Math.random() * 15,
        char: CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)],
        opacity: 0.03 + Math.random() * 0.08,
        fontSize: 10 + Math.random() * 6,
      });
    }
    setDrops(generated);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {drops.map((drop) => (
        <span
          key={drop.id}
          className="absolute font-mono text-primary animate-code-fall"
          style={{
            left: `${drop.x}%`,
            animationDelay: `${drop.delay}s`,
            animationDuration: `${drop.duration}s`,
            opacity: drop.opacity,
            fontSize: `${drop.fontSize}px`,
          }}
        >
          {drop.char}
        </span>
      ))}
    </div>
  );
}
