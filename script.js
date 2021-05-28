
fetch("https://api.imgflip.com/get_memes").then(response => {
    let c = response.json();
    return c;
}).then(result => {
    foo(result);    
}).catch(error => {
    console.log(error);
});

function foo(e) {
    for (i = 0; i < 100; i++) {
        console.log(e.data.memes[i])
    }

}

function createthtd(eleName, value = "", className = "") {

    var td = document.createElement(eleName)
    td.setAttribute('class', className);
    td.innerHTML = value;
    return td;
}
function createlink(eleName,value="",className=""){
    var a=document.createElement(eleName);
    a.setAttribute("href",value)
    a.innerHTML=value;
    return a;
}
var container = document.createElement('div');
container.setAttribute('class', 'container');

var table = document.createElement('table');
table.setAttribute('class', 'table');

var thead = document.createElement('thead');
thead.setAttribute('class', 'thead');

var tr = document.createElement('tr');
var sn=createthtd('th','sn')
var th1 = createthtd('th', 'id');
var th2 = createthtd('th', 'name');
var th3 = createthtd('th', 'url');
tr.append(sn,th1, th2, th3);
thead.append(tr);


function foo(e) {
    table.innerHTML = "";
    for (i = 0; i < 100; i++) {
        console.log(e.data.memes[i]);
        var tbody = document.createElement('tbody')
        var tbodytr1 = document.createElement('tr');
        var sn=createthtd('th',(i+1))
        var td1 = createthtd('th', e.data.memes[i].id)
        var td2 = createthtd('th', e.data.memes[i].name)
        var td3 = createthtd('th')
        var tl3 = createlink('a', e.data.memes[i].url)
        td3.append(tl3)
        tbodytr1.append(sn,td1, td2, td3)
        tbody.append(tbodytr1)
        table.append(thead, tbody);
        container.append(table);
        document.body.append(container);
    }
}
