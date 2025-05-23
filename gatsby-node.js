const path = require('path');
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const productTemplate = path.resolve(`src/pages/product/[id].js`);

  const { createClient } = require('@supabase/supabase-js');
  const supabase = createClient(
    process.env.GATSBY_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );

  try {
    const { data: products, error } = await supabase.from('products').select('*');
    if (error) throw error;

    const languages = ['en', 'de'];

    if (products) { // Makes sure a product exists, before calling forEach
      products.forEach(product => {

        languages.forEach(language => {
          // Check to see if product.id exists
          if (product && typeof product.id !== 'undefined') {
              const localizedPath = language === "en" 
                ? `/product/${product.id}`
                : `/<span class="math-inline">\{language\}/product/</span>{product.id}`;

              createPage({
                path: localizedPath,
                component: productTemplate,
                context: {
                  id: product.id,
                  language,
                },
              });
          } else {
              console.warn('gatsby-node.js - SKIPPING page creation due to undefined product.id for product named:', product ? product.name : 'Unknown product');
          }
        });
      });
  } else {
      console.error('gatsby-node.js - No products array to process for page creation.');
  }
} catch (error) {
  console.error('Error creating product pages:', error);
}
};