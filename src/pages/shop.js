import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout"
import Footer from "../components/footer/footer"
import SideNavigation from "../components/navigation/SideNavigation"
import SideLine from "../components/navigation/SideLine"
import { graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { supabase } from "../utils/supabaseClient"  // Imports Supabase database for shop products

import ProductGrid from "../components/shop/ProductGrid"
import MobileNavigation from "../components/navigation/MobileNavigation"
import { TextSmall, StyledText } from "../components/styles/TextStyles"

export default function Shop() {
  const { t } = useTranslation()
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  // Fetch products from Supabase when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*");  // Get all products from Supabase

      if (error) {
        console.error("Error loading products:", error);
        setLoading(false);
        return;
      }

      // Map Supabase fields to your old field names (cardImage, shortDescription, etc.)
      const mappedProducts = data.map(item => ({
        ...item,
        cardImage: item.card_image,  // Mapping from Supabase field 'card_image'
        shortDescription: item.short_description,  // Mapping from 'short_description'
        longDescription: item.long_description,  // Mapping from 'long_description'
      }));

      setProducts(mappedProducts);  // Set the products in state
      setLoading(false);
    };

    fetchProducts();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    // Products are filtered based on the selected category (can be implemented later)
  };

  return (
    <Layout>
      <Wrapper>
        <MobileNavigation isShop="shop" bgColor="black" />
        <SideNavigation isShop="shop" bgColor="black" />
        <Content>
          <MainGrid>
            <SideLine />
            <ContentSection>
              <ScrollContainer>
                <ShopSection>
                  {loading ? (
                    <LoadingText>{t("Loading products...")}</LoadingText>
                  ) : products.length > 0 ? (
                    <ProductGrid products={products} />
                  ) : (
                    <NoProductsText>{t("No products available")}</NoProductsText>
                  )}
                </ShopSection>
                <Footer bgColor="black" />
              </ScrollContainer>
            </ContentSection>
          </MainGrid>
        </Content>
      </Wrapper>
    </Layout>
  );
}

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`

// Styled Components
const Wrapper = styled.div`
  overflow: hidden;
  background-color: black;
`

const Content = styled.div`
  background-color: black;
  display: grid;
  grid-template-columns: auto;
`

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  overflow: hidden;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

const ContentSection = styled.div`
  background-color: black;
  display: grid;
  grid-template-columns: 1fr;
`

const ScrollContainer = styled.div`
  overflow-x: hidden;
  background-color: black;
  height: 100vh;
  width: 100%;
  overflow-y: hidden;
  overflow-y: scroll;
  @media (max-width: 1100px) {
    height: auto;
  }
`

const ShopSection = styled.div`
  margin-bottom: 60px;
  padding-top: 24px;
  width: 100%;
  align-items: center;
    
  @media (max-width: 680px) {
    padding-top: 78px;
  }
`

const LoadingText = styled.p`
  color: white;
  text-align: center;
  padding: 40px;
  font-size: 16px;
  opacity: 0.7;
`

const NoProductsText = styled(StyledText)`
  color: white;
  text-align: center;
  padding: 40px;
  font-size: 16px;
  opacity: 0.7;
`

const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 16px 56px;
  gap: 16px;
  width: 100%;
  margin-bottom: 16px;
`
