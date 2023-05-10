// Sends a request to back end to create a post
const addPost = async (e) => {
    e.preventDefault();
    
    const pathName = window.location.pathname.split('');
    const index = pathName[pathName.length - 1];
    const description = document.querySelector('#post-input').value.trim();

    if (description) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ description, index }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            location.reload();
        } else {
            alert('Failed to post')
        }
    }
};

document.querySelector('.post-form').addEventListener('submit', addPost);