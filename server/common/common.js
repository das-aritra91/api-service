// exports.createGUID = ()=>{
//     return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'. replace(/[xy]/g, function(c) {
//         var r = Math. random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
//         return v. toString(16);
//         });
// }

// var p = (Math. random(). toString(16)+"000000000") //. substr(0,15);

exports.createGUID = 'xxxx-x4xx-xyyy'.replace(/[xy]/g, function(c) {
            var r = Math. random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
            return v. toString(16);
            });