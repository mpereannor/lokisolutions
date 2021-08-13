import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { CTA } from "../components/CTA";
import Footer  from "../components/Footer";
import Header from "../components/Header";
import MainFeauture from "../components/Feature";
import { ProductFeature } from "../components/Feature";
import { ContactForm } from "../components/Form";

const Index = () => (
  <Container>
    <Header />
    <CTA />
    <MainFeauture/>
    <ProductFeature/>
    <ContactForm/>
    <Footer/>
  </Container>
);

export default Index;
