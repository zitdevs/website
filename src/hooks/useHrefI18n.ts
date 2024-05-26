import { useAppStore } from "@/stores/app.store";
import { useMemo } from "react";

export const useHrefI18n = (_href: string) => {
  const locale = useAppStore((state) => state.locale);
  const href = useMemo(
    () => (_href === "/" ? `/${locale}` : `/${locale}${_href}`),
    [_href, locale]
  );

  return href;
};
