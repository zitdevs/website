import { create } from "zustand";

export type ClientStoreState = {
  company: string;
  message: string;
};

export type ZitLancerStoreState = {
  mainSkill: string;
  otherSkill: string;
  country: string;
};

type DefaultData = {
  firstName: string;
  lastName: string;
  email: string;
  privacyPolicy?: boolean;
};

type DefaultContactStoreState = DefaultData & {
  isSubmitting: boolean;
  isValid: {
    client: boolean;
    zitlancer: boolean;
    main: boolean;
  };
};

export type ContactStoreState =
  | (DefaultContactStoreState & {
      user_type: "client";
      data: ClientStoreState;
    })
  | (DefaultContactStoreState & {
      user_type: "zitlancer";
      data: ZitLancerStoreState;
    })
  | (DefaultContactStoreState & {
      user_type: null;
      data: null;
    });

type ContactStoreActions = {
  setMainData: (data: DefaultData) => void;
  setUserType: (user_type: "client" | "zitlancer" | null) => void;
  setClientData: (data: ClientStoreState) => void;
  setZitLancerData: (data: ZitLancerStoreState) => void;
  setPrivacyPolicy: (privacyPolicy: boolean) => void;
  setSubmitting: (isSubmitting: boolean) => void;
  clearData: () => void;
  setValid: (isValid: boolean, type: "client" | "zitlancer" | "main") => void;
};

type ContactStore = ContactStoreState & ContactStoreActions;

const useContactStore = create<ContactStore>()((set) => ({
  isSubmitting: false,
  user_type: null,
  firstName: "",
  lastName: "",
  email: "",
  data: null,
  privacyPolicy: false,
  isValid: {
    client: false,
    zitlancer: false,
    main: false,
  },
  setValid: (isValid, type) => {
    set((state) => {
      state.isValid[type] = isValid;
      return { ...state };
    });
  },
  setMainData: (data) => set({ ...data }),
  setUserType: (user_type) =>
    set((state) => {
      state.clearData();

      // we can use `as any` here because we know that the user_type will be one of the three values
      return { user_type: user_type as any };
    }),
  setClientData: (data) => set({ data }),
  setZitLancerData: (data) => set({ data }),
  setPrivacyPolicy: (privacyPolicy) => set({ privacyPolicy }),
  setSubmitting: (isSubmitting) => set({ isSubmitting }),
  clearData: () =>
    set({
      isSubmitting: false,
      user_type: null,
      firstName: "",
      lastName: "",
      email: "",
      data: null,
      privacyPolicy: false,
      isValid: {
        client: false,
        zitlancer: false,
        main: false,
      },
    }),
}));

export { useContactStore };
