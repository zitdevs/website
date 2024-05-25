import ItemCard from "./components/item-card";
import Empowering from "./assets/empowering.png";

const WhatWeDo = () => {
  return (
    <section id="what-we-do" className="container z-10 pb-48">
      <h2 className="text-5xl font-bold">What We Do</h2>

      <ul className="grid grid-cols-4 gap-4 mt-9">
        <li>
          <ItemCard
            icon={{ name: "clock" }}
            title="Flexible Work Hours for Developers"
            description="At Zitdevs, we believe in providing developers with the flexibility
            to choose their own work hours. Our platform allows developers to
            work as many hours as they want each week, offering them the
            opportunity to earn extra income while maintaining a healthy
            work-life balance."
          />
        </li>
        <li>
          <ItemCard
            icon={{ name: "users" }}
            title="Community-Focused Product Development"
            description="Our team is dedicated to creating products that benefit the
            community. We aim to develop solutions that address real-world
            problems and improve the quality of life for people around the
            globe. Whether it’s a new app, a website, or a tool, our projects
            are designed with the community’s needs in mind."
          />
        </li>
        <li>
          <ItemCard
            icon={{ name: "lightbulb" }}
            title="Driven by Great Ideas, Not Just Profits"
            description="We are a collective of developers motivated by the pursuit of
            impactful ideas rather than financial gain. Our primary goal is to
            work on projects that have the potential to make a significant
            difference, focusing on innovation and creativity over monetary
            rewards."
          />
        </li>
        <li className="row-span-2">
          <ItemCard
            icon={{ name: "briefcase" }}
            title="Empowering DevelopersProfits"
            description="Zitdevs provides a platform where developers can grow their skills
            and work on meaningful projects. We offer resources, mentorship, and
            a collaborative environment that fosters professional growth and
            development."
            image={{ src: Empowering, alt: "Empowering Developers" }}
          />
        </li>
        <li className="col-span-2">
          <ItemCard
            icon={{ name: "heart" }}
            title="Collaboration and Innovation"
            description="Our approach is centered around collaboration and innovation. We
            bring together talented developers from various backgrounds to work
            on cutting-edge projects. By sharing knowledge and ideas, we push
            the boundaries of what’s possible and deliver exceptional results."
          />
        </li>
        <li>
          <ItemCard
            icon={{ name: "shield" }}
            title="Transparency and Fairness"
            description="At Zitdevs, we value transparency and fairness in all our dealings.
            We ensure that developers are fairly compensated for their work and
            that our clients receive honest and reliable services."
          />
        </li>
      </ul>
    </section>
  );
};

export default WhatWeDo;
