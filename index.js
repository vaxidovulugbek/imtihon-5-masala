

// 1 masala masala
// let n = "314";
// let a = 8;
// console.log(u(n, a));
// function u(n, a){
//   if(a == 16){
//     return n = qiymat(n, 16);
//   } else if(a == 2){
//     return n = qiymat(n, 2);
//   } else if (a == 8){
//     return n = qiymat(n, 8);
//   }
// }



//  2 masala
// let a = [-2, 5, -10, 12, 3,1, 4, -5];
// let truee = true;

// if(a[0] < 0){
//   for(let i = 0; i < a.length; i++){
//     if(i % 2 == 0 &&  a[i]> 0){
//       truee = i;
//       break;
//     } 
//     else if(i % 2 == 1 && a[i] < 0) {
//       truee = i;
//       break;
//     }
//   }
  
// } else {
//   for(let i = 0; i < a.length; i++){
//     if(i % 2 == 0 && arr[i] < 0){
//       n = i;
//       break;
//     } 
//     else if(i % 2 == 1 && a[i] > 0) {
//       truee = i;
//       break;
//     }
//   }
// }
// console.log(truee);




// Problem 8
// const matrix = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
// ];

// const minn = function (table, i, j) {
//   const top = table[i - 1]?.[j];
//   const left = table[i][j - 1];
//   let sum = 0;
//   if (top !== undefined && left !== undefined) {
//     sum += top > left ? left : top;
//   }
//   if (top !== undefined && left === undefined) {
//     sum = table[i - 1][j];
//   }

//   if (top === undefined && left !== undefined) {
//     sum = table[i][j - 1];
//   }
//   return sum;
// };
// const getrout = function (matrix, i, j, res = []) {
//   res[res.length] = [i, j];
//   const left = matrix[i][j - 1];
//   const top = matrix[i - 1]?.[j];
//   if (top !== undefined && left !== undefined) {
//     if (left > top) {
//       getrout(matrix, i - 1, j, res);
//     } else getrout(matrix, i, j - 1, res);
//   }
//   if (top !== undefined && left === undefined) {
//     getrout(matrix, i - 1, j, res);
//   }

//   if (top === undefined && left !== undefined) {
//     getrout(matrix, i, j - 1, res);
//   }
//   return res;
// };
// for (let i = 0; i < matrix.length; i++) {
//   for (let j = 0; j < matrix[i].length; j++) {
//     matrix[i][j] += minn(matrix, i, j);
//   }
// }
// const res = getrout(matrix, matrix.length - 1, matrix[0].length - 1);
// console.log(res.reverse());





// 5 masala
// const obj = {
//   'x': 1,
//   'y': 2
// };
// const arr = Array.from(Object.keys(obj), k=>[`${k}`, obj[k]]);
// console.log(arr);






// 7 masala
// let a = [1,"t",15,"t"]
// let b = [2,4]
// let c = [...a,...b]
// console.log(c);



// 3 masala
// const obj = {
//   arr: [15, 20, 12, 4, -13, 5],
//   at: function(index){
//     if(index >= 0){
//       let a = 0;
//       let b = false;
//       for(let i = 0; i < this.arr.length; i++){
//         if(index == i){
//           a = this.arr[i];
//           b = true;
//           break;
//         }
//       }
//       if(b == true){
//         return a;
//       } else{
//         return undefined;
//       }
//     } else{
//       let aa = Math.abs(index);
//       aa = this.arr.length - d;
//       let a = 0;
//       let b = false;
//       for(let i = this.arr.length; i > 0; i--){
//         if(d == i){
//           a = this.arr[i];
//           b = true;
//           break;
//         }
//       }
//       if(b == true){
//         return a;
//       } else{
//         return undefined;
//       }
//     }
//   }
// }
// console.log(obj.at(3));




// 7 masala
// let string = {
//   indexof: function (ch,str) {
//     let a = new Array
//     let b = []
//     b.push(...str)
//     console.log(b);
//     for (let i = 0; i < b.length; i++) {
//       if (b[i] == ch) {
//         console.log(b[i]);
//         break
//       }
//     }
//   },
//   reverse: function(ch,str) {
//     console.log("ok");
//     let c = [str].reverse
//     console.log(c);
//   },
//   trim:function(ch,str) {
//     console.log(str.trim());
//   },
//   slicse: function(str,start,end) {
//     let k = [...str]
//     console.log(k.slice(start,end));
//   }
// }
// console.log(string.trim("ch","    ulugbekch    "));
// console.log(string.slicse("ulugbek",2,4));









// ohirgisi problem 6
let arr = [2,3,4,5,6,22]
let k = 2
for (let i = 0 ; i < arr.length) {
  console.log(i);
}


// b.forEach((it,index) => {
//   // console.log(item);
//   if (it == "ch"){
//     console.log(index);
//   }
//   else {
//     console.log("yoq");
//   }
// })









// let obj = {x:1,y:2}
// console.log(...obj);

// let a = [2,3,4,5,6]
// console.log(a.at(-1));


// const obj = {
//   arr:[1,2,3,4,5],
//   func: function (arr) {
//     // console.log(arr);
//     for (let i = 0; i < arr.length; i++) {
//       console.log(i);
//     }
//   }
//   // at: arr(arr.at(-1))
// }
// console.log(obj.func(10));



// var obj = {
//   a: "hello",
//   b: "this is",
//   c: "javascript!",
// };
// var array = Object.keys(obj)
//     .map(function(key) {
//         return obj[key];
//     });

// console.log(array);

















































































