const Article = require('../../models/article')

module.exports ={
    articles: async () => {
        try {
            const articleFetched = await Article.find()
            return articleFetched.map(article => {
                return {
                    ...article._doc,
                    _id: article.id,
                    createdAt: new Date(article._doc.createdAt).toISOString(),
                }
            })
        } catch (error) {
            throw error
        }
    }
}