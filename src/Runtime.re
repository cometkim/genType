let createBucklescriptBlock = "CreateBucklescriptBlock" ++ ".__";

type recordGen = {
  mutable unboxed: int,
  mutable boxed: int,
};

type recordValue = int;

let emitRecordAsInt = (~language, i) =>
  i |> EmitTyp.blockTagValue(~language);

let emitRecordAsBlock = (~language, ~args, recordValue) =>
  createBucklescriptBlock
  |> EmitText.funCall(
       ~args=[
         recordValue |> emitRecordAsInt(~language),
         EmitText.array(args),
       ],
     );

let recordGen = () => {unboxed: 0, boxed: 0};

let newRecordValue = (~unboxed, recordGen) =>
  if (unboxed) {
    let v = recordGen.unboxed;
    recordGen.unboxed = recordGen.unboxed + 1;
    v;
  } else {
    let v = recordGen.boxed;
    recordGen.boxed = recordGen.boxed + 1;
    v;
  };