import {
    login
} from './modules/login.mjs'
import {
    reg
} from './modules/reg.mjs'

let newRegBtn = document.querySelector('#newRegBtn');
let formBtn = document.querySelector('#loginBtn');

formBtn.addEventListener("click", (e) => {
    e.preventDefault();
    login();
})

newRegBtn.addEventListener("click", (e) => {
    e.preventDefault();
    reg();
})