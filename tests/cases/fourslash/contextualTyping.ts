/// <reference path='fourslash.ts' />

////// DEFAULT INTERFACES
////interface IFoo {
////    n: number;
////    s: string;
////    f(i: number, s: string): string;
////    a: number[];
////}
////interface IBar {
////    foo: IFoo;
////}
////// CONTEXT: Class property declaration
////class C1T5 {
////    /*1*/foo: (i: number, s: string) => number = function(/*2*/i) {
////        return /*3*/i;
////    }
////}
////// CONTEXT: Module property declaration
////module C2T5 {
////    export var /*4*/foo: (i: number, s: string) => number = function(/*5*/i) {
////        return /*6*/i;
////    }
////}
////// CONTEXT: Variable declaration
////var /*7*/c3t1: (s: string) => string = (function(/*8*/s) { return /*9*/s });
////var /*10*/c3t2 = <IFoo>({
////    n: 1
////})
////var /*11*/c3t3: number[] = [];
////var /*12*/c3t4: () => IFoo = function() { return <IFoo>({}) };
////var /*13*/c3t5: (n: number) => IFoo = function(/*14*/n) { return <IFoo>({}) };
////var /*15*/c3t6: (n: number, s: string) => IFoo = function(/*16*/n, /*17*/s) { return <IFoo>({}) };
////var /*18*/c3t7: {
////    (n: number): number;    
////    (s1: string): number;
////};
////var /*20*/c3t8: (n: number, s: string) => number = function(/*21*/n) { return n; };
////var /*22*/c3t9: number[][] = [[],[]];
////var /*23*/c3t10: IFoo[] = [<IFoo>({}),<IFoo>({})];
////var /*24*/c3t11: {(n: number, s: string): string;}[] = [function(/*25*/n, /*26*/s) { return s; }];
////var /*27*/c3t12: IBar = {
////    /*28*/foo: <IFoo>({})
////}
////var /*29*/c3t13 = <IFoo>({
////    /*30*/f: function(/*31*/i, /*32*/s) { return s; }
////})
////var /*33*/c3t14 = <IFoo>({
////    /*34*/a: []
////})
////// CONTEXT: Class property assignment
////class C4T5 {
////    /*35*/foo: (i: number, s: string) => string;
////    constructor() {
////        this.foo = function(/*36*/i, /*37*/s) {
////            return s;
////        }
////    }
////}
////// CONTEXT: Module property assignment
////module C5T5 {
////    export var /*38*/foo: (i: number, s: string) => string;
////    foo = function(/*39*/i, /*40*/s) {
////        return s;
////    }
////}
////// CONTEXT: Variable assignment
////var /*41*/c6t5: (n: number) => IFoo;
////c6t5 = <(n: number) => IFoo>function(/*42*/n) { return <IFoo>({}) };
////// CONTEXT: Array index assignment
////var /*43*/c7t2: IFoo[];
/////*44*/c7t2[0] = <IFoo>({n: 1});
////// CONTEXT: Object property assignment
////interface IPlaceHolder {
////    t1: (s: string) => string;
////    t2: IFoo;
////    t3: number[];
////    t4: () => IFoo;
////    t5: (n: number) => IFoo;
////    t6: (n: number, s: string) => IFoo;
////    t7: {
////            (n: number, s: string): number;    
////            //(s1: string, s2: string): number;
////        };
////    t8: (n: number, s: string) => number;
////    t9: number[][];
////    t10: IFoo[];
////    t11: {(n: number, s: string): string;}[];
////    t12: IBar;
////    t13: IFoo;
////    t14: IFoo;
////    }
////var objc8: {
////    t1: (s: string) => string;
////    t2: IFoo;
////    t3: number[];
////    t4: () => IFoo;
////    t5: (n: number) => IFoo;
////    t6: (n: number, s: string) => IFoo;
////    t7: {
////            (n: number, s: string): number;    
////            //(s1: string, s2: string): number;
////        };
////    t8: (n: number, s: string) => number;
////    t9: number[][];
////    t10: IFoo[];
////    t11: {(n: number, s: string): string;}[];
////    t12: IBar;
////    t13: IFoo;
////    t14: IFoo;
////} = <IPlaceHolder>({});
////objc8./*45*/t1 = (function(/*46*/s) { return s });
////objc8./*47*/t2 = <IFoo>({
////    n: 1
////});
////objc8./*48*/t3 = [];
////objc8./*49*/t4 = function() { return <IFoo>({}) };
////objc8./*50*/t5 = function(/*51*/n) { return <IFoo>({}) };
////objc8./*52*/t6 = function(/*53*/n, /*54*/s) { return <IFoo>({}) };
////objc8./*55*/t7 = function(n: number) { return n };

