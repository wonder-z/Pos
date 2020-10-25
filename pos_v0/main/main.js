'use strict';

function printReceipt(inputs) {
    var sum = 0;
    var str = '***<没钱赚的商店>收据***' + '\n';
    for(let i=0; i<inputs.length; i++)
    {
        str = str + '名称：' + inputs[i].name + '，' + '数量：' + inputs[i].count + inputs[i].unit +'，' + '单价：' + parseFloat(inputs[i].price).toFixed(2) + '(元)' +'，' + '小计：' + parseFloat(inputs[i].price*inputs[i].count).toFixed(2) +  '(元)' + '\n';
        sum = sum + inputs[i].price*inputs[i].count;
    }
    str = str + '----------------------------' + '\n';
    str = str + '总计：' + parseFloat(sum).toFixed(2) + '\n';
    str = str + '***************************';
    console.log(str);
   
}


 
