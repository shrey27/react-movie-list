import { RECEIVE_API_DATA } from "../actions";

let data = (state = {}, { type, data }) => {
  switch (type) {
    case RECEIVE_API_DATA:
      return data;
    default:
      return state;
  }
};
export default data;