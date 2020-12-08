export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const FIND_PRICE_TOTAL = "FIND_PRICE_TOTAL";

export const addFeature = (id) => {
  return { type: ADD_FEATURE, payload: id };
}

export const removeFeature = (id) => {
  return { type: REMOVE_FEATURE, payload: id };
}

export const findPriceTotal = () => {
  return { type: FIND_PRICE_TOTAL, payload: "CALCULATING!"}
}