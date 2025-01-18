// Dynamic Markdown Rendering (writeup.html logic)
if (window.location.pathname.endsWith('writeup.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const file = urlParams.get('file');
    if (file) {
        fetch(file)
            .then(response => response.text())
            .then(markdown => {
                document.body.innerHTML = `
                    <div class='container section'>
                        <a href='index.html' class='btn btn-primary mb-4'>Back to Portfolio</a>
                        <div id='content'></div>
                    </div>
                `;
                document.getElementById('content').innerHTML = marked.parse(markdown);
            })
            .catch(error => {
                document.body.innerHTML = '<div class="container section text-center"><p>Error loading content.</p></div>';
            });
    }
}
