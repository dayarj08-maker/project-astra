import {
  useState,
  useCallback,
} from "react";

import Starfield from "./Starfield";
import Sun from "./Sun";
import StarOrbit from "./StarOrbit";

const reasons = [
  "The way you make even the most ordinary days feel special",
  "How you somehow manage to make me laugh even when I dont feel like it",
  "How patient you are with me, even when I absolutely dont deserve it lmao",
  "The way your eyes glow when you talk about the things you love (myself included 🗣️🔥)",
  "How caring and compassionate you are",
  "The way you make me feel safe",
  "The way you make me feel like I'm worth more than I actually am",
  "The way your beautifulll face looks when I'm lying on your lap",
  "How calm and logical you are while I'm crashing out",
  "How emotionally mature and available you are",
  "The way you make me feel seen and heard",
  "How you never gave up on me despite my SHITTY swabhavam",
  "The way I dont have to fake anything while im around you",
  "The way you smell (I LOSE MY SHIT EVERY TIME AGUAGAHGAHUAG)",
  "For healing the scars you were never meant to see",
  "How you kept me going when I wanted to quit",
  "How you support me when I feel worthless",
  "For tolerating me despite my countless flaws",
  "For accepting me despite my past",
  "For making me feel better about myself (I kinda hate myself less now)",
  "How your lovely coffee brown hair feels in my fingers",
  "The way you just KNOW that I'm pissed about something",
  "The way my face fits perfectly in the crook of your neck",
  "The way your (hot asf) hands gently hold my face",
  "The way your eyes crease when you are smiling at me",
  "For listening to me whine about the same thing for a 100 times",
  "The way you match my frequency (rendinum vatta)",
  "For giving me something to look forward to, a future with you",
  "For not shooting me dead in 11th (💀🙏🙏)",
  "For being there for me, always.",
];

const moonLetter = `Nee enthuva vichariche, 30 reasons kond ang theeruvenno?
No way baby.

There aren't enough words or enough languages on Earth that can express how much I love you.

It feels like that day on the bus, September 18, was just yesterday. Oru maasam poyath njan ottume arinjilla.

I still vividly remember the first time we hugged, the first time we held hands, and the first time we kissed.
(why was everything inside ethelum vandi 😭😭)

Despite everything we did (💀🥀), I still can believe I have you, I have VIGHNESH MADHAVAN as my boyfriend.
(ehehehehe enich vayya 😭😭😭😭✨✨✨)

I made this for you just to remind you that,

YOU
ARE
MY
EVERYTHING.

I can't imagine a day of my life without you.

Ee last month was pretty much oru trailer of how the rest of your life is gonna look like.
(ur cooked vro)

Also, I know this doesn't look like much but i went through HELL trying to make this work 😭😭.
(remind me to never touch a code ever again)

I know the site is a little laggy, and that every time you click a star it freezes the screen temporarily. TRUST ME when I say i tried to fix it for THREE HOURS STRAIGHT and then just gave up cuz i was starting to lose my mind haiiyooo😭😭😭.

This is far from perfect, but oru maasam aayalle ollu bro don't worry I'll level up the gihs🗣️🔥.

I'm forever grateful to every God that heard my prayers, to the universe for bringing us together, to you,

My love
My darling
My sweetheart
My baby
My vighesh.

You have given me the happiest 1 month of my life.

I hope life gives you everything you wish for.

I'll always be there when you are at your lowest,
and I hope I'm right next to you while you succeed.

Ennum eppozhum, tum jahaan mein wahaan.

Forever the moon to my ocean waves.

Happy 1 Monthiversary my love.
I Love You.

Yours and yours only,
~duy`;

function StarMessage({ number, onClose }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        background: "rgba(0,0,0,0.18)",
        backdropFilter: "blur(2px)",
        cursor: "pointer",
      }}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        style={{
          width: "min(420px, 82vw)",
          padding: "28px 30px",
          background: "rgba(5,10,25,0.94)",
          border: "1px solid rgba(255,255,255,0.18)",
          borderRadius: "20px",
          color: "white",
          textAlign: "center",
          fontFamily: "sans-serif",
          boxShadow:
            "0 0 35px rgba(120,170,255,0.18)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div
          style={{
            fontSize: "11px",
            opacity: 0.5,
            marginBottom: "10px",
            letterSpacing: "1.5px",
          }}
        >
          THING #{number} I LOVE ABOUT YOU
        </div>

        <div
          style={{
            fontSize: "18px",
            lineHeight: "1.6",
          }}
        >
          {reasons[number - 1]}
        </div>

        <div
          style={{
            marginTop: "18px",
            fontSize: "11px",
            opacity: 0.35,
          }}
        >
          click outside to close
        </div>
      </div>
    </div>
  );
}

