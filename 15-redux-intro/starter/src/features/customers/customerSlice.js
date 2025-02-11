import { createSlice } from "@reduxjs/toolkit";

const initialState = { fullName: "", nationalID: "", createdAt: "" };

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: {
      prepare: function (fullName, nationalID) {
        return {
          payload: {
            fullName,
            nationalID,
            createdAt: new Date().toISOString(),
          },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.nationalID;
        state.createdAt = action.payload.createdAt;
      },
    },
    updateName(state, action) {
      state.fullName = action.payload.fullName;
    },
  },
});

export const { createCustomer, updateName } = customerSlice.actions;

export default customerSlice.reducer;

/*
export default function customerReducer(state = initialState, action) {
  switch (action.type) {
    case "customer/createCustomer": {
      const { fullName, nationalID, createdAt } = action.payload;
      return { ...state, fullName, nationalID, createdAt };
    }
    case "customer/updateName": {
      return { ...state, fullName: action.payload };
    }
    default: {
      return state;
    }
  }
}

export function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
}

export function updateName(fullName) {
  return {
    type: "customer/updateName",
    payload: fullName,
  };
}
*/
