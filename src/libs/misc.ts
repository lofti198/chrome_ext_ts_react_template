import { DynamicData } from "../types/interfaces";

export function getCurrentDomain(): string {
  const domainWithoutSubdomains = location.host.replace(/^[^.]+\./g, "");

  return domainWithoutSubdomains.length > 0
    ? domainWithoutSubdomains
    : location.host;
}

export const timeout = (ms: number) => {
  return new Promise<void>((res, rej) =>
    setTimeout(() => {
      res();
    }, ms)
  );
};
