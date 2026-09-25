/**
 * PODMORSKA SCENA — treci crtez (Petar, 2026-09-24).
 *
 * Objasnjava dvije brojke koje tekst tvrdi, a nijedna fotografija ne pokazuje
 * odjednom: DUBINU i VRIJEME. Amfora se spusta na uzetu, na dnu vec stoje
 * druge, i uz njih stoje brojke.
 *
 * BROJKE SU NJIHOVE, s njihove About stranice: 18–25 metara i „more than 700
 * days". Njihov web si na dubini proturjeci (press navodi 15 i 20 m), pa do
 * klijentove potvrde vrijedi ono sto pise na About stranici — odluka L1.
 */
export default function DepthScene() {
  return (
    <figure className="fig fig-depth">
      <svg viewBox="0 0 900 520" role="img" aria-labelledby="fig-depth-t" className="fig-svg">
        <title id="fig-depth-t">
          An amphora being lowered on a line to the seabed, where rows of amphorae already stand,
          18 to 25 metres down
        </title>

        {/* voda, sve tamnija prema dnu */}
        <defs>
          <linearGradient id="fig-water" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" className="fig-w0" />
            <stop offset="1" className="fig-w1" />
          </linearGradient>
        </defs>
        <rect width="900" height="520" fill="url(#fig-water)" />

        {/* mjehurici */}
        <g className="fig-bub">
          <circle cx="118" cy="86" r="5" />
          <circle cx="146" cy="52" r="3" />
          <circle cx="742" cy="70" r="6" />
          <circle cx="770" cy="36" r="3.5" />
          <circle cx="706" cy="112" r="3" />
        </g>

        {/* dno u dva sloja */}
        <path className="fig-bed-far" d="M0 258c108-30 196-14 292 8 84 20 160 26 250 10 82-14 168-34 358-22v264H0z" />
        <path className="fig-bed-near" d="M0 366c132-34 244-16 352 6 96 20 184 22 274 6 78-14 160-26 274-14v156H0z" />

        {/* amfore koje vec stoje na dnu */}
        <g className="fig-jar-far">
          <Jar x={252} y={262} s={0.72} />
          <Jar x={330} y={268} s={0.6} />
          <Jar x={432} y={258} s={0.8} />
          <Jar x={520} y={266} s={0.64} />
          <Jar x={618} y={260} s={0.74} />
        </g>

        {/* amfora koja se spusta */}
        <g className="fig-line">
          <path d="M452 168v148" />
          <circle cx="452" cy="316" r="5" />
        </g>
        <g className="fig-jar-live" transform="translate(452 322) rotate(14)">
          <Jar x={0} y={0} s={1.15} solid />
        </g>

        {/* brojke */}
        <g className="fig-note">
          <text x="450" y="112" textAnchor="middle" className="fig-note-s">
            stored under the sea at
          </text>
          <text x="450" y="150" textAnchor="middle" className="fig-note-b">
            18–25 metres
          </text>
          <text x="450" y="486" textAnchor="middle" className="fig-note-s">
            for more than <tspan className="fig-note-hl">700 days</tspan>
          </text>
        </g>
      </svg>
      <figcaption className="fig-cap">
        Depth and duration as their own About page states them.
      </figcaption>
    </figure>
  )
}

/** Silueta amfore. Jedan oblik, koristi se i za dno i za onu koja se spusta. */
function Jar({ x, y, s, solid }: { x: number; y: number; s: number; solid?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} className={solid ? 'is-live' : undefined}>
      <path d="M0-52c-12 0-20 5-24 14-4 9-5 20-5 31 0 25 5 48 12 69 6 16 12 29 17 39 5-10 11-23 17-39 7-21 12-44 12-69 0-11-1-22-5-31-4-9-12-14-24-14z" />
      <path d="M-22-44c-10 1-17 7-19 15-2 9 1 17 6 22l6-8c-3-4-5-9-4-13 1-4 5-7 11-8z" />
      <path d="M22-44c10 1 17 7 19 15 2 9-1 17-6 22l-6-8c3-4 5-9 4-13-1-4-5-7-11-8z" />
      <rect x="-7" y="-60" width="14" height="10" rx="2" />
    </g>
  )
}
