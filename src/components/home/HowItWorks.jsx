import React from "react";
import { UserPlus, Search, Bell, Heart } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Register",
    description:
      "Create your account and complete your donor profile with blood group and location.",
  },
  {
    icon: Search,
    title: "Search Donors",
    description:
      "Find available donors by blood group and district. Filter results to find the perfect match.",
  },
  {
    icon: Bell,
    title: "Send Request",
    description:
      "Send a blood request to matched donors. They'll receive instant notifications.",
  },
  {
    icon: Heart,
    title: "Save Lives",
    description:
      "Connect with donors, coordinate donation, and save precious lives together.",
  },
];

export function HowItWorks() {
  const stepCards = steps.map((step, index) =>
    React.createElement(
      "div",
      { key: step.title, className: "relative" },
      React.createElement(
        "div",
        { className: "flex flex-col items-center text-center group" },
        // Step Icon with Red-Orange Gradient Background
        React.createElement(
          "div",
          { className: "relative z-10 mb-4" },
          React.createElement(
            "div",
            {
              className:
                "w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 via-red-600 to-orange-400 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300",
            },
            React.createElement(step.icon, {
              className: "h-8 w-8 text-white",
            })
          ),
          React.createElement(
            "span",
            {
              className:
                "absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white text-red-600 text-xs font-bold flex items-center justify-center",
            },
            index + 1
          )
        ),
        React.createElement(
          "h3",
          { className: "font-display text-xl font-semibold text-foreground mb-2" },
          step.title
        ),
        React.createElement(
          "p",
          { className: "text-muted-foreground text-sm" },
          step.description
        )
      )
    )
  );

  return React.createElement(
    "section",
    { className: "py-20 bg-background" },
    React.createElement(
      "div",
      { className: "container mx-auto px-4" },
      React.createElement(
        "div",
        { className: "text-center mb-12" },
        React.createElement(
          "h2",
          { className: "font-display text-3xl md:text-4xl font-bold text-foreground mb-4" },
          "How It ",
          React.createElement("span", { className: "text-red-500" }, "Works")
        ),
        React.createElement(
          "p",
          { className: "text-muted-foreground max-w-2xl mx-auto" },
          "Finding blood donors has never been easier. Our simple 4-step process connects you with the right donors quickly and efficiently."
        )
      ),
      // Grid of Steps
      React.createElement("div", { className: "relative" },
        React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-8 relative" }, stepCards),
        // Red-Orange Divider Line moved below cards
        React.createElement("div", {
          className:
            "hidden md:block absolute bottom-0 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-red-500 via-red-600 to-orange-400",
        })
      )
    )
  );
}
