# quilljs-textarea
A simple extended helper for quilljs to convert your textarea into text editor.

## Features
- Initialize quilljs on multiple elements
- Works on both textarea and divs
- Auto-initialize quilljs using **data-quilljs** selector




## Autoinitialize quilljs using data selector

```html
<textarea data-quilljs placeholder="Please enter text">
    <p>Hello World!</p>
</textarea>
```

## Initialize

```html
<!-- Initialize Quilljs editor -->
<script>
(function() {
    quilljs_textarea('.quilljs-textarea', {
    modules: { toolbar: [
        ['bold', 'italic', 'underline'],        // toggled buttons
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'align': [] }],
    ]}, 
    theme: 'snow',
    });
})();
</script>
```
