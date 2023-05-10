// Creates a comment in front end and sends to backend
const addComment = async (e) => {
    e.preventDefault();
    
    const pathName = window.location.pathname.split('');
    const index = pathName[pathName.length - 1];
    const description = document.querySelector('#comment-input').value.trim();

    if (description) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ description, index }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            location.reload();
        } else {
            alert('Failed to comment')
        }
    }
};

document.querySelector('.comment-form').addEventListener('submit', addComment);