////objc8./*56*/t8 = function(/*57*/n) { return n; };
////objc8./*58*/t9 = [[],[]];
////objc8./*59*/t10 = [<IFoo>({}),<IFoo>({})];
////objc8./*60*/t11 = [function (/*61*/n, /*62*/s) { return s; }];
////objc8./*63*/t12 = {
////    /*64*/foo: <IFoo>({})
////}
////objc8./*65*/t13 = <IFoo>({
////    /*66*/f: function(/*67*/i, /*68*/s) { return s; }
////})
////objc8./*69*/t14 = <IFoo>({
////    /*70*/a: []
////})
////// CONTEXT: Function call
////function c9t5(f: (n: number) => IFoo) {};
////c9t5(function(/*71*/n) {
////    return <IFoo>({});
////});
////// CONTEXT: Return statement
////var /*72*/c10t5: () => (n: number) => IFoo = function() { return function(/*73*/n) { return <IFoo>({}) } };
////// CONTEXT: Newing a class
////class C11t5 { constructor(f: (n: number) => IFoo) { } };
////var i = new C11t5(function(/*74*/n) { return <IFoo>({}) });
////// CONTEXT: Type annotated expression
////var /*75*/c12t1 = <(s: string) => string> (function (/*76*/s) { return s });
////var /*77*/c12t2 = <IFoo> ({
////    n: 1
////});
////var /*78*/c12t3 = <number[]> [];
////var /*79*/c12t4 = <() => IFoo> function() { return <IFoo>({}) };
////var /*80*/c12t5 = <(n: number) => IFoo> function(/*81*/n) { return <IFoo>({}) };
////var /*82*/c12t6 = <(n: number, s: string) => IFoo> function(/*83*/n, /*84*/s) { return <IFoo>({}) };
////var /*85*/c12t7 = <{
////    (n: number, s: string): number;    
////    //(s1: string, s2: string): number;
////}> function(n:number) { return n };
////var /*86*/c12t8 = <(n: number, s: string) => number> function (/*87*/n) { return n; };
////var /*88*/c12t9 = <number[][]> [[],[]];
////var /*89*/c12t10 = <IFoo[]> [<IFoo>({}),<IFoo>({})];
////var /*90*/c12t11 = <{ (n: number, s: string): string; }[]>[function (/*91*/n, /*92*/s) { return s; }];
////var /*93*/c12t12 = <IBar> {
////    /*94*/foo: <IFoo>({})
////}
////var /*95*/c12t13 = <IFoo> ({
////    /*96*/f: function(/*97*/i, /*98*/s) { return s; }
////})
////var /*99*/c12t14 = <IFoo> ({
////    /*100*/a: []
////})
////// CONTEXT: Contextual typing declarations
////// contextually typing function declarations
////function EF1(a: number, b:number):number;
////function /*101*/EF1(/*102*/a,/*103*/b) { return a+b; }
////var efv = EF1(1,2);
////// contextually typing from ambient class declarations
////declare class Point
////{
////      constructor(x: number, y: number);
////      x: number;
////      y: number;
////      add(dx: number, dy: number): Point;
////      static origin: Point;
////}
////Point./*110*/origin = new /*111*/Point(0, 0);
////Point.prototype./*112*/add = function (/*113*/dx, /*114*/dy) {
////    return new Point(this.x + dx, this.y + dy);
////};
////Point.prototype = {
////    x: 0,
////    y: 0,
////    /*115*/add: function (/*116*/dx, /*117*/dy) {
////        return new Point(this.x + dx, this.y + dy);
////    }
////};

