/* Biman Bangladesh Airlines — projected phase-out, replacement, purchase and lease of aircraft.
   Source: "B. Projected Phase-out and Replacement, Purchase and Lease of aircraft".

   EDIT THIS FILE ONLY. The chart, KPIs, legend and detail panel all recompute from it.

   Each year: { fy, total, note, moves: [ { cat, type, n, when, mark } ] }
     cat   — one of: boeing | airbus | leaseIn | phaseOut | leaseReturn
     n     — number of aircraft
     when  — month or half-year as printed in the source ("" if none)
     mark  — "*" or "**" to attach a source footnote ("" if none)
     replaced / replacement — optional. Every movement changes the fleet count by default.
       Set replaced: true on an exit (or replacement: true on an induction) to make it
       fleet-neutral, i.e. the aircraft is swapped one-for-one in the same year.
   total   — the fleet count printed in the source's Total column (drives the fleet line)
*/

window.FLEET_DATA = {
  meta: {
    airline: "Biman Bangladesh Airlines",
    title: "Projected phase-out, replacement, purchase and lease of aircraft",
    source: "Projected Phase-out and Replacement, Purchase and Lease of aircraft (table B)",
    baseline: "Own fleet: 19 aircraft (Jul, FY2026-27)",
    openingFleet: 19
  },

  cats: [
    { k: "boeing", label: "Boeing induction", fill: "#2563EB", dir: 1 },
    { k: "airbus", label: "Airbus induction", fill: "#D97706", dir: 1 },
    { k: "leaseIn", label: "Leased aircraft", fill: "#16A34A", dir: 1 },
    { k: "phaseOut", label: "Own fleet phase-out", fill: "#DC2626", dir: -1 },
    { k: "leaseReturn", label: "Lease return", fill: "#64748B", dir: -1 }
  ],

  footnotes: [
    { mark: "*", text: "The marked leased aircraft will remain in the fleet through lease renewal, replacement or purchase of equivalent aircraft, subject to future operational requirements and necessary approvals of the Board." },
    { mark: "**", text: "Biman's own aircraft reaching the planned phase-out date are assumed to be replaced on a one-for-one basis. Biman's own 04 × B777-300ER are assumed to be replaced by 04 × B787-10 (closer seat capacity and range) on lease or purchase basis, subject to future operational requirements and necessary approvals of the Board." }
  ],

  years: [
    { fy: "FY2026-2027", total: 20, note: "Own fleet: 19 (Jul)", moves: [
      { cat: "leaseIn", type: "B737-8 MAX", n: 1, when: "", mark: "" }
    ] },
    { fy: "FY2027-2028", total: 23, note: "", moves: [
      { cat: "leaseIn", type: "B787-9", n: 3, when: "", mark: "" }
    ] },
    { fy: "FY2028-2029", total: 24, note: "", moves: [
      { cat: "leaseIn", type: "B787-9", n: 1, when: "", mark: "" }
    ] },
    { fy: "FY2029-2030", total: 24, note: "", moves: [
      { cat: "leaseIn", type: "B787-9", n: 1, when: "", mark: "" },
      { cat: "leaseIn", type: "B737-8 MAX", n: 1, when: "", mark: "" },
      { cat: "phaseOut", type: "B737-800", n: 1, when: "Jun", mark: "" },
      { cat: "phaseOut", type: "B737-800", n: 1, when: "Sep", mark: "" }
    ] },
    { fy: "FY2030-2031", total: 26, note: "", moves: [
      { cat: "leaseIn", type: "B787-9", n: 2, when: "", mark: "" }
    ] },
    { fy: "FY2031-2032", total: 30, note: "", moves: [
      { cat: "boeing", type: "B787-9", n: 2, when: "Nov, Feb", mark: "" },
      { cat: "boeing", type: "B737-8 MAX", n: 2, when: "Apr, Jun", mark: "" },
      { cat: "leaseIn", type: "Dash-8-400", n: 1, when: "", mark: "*" }
    ] },
    { fy: "FY2032-2033", total: 30, note: "", moves: [
      { cat: "boeing", type: "B737-8 MAX", n: 2, when: "Aug, Oct", mark: "" },
      { cat: "boeing", type: "B787-10", n: 2, when: "Jul, Sep", mark: "" },
      { cat: "leaseIn", type: "B787-9", n: 1, when: "", mark: "*" },
      { cat: "leaseReturn", type: "B737-8 MAX", n: 2, when: "", mark: "" },
      { cat: "leaseReturn", type: "B787-9", n: 2, when: "", mark: "" }
    ] },
    { fy: "FY2033-2034", total: 35, note: "", moves: [
      { cat: "boeing", type: "B787-10", n: 2, when: "Apr, Oct", mark: "" },
      { cat: "airbus", type: "A321neo", n: 2, when: "2nd half 2033", mark: "" },
      { cat: "airbus", type: "A321neo", n: 2, when: "1st half 2034", mark: "" },
      { cat: "airbus", type: "A350-900", n: 1, when: "1st half 2034", mark: "" },
      { cat: "phaseOut", type: "Dash-8-400", n: 1, when: "", mark: "*" },
      { cat: "leaseReturn", type: "B787-9", n: 2, when: "", mark: "" }
    ] },
    { fy: "FY2034-2035", total: 39, note: "", moves: [
      { cat: "boeing", type: "B787-10", n: 2, when: "Apr, Oct", mark: "" },
      { cat: "airbus", type: "A321neo", n: 2, when: "2nd half 2034", mark: "" },
      { cat: "airbus", type: "A350-900", n: 1, when: "2nd half 2034", mark: "" },
      { cat: "airbus", type: "A350-900", n: 1, when: "1st half 2035", mark: "" },
      { cat: "leaseReturn", type: "B787-9", n: 2, when: "", mark: "" }
    ] },
    { fy: "FY2035-2036", total: 41, note: "", moves: [
      { cat: "boeing", type: "B787-10", n: 2, when: "Apr, Oct", mark: "" },
      { cat: "airbus", type: "A350-900", n: 1, when: "2nd half 2035", mark: "" },
      { cat: "leaseReturn", type: "B787-9", n: 1, when: "", mark: "" }
    ] },
    { fy: "FY2036-2037", total: 40, note: "", moves: [
      { cat: "leaseIn", type: "Dash-8-400", n: 1, when: "", mark: "*" },
      { cat: "leaseIn", type: "B787-10", n: 2, when: "", mark: "**" },
      { cat: "phaseOut", type: "Dash-8 Q400", n: 1, when: "Mar", mark: "" },
      { cat: "phaseOut", type: "B777-300ER", n: 1, when: "Oct", mark: "" },
      { cat: "phaseOut", type: "B777-300ER", n: 1, when: "Nov", mark: "" }
    ] },
    { fy: "FY2037-2038", total: 40, note: "", moves: [] },
    { fy: "FY2038-2039", total: 40, note: "", moves: [
      { cat: "leaseIn", type: "Dash-8-400", n: 1, when: "", mark: "*" }
    ] },
    { fy: "FY2039-2040", total: 40, note: "", moves: [
      { cat: "leaseIn", type: "B787-10", n: 2, when: "", mark: "**" },
      { cat: "phaseOut", type: "B777-300ER", n: 1, when: "Feb", mark: "" },
      { cat: "phaseOut", type: "B777-300ER", n: 1, when: "Mar", mark: "" }
    ] },
    { fy: "FY2040-2041", total: 38, note: "", moves: [
      { cat: "phaseOut", type: "B737-800", n: 1, when: "Nov", mark: "" },
      { cat: "phaseOut", type: "B737-800", n: 1, when: "Dec", mark: "" }
    ] },
    { fy: "FY2041-2042", total: 38, note: "", moves: [] },
    { fy: "FY2042-2043", total: 38, note: "", moves: [] },
    { fy: "FY2043-2044", total: 36, note: "", moves: [
      { cat: "phaseOut", type: "B787-8", n: 1, when: "Aug", mark: "" },
      { cat: "phaseOut", type: "B787-8", n: 1, when: "Nov", mark: "" }
    ] },
    { fy: "FY2044-2045", total: 32, note: "", moves: [
      { cat: "phaseOut", type: "B787-8", n: 1, when: "Jul", mark: "" },
      { cat: "phaseOut", type: "B787-8", n: 1, when: "Sep", mark: "" },
      { cat: "phaseOut", type: "B787-9", n: 2, when: "Dec", mark: "" }
    ] },
    { fy: "FY2045-2046", total: 31, note: "", moves: [
      { cat: "phaseOut", type: "Dash-8-400", n: 1, when: "Nov", mark: "" }
    ] },
    { fy: "FY2046-2047", total: 29, note: "", moves: [
      { cat: "phaseOut", type: "Dash-8-400", n: 1, when: "Feb", mark: "" },
      { cat: "phaseOut", type: "Dash-8-400", n: 1, when: "Mar", mark: "" }
    ] }
  ]
};

window.dispatchEvent(new Event("fleetdata"));
