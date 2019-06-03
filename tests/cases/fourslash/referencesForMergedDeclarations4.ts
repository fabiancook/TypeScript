/// <reference path='fourslash.ts'/>

// class and instantiated module

////[|class [|{| "isWriteAccess": true, "isDefinition": true, "declarationRangeIndex": 0 |}testClass|] {
////    static staticMethod() { }
////    method() { }
////}|]
////
////[|module [|{| "isWriteAccess": true, "isDefinition": true, "declarationRangeIndex": 2 |}testClass|] {
////    export interface Bar {
////
////    }
////    export var s = 0;
////}|]
////
////var c1: [|testClass|];
////var c2: [|testClass|].Bar;
////[|testClass|].staticMethod();
////[|testClass|].prototype.method();
////[|testClass|].bind(this);
////[|testClass|].s;
////new [|testClass|]();

verify.singleReferenceGroup("class testClass\nnamespace testClass", test.rangesByText().get("testClass"));
