import { Button } from "@/components/button/Button";
import { DynamicIcon } from "@/components/icons/dynamic";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="z-10 py-32">
      <div className="container">
        <h2 className="text-4xl sm:text-5xl font-bold">How It Works</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 px-2 mt-9">
        <section
          id="how-it-works:clients"
          className="bg-secondary py-8 rounded-l-lg text-white"
        >
          <div className="lg:max-w-[650px] mx-auto px-[2rem]">
            <h3 className="text-2xl font-bold">For Clients</h3>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-9">
              <li>
                <div className="flex flex-col">
                  <h4 className="font-semibold text-lg flex items-center gap-2">
                    <span className="text-primary">1.</span>{" "}
                    <span>Contact Us</span>
                    <DynamicIcon
                      name="contact"
                      className="size-5 inline"
                      aria-hidden
                    />
                  </h4>
                  <p className="ml-4 text-sm text-white/80">
                    Start by reaching out to us through our contact form or
                    email. We’re eager to hear about your project and understand
                    your vision.
                  </p>
                </div>
              </li>
              <li>
                <div className="flex flex-col">
                  <h4 className="font-semibold text-lg flex items-center gap-2">
                    <span className="text-primary">2.</span>
                    <span>Schedule a Call</span>
                    <DynamicIcon
                      name="calendar"
                      className="size-5 inline"
                      aria-hidden
                    />
                  </h4>
                  <p className="ml-4 text-sm text-white/80">
                    Once you contact us, we will schedule a call to discuss your
                    project in detail. This call helps us grasp the potential of
                    your idea and align it with our mission at Zitdevs.
                  </p>
                </div>
              </li>
              <li>
                <div className="flex flex-col">
                  <h4 className="font-semibold text-lg flex items-center gap-2">
                    <span className="text-primary">3.</span>
                    <span>Project Evaluation</span>
                    <DynamicIcon
                      name="scan-eye"
                      className="size-5 inline"
                      aria-hidden
                    />
                  </h4>
                  <p className="ml-4 text-sm text-white/80">
                    At Zitdevs, we focus on projects that show great potential
                    as a business. Our goal is to ensure that our developers are
                    engaged in projects that are attractive and motivating, as
                    they often work on these after their formal jobs.
                  </p>
                </div>
              </li>
              <li>
                <div className="flex flex-col">
                  <h4 className="font-semibold text-lg flex items-center gap-2">
                    <span className="text-primary">4.</span>
                    <span>Project Approval</span>
                    <DynamicIcon
                      name="check"
                      className="size-5 inline"
                      aria-hidden
                    />
                  </h4>
                  <p className="ml-4 text-sm text-white/80">
                    After evaluating your project, we will approve it if it
                    aligns with our criteria. We then assemble a dedicated team
                    of developers who are passionate about your idea and ready
                    to bring it to life.
                  </p>
                </div>
              </li>
              <li className="col-span-1 sm:col-span-2">
                <div className="flex flex-col">
                  <h4 className="font-semibold text-lg flex items-center gap-2">
                    <span className="text-primary">5.</span>
                    <span>Cost-Effective Development</span>
                    <DynamicIcon
                      name="hand-coins"
                      className="size-5 inline"
                      aria-hidden
                    />
                  </h4>
                  <p className="ml-4 text-sm text-white/80">
                    Our model allows us to maintain a cost-effective development
                    process while ensuring a high level of focus and commitment
                    to your idea. This approach helps us deliver quality results
                    without excessive costs.
                  </p>
                </div>
              </li>
            </ul>
            <Button className="mt-4" size="sm">
              Let&apos;s Talk
            </Button>
          </div>
        </section>

        <section
          id="how-it-works:zitlancers"
          className="bg-primary px-7 pr-20 py-8 rounded-r-lg text-white"
        >
          <div className="lg:max-w-[650px] mx-auto px-[2rem]">
            <h3 className="text-2xl font-bold">For Zitlancers</h3>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-9">
              <li>
                <div className="flex flex-col">
                  <h4 className="font-semibold text-lg flex items-center gap-2">
                    <span className="text-secondary">1.</span>
                    <span>Register on Our Platform</span>
                    <DynamicIcon
                      name="user-round-cog"
                      className="size-5 inline"
                      aria-hidden
                    />
                  </h4>
                  <p className="ml-4 text-sm text-white/80">
                    To start collaborating with us, register on our platform
                    (currently in development). This platform will be your
                    gateway to a variety of exciting projects.
                  </p>
                </div>
              </li>
              <li>
                <div className="flex flex-col">
                  <h4 className="font-semibold text-lg flex items-center gap-2">
                    <span className="text-secondary">2.</span>
                    <span>Browse and Join Projects</span>
                    <DynamicIcon
                      name="search-code"
                      className="size-5 inline"
                      aria-hidden
                    />
                  </h4>
                  <p className="ml-4 text-sm text-white/80">
                    Once registered, you can browse through available projects
                    and join those that interest you. Select the number of hours
                    you wish to dedicate each week, ranging from 5 to 15 hours.
                  </p>
                </div>
              </li>
              <li>
                <div className="flex flex-col">
                  <h4 className="font-semibold text-lg flex items-center gap-2">
                    <span className="text-secondary">3.</span>
                    <span>Flexible Work Hours</span>
                    <DynamicIcon
                      name="calendar-clock"
                      className="size-5 inline"
                      aria-hidden
                    />
                  </h4>
                  <p className="ml-4 text-sm text-white/80">
                    You have the flexibility to choose when and how much you
                    work each week. Your main commitment is to meet the project
                    deadlines.
                  </p>
                </div>
              </li>
              <li>
                <div className="flex flex-col">
                  <h4 className="font-semibold text-lg flex items-center gap-2">
                    <span className="text-secondary">4.</span>
                    <span>Early Delivery Bonuses</span>
                    <DynamicIcon
                      name="sparkles"
                      className="size-5 inline"
                      aria-hidden
                    />
                  </h4>
                  <p className="ml-4 text-sm text-white/80">
                    Some projects offer bonuses for early delivery, providing
                    additional incentives for timely and efficient work.
                  </p>
                </div>
              </li>
              <li className="col-span-1 sm:col-span-2">
                <div className="flex flex-col">
                  <h4 className="font-semibold text-lg flex items-center gap-2">
                    <span className="text-secondary">5.</span>
                    <span>Submit Work and Get Paid</span>
                    <DynamicIcon
                      name="circle-dollar-sign"
                      className="size-5 inline"
                      aria-hidden
                    />
                  </h4>
                  <p className="ml-4 text-sm text-white/80">
                    Complete your tasks within the stipulated timeline and
                    submit your work. Payments are processed promptly based on
                    the hours
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </section>
  );
};

export default HowItWorks;
