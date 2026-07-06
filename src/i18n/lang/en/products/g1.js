export default {
  desc: "The Precision Specialist",
  descText:
    "The G1 Ultra is a precision-driven humanoid equipped with\n six-axis force sensors, eight high-res cameras, and a Jetson\n AGX Orin brain, built for industrial, commercial, and scientific\n environments that demand exceptional accuracy.",
  buttonText: "Request a Quote",
  button0: "Order Now",
  button1: "View Specs →",
  completeTitle: "G1 Ultra",
  viewTitle: "G1",
  viewTitle1: "Ultra",
  viewDesc: "The Precision Specialist",
  ideal: [
    {
      title: "Industrial & Smart Factories",
      desc: "Precision navigation and task handling in energy, chemical, and industrial facilities",
    },
    {
      title: "Research & AI Development",
      desc: "Open interfaces for secondary development and cutting-edge AI & robotics research",
    },
    {
      title: "Corporate & Commercial",
      desc: "Exhibitions, activation, and high-precision commercial operations",
    },
    {
      title: "Exclusive Events",
      desc: "Guest check-in, information services, VIP assistance",
    },
  ],
  attrs: {
    title: "G1 Ultra.",
    title1: "By the numbers.",
    desc: "Engineered for real-world deployment. Built to perform\nin the most demanding environments, globally.",
    children: [
      [
        {
          label: "Physical",
          children: [
            { label: "Height", value: "130 - 180 cm" },
            { label: "Weight", value: "150 kg" },
            { label: "Span", value: "70 cm" },
            { label: "DOF", value: "20" },
          ],
        },
        {
          label: "Performance",
          children: [
            { label: "Maximum Single-Arm Load", value: "5 kg" },
            { label: "Force Sensing", value: "Six-axis force sensor" },
            { label: "Cameras", value: "3× RGB-D + 5× fisheye" },
            { label: "Runtime", value: "4+ hrs" },
            { label: "Sensing Coverage", value: "360 degrees" },
            { label: "Battery Capacity", value: "48V 15Ah" },
          ],
        },
        {
          label: "Intelligence",
          children: [
            { label: "Computing Platform", value: "Jetson AGX Orin (64 GB)" },
            { label: "Connectivity", value: "Wired" },
          ],
        },
      ],
    ],
  },
  capabilities: {
    children: [
      {
        label: "Multidimensional Perception",
        children: [
          "Eight high-resolution cameras for full 3D upper-body perception",
          "Six-axis force sensors on both arms",
          "Precise control for delicate and complex operations",
        ],
      },
      {
        label: "Extreme Endurance",
        children: [
          "Millisecond-latency VR & motion capture\nrecords full-body joint data with cloud validation\nfor continuous learning.",
        ],
      },
      {
        label: "Multi-Scenario Operations",
        children: [
          "Operates at heights over 2m, navigating 95% of\nfactory pathways",
          "26 DOF with obstacle handling up to 20mm for\nmaximum versatility",
        ],
      },
    ],
  },
};
