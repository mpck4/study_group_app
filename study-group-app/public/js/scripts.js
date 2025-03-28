document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('postForm');
    const replyForms = document.querySelectorAll('.replyForm');

    if (postForm) {
        postForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const formData = new FormData(postForm);
            const postData = {
                title: formData.get('title'),
                content: formData.get('content')
            };

            const response = await fetch('/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
            });

            if (response.ok) {
                window.location.reload();
            } else {
                alert('Error creating post');
            }
        });
    }

    replyForms.forEach(form => {
        form.addEventListener('submit', async (event) => {
            event.preventDefault();
            const formData = new FormData(form);
            const replyData = {
                content: formData.get('content'),
                postId: formData.get('postId')
            };

            const response = await fetch(`/api/replies`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(replyData)
            });

            if (response.ok) {
                window.location.reload();
            } else {
                alert('Error creating reply');
            }
        });
    });
});