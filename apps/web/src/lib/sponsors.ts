import type { SponsorsData } from "./types";

const emptySponsors = (): SponsorsData => ({
  generated_at: new Date().toISOString(),
  summary: {
    total_sponsors: 0,
    total_lifetime_amount: 0,
    total_current_monthly: 0,
    special_sponsors: 0,
    current_sponsors: 0,
    past_sponsors: 0,
    backers: 0,
    top_sponsor: { name: "", amount: 0 },
  },
  specialSponsors: [],
  sponsors: [],
  pastSponsors: [],
  backers: [],
});

export async function fetchSponsors() {
  return emptySponsors();
}
