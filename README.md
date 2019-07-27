# quilljs-textarea
A simple extended helper for quilljs to convert your textarea into text editor.

## Quickstart

```html
<!-- Include Quill stylesheet -->
<link href="https://cdn.quilljs.com/1.0.0/quill.snow.css" rel="stylesheet">

<h3>Textarea initialised using selector</h3>
<!-- Create the editor textarea -->
<textarea class="quilljs-textarea" placeholder="Please enter text">
    <p>Hello World!</p>
</textarea>

<!-- Include the Quill library -->
<script src="https://cdn.quilljs.com/1.0.0/quill.js"></script>
<script src="../quill-textarea.js"></script>

<!-- Initialize Quill editor -->
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

```html
## Autoinitialize quilljs using data selector

<textarea data-quilljs placeholder="Please enter text">
    <p>Hello World!</p>
</textarea>


```
