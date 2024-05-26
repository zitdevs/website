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
  privacyPolicy: boolean;
};

type DefaultContactStoreState = DefaultData & {
  isSubmitting: boolean;
};

export type ContactStoreState =
  | (DefaultContactStoreState & {
      user_type: "client";
      data: ClientStoreState &
        DefaultData & {
          user_type: "client";
        };
    })
  | (DefaultContactStoreState & {
      user_type: "zitlancer";
      data: ZitLancerStoreState &
        DefaultData & {
          user_type: "zitlancer";
        };
    })
  | (DefaultContactStoreState & {
      user_type: null;
      data: null;
    });

type ContactStoreActions = {
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  setEmail: (email: string) => void;
  setUserType: (user_type: "client" | "zitlancer" | null) => void;
  setClientData: (data: ClientStoreState) => void;
  setZitLancerData: (data: ZitLancerStoreState) => void;
  setPrivacyPolicy: (privacyPolicy: boolean) => void;
  setSubmitting: (isSubmitting: boolean) => void;
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
  setFirstName: (firstName) => set({ firstName }),
  setLastName: (lastName) => set({ lastName }),
  setEmail: (email) => set({ email }),
  // we can use `as any` here because we know that the user_type will be one of the three values
  setUserType: (user_type) => set({ user_type: user_type as any }),
  setClientData: (data) =>
    set((state) => ({
      data: {
        ...data,
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
        privacyPolicy: state.privacyPolicy,
        user_type: "client",
      },
    })),
  setZitLancerData: (data) =>
    set((state) => ({
      data: {
        ...data,
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
        privacyPolicy: state.privacyPolicy,
        user_type: "zitlancer",
      },
    })),
  setPrivacyPolicy: (privacyPolicy) => set({ privacyPolicy }),
  setSubmitting: (isSubmitting) => set({ isSubmitting }),
}));

export { useContactStore };
