let title=document.getElementById('title');
let price=document.getElementById('price');
let taxes=document.getElementById('taxes');
let adds=document.getElementById('adds');
let discount=document.getElementById('discount');
let total=document.getElementById('total');
let count=document.getElementById('count');
let category=document.getElementById('category');
let create=document.getElementById('create');
let mood= 'create';
let tmp;
//get total
function getTotal(){
    if(price.value!=''){
        let result=(+price.value + +adds.value + +taxes.value)
        - +discount.value;
        total.innerHTML=result;
        total.style.background='rgba(108, 237, 108, 1)';
    }else{
        total.innerHTML='';
        total.style.background='rebeccapurple'

    }
}
//create product
let datapro=[];//المكان اللي موجود فيه الداتا بتاع البروجيكت كله
if(localStorage.product!=''){
    datapro = JSON.parse(localStorage.product);
}else{
    datapro=[];
}

create.onclick=function(){
    let newpro={
        title:title.value.toLowerCase(),
        price:price.value,
        taxes:taxes.value,
        adds:adds.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value.toLowerCase(),
    }
     if(title.value && price.value &&category.value != '' && newpro.count < 100){
           if(mood==='create'){
        if(newpro.count >1){
           for(let i = 0 ; i< newpro.count; i++){
             datapro.push(newpro);
           }
        }else{
            datapro.push(newpro);
        }
    }else{
        datapro[tmp]=newpro;
        mood='create';
        create.innerHTML='create';
        count.style.display='block';
    }
    clearData();
    }
    
    showData();
    datapro.push(newpro);
    }

    localStorage.setItem('product', JSON.stringify(datapro));//علشان تحولها ل استرنج علشان ال local storage مش بيخزن غير استرنج
   
    

//clear inputs
function clearData(){
    title.value='';
    price.value='';
    taxes.value='';
    adds.value='';
    discount.value='';
    total.value='';
    count.value='';
    category.value='';
    total.innerHTML='';
}
//read
function showData(){
    let table= '';
    for(let i = 0 ; i < datapro.length ; i++){
        table += `
        <tr>
            <td>${i+1}</td>
            <td>${datapro[i].title}</td>
            <td>${datapro[i].taxes}</td>
            <td>${datapro[i].price}</td> 
            <td>${datapro[i].adds}</td>
            <td>${datapro[i].discount}</td>
            <td>${datapro[i].total}</td>
            <td>${datapro[i].category}</td>
            <td><button onclick="updateData(${i})" id="update">update</button></td>
            <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
        </tr>
        `
    }
    document.getElementById('tbody').innerHTML=table;
    let btnDelete=document.getElementById('deleteAll');
    if(datapro.length > 0){
        btnDelete.innerHTML=`
        <button onclick="deleteAll()" >deleteAll(${datapro.length})</button>
        `
    }else{
        btnDelete.innerHTML='';
    }
    getTotal();
}
showData();

//delete
function deleteData(i){
    datapro.splice(i,1);
    localStorage.product=JSON.stringify(datapro);
    showData();
}
function deleteAll(){
    localStorage.clear();
    datapro.splice(0);
    showData();
}
//update
function updateData(i){
    title.value=datapro[i].title;
    price.value=datapro[i].price;
    taxes.value=datapro[i].taxes;
    adds.value=datapro[i].adds;
    discount.value=datapro[i].discount;
    getTotal();
    count.style.display='none';
    category.value=datapro[i].category;
    create.innerHTML='update';
    mood='update';
    tmp=i;
    scroll({
        top:0,
        behavior:'smooth'
    })
}
//search
let searchMood='title';
function getsearchMood(id){
    let search=document.getElementById('search');
    if(id == 'searchTitle'){
        searchMood='title';
    }else{
        searchMood='category';
    }
     search.placeholder='search by '+searchMood;

search.focus();
search.value='';
showData();
}

function searchData(value){
    let table ='';
    if(searchMood =='title'){
        for(let i=0 ; i< datapro.length ; i++){
            if(datapro[i].title.includes(value.toLowerCase())){
                 table += `
        <tr>
            <td>${i}</td>
            <td>${datapro[i].title}</td>
            <td>${datapro[i].taxes}</td>
            <td>${datapro[i].price}</td> 
            <td>${datapro[i].adds}</td>
            <td>${datapro[i].discount}</td>
            <td>${datapro[i].total}</td>
            <td>${datapro[i].category}</td>
            <td><button onclick="updateData(${i})" id="update">update</button></td>
            <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
        </tr>
        `;
                

            }
        }
        

    }else{
        for(let i=0 ; i< datapro.length ; i++){
            if(datapro[i].category.includes(value.toLowerCase())){
                 table += `
        <tr>
            <td>${i}</td>
            <td>${datapro[i].title}</td>
            <td>${datapro[i].taxes}</td>
            <td>${datapro[i].price}</td> 
            <td>${datapro[i].adds}</td>
            <td>${datapro[i].discount}</td>
            <td>${datapro[i].total}</td>
            <td>${datapro[i].category}</td>
            <td><button onclick="updateData(${i})" id="update">update</button></td>
            <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
        </tr>
        `;
                

            }
        }

    }
    document.getElementById('tbody').innerHTML=table;

}




//get total
//create product
//save localstorage
//clear inputs
//read
//count
//delete
//update
//search
//clean data

