let a = 1;
function foo() {
    a++;
    console.log(a);
}

function getA() {
    return a;
}

export default { a, foo, getA };
