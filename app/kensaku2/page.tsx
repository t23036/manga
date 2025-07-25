import React, { Suspense } from "react";
import ResultClient from "./ResultClient";

export default function Kensaku2Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ResultClient />
    </Suspense>
  );
}
