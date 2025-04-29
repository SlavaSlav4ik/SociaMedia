// src/hoc/withSuspense.js
import React from "react";
import Preloader from "../Common/Preloader/Preloader";


export const withSuspense = (Component) => (props) => {
    return (
        <React.Suspense fallback={<Preloader />}>
            <Component {...props} />
        </React.Suspense>
    );
};
