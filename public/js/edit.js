const updatePost = async (e) => {
    e.preventDefault();

    const editDescription = document.querySelector('#edit-description').value.trim(); 

    if (editDescription) {
        const response = await fetch('/api/post', {
            method: 'PUT',
            body: JSON.stringify({ editDescription }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Unable to edit post');
        }
    }
}

document.querySelector('.edit-form').addEventListener('submit', updatePost);