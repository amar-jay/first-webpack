import fetchdata from './fetchdata';
import "./style/main.css";
const header = document.querySelector('h1')!;
const row = document.querySelector('.row')!;

const data = [
  {
    name: 'John',
    age: '25'
  },
    {
        name: 'Jane',
        age: '24'
    },
    {
        name: 'Joe',
        age: '23'
    }
];

let list = document.createElement('ul');
list.classList.add('list');
row.appendChild(list);
list = document.querySelector('.list')!;


data.forEach(item => {
    const listItem = document.createElement('li');
    listItem.classList.add('list-item');
    listItem.innerText = `${item.name} ${item.age}`;

    list.appendChild(listItem);
});


const x = async () =>{
  await fetchdata().then(datas => {
    header.innerText = "www";
    // header.innerText = JSON.parse(datas!.metadata.title);
    const item = document.createElement('li');
    item.classList.add('list-item');
    console.log("title:",datas?.metadata, "header:", datas);
    // let list = document.querySelector('.list');

    item.innerText = datas!.metadata.description;
    list.appendChild(item);
    row.appendChild(list);
  }
  )
  .then(
    () => {
      console.log("success", list)
    })
  .then(() => {
    console.log("iefoeiofne")
  })
  .catch(console.error);


};

x();