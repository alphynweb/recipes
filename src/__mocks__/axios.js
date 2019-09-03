export default {
    get: jest.fn((url) => Promise.resolve({
        data: {
            hits: [
                {
                    Recipe: "Recipe"
                }
            ]
        },
        url: url
    }))
};