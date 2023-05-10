const updatePost = async (e) => {
    e.preventDefault();

    const editDescription = document.querySelector('#edit-description').value.trim(); 
    const pathName = window.location.pathname.split('');
    const index = pathName[pathName.length - 1];

    if (editDescription) {
        const response = await fetch('/api/posts', {
            method: 'PUT',
            body: JSON.stringify({ editDescription, index }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Unable to edit post');
        }
    }
}

const deletePost = async (e) => {
    e.preventDefault();

    const pathName = window.location.pathname.split('');
    const index = pathName[pathName.length - 1];

    const response = await fetch('/api/posts', {
        method: 'DELETE',
        body: JSON.stringify({ index }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Unable to delete post');
    }
}



document.querySelector('#dlt-btn').addEventListener('click', deletePost);

document.querySelector('.edit-form').addEventListener('submit', updatePost);