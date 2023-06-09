module.exports = (repository) => {
    module.getAllCategories = () => repository.getAllCategories() // call function in repository

    module.getCategoryById = (id) => repository.getCategoryById(id)

    module.createCategory = (body) => repository.createCategory(body)

    module.updateCategory = (id, body) => repository.updateCategory(id, body)

    module.deleteCategory = (id) => repository.deleteCategory(id)
    
    return module
}