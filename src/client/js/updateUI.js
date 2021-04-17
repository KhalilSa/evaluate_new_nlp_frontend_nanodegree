const results = document.getElementById('results')

async function updateUI() {
    const req = await fetch('/analyzedtxt', { method: 'get' });
    try {
        console.log('req: ', req);
        const data = await req.json();
        console.log('data: ', data)
        const resUI = `
            <ul>
                <li> <b> Agreement: </b> ${data.agreement.toLowerCase()}
                <li> <b> Confidence: </b> ${data.confidence.toLowerCase()}
                <li> <b> Subjectivity: </b> ${data.subjectivity.toLowerCase()}
                <li> <b> Irony: </b> ${data.irony.toLowerCase()}
                <li> <b> Score Tag: </b> ${data.scoreTag.toLowerCase()}
            </ul>`.trim()
        results.innerHTML = resUI
    } catch (e) {
        console.log(`ERROR: \n${e}`)
        results.innerHTML = 'Something has gone wrong!'
    }
}

export { updateUI }