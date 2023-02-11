import {lazy} from "react";

export const FirstAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import("./First")), 500)
}))
