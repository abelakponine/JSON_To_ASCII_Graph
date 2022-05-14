# JSON_To_ASCII_Graph
This is a JavaScript Implementation of converting JSON object to ASCII Graph

/**** Example of ASCII Graph View ****/

                stock count
                -----------
count
-----
*                                                              
*                                                              
*                                   *                 *        
*                                   *                 *        
*                          *        *        *        *        
*                 *        *        *        *        *        
*                 *        *        *        *        *        
*        *        *        *        *        *        *        
*        *        *        *        *        *        *        
*        *        *        *        *        *        *        
*        *        *        *        *        *        *        
*        *        *        *        *        *        *        


chairs   tables   stands   lamps   cups   lamps   cups   

                                 asset
                                 -----



/** JSON Object Format **/

let stocks = {
    "title": "stock count",
    "xtitle": "asset",
    "ytitle": "count",
    "items": [
        {"chairs": 12},
        {"tables": 5},
        {"stands": 7},
        {"lamps": 8},
        {"cups": 10},
        {"lamps": 8},
        {"cups": 10}
    ]
}
