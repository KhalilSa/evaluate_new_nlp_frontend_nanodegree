const results = document.getElementById('results');

async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('textarea').value
    let res = await Client.analyzeText(formText)
        .then((val) => {
            const ui = `<ul>
            <li> <b> Agreement: </b> ${val.agreement.toLowerCase()}
            <li> <b> Confidence: </b> ${val.confidence.toLowerCase()}
            <li> <b> Subjectivity: </b> ${val.subjectivity.toLowerCase()}
            <li> <b> Irony: </b> ${val.irony.toLowerCase()}
            <li> <b> Score Tag: </b> ${val.score_tag.toLowerCase()}
            </ul>`
            updateUI(ui)
        })
        .catch((e) => {
            console.log(`Error: ${e}`)
            updateUI('Something has gone wrong!')
        })
}

function updateUI(txt) {
    results.innerHTML = txt
}

export { handleSubmit }