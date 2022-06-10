let bt = document.getElementById("btn");
bt.addEventListener("click",function(){
    let un=document.getElementById("uname");
    let username = un.value;
    getdata(username);

});
function getdata(username){
    let xhr=new XMLHttpRequest();
    xhr.open("GET",`https://api.github.com/users/${username}`,true);
    xhr.onload=function(){
        let data=JSON.parse(this.responseText);
        console.log(this.responseText);
        displaydata(data);
    }
    xhr.send();
    function displaydata(data){
        let tdata=document.getElementById("tabledata");
        let gitcd=data.created_at.slice(0,10);
        let mgitcd=gitcd.slice(8,10)+'/'+gitcd.slice(5,7)+'/'+gitcd.slice(0,4);
        let gitud=data.updated_at.slice(0,10);
        let mgitud=gitud.slice(8,10)+'/'+gitud.slice(5,7)+'/'+gitud.slice(0,4);
        let row=`
        <tr>
        <td>${data.login}</td>
        <td>${data.public_repos}</td>
        <td>${mgitcd}</td>
        <td>${mgitud}</td>


        </tr>
        `
        tdata.innerHTML=row;
        repos(username);
    }
}

function repos(username){
    let xhr=new XMLHttpRequest();
    xhr.open("GET",`https://api.github.com/users/${username}/repos`,true);
    xhr.onload=function(){
        let data2=JSON.parse(this.responseText);
        console.log(this.responseText);
        displaydata2(data2);
    }
    xhr.send();
    function displaydata2(data2){
        let tdata=document.getElementById("tabledata2");
        for(let i in data2){
            let rcd=data2[i].created_at.slice(0,10);
            let mrcd=rcd.slice(8,10)+'/'+rcd.slice(5,7)+'/'+rcd.slice(0,4);
            let rud=data2[i].updated_at.slice(0,10);
            let mrud=rud.slice(8,10)+'/'+rud.slice(5,7)+'/'+rud.slice(0,4);
            let row1=`
            <tr>
            <td>${data2[i].name}</td>
            <td>${data2[i].size}</td>
            <td>${mrcd}</td>
            <td>${mrud}</td>
            

            </tr>

            `
            tdata.innerHTML+=row1;
        }
    }
}
