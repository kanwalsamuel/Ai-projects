// // 
// arge Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("A ".concat(size, " shirt will be printed with the message: '").concat(message, "'."));
}
// Call the function to create a large shirt with the default message
make_shirt();
// Call the function to create a medium shirt with the default message
make_shirt("medium");
// Call the function to create a shirt of any size with a different message
make_shirt("small", "Hello, world!");
