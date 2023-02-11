import {lazy} from "react";

export const SecondAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import("./Second")), 500)

}))
