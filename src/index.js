import env from './env';
import read from '.lang';
import {
	has_class,
	add_class,
	remove_class,
	real_style,
	append_HTML,
	prepend_HTML,
	tag_range_from_HTML,
} from './dom';
import {
	on_tweened,
	on_page_loaded,
	on_page_rotated,
	listen_select_change,
	fake_click,
} from './event';
import {
	reverse_str,
	step_str,
	knot_num,
	format_num,
	trim,
} from './format';
import {
	date_from_IOS,
	date_from_YMD,
	date_to_YMD,
	time,
	today,
	tomorrow,
	yesterday,
	get_clean_date,
	dates_of_month,
	date_range,
	is_leap_year,
} from './time';
import {
	query_params,
	URLHash,
} from './url';
import {
	check_appcache,
	page_to_top,
	write_CSS,
} from './utils';

export default const mobile-utils = {
    env,
    lang: {
        read
    }
    dom: {
        has_class,
        add_class,
        remove_class,
        real_style,
        append_HTML,
        prepend_HTML,
        tag_range_from_HTML,
    },
    event: {
        on_tweened,
        on_page_loaded,
        on_page_rotated,
        listen_select_change,
        fake_click,
    },
    format: {
        reverse_str,
        step_str,
        knot_num,
        format_num,
        trim,
    },
    time: {
        date_from_IOS,
        date_from_YMD,
        date_to_YMD,
        time,
        today,
        tomorrow,
        yesterday,
        get_clean_date,
        dates_of_month,
        date_range,
        is_leap_year,
    },
    url: {
        query_params,
        URLHash,
    },
    utils: {
        check_appcache,
        page_to_top,
        write_CSS,
    }
};

//for old version only
export const compatible = {
    i18n: {
        getKey: read
    },
    dom: {
        hasClass: has_class,
        addClass: add_class,
        removeClass: remove_class,
        getRealStyle: real_style,
        appendHTML: append_HTML,
        prependHTML: prepend_HTML
    },
    event: {
        onPageLoaded: on_page_loaded,
        onPageRotated: on_page_rotated,
        onTweened: on_tweened,
        fakeClick: fake_click,
        listenSelectChange: listen_select_change
    },
    utils: {
        checkOffline: check_appcache,
        pageToTop: page_to_top,
        trim: trim,
        ensureNumberStringLength: format_num,
        getFixedIOSDate: date_from_IOS,
        getDatesOfMonth: dates_of_month,
        string2Date: date_from_YMD,
        writeCSS: write_CSS,
        getTagRangeFromHTMLStr: tag_range_from_HTML
    },
    env: env,
    urlHash: URLHash,
};