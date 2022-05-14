/** JSON to ASCII Graph: JavaScript Implementation **/

let stocks = {
    "title": "stock count",
    "xtitle": "asset",
    "ytitle": "count",
    "items": [
        {"chairs": 20},
        {"tables": 5},
        {"stands": 7},
        {"lamps": 8},
        {"cups": 10}
    ]
}

/** This function detects and returns the highest value of items in the items list */
generateHighestValue = (items)=>{
    let arrValue = [];

    for (x of items){
        for (y in x){
            let itemName = y;
            let itemValue = x[y];
            arrValue.push(itemValue);
        }
    }
    
    return sortArray(arrValue)[0];
}

/** This method is used for sorting items in a list from highest value to lowest value */
sortArray = (arr)=>{
    return arr.sort((a,b)=>{ return b-a})
}

/** This fuction builds the individual item charts, returns a string of the build chart */
buildChart = (items)=>{
    let hv = generateHighestValue(items); // highest value in items list
    let i = hv;
    let result = "";

    for (i; (i <= hv && i > 0);){
        
        
        for (x of items){
            for (y in x){
                let itemName = y;
                let itemValue = x[y];
                if (i <= itemValue){
                    result += "*        ";
                }
                else {
                    result +="         ";
                }
            }
        }
        result += "\r\n";
        i = i-1;
    }

    return result+"\r\n";
}

/** This function is used for getting individual item names */
getItemsName = (list)=>{
    let result = "\r";
    for (x of list){
        for (y in x){
            result += y+"   ";
        }
    }
    return result;
}

/** This is a fuction that combines and build the overall graph, it returns a string of the build graph */
constructGraph = (items)=>{
    let result = `                ${stocks.title}
                -----------
${stocks.ytitle}
-----
`;
    result += buildChart(items);
    result += getItemsName(items);
    result += `\r\n\r\n                                 asset
                                 -----`;
    return result;
}

console.log(constructGraph(stocks.items)) // display on console
