"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fetchdata_1 = __importDefault(require("./fetchdata"));
require("./style/main.css");
const header = document.querySelector('h1');
const row = document.querySelector('.row');
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
list = document.querySelector('.list');
data.forEach(item => {
    const listItem = document.createElement('li');
    listItem.classList.add('list-item');
    listItem.innerText = `${item.name} ${item.age}`;
    list.appendChild(listItem);
});
const x = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, fetchdata_1.default)().then(datas => {
        header.innerText = "www";
        const item = document.createElement('li');
        item.classList.add('list-item');
        console.log("title:", datas === null || datas === void 0 ? void 0 : datas.metadata, "header:", datas);
        item.innerText = datas.metadata.description;
        list.appendChild(item);
        row.appendChild(list);
    })
        .then(() => {
        console.log("success", list);
    })
        .then(() => {
        console.log("iefoeiofne");
    })
        .catch(console.error);
});
x();
//# sourceMappingURL=index.js.map