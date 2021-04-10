async function analyzeText(txt, key = process.env.API_KEY, lang = 'en') {
    const res = await fetch(`https://api.meaningcloud.com/sentiment-2.1?` +
        `key=${key}&txt=${txt}&lang=${lang}`, {
            method: 'Post',
            redirect: 'follow'
        })
    try {
        const data = await res.json()
        console.log(res.status, data)
        return data
    } catch (e) {
        console.log(`ERROR: ${e}`)
    }
}
export { analyzeText }