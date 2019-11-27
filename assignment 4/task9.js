var mystring = "<p><strong><em>Only print this</em></strong></p>";

console.log("The string is: ", mystring);
console.log("The string after removing HTML tags is: ",mystring.replace(/<[^>]*>?/gm, ''));