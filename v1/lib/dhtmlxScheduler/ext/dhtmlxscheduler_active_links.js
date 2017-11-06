/*
@license
dhtmlxScheduler v.4.4.4 Professional Evaluation

This software is covered by DHTMLX Evaluation License. Contact sales@dhtmlx.com to get Commercial or Enterprise license. Usage without proper license is prohibited.

(c) Dinamenta, UAB.
*/
Scheduler.plugin(function(e){e.config.active_link_view="day",e._active_link_click=function(t){var a=t.target||event.srcElement,i=a.getAttribute("jump_to"),n=e.date.str_to_date(e.config.api_date);return i?(e.setCurrentView(n(i),e.config.active_link_view),t&&t.preventDefault&&t.preventDefault(),!1):void 0},e.attachEvent("onTemplatesReady",function(){var t=function(t,a){a=a||t+"_scale_date",e.templates["_active_links_old_"+a]||(e.templates["_active_links_old_"+a]=e.templates[a]);var i=e.templates["_active_links_old_"+a],n=e.date.date_to_str(e.config.api_date);
e.templates[a]=function(e){return"<a jump_to='"+n(e)+"' href='#'>"+i(e)+"</a>"}};if(t("week"),t("","month_day"),this.matrix)for(var a in this.matrix)t(a);this._detachDomEvent(this._obj,"click",e._active_link_click),dhtmlxEvent(this._obj,"click",e._active_link_click)})});