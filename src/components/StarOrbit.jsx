import { useEffect, useRef, useState } from "react";
import Star from "./Star";

export default function StarOrbit({ onSelect }) {
  const stars = Array.from({ length: 30 }, (_, i) => i);

  const starRefs = useRef([]);

  const [brightStars, setBrightStars] = useState(
    new Set()
  );

  useEffect(() => {
    let animationFrame;
    const startTime = performance.now();

    const radiusX = 390;
    const radiusY = 190;

    const tilt = (-20 * Math.PI) / 180;
    const cosTilt = Math.cos(tilt);
    const sinTilt = Math.sin(tilt);

    const animate = (time) => {
      const elapsed =
        (time - startTime) / 1000;

      const rotation =
        (elapsed / 30) *
        Math.PI *
        2;

      for (let index = 0; index < 30; index++) {
        const star =
          starRefs.current[index];

        if (!star) continue;

        const startingAngle =
          (index / 30) *
          Math.PI *
          2;

        const angle =
          startingAngle + rotation;

        const ellipseX =
          Math.cos(angle) *
          radiusX;

        const ellipseY =
          Math.sin(angle) *
          radiusY;

        const x =
          ellipseX * cosTilt -
          ellipseY * sinTilt;

        const y =
          ellipseX * sinTilt +
          ellipseY * cosTilt;

        star.style.transform = `
          translate(
            calc(-50% + ${x}px),
            calc(-50% + ${y}px)
          )
        `;
      }

      animationFrame =
        requestAnimationFrame(animate);
    };

    animationFrame =
      requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  const handleStarClick = (
    event,
    number
  ) => {
    event.stopPropagation();

    setBrightStars((previous) => {
      const next = new Set(previous);
      next.add(number);
      return next;
    });

    onSelect(number);
  };

  return (
    <>
      {/* STATIONARY TILTED ELLIPSE */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: "780px",
          height: "380px",

          transform:
            "translate(-50%, -50%) rotate(-20deg)",

          border:
            "1px solid rgba(255,255,255,0.10)",

          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* STARS */}
      {stars.map((_, index) => {
        const isBright =
          brightStars.has(index + 1);

        return (
          <div
            key={index}
            ref={(element) => {
              starRefs.current[index] =
                element;
            }}
            onClick={(event) =>
              handleStarClick(
                event,
                index + 1
              )
            }
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",

              width: "38px",
              height: "38px",

              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              pointerEvents: "auto",
              cursor: "pointer",
              touchAction: "manipulation",

              willChange: "transform",

              zIndex: 1,
            }}
          >
            <div
              style={{
                width: "11px",
                height: "11px",

                filter: isBright
                  ? `
                    brightness(1.8)
                    drop-shadow(
                      0 0 5px
                      rgba(255,255,255,1)
                    )
                    drop-shadow(
                      0 0 11px
                      rgba(190,220,255,0.95)
                    )
                    drop-shadow(
                      0 0 19px
                      rgba(150,200,255,0.7)
                    )
                  `
                  : "none",

                transition:
                  "filter 0.25s ease",
              }}
            >
              <Star
                number={index + 1}
              />
            </div>
          </div>
        );
      })}
    </>
  );
}