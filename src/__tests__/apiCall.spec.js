import { analyzeText } from "../client/js/apiCall"

describe("Testing, analyzeText should be a function", () => {
    test("Testing the analyzeText should be a function", () => {
        expect(typeof(analyzeText)).toBe('function');
    })
});