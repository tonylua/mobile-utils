import env from './env';
import {append_HTML} from './dom';

export const on_tweened = (dom, callback) => 
    dom.addEventListener('webkitTransitionEnd', function fn(e) {
        e.currentTarget.removeEventListener('webkitTransitionEnd', fn);
        callback.call(null)
    });

export const on_page_loaded = callback => {
    if (/interactive|complete/.test(document.readyState)) {
        callback.call(null); /*已加载过，直接执行*/
        return;
    }
    window.addEventListener('DOMContentLoaded', function fn(e) {
        e.currentTarget.removeEventListener('DOMContentLoaded', fn);
        callback.call(null)
    });
};

export const on_page_rotated = callback => window.addEventListener('orientationchange', callback);

export const fake_click = callback => {
    append_HTML(
        document.getElementsByTagName('body')[0],
        '<a href="javascript:void(0)" id="fakeClick" style="opacity:.01"></a>'
    );
    let
        $a = document.getElementById('fakeClick'),
        evt;
    $a.addEventListener("click", function(e) {
        e.preventDefault();
        callback();
    });
    if (document.createEvent) {
        evt = document.createEvent("MouseEvents");
        if (evt.initMouseEvent) {
            evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            $a.dispatchEvent(evt);
        }
    }
    $a.parentNode.removeChild($a);
};

export const listen_select_change = (sel, callback) => {
    sel.dataset['lisOldselidx'] = sel.selectedIndex;
    var _cbk = function(e) {
        if (parseInt(sel.dataset['lisOldselidx']) != sel.selectedIndex) {
            sel.dataset['lisOldselidx'] = sel.selectedIndex;
            callback(e);
        }
    };
    sel.addEventListener('change', _cbk);
    sel.addEventListener('focus', _cbk);
    sel.addEventListener('blur', _cbk);
    if (env.ios && env.version >= 7) {
        sel.addEventListener('click', _cbk);
    }
};