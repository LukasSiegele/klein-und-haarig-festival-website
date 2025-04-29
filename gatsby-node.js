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

    products.forEach(product => {
      languages.forEach(language => {
        const localizedPath = language === "en" 
          ? `/product/${product.id}`
          : `/${language}/product/${product.id}`;

        createPage({
          path: localizedPath,
          component: productTemplate,
          context: {
            id: product.id,
            language,
          },
        });
      });
    });
  } catch (error) {
    console.error('Error creating product pages:', error);
  }
};