const fileData = {
  fileName: `/lib.es2020.sharedmemory.d.ts`,
  // File text is copyright Microsoft Corporation and is distributed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0)
  text: '/// <reference no-default-lib="true"/>\ninterface Atomics{add(typedArray:BigInt64Array|BigUint64Array,index:number,value:bigint):bigint;and(typedArray:BigInt64Array|BigUint64Array,index:number,value:bigint):bigint;compareExchange(typedArray:BigInt64Array|BigUint64Array,index:number,expectedValue:bigint,replacementValue:bigint):bigint;exchange(typedArray:BigInt64Array|BigUint64Array,index:number,value:bigint):bigint;load(typedArray:BigInt64Array|BigUint64Array,index:number):bigint;or(typedArray:BigInt64Array|BigUint64Array,index:number,value:bigint):bigint;store(typedArray:BigInt64Array|BigUint64Array,index:number,value:bigint):bigint;sub(typedArray:BigInt64Array|BigUint64Array,index:number,value:bigint):bigint;wait(typedArray:BigInt64Array,index:number,value:bigint,timeout?:number):"ok"|"not-equal"|"timed-out";notify(typedArray:BigInt64Array,index:number,count?:number):number;xor(typedArray:BigInt64Array|BigUint64Array,index:number,value:bigint):bigint;}',
};

export default fileData;
