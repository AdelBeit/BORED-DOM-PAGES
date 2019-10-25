//// representation
const grabInfo = () => 
{
    const n1 = document.getElementById('n1'),
    n2 = document.getElementById('n2');
    if(n1.value === ""){
        n1.value = "3/4";
    }
    if(n2.value === ""){
        n2.value = "5/2";
    }
    const numberatorRegex = /(?<=\(?)-?\d*(?=\/)/;
    const denominatorRegex = /(?<=\/)-?\d*(?=\)?)/;
    const queryText = 
    [
        n1.value,
        n2.value
    ];
    const query = 
    [
        {
            'n':
            Number(queryText[0].match(numberatorRegex)[0]),
            'd':
            Number(queryText[0].match(denominatorRegex)[0])
        },
        {
            'n':
            Number(queryText[1].match(numberatorRegex)[0]),
            'd':
            Number(queryText[1].match(denominatorRegex)[0])
        }
    ];
    return query;
}
const resultBox = document.getElementById("result"),
addButton = document.getElementById('add-btn'),
subButton = document.getElementById('sub-btn'),
divButton = document.getElementById('div-btn'),
mulButton = document.getElementById('mul-btn');

//// logic

// add fractions
let operators = {};
operators['='] = (r) =>
{
    console.log(r);
    resultBox.innerText = `(${r.n}/${r.d})`;
};
operators['+'] = (a,b) => 
{
    let r = {};
    // resulting numerator
    r.n = (b.d*a.n)+b.n;
    // resulting denominator
    r.d = b.d*a.d;
    console.log(b.d+""+a.d+""+r.d);
    console.log("add");
    operators['='](r);
};    
// subtract fractions
operators['-'] = (a,b) => 
{
    let r = {};
    r = operators['+'](a,{'n':-b.n,'d':b.d});
    console.log("sub");
};    
// multiply fractions
operators['*'] = (a,b) =>
{
    let r = {};
    r.n = a.n*b.n;
    r.d = a.d*b.d;
    console.log("mul");
    operators['='](r);
};    
// divide fractions
operators['/'] = (a,b) =>
{
    let r = {};
    r.n = a.n*b.d;
    r.d = a.d*b.n;
    console.log("div");
    operators['='](r);    
};

const calculate = (op) =>
{
    const query = grabInfo();
    console.log(query);
    operators[op](...query);
};

addButton.addEventListener('click', () => calculate('+'));
subButton.addEventListener('click', () => calculate('-'));
mulButton.addEventListener('click', () => calculate('*'));
divButton.addEventListener('click', () => calculate('/'));