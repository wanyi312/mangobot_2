export default {
  desc: "The Explorer",
  descText:
    "Weighing just 15kg, the D1 Ultra moves at 3.7 m/s, climbs\n stairs, and adapts to complex terrain using reinforcement\n learning. Built for patrol, inspection, and multi-scenario\n operations",
  buttonText: "Request a Quote",
  button0: "Order Now",
  button1: "View Specs →",
  completeTitle: "D1 Ultra",
  viewTitle: "D1",
  viewTitle1: "Ultra",
  viewDesc: "The Explorer",
  ideal: [
    {
      title: "Warehouses &\n Distribution",
      desc: "After-hours patrol, inventory protection,perimeter security",
    },
    {
      title: "Industrial\nFacilities",
      desc: "Safety monitoring, hazardous area\n inspection, compliance verification",
    },
    {
      title: "Corporate Campuses",
      desc: "Grounds patrol, parking security, building perimeter",
    },
    {
      title: "Critical Infrastructure",
      desc: "Power facilities, data centers, sensitive\n installations",
    },
    {
      title: "Government & Military",
      desc: "Base security, facility monitoring, checkpoint support",
    },
  ],
  attrs: {
    title: "D1 Ultra.",
    title1: "By the numbers.",
    desc: "Engineered for real-world deployment. Built to perform\nin the most demanding environments, globally.",
    children: [
      [
        {
          label: "Physical",
          children: [
            { label: "Dimensions", value: "630 × 360 × 415 mm" },
            { label: "Weight", value: "15 kg" },
            { label: "Battery", value: "5 Ah" },
            { label: "Endurance", value: "1–2 hours" },
            { label: "Ports", value: "Ethernet, USB, Power, SBUS, UART" },
          ],
        },
        {
          label: "Performance",
          children: [
            { label: "Payload (Cont.)", value: "5 kg" },
            { label: "Payload (Max)", value: "10 kg" },
            { label: "Stair Climb", value: ">16 cm" },
            { label: "Climbing Angle", value: "30° (extreme 40°)" },
          ],
        },
        {
          label: "Intelligence",
          children: [
            { label: "Max Speed", value: "3.7 m/s" },
            { label: "Jump Height", value: "Up to 35 cm" },
            { label: "Peak Torque", value: "IP54" },
            { label: "IP Rating", value: "Edge, <50ms latency" },
          ],
        },
      ],
    ],
  },
  capabilities: {
    children: [
      {
        label: "Autonomous Patrol",
        children: [
          "Real-time intelligent decision-making",
          "Pre-programmed routes",
          "Self-stabilizing across stairs, rubble & complex terrain",
        ],
      },
      {
        label: "High-Power Drive",
        children: [
          "AI-powered analysis reduces false alarms while\nmaintaining vigilance.",
        ],
      },
      {
        label: "Open & Expandable",
        children: [
          "Modular, open, and built to integrate with anything",
          "Fully configurable for any environment or mission",
        ],
      },
    ],
  },
};
