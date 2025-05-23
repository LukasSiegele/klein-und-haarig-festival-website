import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../../components/layout/layout";
import Footer from "../../components/footer/footer";
import SideNavigation from "../../components/navigation/SideNavigation";
import SideLine from "../../components/navigation/SideLine";
import MobileNavigation from "../../components/navigation/MobileNavigation";
import ProductContent from "../../components/shop/ProductContent";
import { StyledText } from "../../components/styles/TextStyles";
import { supabase } from "../../utils/supabaseClient";
import { useTranslation } from "gatsby-plugin-react-i18next";

const ProductDetail = ({ pageContext }) => {
  const { t } = useTranslation();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);

      // Fetch product from Supabase based on the product id    
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", pageContext.id) // Use pageContext.id to fetch specific product
        .single(); // Get only one record

      if (error) {
        setError(t("Product not found"));
        setLoading(false);
        return;
      }

    
      // Here we map our Supabase.com product database field names to our existing names
      const mappedProduct = {
        ...data,
        name: data.name, // Map Supabase's product 'name' to 'name'
        cardImage: data.card_image, // Map Supabase's 'card_image' to 'cardImage'
        shortDescription: data.short_description, // Map 'short_description' to 'shortDescription'
        longDescription: data.long_description, // Map 'long_description' to 'longDescription'
        images: data.images || [], // Maps images from Supabase to 'images'
      };

      setProduct(mappedProduct);
      setLoading(false);
    };

    fetchProduct();
  }, [pageContext.id, t]);

  if (loading) {
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
                  <LoadingText>{t("Loading product...")}</LoadingText>
                </ScrollContainer>
              </ContentSection>
            </MainGrid>
          </Content>
        </Wrapper>
      </Layout>
    );
  }

  if (error || !product) {
    return (
      <Layout>
        <Wrapper key="not-found">
          <MobileNavigation isShop="shop" bgColor="black" />
          <SideNavigation isShop="shop" bgColor="black" />
          <Content>
            <MainGrid>
              <SideLine />
              <ContentSection>
                <ScrollContainer>
                  <ProductDetailSection>
                    <NoProductText>
                      {error || t("Product not found")}
                    </NoProductText>
                  </ProductDetailSection>
                  <Footer bgColor="black" />
                </ScrollContainer>
              </ContentSection>
            </MainGrid>
          </Content>
        </Wrapper>
      </Layout>
    );
  }

  return (
    <Layout>
      <Wrapper key={product.id}>
        <MobileNavigation isShop="shop" bgColor="black" />
        <SideNavigation isShop="shop" bgColor="black" />
        <Content>
          <MainGrid>
            <SideLine />
            <ContentSection>
              <ScrollContainer>
                <ProductDetailSection>
                  <ProductDetailContainer>
                    <ProductImageScrollContainer>
                      {product.images && product.images.length > 0 ? (
                        product.images.map((imageUrl, index) => (
                          <ScrollableProductImage
                            key={index}
                            // Pfad anpassen, falls nötig (z.B. wenn nicht im static-Ordner)
                            // Hier wird angenommen, Pfade sind relativ zum /static Ordner
                            src={`/${imageUrl}`}
                            alt={`${product.name} - Bild ${index + 1}`}
                            loading="lazy" // Verbessert Ladezeit bei vielen Bildern
                          />
                        ))
                      ) : (
                        // Fallback, if no images in Supabase images table array: cardImage or placeholder
                        <ScrollableProductImage
                          src={`/${product.cardImage || "images/missing-image-placeholder.png"}`}
                          alt={product.name}
                        />
                      )}
                  </ProductImageScrollContainer>
                    <ProductInfo>
                      <ProductContent product={product} />
                    </ProductInfo>
                  </ProductDetailContainer>
                </ProductDetailSection>
                <Footer bgColor="black" />
              </ScrollContainer>
            </ContentSection>
          </MainGrid>
        </Content>
      </Wrapper>
    </Layout>
  );
};

export default ProductDetail;

export const query = graphql`
  query ($language: String!) {
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
`;

// Styles
const Wrapper = styled.div`
  overflow: hidden;
  background-color: black;
`;

const Content = styled.div`
  background-color: black;
  display: grid;
  grid-template-columns: auto;
`;

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  overflow: hidden;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const ContentSection = styled.div`
  background-color: black;
  display: grid;
  grid-template-columns: 1fr;
`;

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
`;

const ProductDetailSection = styled.div`
  margin-bottom: 0px;
  width: 100%;
  align-items: center;
  padding: 24px 24px 0px 24px;

  @media (max-width: 680px) {
    padding-top: 78px;
  }
`;

const ProductDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 48px;
  width: 100%;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 24px;
  }
`;

const ProductImageScrollContainer = styled.div`
  width: 50%;
  max-height: 90vh;
  overflow-y: auto; 

  display: flex;
  flex-direction: column;
  gap: 16px;

  /* Makes scrollbare prettier (für Webkit-Browser wie Chrome/Safari) */
  &::-webkit-scrollbar {
    width: 8px; 
  }
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 4px;
    border: 2px solid transparent;
    background-clip: content-box;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(255, 255, 255, 0.6);
  }

  @media (max-width: 900px) {
    width: 100%;
    max-height: 60vh;
  }
`;

// Styling for images in scrollable Container
const ScrollableProductImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
  flex-shrink: 0;
`;

const ProductInfo = styled.div`
  width: 50%;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const LoadingText = styled(StyledText)`
  text-align: center;
  margin: 2rem 0;
`;

const NoProductText = styled(StyledText)`
  text-align: center;
  margin: 2rem 0;
  color: #ffffff;
`;
