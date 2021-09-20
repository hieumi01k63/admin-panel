import ActionType from "../constant/actionType";

const initState = {
  info: [
    {
      title: "Revanue",
      amount: 2525,
      volatility: 5.4,
      subTitle: "Compared to last month",
    },
    {
      title: "Sales",
      amount: 3365,
      volatility: -11.4,
      subTitle: "Compared to last month",
    },
    {
      title: "Costs",
      amount: 2625,
      volatility: 2.4,
      subTitle: "Compared to last month",
    },
  ],
};

export const featuredInfoReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_FEATURED_INFO:
      return { ...state, newInfo: payload };

    default:
      return state;
  }
};
