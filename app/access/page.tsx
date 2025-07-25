import React, { Suspense } from "react";
import Result from "../kensaku2/page";

export default function AccessPage(){
    return (
     <div>
    <Suspense fallback={<p>Loading...</p>}>
      <Result />
    </Suspense>
     </div>
    );
}
