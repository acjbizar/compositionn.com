"use strict";

window.onclick = window.onload = window.onresize = init;

var canvas, context, colors, layout;
var r, g, b;

function init()
{
    canvas = document.getElementById("content");
    context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context.restore();

    colors = Math.random();
    layout = Math.random();

    draw();

    canvas.ontouchstart = init;
}

function draw()
{
    if(layout > .75)
    {
        blocks();
    }
    else if(layout > .5)
    {
        dotdotdot();
    }
    else if(layout > .25)
    {
        fGridStripes();
    }
    else
    {
        fGridLines();
    }
}

function color()
{
    if(colors > .8)
    {
        graeys();
    }
    else if(colors > .6)
    {
        deKleur();
    }
    else if(colors > .5)
    {
        allRGB();
    }
    else if(colors > .25)
    {
        pinkr();
    }
    else if(colors > .125)
    {
        pinkrs();
    }
    else
    {
        greenius();
    }
}

function blocks()
{
    var i = 0;
    var d = 160;
    var m = 24;
    var cols = Math.floor(canvas.width / (d+m));
    var rows = Math.floor(canvas.height / (d+m));
    context.fillStyle = "rgb(0,0,0)";
    context.fillRect(0,0,canvas.width,canvas.height);

    for(var y = 0; y < rows; ++y)
    {
        for(var x = 0; x < cols; ++x)
        {
            color();
            context.fillStyle = "rgb(" + r + ", " + g + ", " + b + ")";
            context.fillRect(x * (d+m)+m, y * (d+m)+m, d, d); 
            ++i;
        }
    }
}

function fgridBlock()
{
    //
}

function fGridBlocks()
{
    //
}

function fGridLines()
{
    var room = canvas.height;
    var supermax = Math.round(Math.log(room) / Math.log(2));
    var y = 0;
    var max, pow, h;

    while(room > 0)
    {
        max = Math.floor(Math.log(room) / Math.log(2));
        pow = Math.round(Math.random() * supermax);
        h = Math.pow(2, pow);
        color();
        context.fillStyle = "rgb(" + r + ", " + g + ", " + b + ")";
        context.beginPath();
        context.fillRect(0, y, canvas.width, h); 
        context.closePath();
        context.fill();
        y+=h;
        room -= h;
    }
}

function fGridStripes()
{
    var room = canvas.width;
    var supermax = Math.round(Math.log(room) / Math.log(2));
    var x = 0;
    var max, pow, w;

    while(room > 0)
    {
        max = Math.floor(Math.log(room) / Math.log(2));
        pow = Math.round(Math.random() * supermax);
        w = Math.pow(2, pow);
        color();
        context.fillStyle = "rgb(" + r + ", " + g + ", " + b + ")";
        context.beginPath();
        context.fillRect(x, 0, w, canvas.height); 
        context.closePath();
        context.fill();
        x+=w;
        room -= w;
    }
}

function dotdotdot()
{
    var i = 0;
    var d = 48;
    var cols = Math.floor(canvas.width / d);
    var rows = Math.floor(canvas.height / d);

    for(var y = 1; y < rows; ++y)
    {
        for(var x = 1; x < cols; ++x)
        {
            color();
            context.fillStyle = "rgb(" + r + ", " + g + ", " + b + ")";
            context.beginPath();
            context.arc(x*d, y*d, d/4, 0, Math.PI*2, true); 
            context.closePath();
            context.fill();
            ++i;
        }
    }
}

function graeys()
{
    r = g = b = Math.round(Math.random() * 255);
}

function greenius()
{
    r = Math.round(Math.random() * 127);
    g = Math.round(Math.random() * 127) + 127;
    b = Math.round(Math.random() * 191);
}

function allRGB()
{
    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);
}

function pinkrs()
{
    var pinks = [
        [0xFF, 0xC0, 0xCB],
        [0xFF, 0xB6, 0xC1],
        [0xFF, 0x69, 0xB4],
        [0xFF, 0x14, 0x93],
        [0xFF, 0xDD, 0xF4],
        [0xF9, 0xCC, 0xCA],
        [0xF4, 0xC2, 0xC2],
        [0xEF, 0xBB, 0xCC],
        [0xFF, 0xA6, 0xC9],
        [0xFC, 0x89, 0xAC],
        [0xE6, 0x8F, 0xAC],
        [0xE4, 0x71, 0x7A],
        [0xF8, 0x83, 0x79],
        [0xDE, 0xA5, 0xA4],
        [0xD7, 0x83, 0x7F],
        [0xFB, 0x60, 0x7F],
        [0xFF, 0x6F, 0xFF],
        [0xFC, 0x0F, 0xC0]
    ];

    var pink1 = Math.round(Math.random() * (pinks.length - 1));

    r = pinks[pink1][0];
    g = pinks[pink1][1];
    b = pinks[pink1][2];
}

function pinkr()
{
    var pinks = [
        [0xFF, 0xC0, 0xCB],
        [0xFF, 0xB6, 0xC1],
        [0xFF, 0x69, 0xB4],
        [0xFF, 0x14, 0x93],
        [0xFF, 0xDD, 0xF4],
        [0xF9, 0xCC, 0xCA],
        [0xF4, 0xC2, 0xC2],
        [0xEF, 0xBB, 0xCC],
        [0xFF, 0xA6, 0xC9],
        [0xFC, 0x89, 0xAC],
        [0xE6, 0x8F, 0xAC],
        [0xE4, 0x71, 0x7A],
        [0xF8, 0x83, 0x79],
        [0xDE, 0xA5, 0xA4],
        [0xD7, 0x83, 0x7F],
        [0xFB, 0x60, 0x7F],
        [0xFF, 0x6F, 0xFF],
        [0xFC, 0x0F, 0xC0]
    ];

    var pink1 = Math.round(Math.random() * (pinks.length - 1));
    var pink2 = Math.round(Math.random() * (pinks.length - 1));

    r = Math.floor(Math.random() * (pinks[pink1][0] - pinks[pink2][0] + 1) + pinks[pink2][0]);
    g = Math.floor(Math.random() * (pinks[pink1][1] - pinks[pink2][1] + 1) + pinks[pink2][1]);
    b = Math.floor(Math.random() * (pinks[pink1][2] - pinks[pink2][2] + 1) + pinks[pink2][2]);
}

function deKleur()
{
    var kleur = Math.floor(Math.random() * 6);

    switch(kleur)
    {
        case 0:
            r = g = b = 0;
        break;
        case 1:
            r = 255;
            g = 0;
            b = 0;
        break;
        case 2:
            r = 255;
            g = 255;
            b = 0;
        break;
        case 3:
            r = 0;
            g = 0;
            b = 255;
        break;
        case 4:
            graeys();
        break;
        default:
            r = g = b = 255;
        break;
    }
}
