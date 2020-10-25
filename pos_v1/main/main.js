function printReceipt(tags) {
    let list = loadAllItems();
    let discount = loadPromotions();
    let sum = 0;
    let save = 0;
    let str = '***<没钱赚商店>收据***' + '\n';
    for(let i=0; i<tags.length; i++)
    {
        tags[i]=tags[i].split('-');
    }
    for(let i=0; i<list.length; i++)
    {
        let n = 0;
        if(list[i].unit=='斤')
        {
            for(let j=0; j<tags.length; j++)
            {
                if(list[i].barcode == tags[j][0])
                {
                    n=n+Number(tags[j][1]);
                }
            }
        }
        else
        {
            for(let j=0; j<tags.length; j++)
            {
                if(list[i].barcode == tags[j][0])
                {
                    n++;
                }
            }
        }
        list[i].count = n;   
        list[i].total =  list[i].count*list[i].price;
    }
    for(let i=0; i<discount.length; i++)
    {
        if(discount[i].type == 'BUY_TWO_GET_ONE_FREE')
        {
            for(let k=0; k<discount[i].barcode.length; k++)
            {
                for(let j=0; j<list.length; j++)
                {
                    if(discount[i].barcode[k] == list[j].barcode)
                    {
                        let m = Math.floor(list[j].count/3)*list[j].price
                        save = save + m;
                        list[j].total = list[j].total - m;
                    }
                }
            }
        }
        
    }
    for(let i=0; i<list.length; i++)
    {
        if (list[i].count == 0)
            continue;
        else
        {
            str = str + '名称：' + list[i].name + '，' + '数量：' + list[i].count + list[i].unit +'，' + '单价：' + parseFloat(list[i].price).toFixed(2) + '(元)' +'，' + '小计：' + parseFloat(list[i].total).toFixed(2) +  '(元)' + '\n';
            sum = sum + list[i].total;
        }
        
    }
    str = str + '----------------------' + '\n';
    str = str + '总计：' + parseFloat(sum).toFixed(2) +  '(元)' + '\n';
    str = str + '节省：' + parseFloat(save).toFixed(2) +  '(元)' + '\n';
    str = str + '**********************';
    console.log(str);
}
function buildCartItems(tags){
    let list = loadAllItems();
    let discount = loadPromotions();
    let sum = 0;
    let save = 0;
    let str = '***<没钱赚商店>收据***' + '\n';
    for(let i=0; i<list.length; i++)
    {
        let n = 0;
        for(let j=0; j<tags.length; j++)
        {
            if(list[i].barcode == tags[j].item.barcode)
            {
                n=n+tags[j].count;
            }
        }
        list[i].count = n;   
        list[i].total =  list[i].count*list[i].price;
    }
    for(let i=0; i<discount.length; i++)
    {
        if(discount[i].type == 'BUY_TWO_GET_ONE_FREE')
        {
            for(let k=0; k<discount[i].barcode.length; k++)
            {
                for(let j=0; j<list.length; j++)
                {
                    if(discount[i].barcode[k] == list[j].barcode)
                    {
                        let m = Math.floor(list[j].count/3)*list[j].price
                        save = save + m;
                        list[j].total = list[j].total - m;
                    }
                }
            }
        }
        
    }
    for(let i=0; i<list.length; i++)
    {
        if (list[i].count == 0)
            continue;
        else
        {
            str = str + '名称：' + list[i].name + '，' + '数量：' + list[i].count + list[i].unit +'，' + '单价：' + parseFloat(list[i].price).toFixed(2) + '(元)' +'，' + '小计：' + parseFloat(list[i].total).toFixed(2) +  '(元)' + '\n';
            sum = sum + list[i].total;
        }
        
    }
    str = str + '----------------------' + '\n';
    str = str + '总计：' + parseFloat(sum).toFixed(2) +  '(元)' + '\n';
    str = str + '节省：' + parseFloat(save).toFixed(2) +  '(元)' + '\n';
    str = str + '**********************';
    console.log(str);
}