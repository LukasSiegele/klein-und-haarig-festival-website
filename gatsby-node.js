const path = require('path')
const fs = require('fs')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Create product detail pages
  const productTemplate = path.resolve(`src/pages/product/[id].js`)
  
  try {
    // Read the products data file
    const productsData = fs.readFileSync(path.join(__dirname, 'src/data/products.json'), 'utf8')
    const products = JSON.parse(productsData)
    
    console.log("Loaded products:", products)
    
    // Create a page for each product
    products.forEach(product => {
      console.log("Creating page for product:", product.id)
      createPage({
        path: `/product/${product.id}`,
        component: productTemplate,
        context: {
          id: product.id,
          product: product,
          language: "en" // Add language to context
        }
      })
    })
  } catch (error) {
    console.error("Error creating product pages:", error)
  }
}

// Add support for i18n
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions

  // Delete the original page
  await deletePage(page)

  // Create new pages for each language
  const languages = ["en", "de"]
  
  languages.forEach(language => {
    const localizedPath = language === "en" ? page.path : `/${language}${page.path}`
    
    createPage({
      ...page,
      path: localizedPath,
      context: {
        ...page.context,
        language
      }
    })
  })
} 