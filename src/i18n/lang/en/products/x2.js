export default {
  desc: "the vibe master",
  descText:
    "Standing 130cm tall,  Mangobot's X2 Ulta is an expressive humanoid built for performance-driven environments, combining lifelike movement, intelligent interaction, and embodied AI.",
  buttonText: "Request a Quote",
  button0: "Order Now",
  button1: "View Specs →",
  completeTitle: "X2 Ultra",
  viewTitle: "X2",
  viewTitle1: "Ultra",
  viewDesc: "The Vibe Master",
  ideal: [
    {
      title: "Events &\nFlashmobs",
      desc: "Choreographed fleet performances and synchronized routines that stop crowds and generate organic social moments.",
    },
    {
      title: "Brand\nAmbassador",
      desc: "From co-hosting to DJ to stand-up, the X2 Ultra takes any stage role with a fully customizable persona and voice",
    },
    {
      title: "Education &\nEngagement",
      desc: "Interactive humanoid demonstrations for schools and universities, making them tangible for every audience",
    },
    {
      title: "Exclusive\nEvents",
      desc: "Conferences, activations, and VIP experiences elevated by humanoid interaction that leaves an impact",
    },
    {
      title: "Luxury &\nHospitality",
      desc: "Hotel lobbies to launches, X2 delivers personalized guest experiences that define the standard for modern luxury",
    },
  ],
  attrs: {
    title: "X2 Ultra.",
    title1: "By the numbers.",
    desc: "Engineered for real-world deployment. Built to perform\nin the most demanding environments, globally.",
    children: [
      [
        {
          label: "Physical",
          children: [
            { label: "Height", value: "130 cm" },
            { label: "Weight", value: "39 kg" },
            { label: "Degrees of Freedom", value: "30" },
            { label: "Max load", value: "3 kg" },
          ],
        },
        {
          label: "Performance",
          children: [
            { label: "RGB-D camera", value: "Equipped" },
            { label: "3D LiDAR", value: "Equipped" },
            { label: "Excluding and Effector", value: "10C to 40C degrees" },
            { label: "Peak knee torque", value: "120 N·m" },
            {
              label: "Walking Speed",
              value: "Up to 1.8 m/s - typical: <0.8 m/s",
            },
          ],
        },
        {
          label: "Power and Energy",
          children: [
            { label: "Battery capacity", value: "500 Wh" },
            { label: "Standing battery life", value: "~2 h" },
            {
              label: "Power supply method",
              value: "Direct charging - swappable battery",
            },
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
            { label: "Audio I/O", value: "Wireless microphone, speaker" },
          ],
        },
        {
          label: "Intelligence",
          children: [
            { label: "Main compute board", value: "RK3588 x2" },
            { label: "High performance board", value: "Orin NX (157 TOPS)" },
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
            { label: "Mobile App", value: "Supported" },
            { label: "Method", value: "Wi-Fi, Bluetooth, 4G/5G module" },
          ],
        },
      ],
    ],
  },
  capabilities: {
    children: [
      {
        label: "Choreography & Performance",
        children: [
          "Fluid dance routines & custom choreography",
          "Contemporary & traditional movement styles",
          "Ultra-realistic speech synthesis & vocal capabilities",
        ],
      },
      {
        label: "Audience Interaction",
        children: ["Real-time guest recognition & personalized\ninteraction"],
      },
      {
        label: "Multi-Robot Synchronization",
        children: [
          "Deploy multiple X2 Ultra units in perfectly choreographed fleet performances.",
          "Fully customizable to your brand: colors, messaging, and movement,\nall in sync.",
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
