/// <reference path='fourslash.ts'/>

// Global variable reference.

////[|var [|{| "isWriteAccess": true, "isDefinition": true, "declarationRangeIndex": 0 |}topLevelVar|] = 2;|]
////var topLevelVar2 = [|topLevelVar|];
////
////[|class [|{| "isWriteAccess": true, "isDefinition": true, "declarationRangeIndex": 3 |}topLevelClass|] { }|]
////var c = new [|topLevelClass|]();
////
////[|interface [|{| "isWriteAccess": true, "isDefinition": true, "declarationRangeIndex": 6 |}topLevelInterface|] { }|]
////var i: [|topLevelInterface|];
////
////[|module [|{| "isWriteAccess": true, "isDefinition": true, "declarationRangeIndex": 9 |}topLevelModule|] {
////    export var x;
////}|]
////var x = [|topLevelModule|].x;
////
////export = x;

const ranges = test.rangesByText();
verify.singleReferenceGroup("var topLevelVar: number", ranges.get("topLevelVar"));

const topLevelClass = ranges.get("topLevelClass");
verify.singleReferenceGroup("class topLevelClass", topLevelClass);

verify.singleReferenceGroup("interface topLevelInterface", ranges.get("topLevelInterface"));
verify.singleReferenceGroup("namespace topLevelModule", ranges.get("topLevelModule"));
