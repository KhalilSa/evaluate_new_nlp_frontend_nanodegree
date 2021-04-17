async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('textarea').value
    console.log(formText)
    if (formText) {
        let res = await postData('http://localhost:8081/text', { text: formText })
            .then(Client.updateUI())
            .catch((e) => {
                console.log(`Error: ${e}`)
            })
    } else {
        alert("You need to enter some text before submiting")
    }
}
// async post function
async function postData(url = '', dataObj = {}) {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataObj),
    });
    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch (e) {
        console.log('something went wrong.\n' + error);
    }
};

export { handleSubmit }