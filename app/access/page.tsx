import { Suspense } from "react";
import Result from "../kensaku2/ResultClient";

export default function AccessPage(){
    return (
     <div>
    <Suspense fallback={<p>Loading...</p>}>
      <Result />
    </Suspense>
     </div>
    );
}
