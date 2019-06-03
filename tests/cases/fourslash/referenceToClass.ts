/// <reference path='fourslash.ts'/>

// Class references should work across file and not find local variables.

// @Filename: referenceToClass_1.ts
////[|class [|{| "isWriteAccess": true, "isDefinition": true, "declarationRangeIndex": 0 |}foo|] {
////    public n: [|foo|];
////    public foo: number;
////}|]
////
////class bar {
////    public n: [|foo|];
////    public k = new [|foo|]();
////}
////
////module mod {
////    var k: [|foo|] = null;
////}

// @Filename: referenceToClass_2.ts
////var k: [|foo|];

const [rDef, ...ranges] = test.ranges();
verify.singleReferenceGroup("class foo", ranges);
