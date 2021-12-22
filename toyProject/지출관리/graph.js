const ctx = document.getElementById('today__report').getContext('2d');
const url = "https://jeondoh.github.io/FC_Lecture/ToyProject01/files/A1jo.json";


const out = [url];
console.log(out)
// console.log(Incomedelete)
function a(){
    var array = [url];
    console.log(array);
    var newArray = array.filter(function(element){
        return element.income = "";
    });
    console.log(newArray)
}
a()

function draw4(){
    
    $.getJSON('https://jeondoh.github.io/FC_Lecture/ToyProject01/files/A1jo.json', function (json_data) {
        
        const barChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["02", "04", "06", "08", "10", "12", "14",
                         "16", "18", "20", "22"],
                datasets: [
                    {
                        label: "일간 리포트",
                        data: [
                            json_data.bankList[0].price,
                            json_data.bankList[1].price,
                            json_data.bankList[2].price,
                            json_data.bankList[3].price
                        ]
                    }
                ]
            }
        })
    })
}
draw4();


// const getdata = getData()
// console.log(getdata)


// async function getData() {
//     const api = url
//     const response = fetch(api).then(res => res.json()).then(json => console.log(json.bankList));
//     return response
// }
