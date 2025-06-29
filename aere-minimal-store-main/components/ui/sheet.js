import { useState } from "react";

export function Sheet({ children }) {
  return <div>{children}</div>;
}

export function SheetTrigger({ asChild, children }) {
  return <>{children}</>;
}

export function SheetContent({ children }) {
  return (
    <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg p-4 z-50">
      {children}
    </div>
  );
}
