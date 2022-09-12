const initialWagonState = {
  supplies: 100,
  distance: 0,
  days: 0,
  cash: 200,
};

const wagonReducer = (state = initialWagonState, action) => {
  //destructuring
  let { supplies, distance, days, cash } = state;
  let { type, payload } = action;
  switch (type) {
    case "gather": {
      supplies += 15;
      days += 1;
      return { ...state, supplies, days };
    }
    case "travel": {
      supplies -= 20 * payload;
      distance += 10 * payload;
      days += payload;
      return supplies < 0 ? state : { ...state, supplies, distance, days };
    }
    case "tippedWagon": {
      supplies -= 30;
      days++;
      return { ...state, supplies, days };
    }
    case "sell": {
      supplies -= 20;
      cash += 5;
      return supplies < 0 ? state : { ...state, supplies, cash };
    }
    case "buy": {
      supplies += 25;
      cash -= 15;
      return cash < 0 ? state : { ...state, supplies, cash };
    }
    case "theft": {
      cash /= 2;
      return { ...state, cash };
    }

    default: {
      return state;
    }
  }
};

let wagon = wagonReducer(undefined, {});
console.log(wagon);
wagon = wagonReducer(wagon, { type: "travel", payload: 1 });
console.log(wagon);
wagon = wagonReducer(wagon, { type: "gather" });
console.log(wagon);
wagon = wagonReducer(wagon, { type: "tippedWagon" });
console.log(wagon);
wagon = wagonReducer(wagon, { type: "travel", payload: 3 });
console.log(wagon);
wagon = wagonReducer(wagon, { type: "travel", payload: 3 });
console.log(wagon);
wagon = wagonReducer(wagon, { type: "buy" });
console.log(wagon);
wagon = wagonReducer(wagon, { type: "buy" });
console.log(wagon);
wagon = wagonReducer(wagon, { type: "buy" });
console.log(wagon);
wagon = wagonReducer(wagon, { type: "buy" });
console.log(wagon);
wagon = wagonReducer(wagon, { type: "theft" });
console.log(wagon);
wagon = wagonReducer(wagon, { type: "theft" });
console.log(wagon);
wagon = wagonReducer(wagon, { type: "sell" });
console.log(wagon);

//normal
// const wagonReducer = (state = initialWagonState, action) => {
//   //destructuring
//   const { supplies, distance, days } = state;

//   switch (action.type) {
//     case 'gather':{
//       return {
//         ...state,
//         supplies: state.supplies + 15,
//         days: state.days + 1
//       };
//     }
//     case 'travel':{
//       return {
//         ...state,
//         supplies: state.supplies - action.payload * 20,
//         distance: state.distance + action.payload * 10,
//         days: state.days + action.payload
//       }
//     }
//     case 'tippedWagon':{
//       return {
//         ...state,
//         supplies: state.supplies - 30,
//         days: state.days + 1,
//       }
//     }

//     default: {
//       return state;
//     }
//   }

// }
