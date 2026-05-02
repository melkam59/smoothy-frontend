import { type RenderOptions, render as rtlRender } from "@testing-library/react";
import type { ReactElement, ReactNode } from "react";

type ProviderProps = { children: ReactNode };

function DefaultProviders({ children }: ProviderProps) {
  return <>{children}</>;
}

export type RenderWithProvidersOptions = RenderOptions & {
  wrapper?: (props: ProviderProps) => ReactElement;
};

export function renderWithProviders(
  ui: ReactElement,
  { wrapper: Wrapper = DefaultProviders, ...options }: RenderWithProvidersOptions = {},
) {
  return rtlRender(ui, { wrapper: Wrapper, ...options });
}

export * from "@testing-library/react";
