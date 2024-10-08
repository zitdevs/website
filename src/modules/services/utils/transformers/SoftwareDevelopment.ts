import type { Dictionary } from "src/get-dictionary";
import type { DetailProps, PlanData } from "../../types";

/**
 * Get plans for software development services
 */
export function GetPlans(
  tPricing: Dictionary["services"]["page"]["softwareDevelopment"]["pricing"],
  lang: string,
): PlanData[] {
  return [
    {
      startingAt: true,
      name: tPricing.plans.growth.title,
      description: tPricing.plans.growth.description,
      features: tPricing.plans.growth.features,
      price: 36000,
      cta: {
        text: tPricing.plans.growth.cta,
        href: `/${lang}/contact`,
      },
    },
    {
      startingAt: true,
      name: tPricing.plans.essentials.title,
      description: tPricing.plans.essentials.description,
      features: tPricing.plans.essentials.features,
      price: 12000,
      cta: {
        text: tPricing.plans.essentials.cta,
        href: `/${lang}/contact`,
      },
    },
    {
      startingAt: true,
      name: tPricing.plans.enterprise.title,
      description: tPricing.plans.enterprise.description,
      features: tPricing.plans.enterprise.features,
      price: 95000,
      cta: {
        text: tPricing.plans.essentials.cta,
        href: `/${lang}/contact`,
      },
    },
    {
      name: tPricing.plans.flexible.title,
      description: tPricing.plans.flexible.description,
      features: tPricing.plans.flexible.features,
      price: 25,
      priceFrequency: tPricing.plans.flexible.frequency,
      cta: {
        text: tPricing.plans.essentials.cta,
        href: `/${lang}/contact`,
      },
    },
  ];
}

export function GetPlanCompare(
  tComparePricing: Dictionary["services"]["page"]["softwareDevelopment"]["comparePricing"],
  lang: string,
) {
  return [
    {
      price: 25,
      name: tComparePricing.plans.flexible.title,
      description: tComparePricing.plans.flexible.description,
      priceFrequency: tComparePricing.plans.flexible.frequency,
      cta: {
        text: tComparePricing.plans.flexible.cta,
        href: `/${lang}/contact`,
      },
    },
    {
      startingAt: true,
      price: 12000,
      name: tComparePricing.plans.essentials.title,
      description: tComparePricing.plans.essentials.description,
      cta: {
        text: tComparePricing.plans.essentials.cta,
        href: `/${lang}/contact`,
      },
    },
    {
      startingAt: true,
      price: 36000,
      name: tComparePricing.plans.growth.title,
      description: tComparePricing.plans.growth.description,
      cta: {
        text: tComparePricing.plans.growth.cta,
        href: `/${lang}/contact`,
      },
    },
    {
      startingAt: true,
      price: 95000,
      name: tComparePricing.plans.enterprise.title,
      description: tComparePricing.plans.enterprise.description,
      cta: {
        text: tComparePricing.plans.enterprise.cta,
        href: `/${lang}/contact`,
      },
    },
  ];
}

/**
 * Get plan details for software development services
 */
