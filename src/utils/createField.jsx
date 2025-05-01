import {Field} from "formik";
import React from "react";


const createField = (placeholder, name, validators, component, props = {}, text = "") => (
    <div>
        <Field placeholder = {placeholder}
               name = {name}
               validate = {validators}
               component = {component}
            {...props}
            /> {text}
    </div>
)
export default createField