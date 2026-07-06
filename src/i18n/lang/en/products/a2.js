export default {
  desc: "The Ambassador",
  descText:
    "Standing 169cm tall, the A2 Ultra is Mangobot's flagship humanoid, designed to elevate human interaction through natural conversation, fluid movement, and intelligent navigation. With 20+ languages, autonomous 360°\n perception, and ultra-realistic speech.",
  buttonText: "Request a Quote",
  button0: "Order Now",
  button1: "View Specs →",
  completeTitle: "A2 Ultra",
  viewTitle: "A2",
  viewTitle1: "Ultra",
  viewDesc: "The Ambassador",
  ideal: [
    {
      title: "Hotels &\nResorts",
      desc: "Front desk support, autonomous guided tours, multilingual concierge",
    },
    {
      title: "Luxury\nRetail",
      desc: "Brand ambassadors, product information, elevated customer experience",
    },
    {
      title: "Corporate\nHeadquarters",
      desc: "Reception, self-mapped facility tours, multi language visitor navigation",
    },
    {
      title: "Exclusive\nEvents",
      desc: "Guest check-in, MC & co-host, live performance, VIP assistance",
    },
    {
      title: "Healthcare\nFacilities",
      desc: "Patient navigation, visitor guidance, administrative support",
    },
  ],
  attrs: {
    title: "A2 Ultra.",
    title1: "By the numbers.",
    desc: "Engineered for real-world deployment. Built to perform\nin the most demanding environments, globally.",
    children: [
      [
        {
          label: "Physical",
          children: [
            { label: "Height", value: "169 cm" },
            { label: "Weight", value: "69 kg" },
            { label: "Degrees of Freedom", value: "40+" },
            { label: "IP Rating", value: "IP54" },
          ],
        },
        {
          label: "Performance",
          children: [
            { label: "RGB-D camera", value: "Equipped" },
            { label: "3D LiDAR", value: "Equipped" },
            { label: "Fisheye camera", value: "Equipped" },
            { label: "Peak knee torque", value: "270 N·m" },
            { label: "Speed", value: "Max 0.8 m/s (typical <0.6 m/s)" },
          ],
        },
        {
          label: "Power and Energy",
          children: [
            { label: "Battery capacity", value: "14.4 Ah" },
            { label: "Standing battery life", value: "~3 h" },
            { label: "Walking battery life", value: "~1.5 h" },
            { label: "Charging time", value: "~1.5 h" },
            { label: "Voltage", value: "110–220 V" },
          ],
        },
      ],
      [
        {
          label: "Interaction Modules",
          children: [
            { label: "Facial expression screen", value: "Yes" },
            { label: "Interaction screen", value: "Yes" },
            { label: "Microphone array", value: "Yes" },
            { label: "Speaker", value: "Yes" },
            { label: "Indicator light", value: "Yes" },
            { label: "Languages", value: "20+ with LLM" },
          ],
        },
        {
          label: "Intelligence",
          children: [
            { label: "CPU", value: "16-core high-performance" },
            { label: "AI board", value: "NVIDIA Jetson Orin (275 TOPS)" },
          ],
        },
        {
          label: "Other",
          children: [
            { label: "Dance development", value: "Supported" },
            { label: "OTA upgrade", value: "Supported" },
            { label: "Control", value: "Remote - Smartphone - Computer" },
            {
              label: "In Box",
              value: "Robot, Charger, Mic, Battery, Remote, Transfer Device",
            },
            { label: "Perception", value: "360° total with zero blind spots" },
            { label: "WiFi", value: "Supported" },
          ],
        },
      ],
    ],
  },
  capabilities: {
    children: [
      {
        label: "Performance & Expression",
        children: [
          "Fluid dance routines",
          "Vocal capabilities",
          "Ultra-realistic speech synthesis",
        ],
      },
      {
        label: "Multilingual Communication",
        children: ["Fluent conversationalist in 20+ multiple languages"],
      },
      {
        label: "Autonomous Intelligence",
        children: [
          "Self-mapping & navigation",
          "360° obstacle avoidance with zero blind spots",
        ],
      },
    ],
  },
  video: {
    title: "Your robot. Your personality. Your rules.",
    desc: "LinkSoul is Mangobot's intelligent customization platform.\n One single interface to design every dimension of how your A2 Ultra thinks, speaks, moves, and behaves.",
    texts: [
      {
        label: "Design personality, tone, and conversational style",
        value: "→",
      },
      { label: "Choose or record custom voice and speech patterns", value: "→" },
      { label: "Program movement sequences and behavior triggers", value: "→" },
      { label: "Build branded knowledge bases for tailored responses", value: "→" },
      { label: "Manage everything from one dashboard, in real time", value: "→" },
    ],
  },
};
