const btn = document.querySelectorAll('button');
const dis = document.querySelector('.display');
let arr=[];
let num='';
let a;
let b;
let c;
count = 0;
countbt = 0;
function display(arr) {
    return arr.reduce((result,x,i) => {
                
        if ((Number(x) || Number(x) == 0) && count == 0) {
            
            result+=x;
            console.log(result);
        }
        else if ((Number(x) || Number(x) == 0) && count == 1 && i != arr.length-1) {
            result+=x;
        }
        else if (i == arr.length-1) {
            result+=x;
            b=result;
            count=0;
            return operate(a,b,c);
        }
        else {
            c=x;
            a=result;
            result='';
            count++;
        }
        return result;
    },'');


}

btn.forEach(item => {
    item.addEventListener('click',() => {
        
        if (item.value != '=' && item.value != 'Clr') {
            if(!Number(item.value)) {
                countbt++;
                
            }
            console.log('bam',countbt)
            
            if (countbt < 2) {
                arr.push(item.value);
                dis.innerText+=item.value;
            }
            else {
                console.log(display(arr))
                dis.innerText = `${display(arr)}` + item.value;
                countbt=1;
                
                arr=Array.from(`${display(arr)}${item.value}`);
                
            }
            
        }
        else if (item.value == '=') {
            dis.innerText = display(arr);
            
        }
        else if (item.value == 'Clr') {
            dis.innerText = ' ';
            arr=[];
        }
       
        
        
    });
})
function addition(a,b) {
    return Number(a) + Number(b);
}
function subtraction(a,b) {
    return Number(a) - Number(b);
}
function multiplication(a,b) {
    return Number(a) * Number(b);
}
function division(a,b) {
    return Number(a) / Number(b);
}
function operate(a,b,op) {
    if (op == '+') {
        return addition(a,b);
    }
    else if (op == '-') {
        return subtraction(a,b);
    }
    else if (op == '*') {
        return multiplication(a,b);
    }
    else if (op == '/') {
        return division(a,b);
    }

}