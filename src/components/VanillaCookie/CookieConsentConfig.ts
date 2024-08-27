import type { CookieConsentConfig } from "vanilla-cookieconsent";

export const config: CookieConsentConfig = {
  guiOptions: {
    consentModal: {
      layout: "box",
      position: "bottom left",
    },
    preferencesModal: {
      layout: "box",
      position: "right",
      equalWeightButtons: true,
      flipButtons: false,
    },
  },
  categories: {
    necessary: {
      readOnly: true,
    },
    functionality: {},
    analytics: {
      services: {
        ga4: {
          label:
            '<a href="https://marketingplatform.google.com/about/analytics/terms/us/" target="_blank">Google Analytics</a>',
          onAccept: () => {
            const script = document.createElement("script");
            script.src =
              "https://www.googletagmanager.com/gtag/js?id=G-V28YYZTMPB";
            script.async = true;

            document.head.appendChild(script);

            const script2 = document.createElement("script");
            script2.text = `
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag("js", new Date());
              gtag("config", "G-V28YYZTMPB");
            `;

            document.head.appendChild(script2);
          },
          onReject: () => {
            console.log("ga4 rejected");
          },
          cookies: [
            {
              name: /^_ga/,
            },
          ],
        },
      },
    },
  },
  language: {
    default: "en",
    autoDetect: "document",
    translations: {
      en: {
        consentModal: {
          title: "Welcome to ZitDevs, where innovation meets you!",
          description:
            "We use cookies to ensure you get the best experience on our website. By continuing to browse, you're agreeing to our use of cookies for performance, analytics, and personalization. Your privacy matters to us, and we’re here to protect it.",
          acceptAllBtn: "Accept All Cookies",
          showPreferencesBtn: "Customize Settings",
          footer: '<a href="/legal/privacy-policy">Privacy Policy</a>',
        },
        preferencesModal: {
          title: "Manage Your Cookie Preferences",
          acceptAllBtn: "Accept All",
          acceptNecessaryBtn: "Only Essential",
          savePreferencesBtn: "Save My Preferences",
          closeIconLabel: "Close",
          serviceCounterLabel: "Service|Services",
          sections: [
            {
              title: "Why We Use Cookies",
              description:
                "Cookies help us enhance your experience by remembering your preferences and visits. They allow us to tailor content and analyze our traffic, ensuring you enjoy seamless and personalized browsing.",
            },
            {
              title:
                'Essential Cookies <span class="pm__badge">Always Enabled</span>',
              description:
                "These cookies are vital for our website to function correctly. They cannot be switched off in our systems and are usually set in response to actions made by you, like logging in or filling out forms.",
              linkedCategory: "necessary",
            },
            {
              title: "Performance & Functionality Cookies",
              description:
                "These cookies help us enhance site performance and functionality by remembering your preferences and improving user experience.",
              linkedCategory: "functionality",
            },
            {
              title: "Analytics & Targeting Cookies",
              description:
                "These cookies collect information to help us understand how you use our site, which pages are most popular, and how we can better serve you. We also use them to show you more relevant ads based on your browsing history.",
              linkedCategory: "analytics",
            },
            {
              title: "Need More Info?",
              description:
                'If you have any questions about our use of cookies or wish to learn more, please <a class="cc__link" href="https://zitdevs.com/es/#contact">get in touch</a>.',
            },
          ],
        },
      },
      es: {
        consentModal: {
          title: "¡Bienvenido a ZitDevs, donde la innovación te encuentra!",
          description:
            "Usamos cookies para asegurarnos de que tengas la mejor experiencia en nuestro sitio web. Al continuar navegando, aceptas el uso de cookies para mejorar el rendimiento, análisis y personalización. Tu privacidad es importante para nosotros, y estamos aquí para protegerla.",
          acceptAllBtn: "Aceptar todas las cookies",
          showPreferencesBtn: "Personalizar configuración",
          footer: '<a href="/legal/privacy-policy">Política de Privacidad</a>',
        },
        preferencesModal: {
          title: "Administra tus preferencias de cookies",
          acceptAllBtn: "Aceptar todas",
          acceptNecessaryBtn: "Solo esenciales",
          savePreferencesBtn: "Guardar mis preferencias",
          closeIconLabel: "Cerrar",
          serviceCounterLabel: "Servicio|Servicios",
          sections: [
            {
              title: "¿Por qué usamos cookies?",
              description:
                "Las cookies nos ayudan a mejorar tu experiencia al recordar tus preferencias y visitas. Nos permiten personalizar el contenido y analizar nuestro tráfico, asegurando que disfrutes de una navegación fluida y personalizada.",
            },
            {
              title:
                'Cookies esenciales <span class="pm__badge">Siempre activadas</span>',
              description:
                "Estas cookies son vitales para que nuestro sitio web funcione correctamente. No se pueden desactivar en nuestros sistemas y generalmente se establecen en respuesta a acciones que realizas, como iniciar sesión o completar formularios.",
              linkedCategory: "necessary",
            },
            {
              title: "Cookies de rendimiento y funcionalidad",
              description:
                "Estas cookies nos ayudan a mejorar el rendimiento y la funcionalidad del sitio al recordar tus preferencias y mejorar la experiencia del usuario.",
              linkedCategory: "functionality",
            },
            {
              title: "Cookies de análisis y segmentación",
              description:
                "Estas cookies recopilan información para ayudarnos a entender cómo utilizas nuestro sitio, cuáles páginas son las más populares y cómo podemos servirte mejor. También las usamos para mostrarte anuncios más relevantes basados en tu historial de navegación.",
              linkedCategory: "analytics",
            },
            {
              title: "¿Necesitas más información?",
              description:
                'Si tienes alguna pregunta sobre nuestro uso de cookies o deseas saber más, por favor <a class="cc__link" href="https://zitdevs.com/es/#contact">contáctanos</a>.',
            },
          ],
        },
      },
    },
  },
};