goTo.marker('1');
verify.quickInfoIs("(property) C1T5.foo: (i: number, s: string) => number");
goTo.marker('2');
verify.quickInfoIs("(parameter) i: number");
goTo.marker('3');
verify.quickInfoIs("(parameter) i: number");
goTo.marker('4');
verify.quickInfoIs("var C2T5.foo: (i: number, s: string) => number");
goTo.marker('5');
verify.quickInfoIs("(parameter) i: number");
goTo.marker('6');
verify.quickInfoIs("(parameter) i: number");
goTo.marker('7');
verify.quickInfoIs("var c3t1: (s: string) => string");
goTo.marker('8');
verify.quickInfoIs("(parameter) s: string");
goTo.marker('9');
verify.quickInfoIs("(parameter) s: string");
goTo.marker('10');
verify.quickInfoIs("var c3t2: IFoo");
goTo.marker('11');
verify.quickInfoIs("var c3t3: number[]");
goTo.marker('12');
verify.quickInfoIs("var c3t4: () => IFoo");
goTo.marker('13');
verify.quickInfoIs("var c3t5: (n: number) => IFoo");
goTo.marker('14');
verify.quickInfoIs("(parameter) n: number");
goTo.marker('15');
verify.quickInfoIs("var c3t6: (n: number, s: string) => IFoo");
goTo.marker('16');
verify.quickInfoIs("(parameter) n: number");
goTo.marker('17');
verify.quickInfoIs("(parameter) s: string");
goTo.marker('18');
verify.quickInfoIs("var c3t7: {\n    (n: number): number;\n    (s1: string): number;\n}");
goTo.marker('20');
verify.quickInfoIs("var c3t8: (n: number, s: string) => number");
goTo.marker('21');
verify.quickInfoIs("(parameter) n: number");
goTo.marker('22');
verify.quickInfoIs("var c3t9: number[][]");
goTo.marker('23');
verify.quickInfoIs("var c3t10: IFoo[]");
goTo.marker('24');
verify.quickInfoIs("var c3t11: ((n: number, s: string) => string)[]");
goTo.marker('25');
verify.quickInfoIs("(parameter) n: number");
goTo.marker('26');
verify.quickInfoIs("(parameter) s: string");
goTo.marker('27');
verify.quickInfoIs("var c3t12: IBar");
goTo.marker('28');
verify.quickInfoIs("(property) foo: IFoo");
goTo.marker('29');
verify.quickInfoIs("var c3t13: IFoo");
goTo.marker('30');
verify.quickInfoIs("(property) f: (i: number, s: string) => string");
goTo.marker('31');
verify.quickInfoIs("(parameter) i: number");
goTo.marker('32');
verify.quickInfoIs("(parameter) s: string");
goTo.marker('33');
verify.quickInfoIs("var c3t14: IFoo");
goTo.marker('34');
verify.quickInfoIs("(property) a: undefined[]");
goTo.marker('35');
verify.quickInfoIs("(property) C4T5.foo: (i: number, s: string) => string");
goTo.marker('36');
verify.quickInfoIs("(parameter) i: number");
goTo.marker('37');
verify.quickInfoIs("(parameter) s: string");
goTo.marker('38');
verify.quickInfoIs("var C5T5.foo: (i: number, s: string) => string");
goTo.marker('39');
verify.quickInfoIs("(parameter) i: number");
goTo.marker('40');
verify.quickInfoIs("(parameter) s: string");
goTo.marker('41');
verify.quickInfoIs("var c6t5: (n: number) => IFoo");
goTo.marker('42');
verify.quickInfoIs("(parameter) n: number");
goTo.marker('43');
verify.quickInfoIs("var c7t2: IFoo[]");
goTo.marker('44');
verify.quickInfoIs("var c7t2: IFoo[]");
goTo.marker('45');
verify.quickInfoIs("(property) t1: (s: string) => string");
goTo.marker('46');
verify.quickInfoIs("(parameter) s: string");
goTo.marker('47');
verify.quickInfoIs("(property) t2: IFoo");
goTo.marker('48');
verify.quickInfoIs("(property) t3: number[]");
goTo.marker('49');
verify.quickInfoIs("(property) t4: () => IFoo");
goTo.marker('50');
verify.quickInfoIs("(property) t5: (n: number) => IFoo");
goTo.marker('51');
verify.quickInfoIs("(parameter) n: number");
goTo.marker('52');
verify.quickInfoIs("(property) t6: (n: number, s: string) => IFoo");
goTo.marker('53');
verify.quickInfoIs("(parameter) n: number");
goTo.marker('54');
verify.quickInfoIs("(parameter) s: string");
goTo.marker('55');
verify.quickInfoIs("(property) t7: (n: number, s: string) => number");
goTo.marker('56');
verify.quickInfoIs("(property) t8: (n: number, s: string) => number");
goTo.marker('57');
verify.quickInfoIs("(parameter) n: number");
goTo.marker('58');
verify.quickInfoIs("(property) t9: number[][]");
goTo.marker('59');
verify.quickInfoIs("(property) t10: IFoo[]");
goTo.marker('60');
verify.quickInfoIs("(property) t11: ((n: number, s: string) => string)[]");
goTo.marker('61');
verify.quickInfoIs("(parameter) n: number");
goTo.marker('62');
verify.quickInfoIs("(parameter) s: string");
goTo.marker('63');
verify.quickInfoIs("(property) t12: IBar");
goTo.marker('64');
verify.quickInfoIs("(property) foo: IFoo");
goTo.marker('65');
verify.quickInfoIs("(property) t13: IFoo");
goTo.marker('66');
verify.quickInfoIs("(property) f: (i: number, s: string) => string");
goTo.marker('67');
verify.quickInfoIs("(parameter) i: number");
goTo.marker('68');
verify.quickInfoIs("(parameter) s: string");
goTo.marker('69');
verify.quickInfoIs("(property) t14: IFoo");
goTo.marker('70');
verify.quickInfoIs("(property) a: undefined[]");
goTo.marker('71');
verify.quickInfoIs("(parameter) n: number");
goTo.marker('72');
verify.quickInfoIs("var c10t5: () => (n: number) => IFoo");
goTo.marker('73');
verify.quickInfoIs("(parameter) n: number");
goTo.marker('74');
verify.quickInfoIs("(parameter) n: number");
goTo.marker('75');
verify.quickInfoIs("var c12t1: (s: string) => string");
goTo.marker('76');
verify.quickInfoIs("(parameter) s: string");
goTo.marker('77');
verify.quickInfoIs("var c12t2: IFoo");
goTo.marker('78');
verify.quickInfoIs("var c12t3: number[]");
goTo.marker('79');
verify.quickInfoIs("var c12t4: () => IFoo");
goTo.marker('80');
verify.quickInfoIs("var c12t5: (n: number) => IFoo");
goTo.marker('81');
verify.quickInfoIs("(parameter) n: number");
goTo.marker('82');
verify.quickInfoIs("var c12t6: (n: number, s: string) => IFoo");
goTo.marker('83');
verify.quickInfoIs("(parameter) n: number");
goTo.marker('84');
verify.quickInfoIs("(parameter) s: string");
goTo.marker('85');
verify.quickInfoIs("var c12t7: (n: number, s: string) => number");
goTo.marker('86');
verify.quickInfoIs("var c12t8: (n: number, s: string) => number");
goTo.marker('87');
verify.quickInfoIs("(parameter) n: number");
goTo.marker('88');
verify.quickInfoIs("var c12t9: number[][]");
goTo.marker('89');
verify.quickInfoIs("var c12t10: IFoo[]");
goTo.marker('90');
verify.quickInfoIs("var c12t11: ((n: number, s: string) => string)[]");
goTo.marker('91');
verify.quickInfoIs("(parameter) n: number");
goTo.marker('92');
verify.quickInfoIs("(parameter) s: string");
goTo.marker('93');
verify.quickInfoIs("var c12t12: IBar");
goTo.marker('94');
verify.quickInfoIs("(property) foo: IFoo");
goTo.marker('95');
verify.quickInfoIs("var c12t13: IFoo");
goTo.marker('96');
verify.quickInfoIs("(property) f: (i: number, s: string) => string");
goTo.marker('97');
verify.quickInfoIs("(parameter) i: number");
goTo.marker('98');
verify.quickInfoIs("(parameter) s: string");
goTo.marker('99');
verify.quickInfoIs("var c12t14: IFoo");
goTo.marker('100');
verify.quickInfoIs("(property) a: undefined[]");
goTo.marker('101');
verify.quickInfoIs("function EF1(a: number, b: number): number");
goTo.marker('102');
verify.quickInfoIs("(parameter) a: any");
goTo.marker('103');
verify.quickInfoIs("(parameter) b: any");
goTo.marker('110');
verify.quickInfoIs("(property) Point.origin: Point");
goTo.marker('111');
verify.quickInfoIs("constructor Point(x: number, y: number): Point");
goTo.marker('112');
verify.quickInfoIs("(method) Point.add(dx: number, dy: number): Point");
goTo.marker('113');
verify.quickInfoIs("(parameter) dx: number");
goTo.marker('114');
verify.quickInfoIs("(parameter) dy: number");
goTo.marker('115');
verify.quickInfoIs("(property) add: (dx: number, dy: number) => Point");
goTo.marker('116');
verify.quickInfoIs("(parameter) dx: number");
goTo.marker('117');
verify.quickInfoIs("(parameter) dy: number");
