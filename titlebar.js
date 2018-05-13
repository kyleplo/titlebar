function Titlebar(){
}
function doNothing(){};
function TitleHTML(html){
if(typeof html === "string"){
var m = document.createElement("DIV");
m.innerHTML = html;
this.html = m.children[0];
}else{
this.html = html
};
}
Titlebar.prototype.canMinimize = true;
Titlebar.prototype.canMaximize = true;
Titlebar.prototype.canFullscreen = true;
Titlebar.prototype.isFullscreen = false;
Titlebar.prototype.title = document.title;
Titlebar.prototype.themeColor = "#f6f6f6";
Titlebar.prototype.macButtons = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOgAAAAYCAYAAADwO7FhAAAABmJLR0QA/wD/AP+gvaeTAAAETUlEQVR42u2bz0tcVxTHP+e+NzMaf3U0IG1VmpIozSaii1JwkVIXbkIpXRS6Ke1/1k1poaWLbrJIQIpQKBiSTakGWtJq0VQTnYw/Zubde7p4jlozis48cyd6P4thmPfe3DOH833n3PPOiL13WzlHoulZARif+/xc13k49Y0AJJ99er6/59vvBcDd/zD47QzE3/0gACHezoY5zy8PBAKtEQQaCLQxQaCBQBsT+zYgRRHjQByCgsrBoUNvVR3OKk5rRKbHt9GBC8L6owUABm6N+TblJdpEoICCOsE5UOcQgVSdCggigmIQE2PI+bY2cIF49nARCAI9AUVdle3lVXZWnlN6soar1HCJQ51D7V6jTJSxrz5GjKS6PQM/3v8FgJmpSToL+Ybn7FSq3J2bB+CTjz7w6hF77zYAk16tCDRLVvHmbQ8q4gAHalGXIOoAsImlWtqlVtrF7lSxlQRXs7iq3S995XDdewbWNkvcnZtnp1I91llrmyVfLglcMLKIN38CNZa0hK1iqEFkuDI0QvHmCIPvXydf7MJWLTjqVS5qLXDm5Amkd7Krfb0NnXbYWVf7epmZCnkr0BpZxZu/Lq6kGXNraZXy0lNUO5BI6Rjoo/fGOxRvDtE9MvD/S8yeuU0otLOQb+i0Rs46riQJBE5LVvHmbQ+qLgLgxR8rJFsVCsVuCv09IEoUC33Xh5E4Rq1le6WEMYKzLhOn1R1Ur/+DOAPnQRbx9pJAHzxYZX5+tSmDJicHmZgYPN3JakChvLyOq1jKf6+DEXJXupEcxLkCve8OobYGGHb/3dzLoIKIok0OWB11GtCu4oyBxLcR582rirf1Rwv73drjePz1Tw0/7x8fbbrD22q8+eviSrqxTLZruMSy8fsy6ix9ox3kcjGgRPmIvtFriIlY3XjBQUW+tym92OS5BAINnMxLAp2YOEMWbIV6ClQFVbaWnwGKiXP0XHsbU+jCxAlxLqJ7eIDyUj8milpe9ugeAA66bW2WRS/FlNerireBW2PHZsF65rzxxZ3M12013jw2idIMqFZRp5icoVausLGwxObiE1xSSSeLVIm7ixTHhnjjvWGa6+E2dtbM1OSJ3TbPWN8GBFoji3jzfJdWTCT7e8tku0L5r3We/7ZEafFPkh2HTdLj3SPDdL35VqbO6izkj+22tQFtYUSgObKKN38C3Rs6UHcweKBOEREqG2We/vqY1Z/n2Vn5B1XBEaEYms2gJ7W2GzmtDQgZ9DUmq3jzJlBVAyKYfIzEgslHSCSYQkyUjxEjqBFczYGCiIAYwKTXNsFJ3bPDTgsEsiCLePM4i+sAw+iXd2j8zKQ+f1t/aa1re5rZ2s5C3vsMbuBikFW8eROoc1WMKSBRBZGIVJB6pILdK30x6WCDXvhHKwEP9I+P+jbhWLwJ1JgOANR2tNCXDQRapx3/ZlbnUjxrCwReV4JA25RoepZoeta3GQHPBIEGAm3MfxIveNEtAGhmAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAABJRU5ErkJggg==";
Titlebar.prototype.labels = {minimize: "Minimize",maximize: "Maximize",fullscreen: "Fullscreen",close: "Close"};
Titlebar.prototype.listeners = {minimize: doNothing,maximize: doNothing,fullscreen: doNothing,close: doNothing};
Titlebar.prototype.build = function (os){
var t = document.createElement("DIV");
var b = document.createElement("DIV");
var buttons = {};
};
