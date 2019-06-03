/// <reference path='fourslash.ts'/>

////interface interface1 {
////    [|[|{| "isDefinition": true, "declarationRangeIndex": 0 |}doStuff|](): void;|]
////}
////
////interface interface2  extends interface1{
////    [|[|{| "isDefinition": true, "declarationRangeIndex": 2 |}doStuff|](): void;|]
////}
////
////class class1 implements interface2 {
////    [|[|{| "isWriteAccess": true, "isDefinition": true, "declarationRangeIndex": 4 |}doStuff|]() {
////
////    }|]
////}
////
////class class2 extends class1 {
////
////}
////
////var v: class2;
////v.[|doStuff|]();

const [r0Def, r0, r1Def, r1, r2Def, r2, r3] = test.ranges();
verify.referenceGroups([r0, r1, r2, r3], [
    { definition: "(method) interface1.doStuff(): void", ranges: [r0] },
    { definition: "(method) interface2.doStuff(): void", ranges: [r1] },
    { definition: "(method) class1.doStuff(): void", ranges: [r2, r3] }
]);
