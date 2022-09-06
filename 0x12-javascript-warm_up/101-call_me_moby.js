#!/usr/bin/node
export function callMeMoby (x, theFunction) {
  let i;
  for (i = 0; i < x; i++) {
    theFunction();
  }
}
