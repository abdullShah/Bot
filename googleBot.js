// ==UserScript==
// @name         GoogleBot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @match        https://музыкалка-онлайн.рф/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let yandexInput = document.getElementById("text");
let btnK = document.getElementsByClassName("button mini-suggest__button button_theme_search button_size_search i-bem button_js_inited")[0];
if(btnK != undefined){
    yandexInput.value = "Что такое гобой";
    setTimeout(function(){
        btnK.click();
    }, 1000);
}else if(location.hostname === "yandex.ru"){
    let links = document.links;
    let goNext = true;
    for(let i=0; i<links.length; i++){
        let link = links[i];
        if(link.href.indexOf("музыкалка-онлайн.рф") != -1){
            setTimeout(function(){
                link.click();
            }, 3000);
            goNext = false;
            break;
        }
    }





    if(goNext){
        let pnnext = document.getElementsByClassName("link link_theme_none link_target_serp pager__item pager__item_kind_next i-bem link_js_inited")[0];
        setTimeout(function(){
            pnnext.click();
        }, 3000);
    }
}else{
    let links = document.links;
    let randomIndex = getIntRandom(0, links.length);
    let link = links[randomIndex];
    if(link.href.indexOf(location.hostname) != -1){
        setTimeout(function(){
            links[randomIndex].click();
        }, 2000);
    }else{
        location.href = "https://музыкалка-онлайн.рф/";
    }
}

function getIntRandom(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}
