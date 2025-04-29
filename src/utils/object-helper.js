import {object} from "yup";

export const updateObjectInArray = (items,itemId, objectPropName, newObjProps ) => {
     return    items.map(u =>
        u [objectPropName] === itemId ? { ...u, ...newObjProps } : u
    )
}