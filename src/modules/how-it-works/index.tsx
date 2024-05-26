import { SideProps, Side } from "./components/side";

const HowItWorks = () => {
  const clientSideProps: SideProps = {
    id: "clients",
    title: "For Clients",
    variant: "left",
    cta: {
      text: "Let's Talk",
      href: "#contact",
    },
    items: [
      {
        title: "Contact Us",
        description:
          "Start by reaching out to us through our contact form or email. We’re eager to hear about your project and understand your vision.",
        icon: { name: "message-square-more" },
      },
      {
        title: "Schedule a Call",
        description:
          "Once you contact us, we will schedule a call to discuss your project in detail. This call helps us grasp the potential of your idea and align it with our mission at Zitdevs.",
        icon: { name: "calendar" },
      },
      {
        title: "Project Evaluation",
        description:
          "At Zitdevs, we focus on projects that show great potential as a business. Our goal is to ensure that our developers are engaged in projects that are attractive and motivating, as they often work on these after their formal jobs.",
        icon: { name: "scan-eye" },
      },
      {
        title: "Project Approval",
        description:
          "After evaluating your project, we will approve it if it aligns with our criteria. We then assemble a dedicated team of developers who are passionate about your idea and ready to bring it to life.",
        icon: { name: "check" },
      },
      {
        title: "Cost-Effective Development",
        description:
          "Our model allows us to maintain a cost-effective development process while ensuring a high level of focus and commitment to your idea. This approach helps us deliver quality results without excessive costs.",
        icon: { name: "hand-coins" },
      },
    ],
  };

  const zitlancersSideProps: SideProps = {
    id: "zitlancers",
    title: "For Zitlancers",
    variant: "right",
    cta: {
      text: "Join to Waitlist",
      href: "#contact",
    },
    items: [
      {
        title: "Register on Our Platform",
        description:
          "To start collaborating with us, register on our platform (currently in development). This platform will be your gateway to a variety of exciting projects.",
        icon: { name: "user-round-cog" },
      },
      {
        title: "Browse and Join Projects",
        description:
          "Once registered, you can browse through available projects and join those that interest you. Select the number of hours you wish to dedicate each week, ranging from 5 to 15 hours.",
        icon: { name: "search-code" },
      },
      {
        title: "Flexible Work Hours",
        description:
          "You have the flexibility to choose when and how much you work each week. Your main commitment is to meet the project deadlines.",
        icon: { name: "calendar-clock" },
      },
      {
        title: "Early Delivery Bonuses",
        description:
          "Some projects offer bonuses for early delivery, providing additional incentives for timely and efficient work.",
        icon: { name: "sparkles" },
      },
      {
        title: "Submit Work and Get Paid",
        description:
          "Complete your tasks within the stipulated timeline and submit your work. Payments are processed promptly based on the hours worked.",
        icon: { name: "circle-dollar-sign" },
      },
    ],
  };

  return (
    <section id="how-it-works" className="z-10 py-32">
      <div className="container">
        <h2 className="text-4xl sm:text-5xl font-bold">How It Works</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 px-1 mt-9">
        <Side {...clientSideProps} />
        <Side {...zitlancersSideProps} />
      </div>
    </section>
  );
};

export default HowItWorks;
