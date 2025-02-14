// Check if the current page is writeup.html
if (window.location.pathname.endsWith('writeup.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const file = urlParams.get('file');

    if (file && /^[a-zA-Z0-9_\-/.]+$/.test(file)) {  // Sanitize file parameter
        fetch(file)
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.text();
            })
            .then(markdown => {
                document.body.innerHTML = `
                    <div class='container section'>
                        <a href='index.html' class='btn btn-primary mb-4'>Back to Portfolio</a>
                        <div id='content'></div>
                    </div>
                `;
                const parsedMarkdown = marked.parse(markdown);
                // Sanitize the parsed markdown using DOMPurify
                document.getElementById('content').innerHTML = DOMPurify.sanitize(parsedMarkdown);
            })
            .catch(error => {
                document.body.innerHTML = '<div class="container section text-center"><p>Error loading content.</p></div>';
            });
    } else {
        document.body.innerHTML = '<div class="container section text-center"><p>Invalid file parameter.</p></div>';
    }
}

