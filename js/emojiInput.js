$(function() {
    var noEmoji = function (dom) {
        var html = $(dom).val(),
            oldHtml = "";
        oldHtml = html;
        var reg =
            /[^\u0020-\u007E\u00A0-\u00BE\u2E80-\uA4CF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF\u0080-\u009F\u2000-\u201f\u2026\u2022\u20ac\r\n]/g;
        if (html.match(reg)) {
            html = html.replace(reg, '');
        }

        if (html != oldHtml) {
            $(dom).val(html);
        }
        /**
         * 光标移到最后
         */
        function endFocus(dom) {
            var sel = window.getSelection();
            var range = document.createRange();
            range.selectNodeContents(dom);
            range.collapse(false);
            sel.removeAllRanges();
            sel.addRange(range);
        }
    };
    $('input').keyup(function () {
        noEmoji($(this));
    })
})