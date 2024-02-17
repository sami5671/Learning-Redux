import { produce } from "immer";

let demoSlayers = ["Tansjne", "jfefoie", "pjjopr3", "murebfe", "Shiwfqoi"];

const nextState = produce(demoSlayers, (draft) => {
  draft.push("sami Alam");
});

console.log(demoSlayers);
console.log(nextState);
