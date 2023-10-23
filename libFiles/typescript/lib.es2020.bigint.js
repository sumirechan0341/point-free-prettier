const fileData = {
    fileName: `/lib.es2020.bigint.d.ts`,
    // File text is copyright Microsoft Corporation and is distributed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0)
    text: '/// <reference no-default-lib="true"/>\n/// <reference lib="es2020.intl" />\ninterface BigIntToLocaleStringOptions{localeMatcher?:string;style?:string;numberingSystem?:string;unit?:string;unitDisplay?:string;currency?:string;currencyDisplay?:string;useGrouping?:boolean;minimumIntegerDigits?:1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21;minimumFractionDigits?:0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20;maximumFractionDigits?:0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20;minimumSignificantDigits?:1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21;maximumSignificantDigits?:1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21;notation?:string;compactDisplay?:string;}interface BigInt{toString(radix?:number):string;toLocaleString(locales?:Intl.LocalesArgument,options?:BigIntToLocaleStringOptions):string;valueOf():bigint;readonly[Symbol.toStringTag]:"BigInt";}interface BigIntConstructor{(value:bigint|boolean|number|string):bigint;readonly prototype:BigInt;asIntN(bits:number,int:bigint):bigint;asUintN(bits:number,int:bigint):bigint;}declare var BigInt:BigIntConstructor;interface BigInt64Array{readonly BYTES_PER_ELEMENT:number;readonly buffer:ArrayBufferLike;readonly byteLength:number;readonly byteOffset:number;copyWithin(target:number,start:number,end?:number):this;entries():IterableIterator<[number,bigint]>;every(predicate:(value:bigint,index:number,array:BigInt64Array)=>boolean,thisArg?:any):boolean;fill(value:bigint,start?:number,end?:number):this;filter(predicate:(value:bigint,index:number,array:BigInt64Array)=>any,thisArg?:any):BigInt64Array;find(predicate:(value:bigint,index:number,array:BigInt64Array)=>boolean,thisArg?:any):bigint|undefined;findIndex(predicate:(value:bigint,index:number,array:BigInt64Array)=>boolean,thisArg?:any):number;forEach(callbackfn:(value:bigint,index:number,array:BigInt64Array)=>void,thisArg?:any):void;includes(searchElement:bigint,fromIndex?:number):boolean;indexOf(searchElement:bigint,fromIndex?:number):number;join(separator?:string):string;keys():IterableIterator<number>;lastIndexOf(searchElement:bigint,fromIndex?:number):number;readonly length:number;map(callbackfn:(value:bigint,index:number,array:BigInt64Array)=>bigint,thisArg?:any):BigInt64Array;reduce(callbackfn:(previousValue:bigint,currentValue:bigint,currentIndex:number,array:BigInt64Array)=>bigint):bigint;reduce<U>(callbackfn:(previousValue:U,currentValue:bigint,currentIndex:number,array:BigInt64Array)=>U,initialValue:U):U;reduceRight(callbackfn:(previousValue:bigint,currentValue:bigint,currentIndex:number,array:BigInt64Array)=>bigint):bigint;reduceRight<U>(callbackfn:(previousValue:U,currentValue:bigint,currentIndex:number,array:BigInt64Array)=>U,initialValue:U):U;reverse():this;set(array:ArrayLike<bigint>,offset?:number):void;slice(start?:number,end?:number):BigInt64Array;some(predicate:(value:bigint,index:number,array:BigInt64Array)=>boolean,thisArg?:any):boolean;sort(compareFn?:(a:bigint,b:bigint)=>number|bigint):this;subarray(begin?:number,end?:number):BigInt64Array;toLocaleString():string;toString():string;valueOf():BigInt64Array;values():IterableIterator<bigint>;[Symbol.iterator]():IterableIterator<bigint>;readonly[Symbol.toStringTag]:"BigInt64Array";[index:number]:bigint;}interface BigInt64ArrayConstructor{readonly prototype:BigInt64Array;new(length?:number):BigInt64Array;new(array:Iterable<bigint>):BigInt64Array;new(buffer:ArrayBufferLike,byteOffset?:number,length?:number):BigInt64Array;readonly BYTES_PER_ELEMENT:number;of(...items:bigint[]):BigInt64Array;from(arrayLike:ArrayLike<bigint>):BigInt64Array;from<U>(arrayLike:ArrayLike<U>,mapfn:(v:U,k:number)=>bigint,thisArg?:any):BigInt64Array;}declare var BigInt64Array:BigInt64ArrayConstructor;interface BigUint64Array{readonly BYTES_PER_ELEMENT:number;readonly buffer:ArrayBufferLike;readonly byteLength:number;readonly byteOffset:number;copyWithin(target:number,start:number,end?:number):this;entries():IterableIterator<[number,bigint]>;every(predicate:(value:bigint,index:number,array:BigUint64Array)=>boolean,thisArg?:any):boolean;fill(value:bigint,start?:number,end?:number):this;filter(predicate:(value:bigint,index:number,array:BigUint64Array)=>any,thisArg?:any):BigUint64Array;find(predicate:(value:bigint,index:number,array:BigUint64Array)=>boolean,thisArg?:any):bigint|undefined;findIndex(predicate:(value:bigint,index:number,array:BigUint64Array)=>boolean,thisArg?:any):number;forEach(callbackfn:(value:bigint,index:number,array:BigUint64Array)=>void,thisArg?:any):void;includes(searchElement:bigint,fromIndex?:number):boolean;indexOf(searchElement:bigint,fromIndex?:number):number;join(separator?:string):string;keys():IterableIterator<number>;lastIndexOf(searchElement:bigint,fromIndex?:number):number;readonly length:number;map(callbackfn:(value:bigint,index:number,array:BigUint64Array)=>bigint,thisArg?:any):BigUint64Array;reduce(callbackfn:(previousValue:bigint,currentValue:bigint,currentIndex:number,array:BigUint64Array)=>bigint):bigint;reduce<U>(callbackfn:(previousValue:U,currentValue:bigint,currentIndex:number,array:BigUint64Array)=>U,initialValue:U):U;reduceRight(callbackfn:(previousValue:bigint,currentValue:bigint,currentIndex:number,array:BigUint64Array)=>bigint):bigint;reduceRight<U>(callbackfn:(previousValue:U,currentValue:bigint,currentIndex:number,array:BigUint64Array)=>U,initialValue:U):U;reverse():this;set(array:ArrayLike<bigint>,offset?:number):void;slice(start?:number,end?:number):BigUint64Array;some(predicate:(value:bigint,index:number,array:BigUint64Array)=>boolean,thisArg?:any):boolean;sort(compareFn?:(a:bigint,b:bigint)=>number|bigint):this;subarray(begin?:number,end?:number):BigUint64Array;toLocaleString():string;toString():string;valueOf():BigUint64Array;values():IterableIterator<bigint>;[Symbol.iterator]():IterableIterator<bigint>;readonly[Symbol.toStringTag]:"BigUint64Array";[index:number]:bigint;}interface BigUint64ArrayConstructor{readonly prototype:BigUint64Array;new(length?:number):BigUint64Array;new(array:Iterable<bigint>):BigUint64Array;new(buffer:ArrayBufferLike,byteOffset?:number,length?:number):BigUint64Array;readonly BYTES_PER_ELEMENT:number;of(...items:bigint[]):BigUint64Array;from(arrayLike:ArrayLike<bigint>):BigUint64Array;from<U>(arrayLike:ArrayLike<U>,mapfn:(v:U,k:number)=>bigint,thisArg?:any):BigUint64Array;}declare var BigUint64Array:BigUint64ArrayConstructor;interface DataView{getBigInt64(byteOffset:number,littleEndian?:boolean):bigint;getBigUint64(byteOffset:number,littleEndian?:boolean):bigint;setBigInt64(byteOffset:number,value:bigint,littleEndian?:boolean):void;setBigUint64(byteOffset:number,value:bigint,littleEndian?:boolean):void;}declare namespace Intl{interface NumberFormat{format(value:number|bigint):string;resolvedOptions():ResolvedNumberFormatOptions;}}',
};
export default fileData;
//# sourceMappingURL=lib.es2020.bigint.js.map