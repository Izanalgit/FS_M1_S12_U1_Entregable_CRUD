const FormDOM = (url,method,name,input,input2,input3)=>{
    if(input)input=`<input type="text" id="${input}" name="${input}" placeholder="${input}" required>`;
    else input=" ";
    if(input2)input2=`<input type="text" id="${input2}" name="${input2}" placeholder="${input2}" required>`;
    else input2=" ";
    if(input3)input3=`<input type="text" id="${input3}" name="${input3}" placeholder="${input3}" required>`;
    else input3=" ";
    return `
        <form action="${url}" method="${method}">
            <label for="${name}">${name.toUpperCase()}</label>
            ${input}${input2}${input3}
            <button type="submit">Enviar</button>
        </form>
    `
}

module.exports={FormDOM};