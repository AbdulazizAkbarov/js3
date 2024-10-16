//1_Misol//

// let a =+prompt("Son Kirgizing");

// if(a>0){
//     alert(++a);
// }
//

//1-Tugashi//

//2-Misol//

// let a =+prompt("Son Kirgizing");

// if(a>0){
//     alert(++a);
// }else{

//     alert(a-2);
// }

//2-Tugashi//

//3-Misol//

// let a =+prompt("Son Kirgizing");

// if(a>0){
//     alert(++a);
// }else if(a<0){

//     alert(a-2);
// }else if(a==0){

//     alert("10");
// }

//3-Tugashi//

// 4-Misol//

// let a = prompt("A-Son Kirgizing");
// let b = prompt("B-Son Kirgizing");
// let c = prompt("C-Son Kirgizing");

// let summa=0;

// if(a>0) summa++;
// if(b>0) summa++;
// if(c>0) summa++;

// alert("Shuncha Musbat son bor " +summa);

// 4-Tugashi//

//5-Misol//

// let a = prompt("A-Son Kirgizing");
// let b = prompt("B-Son Kirgizing");
// let c = prompt("C-Son Kirgizing");

// let summa=0;
// let summa2=0

// if(a>0) summa++;
// if(b>0) summa++;
// if(c>0) summa++;

// if(a<0) summa2++;
// if(b<0) summa2++;
// if(c<0) summa2++;

// alert("Shuncha Musbat son bor " +summa);
// alert("Shuncha Manfiy son bor " +summa2);

//5-Tugashi//

// 6-Misol//

// let a=prompt("A-Sonini Kirgizing");
// let b=prompt("B-Sonini Kirgizing");

// if(a>b){
//     alert(a);
// }else{
//     alert(b);
// }

//6-Tugashi//

// 7-Misol//

// let a=prompt("A-Sonini Kirgizing");
// let b=prompt("B-Sonini Kirgizing");

// if(a<b){
//     alert("1-Son Kichik");
// }else{
//     alert("2-Son Kichik");
// }

// 7-Tugashi//

// 8-Misol//

// let a=prompt("A-Sonini Kirgizing");
// let b=prompt("B-Sonini Kirgizing");

// if(a<b){

//     alert(`${a}${b}`)
// }else{
//     alert(`${b}${a}`)
// }

// 8-Tugashi//

// 9-Misol//

// let a =+prompt("A-Sonini kirgizing");
// let b =+prompt("B-Sonini kirgizing");

// if(a>b){
//   b = a;
//   alert("2-Son"+" "+b);
// }
// else{
//     alert("2-Son"+" "+b);
// }

//9-Tugashi//

//10-Misol//

// let a =+prompt("A-sonini kirgizing");
// let b =+prompt("B-sonini kirgizing");

// if(a!=b){
//   a = a+b;
//   b = a;
//   alert("A-sonini = "+a + ", B-sonini = "+b);
// }else if(a==b){
//     a = 0;
//     b = 0;
//     alert("A-sonini = "+a + ", B-sonini = "+b);
// }
// else{
//     alert(`${a}${b}`);
// }

// alert("A-sonini = "+a + ", B-sonini = "+b);

//10-Tugashi//

//11-Misol//

// let a =+prompt("A-sonini kirgizing");
// let b =+prompt("B-sonini kirgizing");

// if(a>b){
//     b=a;
//     alert("2-Son"+" "+b);
// }else if(a<b){
//     a=b;
//     alert("1-Son"+" "+a)
// }
// else if(a==b){
//     a = 0;
//     b = 0;
//     alert("A-sonini = "+a + ", B-sonini = "+b);
// }

//11-Tugashi//

//12-Misol//

// let a = +prompt("A-sonini kirgizing");
// let b = +prompt("B-sonini kirgizing");
// let c = +prompt("C-sonini kirgizing");

// if(a<b&&a<c){

//     alert(a);

// }else if(b<a&&b<c){
//     alert(b);
// }
// else{
//     alert(c);
// }

//12-Tugashi//

//13-Misol//

// let a = +prompt("A-sonini kirgizing");
// let b = +prompt("B-sonini kirgizing");
// let c = +prompt("C-sonini kirgizing");

// if(a>b&&a<c||a>c&&a<b ){
//     alert(a);
// }

// else if(a<b&&b<c||n>c&&a>b){
//     alert(b);
// }

// else{
//     alert(c);
// }

//13-Tugashi//

//14-Misol//
// let a = +prompt("A-sonini kirgizing");
// let b = +prompt("B-sonini kirgizing");
// let c = +prompt("C-sonini kirgizing");

// let d;
// let k;

// if(a<b&&a<c){
//     d=a;
// }
// else if(b<a&&b<c){
//     d=b;
// }

// else{
//     d=c;
// }

// if(a>b&&a>c){
//    k=a;
// }
// else if(b>a&&b>c){
//     k=b;
// }
// else{
//     k=c;
// }

// alert("Kichigi=>"+d +"  "+"Kattasi=>"+k);

//14-Tugashi//

//15-Misol//

// let a = +prompt("A-sonini kirgizing");
// let b = +prompt("B-sonini kirgizing");
// let c = +prompt("C-sonini kirgizing");

// if(a+b>a+c&&a+b>b+c){
//     alert("kattsi"+a+"+"+b);
// }
// else if(a+c>a+b&&a+c>b+a){
//     alert("kattsi"+a+"+"+c);
// }
// else{
//     alert("kattsi"+b+"+"+c);
// }

//15-Tugashi//

///////////////////////////////////////////// QOSHIMCHA///////////////////////////////

//1-Misol//

// let kun =+prompt("Hafta Kunini Raqam Bilan kirgizing");

// switch (kun) {
//     case 1:
//         alert("Dushanba");
//         break;
//     case 2:
//         alert("Seshanba");
//         break;
//     case 3:
//         alert("Chorshanba");
//         break;
//     case 4:
//         alert("Payshanba");
//         break;
//     case 5:
//         alert("Juma");
//         break;
//     case 6:
//         alert("Shanba");
//         break;
//     case 7:
//         alert("Yekshanba");
//         break;

//     default:
//         alert("Bunday Kun yoq !!!");
//         break;
// }

//1-Tugashi//

//2-Misol//

// let k = prompt("Bahoni Kirgizing");

// switch (k) {
//   case 1:
//     alert("Yomon");

//     break;

//   case 2:
//     alert("Qoniqarsiz");

//     break;
//   case 3:
//     alert("Qoniqarli");

//     break;
//   case 4:
//     alert("Yaxshi");

//     break;
//   case 5:
//     alert("A'lo");

//     break;

//   default:
//     break;
// }



//2-Tugashi//



//3-Misol//





// let oy = +prompt("Oy Raqamini Kirgizing");

// switch (oy) {
//   case 12:
//     alert("Qish");
//     break;
//   case 1:
//     alert("Qish");
//     break;
//   case 2:
//     alert("Qish");
//     break;
//   case 3:
//     alert("Bahor");
//     break;
//   case 4:
//     alert("Bahor");
//     break;
//   case 5:
//     alert("Bahor");
//     break;
//   case 6:
//     alert("Yoz");
//     break;
//   case 7:
//     alert("Yoz");
//     break;
//   case 8:
//     alert("Yoz");
//     break;
//   case 9:
//     alert("Kuz");
//     break;
//   case 10:
//     alert("Kuz");
//     break;
//   case 11:
//     alert("Kuz");
//     break;
//


//3-Tugashi//



//4-Misol//


