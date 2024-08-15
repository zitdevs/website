import PlanCard from "../components/plan-card";

const PlanView = () => {
  return (
    <section className="container min-h-[50vh] pb-11">
      <h1 className="text-4xl font-bold mt-12">Choose Your Plan</h1>
      <div className="grid grid-cols-3 mt-12 gap-20">
        <PlanCard
          plan={{
            name: "Essential Web",
            price: 349.99,
            monthlyPrice: 29.99,
            description: "Your online presence, quick and affordable.",
            features: [
              "Based on exclusive template",
              "3 Customizable Pages",
              "Basic SEO Implementation",
              "Responsive Design",
              "Contact Form",
              "Rapid Production: Site live within 5 to 10 days",
              "Shared Hosting",
              "Up To 10 GB Fast Storage",
              "Up To 5GB Bandwidth",
              "Free Basic Support",
            ],
          }}
        />
        <PlanCard
          mostPopular
          plan={{
            name: "Advanced Web",
            price: 779.99,
            monthlyPrice: 43.52,
            description: "Custom design for your digital growth",
            features: [
              "All Features of Essential Web",
              "Dedicated Custom Design",
              "Up To 4 Custom Pages",
              "Advanced SEO Setup",
              "Project Manager",
              "Production Time: Site live within 10 to 15 days",
              "Shared Hosting",
              "Up To 20 GB Fast Storage",
              "Up To 10GB Bandwidth",
              "Free Premium Support",
            ],
          }}
        />

        <PlanCard
          plan={{
            name: "Enterprise",
            price: 1799.99,
            monthlyPrice: 99.99,
            description: "For businesses that need a custom solution",
            features: [
              "All Features of Advanced Web",
              "Unlimited Pages",
              "Advanced SEO Setup",
              "Custom Production Time",
              "Dedicated Product Manager",
              "Dedicated Hosting",
              "Unlimited Storage",
              "Unlimited Bandwidth",
              "Free Premium 24/7 Support and Maintenance",
            ],
          }}
        />
      </div>
    </section>
  );
};

export default PlanView;
