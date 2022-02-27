function quilljs_textarea(selector = null, options = null) {
    if(selector) {
        var elements = Array.prototype.slice.call(document.querySelectorAll(selector));
    } else {
        var elements = Array.prototype.slice.call(document.querySelectorAll('[data-quilljs]'));
    }
    elements.forEach(function(el) {
        if(selector && el.hasAttribute("data-quilljs")) {
            return;
        }
        var type = el.type;
        if(type == 'textarea') {
            value = el.value;
            container = document.createElement('div');
            container.innerHTML = value;
            el.parentNode.insertBefore(container, el.nextSibling);
            el.style.display = "none";
            var placeholder = el.placeholder;
        } else {
            var placeholder = null;
            container = el;
        }
        if(!options) {
            var defaults = {
                theme: 'snow',
                placeholder: placeholder,
            };
        } else {
            if(!options.placeholder) {
                options.placeholder = placeholder;
            }
            var defaults = options;
        }

        var editor = new Quill(container, defaults);
        editor.on('text-change', function() {
            var text = editor.root.innerHTML;
            el.value = text;
        });
    });
}
(function() {
    quilljs_textarea();
})();