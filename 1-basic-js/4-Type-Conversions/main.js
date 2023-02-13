//Implicit conversion
console.log("typeconversiom=>" ,2 + '3');
console.log("typeconversiom" ,true + '3');
console.log("typeconversiom" ,'2' - '3');
console.log("typeconversiom" ,'2' * '3');
console.log("typeconversiom" ,'2' / '3');
console.log("typeconversiom" ,'bhushan' - 'pawar');
console.log("typeconversiom" ,'5' - true);
console.log("typeconversiom" ,'5' - false);
console.log("typeconversiom" ,'5' - null);
console.log("typeconversiom" ,5 + undefined);
console.log("typeconversiom" ,5 - undefined);

// Explicit conversion
console.log('ExplicitConversion==>',Number('5'));
console.log('ExplicitConversion==>',Number(false));
console.log('ExplicitConversion==>',parseInt('5'));
console.log('ExplicitConversion==>',parseFloat('5.14'));
console.log('ExplicitConversion==>',String(500));
console.log('ExplicitConversion==>',String(true));
console.log('ExplicitConversion==>',String(null));
console.log('ExplicitConversion==>',String(undefined));
console.log('ExplicitConversion==>',(500).toString());
console.log('ExplicitConversion==>',Boolean(10)); // null undifiend 0 '' NaN return false



