import {lazy} from "react";

export const MainAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import("./Main")), 500)
}))
