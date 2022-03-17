const URL = 'http://localhost:8080';

export const getAllPost = (cb) => {
    fetch(`${URL}/showAllPosts`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((response) => {
            cb(response)
        })
        .catch(err => cb(false));
}

export const addPost = (data, cb) => {
    console.log('Adding Post')
    fetch(`${URL}/newPost`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then((response) => {
            if (!response.ok) {
                console.log('Error Occurred');
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            cb(true);
            return response;
        })
        .catch(err => cb(false));
}