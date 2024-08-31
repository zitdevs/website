import type { Dictionary } from "src/get-dictionary";
import type { DetailProps } from "../../types";

/**
 * Get plan details for software development services
 */
export function GetPlanDetails(
  tDetails: Dictionary["services"]["page"]["websiteDevelopment"]["comparePricing"]["details"],
): DetailProps[] {
  return [
    {
      isOpen: true,
      category: tDetails.designAndPages.title,
      features: [
        {
          title: tDetails.designAndPages.features.numberOfPage.title,
          columns: [
            {
              type: "text",
              title:
                tDetails.designAndPages.features.numberOfPage.columns.flexidev,
            },
            {
              type: "text",
              title:
                tDetails.designAndPages.features.numberOfPage.columns
                  .essentials,
            },
            {
              type: "text",
              title:
                tDetails.designAndPages.features.numberOfPage.columns.growth,
            },
            {
              type: "text",
              title:
                tDetails.designAndPages.features.numberOfPage.columns
                  .professional,
            },
          ],
        },
        {
          title: tDetails.designAndPages.features.responsiveDesign.title,
          columns: [
            {
              type: "icon",
              included: true,
            },
            {
              type: "icon",
              included: true,
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
        {
          title: tDetails.designAndPages.features.customizationOptions.title,
          columns: [
            {
              type: "text",
              title:
                tDetails.designAndPages.features.customizationOptions.columns
                  .flexidev,
            },
            {
              type: "text",
              title:
                tDetails.designAndPages.features.customizationOptions.columns
                  .essentials,
            },
            {
              type: "text",
              title:
                tDetails.designAndPages.features.customizationOptions.columns
                  .growth,
            },
            {
              type: "text",
              title:
                tDetails.designAndPages.features.customizationOptions.columns
                  .professional,
            },
          ],
        },
      ],
    },
    {
      category: tDetails.SEOAndPerformance.title,
      features: [
        {
          title: tDetails.SEOAndPerformance.features.SeoSetup.title,
          columns: [
            {
              type: "text",
              title:
                tDetails.SEOAndPerformance.features.SeoSetup.columns.flexidev,
            },
            {
              type: "text",
              title:
                tDetails.SEOAndPerformance.features.SeoSetup.columns.essentials,
            },
            {
              type: "text",
              title:
                tDetails.SEOAndPerformance.features.SeoSetup.columns.growth,
            },
            {
              type: "text",
              title:
                tDetails.SEOAndPerformance.features.SeoSetup.columns
                  .professional,
            },
          ],
        },
        {
          title: tDetails.SEOAndPerformance.features.pageLoadOptimization.title,
          columns: [
            {
              type: "text",
              title:
                tDetails.SEOAndPerformance.features.pageLoadOptimization.columns
                  .flexidev,
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
        {
          title:
            tDetails.SEOAndPerformance.features.performanceMonitoring.title,
          columns: [
            {
              type: "text",
              title:
                tDetails.SEOAndPerformance.features.performanceMonitoring
                  .columns.flexidev,
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
      category: tDetails.projectManagementAndSupport.title,
      features: [
        {
          title:
            tDetails.projectManagementAndSupport.features.projectManager.title,
          columns: [
            {
              type: "text",
              title:
                tDetails.projectManagementAndSupport.features.projectManager
                  .columns.flexidev,
            },
            {
              type: "icon",
              included: false,
            },
            {
              type: "text",
              title:
                tDetails.projectManagementAndSupport.features.projectManager
                  .columns.growth,
            },
            {
              type: "text",
              title:
                tDetails.projectManagementAndSupport.features.projectManager
                  .columns.professional,
            },
          ],
        },
        {
          title:
            tDetails.projectManagementAndSupport.features.postLaunchSupport
              .title,
          columns: [
            {
              type: "text",
              title:
                tDetails.projectManagementAndSupport.features.postLaunchSupport
                  .columns.flexidev,
            },
            {
              type: "text",
              title:
                tDetails.projectManagementAndSupport.features.postLaunchSupport
                  .columns.essentials,
            },
            {
              type: "text",
              title:
                tDetails.projectManagementAndSupport.features.postLaunchSupport
                  .columns.growth,
            },
            {
              type: "text",
              title:
                tDetails.projectManagementAndSupport.features.postLaunchSupport
                  .columns.professional,
            },
          ],
        },
        {
          title:
            tDetails.projectManagementAndSupport.features.consultationHours
              .title,
          columns: [
            {
              type: "text",
              title:
                tDetails.projectManagementAndSupport.features.consultationHours
                  .columns.flexidev,
            },
            {
              type: "icon",
              included: false,
            },
            {
              type: "text",
              title:
                tDetails.projectManagementAndSupport.features.consultationHours
                  .columns.growth,
            },
            {
              type: "text",
              title:
                tDetails.projectManagementAndSupport.features.consultationHours
                  .columns.professional,
            },
          ],
        },
      ],
    },
    {
      category: tDetails.hostingAndMaintenance.title,
      features: [
        {
          title: tDetails.hostingAndMaintenance.features.hosting.title,
          columns: [
            {
              type: "text",
              title:
                tDetails.hostingAndMaintenance.features.hosting.columns
                  .flexidev,
            },
            {
              type: "text",
              title:
                tDetails.hostingAndMaintenance.features.hosting.columns
                  .essentials,
            },
            {
              type: "text",
              title:
                tDetails.hostingAndMaintenance.features.hosting.columns.growth,
            },
            {
              type: "text",
              title:
                tDetails.hostingAndMaintenance.features.hosting.columns
                  .professional,
            },
          ],
        },
        {
          title: tDetails.hostingAndMaintenance.features.storage.title,
          columns: [
            {
              type: "text",
              title:
                tDetails.hostingAndMaintenance.features.storage.columns
                  .flexidev,
            },
            {
              type: "text",
              title:
                tDetails.hostingAndMaintenance.features.storage.columns
                  .essentials,
            },
            {
              type: "text",
              title:
                tDetails.hostingAndMaintenance.features.storage.columns.growth,
            },
            {
              type: "text",
              title:
                tDetails.hostingAndMaintenance.features.storage.columns
                  .professional,
            },
          ],
        },
        {
          title: tDetails.hostingAndMaintenance.features.bandWidth.title,
          columns: [
            {
              type: "text",
              title:
                tDetails.hostingAndMaintenance.features.bandWidth.columns
                  .flexidev,
            },
            {
              type: "text",
              title:
                tDetails.hostingAndMaintenance.features.bandWidth.columns
                  .essentials,
            },
            {
              type: "text",
              title:
                tDetails.hostingAndMaintenance.features.bandWidth.columns
                  .growth,
            },
            {
              type: "text",
              title:
                tDetails.hostingAndMaintenance.features.bandWidth.columns
                  .professional,
            },
          ],
        },
        {
          title:
            tDetails.hostingAndMaintenance.features.monthlyMaintenance.title,
          columns: [
            {
              type: "text",
              title:
                tDetails.hostingAndMaintenance.features.monthlyMaintenance
                  .columns.flexidev,
            },
            {
              type: "text",
              title: "$29.99",
            },
            {
              type: "text",
              title: "$43.52",
            },
            {
              type: "text",
              title: "$99.99",
            },
          ],
        },
      ],
    },
  ];
}