function MoonPage({ onClose, unlocked }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2000,
        background: "rgba(0,0,0,0.4)",
        backdropFilter: "blur(4px)",
        padding: "30px",
        cursor: "pointer",
      }}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        style={{
          position: "relative",
          width: "min(820px, 92vw)",
          height: "min(82vh, 760px)",
          padding: "55px 65px",
          overflowY: "auto",
          background: "rgba(5,10,25,0.97)",
          border: "1px solid rgba(255,255,255,0.22)",
          borderRadius: "28px",
          color: "white",
          fontFamily: "sans-serif",
          boxShadow:
            "0 0 70px rgba(120,170,255,0.25)",
          backdropFilter: "blur(15px)",
          cursor: "default",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "18px",
            right: "22px",
            background: "transparent",
            border: "none",
            color: "rgba(255,255,255,0.6)",
            fontSize: "26px",
            cursor: "pointer",
          }}
        >
          ×
        </button>

        {!unlocked ? (
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "50px",
                marginBottom: "20px",
              }}
            >
              🌙
            </div>

            <div
              style={{
                fontSize: "30px",
                marginBottom: "15px",
              }}
            >
              Not yet...
            </div>

            <div
              style={{
                fontSize: "16px",
                lineHeight: "1.7",
                opacity: 0.7,
              }}
            >
              There are still stars waiting
              for you.
              <br />
              <br />
              Get through all 30 to unlock
              what's waiting here.
            </div>
          </div>
        ) : (
          <>
            <div
              style={{
                textAlign: "center",
                fontSize: "12px",
                opacity: 0.5,
                letterSpacing: "2px",
                marginBottom: "12px",
              }}
            >
              🌙 FOR YOU
            </div>

            <div
              style={{
                textAlign: "center",
                fontSize: "32px",
                lineHeight: "1.3",
                fontWeight: "400",
                marginBottom: "38px",
              }}
            >
              Nee enthuva vichariche,
              <br />
              30 reasons kond ang
              theeruvenno?
              <br />
              <span
                style={{
                  fontSize: "38px",
                  fontWeight: "500",
                }}
              >
                No way baby.
              </span>
            </div>

            <div
              style={{
                fontSize: "17px",
                lineHeight: "1.9",
                whiteSpace: "pre-line",
                opacity: 0.92,
              }}
            >
              {moonLetter
                .split(
                  "Nee enthuva vichariche, 30 reasons kond ang theeruvenno?\nNo way baby.\n\n"
                )[1]}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function Galaxy() {
  const [discovered, setDiscovered] =
    useState(new Set());

  const [selectedStar, setSelectedStar] =
    useState(null);

  const [moonMessage, setMoonMessage] =
    useState(false);

  const handleStarSelect = useCallback(
    (number) => {
      setSelectedStar(number);
      setMoonMessage(false);

      setDiscovered((previous) => {
        if (previous.has(number)) {
          return previous;
        }

        const next = new Set(previous);
        next.add(number);

        return next;
      });
    },
    []
  );

  const moonUnlocked =
    discovered.size === 30;

  const handleMoonClick = useCallback(
    (event) => {
      event.stopPropagation();

      setSelectedStar(null);
      setMoonMessage(true);
    },
    []
  );

  const closeMessage = useCallback(() => {
    setSelectedStar(null);
    setMoonMessage(false);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#02040a",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Starfield />

      <div
        onClick={(event) => {
          if (
            event.target === event.currentTarget
          ) {
            closeMessage();
          }
        }}
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          perspective: "1000px",
        }}
      >
        {/* TOP INSTRUCTION */}

        <div
          style={{
            position: "absolute",
            top: "25px",
            left: "50%",
            transform: "translateX(-50%)",
            color: "rgba(255,255,255,0.7)",
            fontFamily: "sans-serif",
            fontSize: "14px",
            letterSpacing: "1px",
            zIndex: 20,
            pointerEvents: "none",
            whiteSpace: "nowrap",
          }}
        >
          click on each star ✦
        </div>

        {/* PROGRESS */}

        <div
          style={{
            position: "absolute",
            top: "49px",
            left: "50%",
            transform: "translateX(-50%)",
            color: "rgba(255,255,255,0.42)",
            fontFamily: "sans-serif",
            fontSize: "12px",
            letterSpacing: "1px",
            zIndex: 20,
            pointerEvents: "none",
          }}
        >
          {discovered.size} / 30 discovered
        </div>

        {/* STAR ORBIT */}

        <StarOrbit
          onSelect={handleStarSelect}
        />

        {/* MOON */}

        <div
          onClick={handleMoonClick}
          style={{
            position: "relative",
            zIndex: 2,
            cursor: "pointer",
            touchAction: "manipulation",
          }}
        >
          <Sun />
        </div>

        {/* BOTTOM INSTRUCTION */}

        <div
          style={{
            position: "absolute",
            bottom: "25px",
            left: "50%",
            transform: "translateX(-50%)",
            color: "rgba(255,255,255,0.5)",
            fontFamily: "sans-serif",
            fontSize: "13px",
            letterSpacing: "0.8px",
            textAlign: "center",
            zIndex: 20,
            pointerEvents: "none",
            whiteSpace: "nowrap",
          }}
        >
          get through all 30 to unlock the moon
        </div>
      </div>

      {/* STAR MESSAGE */}

      {selectedStar !== null && (
        <StarMessage
          number={selectedStar}
          onClose={closeMessage}
        />
      )}

      {/* MOON PAGE */}

      {moonMessage && (
        <MoonPage
          onClose={closeMessage}
          unlocked={moonUnlocked}
        />
      )}
    </div>
  );
}