export function GetPlanDetails(
  tDetails: Dictionary["services"]["page"]["softwareDevelopment"]["comparePricing"]["details"],
): DetailProps[] {
  return [
    {
      category: tDetails.coreFeatures.title,
      features: [
        {
          title: tDetails.coreFeatures.features.development.title,
          columns: [
            {
              type: "text",
              title:
                tDetails.coreFeatures.features.development.columns.flexible,
            },
            {
              type: "text",
              title:
                tDetails.coreFeatures.features.development.columns.essentials,
            },
            {
              type: "text",
              title: tDetails.coreFeatures.features.development.columns.growth,
            },
            {
              type: "text",
              title:
                tDetails.coreFeatures.features.development.columns.enterprise,
            },
          ],
        },
        {
          title: tDetails.coreFeatures.features.dedicated.title,
          columns: [
            {
              type: "icon",
              included: true,
              note: tDetails.coreFeatures.features.dedicated.columns.flexible,
            },
            { type: "icon", included: true },
            {
              type: "icon",
              included: true,
              note: tDetails.coreFeatures.features.dedicated.columns.growth,
            },
            {
              type: "icon",
              included: true,
              note: tDetails.coreFeatures.features.dedicated.columns.enterprise,
            },
          ],
        },
        {
          title: tDetails.coreFeatures.features.tech.title,
          columns: [
            {
              type: "text",
              title: tDetails.coreFeatures.features.tech.columns.flexible,
            },
            {
              type: "text",
              title: tDetails.coreFeatures.features.tech.columns.essentials,
            },
            {
              type: "text",
              title: tDetails.coreFeatures.features.tech.columns.growth,
            },
            {
              type: "text",
              title: tDetails.coreFeatures.features.tech.columns.enterprise,
            },
          ],
        },
      ],
    },
    {
      category: tDetails.quality.title,
      features: [
        {
          title: tDetails.quality.features.codeReview.title,
          columns: [
            {
              type: "icon",
              included: true,
            },
            { type: "icon", included: true },
            {
              type: "icon",
              included: true,
            },
            {
              type: "icon",
              included: true,
            },
          ],
        },
        {
          title: tDetails.quality.features.qaTesting.title,
          columns: [
            {
              type: "text",
              title: tDetails.quality.features.qaTesting.columns.flexible,
            },
            {
              type: "text",
              title: tDetails.quality.features.qaTesting.columns.essentials,
            },
            {
              type: "text",
              title: tDetails.quality.features.qaTesting.columns.growth,
            },
            {
              type: "text",
              title: tDetails.quality.features.qaTesting.columns.enterprise,
            },
          ],
        },
        {
          title: tDetails.quality.features.userAcceptance.title,
          columns: [
            {
              type: "text",
              title: tDetails.quality.features.userAcceptance.columns.flexible,
            },
            {
              type: "icon",
              included: false,
            },
            {
              type: "icon",
              included: true,
            },
            {
              type: "icon",
              included: true,
            },
          ],
        },
      ],
    },
    {
      category: tDetails.support.title,
      features: [
        {
          title: tDetails.support.features.postLaunch.title,
          columns: [
            {
              type: "text",
              title: tDetails.support.features.postLaunch.columns.flexible,
            },
            {
              type: "text",
              title: tDetails.support.features.postLaunch.columns.essentials,
            },
            {
              title: tDetails.support.features.postLaunch.columns.growth,
              type: "text",
            },
            {
              title: tDetails.support.features.postLaunch.columns.enterprise,
              type: "text",
            },
          ],
        },
        {
          title: tDetails.support.features.maintenance.title,
          columns: [
            {
              type: "text",
              title: tDetails.support.features.maintenance.columns.flexible,
            },
            {
              type: "text",
              title: tDetails.support.features.maintenance.columns.essentials,
            },
            {
              type: "text",
              title: tDetails.support.features.maintenance.columns.growth,
            },
            {
              type: "text",
              title: tDetails.support.features.maintenance.columns.enterprise,
            },
          ],
        },
        {
          title: tDetails.support.features.staging.title,
          columns: [
            {
              type: "text",
              title: tDetails.support.features.staging.columns.flexible,
            },
            {
              type: "icon",
              included: false,
            },
            {
              type: "icon",
              included: true,
            },
            {
              type: "icon",
              included: true,
            },
          ],
        },
      ],
    },
    {
      category: tDetails.additional.title,
      features: [
        {
          title: tDetails.additional.features.consultation.title,
          columns: [
            {
              type: "text",
              title: tDetails.additional.features.consultation.columns.flexible,
            },
            {
              type: "text",
              title:
                tDetails.additional.features.consultation.columns.essentials,
            },
            {
              type: "text",
              title: tDetails.additional.features.consultation.columns.growth,
            },
            {
              type: "text",
              title:
                tDetails.additional.features.consultation.columns.enterprise,
            },
          ],
        },
        {
          title: tDetails.additional.features.customIntegration.title,
          columns: [
            {
              type: "text",
              title:
                tDetails.additional.features.customIntegration.columns.flexible,
            },
            {
              type: "text",
              title:
                tDetails.additional.features.customIntegration.columns
                  .essentials,
            },
            {
              type: "text",
              title:
                tDetails.additional.features.customIntegration.columns.growth,
            },
            {
              type: "text",
              title:
                tDetails.additional.features.customIntegration.columns
                  .enterprise,
            },
          ],
        },
        {
          title: tDetails.additional.features.performanceOptimization.title,
          columns: [
            {
              type: "text",
              title:
                tDetails.additional.features.performanceOptimization.columns
                  .flexible,
            },
            {
              type: "icon",
              included: false,
            },
            {
              type: "icon",
              included: true,
            },
            {
              type: "icon",
              included: true,
              note: tDetails.additional.features.performanceOptimization.columns
                .enterprise,
            },
          ],
        },
        {
          title: tDetails.additional.features.extraHours.title,
          columns: [
            {
              type: "text",
              title: tDetails.additional.features.extraHours.columns.flexible,
            },
            {
              type: "text",
              title: tDetails.additional.features.extraHours.columns.essentials,
            },
            {
              type: "text",
              title: tDetails.additional.features.extraHours.columns.growth,
            },
            {
              type: "text",
              title: tDetails.additional.features.extraHours.columns.enterprise,
            },
          ],
        },
      ],
    },
  ];
}
