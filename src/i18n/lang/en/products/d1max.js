export default {
  desc: "Hybrid Quadruped Robot",
  descText:
    "The D1 Max brings near 1:1 load-to-weight performance, carrying up to 30kg at 4+ m/s on legs and 8+ m/s on wheels. IP67 rated and built for extremes.",
  buttonText: "Request a Quote",
  button0: "Order Now",
  button1: "View Specs →",
  completeTitle: "D1 Max",
  viewTitle: "D1",
  viewTitle1: "Max",
  viewDesc: "Intelligent Hybrid Quadruped Robot",
  ideal: [
    {
      title: "Security Built for Surveillance",
      desc: "Autonomous monitoring of industrial zones, campuses & restricted areas",
    },
    {
      title: "Power & Infrastructure",
      desc: "Inspects complex facilities and rough terrain without human risk",
    },
    {
      title: "Logistics & On Site Transport",
      desc: "Moves tools and payloads across environments where vehicles can't",
    },
    {
      title: "Rescue Mission Support",
      desc: "Built for high-risk conditions, reliable when response teams need it most",
    },
    {
      title: "Healthcare Facilities",
      desc: "Patient navigation, visitor guidance, administrative support",
    },
  ],
  attrs: {
    title: "D1 Max.",
    title1: "By the numbers.",
    desc: "Engineered for real-world deployment. Built to perform\nin the most demanding environments, globally.",
    children: [
      [
        {
          label: "Physical",
          children: [
            {
              label: "Standing Dimensions (L × W × H)",
              value: "~80 × 50 × 60 cm",
            },
            { label: "Folded Dimensions", value: "89 × 50 × 26 cm" },
            { label: "Weight", value: "30 kg" },
            { label: "Legged Walking Speed", value: ">4 m/s" },
            { label: "Wheeled Speed", value: ">8 m/s" },
          ],
        },
        {
          label: "Performance",
          children: [
            { label: "Battery Capacity", value: "20 Ah" },
            { label: "Endurance with Load", value: "25 kg - 2.5 hrs" },
            { label: "Operating Temperature", value: "-20 °C to 55 °C" },
            { label: "Protection Rating", value: "IP67" },
            { label: "Obstacle Crossing Height", value: "80 cm" },
            { label: "Slope Climbing Ability", value: "45°" },
          ],
        },
        {
          label: "Intelligence",
          children: [
            {
              label: "External Expansion Ports",
              value: "Gigabit Ethernet, USB, Serial Port",
            },
            { label: "Power Interfaces", value: "5V / 12V / 24V / 48V" },
            { label: "Max Power Output", value: "480 W" },
          ],
        },
      ],
    ],
  },
  capabilities: {
    children: [
      {
        label: "Smart Adaptive Movement",
        children: [
          "Continuously adjusts its posture and motion to handle impacts,\nrecover from falls, and adapt smoothly to changing ground conditions.",
          "30kg payload capacity — 50% more than comparable robots, without compromising balance.",
        ],
      },
      {
        label: "Hybrid Terrain Mobility",
        children: [
          "Legs and wheels in one, crosses obstacles,\nclimbs steep slopes, goes where vehicles can't.",
        ],
      },
      {
        label: "Continuous Operation",
        children: [
          "Hot-swappable batteries & autonomous charging,\n20Ah for uninterrupted, extended missions.",
        ],
      },
    ],
  },
};
