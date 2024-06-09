"use client";
import { Dictionary } from "@/get-dictionary";
import { Side } from "./components/side";

export type HowItWorksProps = {
  tHowItWorks: Dictionary["home"]["how_it_works"];
};

const HowItWorks: React.FC<HowItWorksProps> = ({ tHowItWorks }) => {
  const clientItem = tHowItWorks.clients.item;
  const zitlancersItem = tHowItWorks.zitlancers.item;

  return (
    <section id="how-it-works" className="z-10 py-32">
      <div className="container">
        <h2 className="text-4xl sm:text-5xl font-bold">{tHowItWorks.title}</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 px-1 mt-9">
        <Side
          id="clients"
          variant="left"
          title={tHowItWorks.clients.title}
          cta={{
            text: tHowItWorks.clients.cta,
            onClick: () => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              });
              const clientButton = document.getElementById("client-button");
              clientButton?.click();
            },
          }}
          items={[
            {
              title: clientItem.contact_us.title,
              description: clientItem.contact_us.description,
              icon: { name: "message-square-more" },
            },
            {
              title: clientItem.schedule_call.title,
              description: clientItem.schedule_call.description,
              icon: { name: "calendar" },
            },
            {
              title: clientItem.project_evaluation.title,
              description: clientItem.project_evaluation.description,
              icon: { name: "scan-eye" },
            },
            {
              title: clientItem.project_approval.title,
              description: clientItem.project_approval.description,
              icon: { name: "check" },
            },
            {
              title: clientItem.cost_effective.title,
              description: clientItem.cost_effective.description,
              icon: { name: "hand-coins" },
            },
          ]}
        />
        <Side
          id="zitlancers"
          variant="right"
          title={tHowItWorks.zitlancers.title}
          cta={{
            text: tHowItWorks.zitlancers.cta,
            onClick: () => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              });
              const zitlancerButton =
                document.getElementById("zitlancer-button");
              zitlancerButton?.click();
            },
          }}
          items={[
            {
              title: zitlancersItem.register.title,
              description: zitlancersItem.register.description,
              icon: { name: "user-round-cog" },
            },
            {
              title: zitlancersItem.browse_join.title,
              description: zitlancersItem.browse_join.description,
              icon: { name: "search-code" },
            },
            {
              title: zitlancersItem.flexible_hours.title,
              description: zitlancersItem.flexible_hours.description,
              icon: { name: "calendar-clock" },
            },
            {
              title: zitlancersItem.early_bonus.title,
              description: zitlancersItem.early_bonus.description,
              icon: { name: "sparkles" },
            },
            {
              title: zitlancersItem.submit_get_paid.title,
              description: zitlancersItem.submit_get_paid.description,
              icon: { name: "circle-dollar-sign" },
            },
          ]}
        />
      </div>
    </section>
  );
};

export default HowItWorks;
