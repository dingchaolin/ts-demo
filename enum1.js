/**
 * Created by dcl on 2017/10/9 0009.
 */
var family;
(function (family) {
    family[family["father"] = 40] = "father";
    family[family["mother"] = 39] = "mother";
    family[family["son"] = 12] = "son";
})(family || (family = {}));
console.log(family[family.father], family.father);
//console.log( family_const[family_const.father], family_const.father) 
//# sourceMappingURL=enum1.js.map