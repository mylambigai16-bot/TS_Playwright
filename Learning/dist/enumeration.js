"use strict";
var dir;
(function (dir) {
    dir[dir["up"] = 1] = "up";
    dir[dir["down"] = 2] = "down";
    dir[dir["lef"] = 3] = "lef";
    dir[dir["right"] = 4] = "right";
})(dir || (dir = {}));
console.log(dir);
console.log(typeof (dir));
