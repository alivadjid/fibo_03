import { useState } from "react";

export function numberHook(initValuve: number) {
  const [number, setNumber] = useState(initValuve);

  return [number, setNumber];
}
