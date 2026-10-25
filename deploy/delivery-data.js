/* Biman Bangladesh Airlines — delivery schedule of the purchased aircraft.
   Source: "Delivery Schedule of the Purchased Aircraft" (Aircraft Delivery Schedule.pdf).

   EDIT THIS FILE ONLY. The chart, KPIs, legend and detail panel all recompute from it.

   Each delivery: { type, contract, when, year, half }
     type     — a key from `types` below
     contract — a key from `contracts` below
     when     — the timing exactly as printed in the source
     year     — calendar year the aircraft arrives
     half     — 1 for Jan-Jun, 2 for Jul-Dec

   Boeing dates are given to the month; Airbus only to the half-year ("1st Sem
   2034"). Half-years are therefore the finest bucket the two share, and the
   chart is built on them. `when` keeps the original wording for the detail panel.
*/

window.DELIVERY_DATA = {
  meta: {
    airline: "Biman Bangladesh Airlines",
    title: "Delivery schedule of the purchased aircraft",
    source: "Delivery Schedule of the Purchased Aircraft"
  },

  contracts: [
    { k: "paBoeing", label: "PA with Boeing", signed: "30 April 2026", maker: "Boeing" },
    { k: "saBoeing", label: "SA with Boeing", signed: "21 September 2026", maker: "Boeing" },
    { k: "paAirbus", label: "PA with Airbus", signed: "7 October 2026", maker: "Airbus" }
  ],

  // Stack order is the order below, and the fills are validated for colour-blind
  // separation in that order. Reordering them means re-checking the palette.
  types: [
    { k: "b737max", label: "737-8 MAX", fill: "#2563EB" },
    { k: "b787_9", label: "787-9", fill: "#D97706" },
    { k: "b787_10", label: "787-10", fill: "#0891B2" },
    { k: "a321neo", label: "A321neo", fill: "#16A34A" },
    { k: "a350_900", label: "A350-900", fill: "#7C3AED" }
  ],

  deliveries: [
    // PA signed with Boeing on 30 April 2026 — 737-8 MAX x4
    { type: "b737max", contract: "paBoeing", when: "Apr 2032", year: 2032, half: 1 },
    { type: "b737max", contract: "paBoeing", when: "Jun 2032", year: 2032, half: 1 },
    { type: "b737max", contract: "paBoeing", when: "Aug 2032", year: 2032, half: 2 },
    { type: "b737max", contract: "paBoeing", when: "Oct 2032", year: 2032, half: 2 },

    // PA signed with Boeing on 30 April 2026 — 787-9 x2
    { type: "b787_9", contract: "paBoeing", when: "Nov 2031", year: 2031, half: 2 },
    { type: "b787_9", contract: "paBoeing", when: "Feb 2032", year: 2032, half: 1 },

    // PA signed with Boeing on 30 April 2026 — 787-10 x8
    { type: "b787_10", contract: "paBoeing", when: "Jul 2032", year: 2032, half: 2 },
    { type: "b787_10", contract: "paBoeing", when: "Sep 2032", year: 2032, half: 2 },
    { type: "b787_10", contract: "paBoeing", when: "Apr 2033", year: 2033, half: 1 },
    { type: "b787_10", contract: "paBoeing", when: "Oct 2033", year: 2033, half: 2 },
    { type: "b787_10", contract: "paBoeing", when: "Apr 2034", year: 2034, half: 1 },
    { type: "b787_10", contract: "paBoeing", when: "Oct 2034", year: 2034, half: 2 },
    { type: "b787_10", contract: "paBoeing", when: "Apr 2035", year: 2035, half: 1 },
    { type: "b787_10", contract: "paBoeing", when: "Oct 2035", year: 2035, half: 2 },

    // SA signed with Boeing on 21 September 2026 — 737-8 MAX x6
    { type: "b737max", contract: "saBoeing", when: "Apr 2033", year: 2033, half: 1 },
    { type: "b737max", contract: "saBoeing", when: "Jul 2033", year: 2033, half: 2 },
    { type: "b737max", contract: "saBoeing", when: "Oct 2033", year: 2033, half: 2 },
    { type: "b737max", contract: "saBoeing", when: "Apr 2034", year: 2034, half: 1 },
    { type: "b737max", contract: "saBoeing", when: "Jul 2034", year: 2034, half: 2 },
    { type: "b737max", contract: "saBoeing", when: "Oct 2034", year: 2034, half: 2 },

    // SA signed with Boeing on 21 September 2026 — 787-10 x5
    { type: "b787_10", contract: "saBoeing", when: "Jun 2034", year: 2034, half: 1 },
    { type: "b787_10", contract: "saBoeing", when: "Oct 2034", year: 2034, half: 2 },
    { type: "b787_10", contract: "saBoeing", when: "Jan 2035", year: 2035, half: 1 },
    { type: "b787_10", contract: "saBoeing", when: "Apr 2035", year: 2035, half: 1 },
    { type: "b787_10", contract: "saBoeing", when: "Jul 2035", year: 2035, half: 2 },

    // PA signed with Airbus on 7 October 2026 — A321neo x6
    { type: "a321neo", contract: "paAirbus", when: "2nd Sem 2033", year: 2033, half: 2 },
    { type: "a321neo", contract: "paAirbus", when: "1st Sem 2034", year: 2034, half: 1 },
    { type: "a321neo", contract: "paAirbus", when: "1st Sem 2034", year: 2034, half: 1 },
    { type: "a321neo", contract: "paAirbus", when: "2nd Sem 2034", year: 2034, half: 2 },
    { type: "a321neo", contract: "paAirbus", when: "2nd Sem 2034", year: 2034, half: 2 },
    { type: "a321neo", contract: "paAirbus", when: "2nd Sem 2034", year: 2034, half: 2 },

    // PA signed with Airbus on 7 October 2026 — A350-900 x4
    { type: "a350_900", contract: "paAirbus", when: "1st Sem 2034", year: 2034, half: 1 },
    { type: "a350_900", contract: "paAirbus", when: "2nd Sem 2034", year: 2034, half: 2 },
    { type: "a350_900", contract: "paAirbus", when: "1st Sem 2035", year: 2035, half: 1 },
    { type: "a350_900", contract: "paAirbus", when: "2nd Sem 2035", year: 2035, half: 2 }
  ]
};

window.dispatchEvent(new Event("deliverydata"));
