"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=a(function(h,n){
var y=require('@stdlib/blas-ext-base-dfill/dist').ndarray;function p(e,r,i,f){return y(e,1,r,i,f),r}n.exports=p
});var o=a(function(k,u){
var l=require('@stdlib/strided-base-stride2offset/dist'),j=s();function m(e,r,i){return j(e,r,i,l(e,i))}u.exports=m
});var q=a(function(w,d){
var x=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),v=o(),R=s();x(v,"ndarray",R);d.exports=v
});var _=require("path").join,E=require('@stdlib/utils-try-require/dist'),O=require('@stdlib/assert-is-error/dist'),b=q(),t,c=E(_(__dirname,"./native.js"));O(c)?t=b:t=c;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
