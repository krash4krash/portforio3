function css_chnage(){
	var style = document.getElementsByTagName('head')[0].appendChild(document.createElement('style'));
	style.type = 'text/css';

    style.sheet.insertRule(-webkit-animation,style.sheet.cssRules.length);
    style.sheet.insertRule(-moz-animation,style.sheet.cssRules.length);
    style.sheet.insertRule(-ms-animation,style.sheet.cssRules.length);
    style.sheet.insertRule(-o-animation,style.sheet.cssRules.length);
    style.sheet.insertRule(animation,style.sheet.cssRules.length);
}