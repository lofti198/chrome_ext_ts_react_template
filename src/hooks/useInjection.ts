import { useEffect } from "react";
import { injectOnPageLoad } from "../libs/inject";
export function useInjection() {
  useEffect(() => {
    injectOnPageLoad();
  }, []);
}
