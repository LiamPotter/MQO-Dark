// ==UserScript==
// @name         MQO Dark
// @namespace    https://github.com/LiamPotter/MQO-Dark
// @version      0.1
// @description  Makes MQO a bit less colorful
// @author       higun (Nix)
// @include http://midenquest.com/Game.aspx
// @include http://www.midenquest.com/Game.aspx
// @include https://www.midenquest.com/Game.aspx
// @grant        none
// ==/UserScript==

var contentLoad;
var crumbBar;
var tsColorHolder;
var menuSearchButton;
var backMenuCrumb;
var prgOverlay;
var fishSearchButton;
var gatherSearchButton;
var logSearchButton;
var mineSearchButton;
var scoutSearchButton;
(function() {
    'use strict';

    // Your code here...
    function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}
    addGlobalStyle('#MainPanel{	/* background: rgb(82,105,127) url("Images/FullScreenLeft.jpg") no-repeat 160px; */}');
    addGlobalStyle('body{background-color: #000000;color: #fff;}');
    addGlobalStyle('#ZoneContent{ background-color:#6d6d6d;border-right: 2px solid #101010;border-bottom: 2px solid #101010;}');
    addGlobalStyle('.aLink:visited { color:#6d6d6d;}');
    addGlobalStyle('.aLink { color:#6d6d6d;}');
    addGlobalStyle('#TitleEmbedded{border-bottom: 2px solid #00000000; color: #f1f1f1;}');
    addGlobalStyle('#ZoneOptions{border-bottom: 2px solid #000000;color: #fff;background-color:#252525;}');
    addGlobalStyle('#InfoZone{border-bottom: 2px solid #6d6d6d; color: #f1f1f1;}');
    addGlobalStyle('#ZoneChat{background-color: #252525;}');
    addGlobalStyle('.prgActionOverlay{margin-top:-20px;color:#fff;}');
    addGlobalStyle('.ui-widget-header { border: 1px solid #909090; background: #000000 url(https://raw.githubusercontent.com/LiamPotter/MQO-Dark/master/Resources/Images/ui-bg-gradient-gray-wide.png) 100% 100% repeat-x; color: #ffffff; font-weight: bold; }');
    addGlobalStyle('.ui-widget-content { border: 1px solid #000000; background: #eeeeee url(https://raw.githubusercontent.com/LiamPotter/MQO-Dark/master/Resources/Images/ui-bg-gray-white-tall-soft-1px.png) 50% top repeat-x; color: #333333; }')
    addGlobalStyle('.darkBtn {background: #ffffff url(https://raw.githubusercontent.com/LiamPotter/MQO-Dark/master/Resources/Images/ui-bg-flat-dark-gray2-1px400.png) 50% 50% repeat-x !important;border: 1px solid #444444 !important;}');
    prgOverlay = document.getElementById('prgActionOverlay');
    //prgOverlay.addEventListener('click', SetTSColors, false);
    setTimeout(function()
    {
         contentLoad=document.getElementById('ContentLoad');
    },1000);
    //SetMenuSearchButton();
})();

function SetMenuSearchButton()
{
    menuSearchButton=null;
    setTimeout(function()
    {
        menuSearchButton=document.getElementById('MenuSearch');
        if(menuSearchButton)
        {
            menuSearchButton.addEventListener('click',GetSearchMenuButtons,false);
        }
        console.info('got menu search: ',menuSearchButton);
        if(menuSearchButton===null)
        {
            SetMenuSearchButton();
        }
    },500);
}

function SetTSColors()
{
    tsColorHolder=null;
    console.info("Setting TS Colors");
    setTimeout(function()
    {
        if(document.getElementsByClassName("gmImage")[0])
        {
            console.info("class was gmImage");
            SetTSColors();
        }
        tsColorHolder= contentLoad.children[1].children[0];
        if(tsColorHolder)
        {
            if(tsColorHolder.class!=='gmImage')
            {
                tsColorHolder.style.color = '#fff';
            }
        }
        if(tsColorHolder===null)
        {
            console.info("content was null");
            SetTSColors();
        }

        GetSearchMenuButtons();

    },500)
    //var contentLoad = document.getElementById('ContentLoad').children[1].children[0];
    //contentLoad.setAttribute('color','#fffff');
    //console.info("Set this to white: ",contentLoad);
}
function GetSearchMenuButtons()
{
    fishSearchButton=null;
    gatherSearchButton=null;
    logSearchButton=null;
    mineSearchButton=null;
    scoutSearchButton=null;
    backMenuCrumb=null;
    setTimeout(function()
    {

        fishSearchButton = document.getElementById('btnFishing');
        gatherSearchButton = document.getElementById('btnGather');
        logSearchButton = document.getElementById('btnLogging');
        mineSearchButton = document.getElementById('btnMining');
        //scoutSearchButton = document.getElementById('btnScouting');
        contentLoad=document.getElementById('ContentLoad');
        crumbBar=contentLoad.children[0];
        backMenuCrumb= crumbBar.children[0];
        if(backMenuCrumb)
        {
            backMenuCrumb.addEventListener('click',SetMenuSearchButton,false);
        }
        scoutSearchButton = contentLoad.children[2].children[0].children[2];
        console.info('gettingSearchButtons: ',scoutSearchButton);
        if(fishSearchButton)
        {
            console.log('Found fish button: ',fishSearchButton);
            fishSearchButton.addEventListener('click', SetTSColors, false);
        }
        if(gatherSearchButton)
        {
            gatherSearchButton.addEventListener('click', SetTSColors, false);
        }
        if(logSearchButton)
        {
            logSearchButton.addEventListener('click', SetTSColors, false);
        }
        if(mineSearchButton)
        {
            mineSearchButton.addEventListener('click', SetTSColors, false);
        }
        if(scoutSearchButton)
        {
           console.info('gettingSearchButtons: ',scoutSearchButton);
           scoutSearchButton.addEventListener('click', SetTSColors, false);
        }
    },500);

  

}
