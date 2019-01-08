// Generated by BUCKLESCRIPT VERSION 4.0.14, PLEASE EDIT WITH CARE


function testWithPayload(x) {
  return x;
}

function printVariantWithPayload(x) {
  if (typeof x === "number") {
    if (x !== 97) {
      if (x >= 803296723) {
        if (x >= 937218926) {
          console.log("printVariantWithPayload: True");
          return /* () */0;
        } else {
          console.log("printVariantWithPayload: Half");
          return /* () */0;
        }
      } else if (x >= 98) {
        console.log("printVariantWithPayload: b");
        return /* () */0;
      } else {
        console.log("printVariantWithPayload: Twenty");
        return /* () */0;
      }
    } else {
      console.log("printVariantWithPayload: a");
      return /* () */0;
    }
  } else {
    var payload = x[1];
    console.log("printVariantWithPayload x:", payload[/* x */0], "y:", payload[/* y */1]);
    return /* () */0;
  }
}

function testManyPayloads(x) {
  return x;
}

function printManyPayloads(x) {
  var variant = x[0];
  if (variant !== 5795212) {
    if (variant >= 261117022) {
      var payload = x[1];
      console.log("printManyPayloads x:", payload[/* x */0], "y:", payload[/* y */1]);
      return /* () */0;
    } else {
      console.log("printManyPayloads one:", x[1]);
      return /* () */0;
    }
  } else {
    var match = x[1];
    console.log("printManyPayloads two:", match[0], match[1]);
    return /* () */0;
  }
}

function testSimpleVariant(x) {
  return x;
}

function testVariantWithPayloads(x) {
  return x;
}

function printVariantWithPayloads(x) {
  if (typeof x === "number") {
    console.log("printVariantWithPayloads", "A");
    return /* () */0;
  } else {
    switch (x.tag | 0) {
      case 0 : 
          console.log("printVariantWithPayloads", "B(" + (String(x[0]) + ")"));
          return /* () */0;
      case 1 : 
          console.log("printVariantWithPayloads", "C(" + (String(x[0]) + (", " + (String(x[1]) + ")"))));
          return /* () */0;
      case 2 : 
          var match = x[0];
          console.log("printVariantWithPayloads", "D((" + (String(match[0]) + (", " + (String(match[1]) + "))"))));
          return /* () */0;
      case 3 : 
          console.log("printVariantWithPayloads", "E(" + (String(x[0]) + (", " + (x[1] + (", " + (String(x[2]) + ")"))))));
          return /* () */0;
      
    }
  }
}

function testVariant1Int(x) {
  return x;
}

function testVariant1Object(x) {
  return x;
}

export {
  testWithPayload ,
  printVariantWithPayload ,
  testManyPayloads ,
  printManyPayloads ,
  testSimpleVariant ,
  testVariantWithPayloads ,
  printVariantWithPayloads ,
  testVariant1Int ,
  testVariant1Object ,
  
}
/* No side effect */
