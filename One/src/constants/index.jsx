import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I Am Extremely Satisfied With The Services Provided. The Team Was Responsive, Professional, And Delivered Results Beyond My Expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I Couldn't Be Happier With The Outcome of Our Project. The Team's Creativity And Problem-Solving Skills Were Instrumental In Bringing Our Vision To Life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working With This Company Was A Pleasure. Their Attention To Detail And Commitment To Excellence Are Commendable. I Would Highly Recommend Them To Anyone Looking For Top-Notch Service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working With The Team At XYZ Company Was A Game-changer For Our Project. Their Attention To Detail And Innovative Solutions Helped Us Achieve Our Goals Faster Than We Thought Possible. We Are Grateful For Their Expertise And Professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I Am Amazed By The Level of Professionalism And Dedication Shown By The Team. They Were Able To Exceed Our Expectations And Deliver Outstanding Results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The Team Went Above And Beyond To Ensure Our Project Was A Success. Their Expertise And Dedication Are Unmatched. I Look Forward To Working With Them Again In The Future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Drag-And-Drop Interface",
    description:
      "Easily Design And Arrange Your VR Environments With A User-Friendly Drag-And-Drop Interface.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "Build VR Applications That Run Seamlessly Across Multiple Platforms, Including Mobile, Desktop, And VR Headsets.",
  },
  {
    icon: <ShieldHalf />,
    text: "Built-In Templates",
    description:
      "Jumpstart Your VR Projects With A Variety of Built-In Templates For Different Types of Applications And Environments.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Preview",
    description:
      "Preview Your VR Application In Real-Time As You Make Changes, Allowing For Quick Iterations And Adjustments.",
  },
  {
    icon: <PlugZap />,
    text: "Collaboration Tools",
    description:
      "Work Together With Your Team In Real-Time On VR Projects, Enabling Seamless Collaboration And Idea Sharing.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Gain Valuable Insights Into User Interactions And Behavior Within Your VR Applications With An Integrated Analytics Dashboard.",
  },
];

export const checklistItems = [
  {
    title: "Code Merge Made Easy",
    description:
      "Track The Performance of Your VR Apps And Gain Insights Into User Behavior.",
  },
  {
    title: "Review Code Without Worry",
    description:
      "Track The Performance of Your VR Apps And Gain Insights Into User Behavior.",
  },
  {
    title: "AI Assistance To Reduce Time",
    description:
      "Track The Performance of Your VR Apps And Gain Insights Into User Behavior.",
  },
  {
    title: "Share Work In Minutes",
    description:
      "Track The Performance of Your VR Apps And Gain Insights Into User Behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private Board Sharing",
      "5 GB Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private Board Sharing",
      "10 GB Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private Board Sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
