var Ninja = /** @class */ (function () {
    function Ninja() {
    }
    Ninja.prototype.attack = function (f) { };
    Ninja.prototype.defend = function (f) { };
    Ninja.prototype.heal = function (f) { };
    Ninja.prototype.throw = function (f) { };
    Ninja.prototype.jump = function () { };
    return Ninja;
}());
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.eat = function () { };
    Person.prototype.move = function () { };
    Person.prototype.attack = function (f) { };
    Person.prototype.defend = function (f) { };
    Person.prototype.heal = function (f) { };
    return Person;
}());
var n = new Ninja();
var p = new Person();
var f = p;
//# sourceMappingURL=example.js.map