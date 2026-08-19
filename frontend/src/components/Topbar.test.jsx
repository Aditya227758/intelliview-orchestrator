import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";

const mockCycle = vi.fn();
const mockSetToken = vi.fn();
const mockSetMobileSidebar = vi.fn();

vi.mock("@/lib/store", () => ({
  useAppStore: () => ({
    token: null,
    setToken: mockSetToken,
  }),
}));

vi.mock("@/lib/theme", () => ({
  useThemeStore: (selector) =>
    selector({
      theme: "dark",
      cycle: mockCycle,
    }),
}));

vi.mock("@/lib/ui-store", () => ({
  useUIStore: (selector) =>
    selector({
      setMobileSidebar: mockSetMobileSidebar,
    }),
}));

vi.mock("@/hooks/useWebSocket", () => ({
  useWebSocket: () => ({
    connected: true,
  }),
}));

vi.mock("@/components/Tooltip", () => ({
  Tooltip: ({ children }) => children,
}));

import { Topbar } from "./Topbar";

describe("Topbar theme toggle", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the theme toggle button", () => {
    render(<Topbar />);

    const themeButton = screen.getByRole("button", {
      name: "Toggle theme",
    });

    expect(themeButton).toBeInTheDocument();
  });

  it("calls the theme cycle function when clicked", () => {
    render(<Topbar />);

    const themeButton = screen.getByRole("button", {
      name: "Toggle theme",
    });

    fireEvent.click(themeButton);

    expect(mockCycle).toHaveBeenCalledTimes(1);
  });
});