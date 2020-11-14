
const request = require('request')
function avgRotorSpeed(statusQuery, parentId) {
    
    let url = `https://jsonmock.hackerrank.com/api/iot_devices/search?status=${statusQuery}&page=`;
    let pageNumber = 1;
    const getData = () => {
        let data = [];
        let info = getHttp(url+pageNumber).then(data => data);
        let totalPage = info.total_pages;
        if(totalPage > 1){
            for(let i = pageNumber + 1; i <= totalPage; i++){
                let newData = getHttp(url+i).then(data => data);
                data.push(newData.data);
            }
        }    
        console.log(data);
        data = data.flat().filter(ele => {
            if(ele.parent && ele.parent.id === parentId){
                return ele;
            }
        });
        const length = data.length;
        let avg = 0;
        data.forEach(ele => avg += ele.operatingParams.rotorSpeed);
        console.log(Math.round(avg/length));
    }
    return getData();
};

function getHttp(url){
    return new Promise(function(res, rej){
        request.get(url, function(err, response, body){
        try {
            res(JSON.parse(body));
        } catch (e) {
            rej(e);
        }
    })
    })
};

avgRotorSpeed('RUNNING', 7);