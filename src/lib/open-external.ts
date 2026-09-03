import type React from "react";

/**
 * Opens an external link reliably, including inside sandboxed preview iframes
 * where plain target="_blank" / mailto: navigations can be blocked.
 */
export function openExternal(href: string) {
  if (typeof window === "undefined") return;
  const win = window.open(href, "_blank", "noopener,noreferrer");
  if (!win) {
    try {
      window.top!.location.href = href;
    } catch {
      window.location.href = href;
    }
  }
}

export function handleExternalClick(href: string) {
  return (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    openExternal(href);
  };
}
