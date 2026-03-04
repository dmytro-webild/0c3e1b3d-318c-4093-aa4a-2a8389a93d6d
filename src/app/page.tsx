"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import HeroBillboardGallery from "@/components/sections/hero/HeroBillboardGallery";
import ProductCardTwo from "@/components/sections/product/ProductCardTwo";
import TextSplitAbout from "@/components/sections/about/TextSplitAbout";
import FeatureCardTwentyOne from "@/components/sections/feature/FeatureCardTwentyOne";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FaqSplitMedia from "@/components/sections/faq/FaqSplitMedia";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import { Check, HelpCircle, Sparkles, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="small"
      sizing="mediumSizeLargeTitles"
      background="noise"
      cardStyle="glass-elevated"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="layered"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Collections", id: "products" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" },
            { name: "FAQ", id: "faq" },
          ]}
          brandName="Apna Mens Wear"
          bottomLeftText="📍 Indore, MP"
          bottomRightText="09630105490"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Premium Menswear Collection"
          description="Discover our exclusive range of high-quality shirts, t-shirts, formal wear, and combo offers crafted for the modern Indian man. Fast delivery across Indore with unbeatable prices."
          tag="Featured Collection"
          tagIcon={Sparkles}
          background={{ variant: "radial-gradient" }}
          mediaItems={[
            {
              imageSrc: "http://img.b2bpic.net/free-photo/groom-preparing-his-wedding_1303-28300.jpg",              imageAlt: "Premium formal wear collection"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-smiling-stylish-hipster-lambersexual-model_158538-17742.jpg",              imageAlt: "Casual t-shirt collection"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/male-belt-sweater-accessories-clothes_1203-6421.jpg",              imageAlt: "Combo offer showcase"
            },
          ]}
          mediaAnimation="slide-up"
          buttons={[
            { text: "Call Now", href: "tel:09630105490" },
            { text: "WhatsApp Us", href: "https://wa.me/919630105490" },
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Featured Products"
          description="Handpicked selections from our exclusive menswear collection. Premium quality, affordable prices."
          tag="Best Sellers"
          tagIcon={Star}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          gridVariant="bento-grid"
          products={[
            {
              id: "1",              brand: "Apna Mens Wear",              name: "Premium Formal Shirts",              price: "₹499-799",              rating: 5,
              reviewCount: "2.3k",              imageSrc: "http://img.b2bpic.net/free-photo/two-happy-confident-young-businessmen-standing-by-office_146671-18676.jpg",              imageAlt: "Premium formal shirts collection"
            },
            {
              id: "2",              brand: "Apna Mens Wear",              name: "Comfortable T-Shirts",              price: "₹299-499",              rating: 5,
              reviewCount: "1.8k",              imageSrc: "http://img.b2bpic.net/free-photo/young-african-american-woman-with-dark-curly-hair-sunglasses-tshirt-pretty-woman-with-blond-hair-shirt-dreamily-looking-camera-while-spending-time-together_574295-5031.jpg",              imageAlt: "Comfortable t-shirt collection"
            },
            {
              id: "3",              brand: "Apna Mens Wear",              name: "Formal Wear Sets",              price: "₹1,299-2,499",              rating: 5,
              reviewCount: "1.5k",              imageSrc: "http://img.b2bpic.net/free-photo/full-length-confident-businessman-standing-office_637285-7084.jpg",              imageAlt: "Formal wear collection"
            },
            {
              id: "4",              brand: "Apna Mens Wear",              name: "Combo Offers",              price: "₹999-1,999",              rating: 5,
              reviewCount: "3.2k",              imageSrc: "http://img.b2bpic.net/free-vector/sale-discount-offers-templates-banners-flyers-design-collection_1302-4697.jpg",              imageAlt: "Combo offer collection"
            },
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="About Apna Mens Wear"
          description={[
            "Welcome to Apna Mens Wear, your trusted destination for premium menswear in Indore. Since our establishment, we've been committed to providing high-quality clothing at affordable prices.",            "Our mission is to ensure every customer finds the perfect fit and style. We offer fast delivery, bulk purchase options for corporate clients, and exceptional customer service.",            "Whether you're looking for casual t-shirts, professional formal wear, or great-value combo offers, we have something for every occasion and budget."
          ]}
          useInvertedBackground={false}
          showBorder={true}
          buttons={[{ text: "Get in Touch", href: "#contact" }]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwentyOne
          title="Why Choose Us"
          description="Discover the benefits that make Apna Mens Wear the preferred choice for menswear shopping in Indore."
          tag="Our Advantages"
          tagIcon={Check}
          imageSrc="http://img.b2bpic.net/free-photo/scenery-designers-work_23-2149741784.jpg"
          imageAlt="Quality assurance and premium fabrics"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
          mediaPosition="left"
          accordionItems={[
            {
              id: "1",              title: "Premium Quality Fabrics",              content: "We source the finest fabrics and materials to ensure durability, comfort, and style. Every piece is carefully selected for superior quality and long-lasting wear."
            },
            {
              id: "2",              title: "Affordable Pricing",              content: "Enjoy premium menswear without breaking the bank. Our competitive pricing and regular offers ensure you get the best value for your money."
            },
            {
              id: "3",              title: "Fast Delivery",              content: "Quick same-day or next-day delivery across Indore. We understand the importance of timely service and work hard to meet your expectations."
            },
            {
              id: "4",              title: "Bulk Purchase Support",              content: "Special discounts and customized solutions for corporate bulk orders. Perfect for uniforms, employee gifts, or resale purposes."
            },
          ]}
        />
      </div>

      <div id="reviews" data-section="reviews">
        <TestimonialCardFifteen
          testimonial="Apna Mens Wear has become my go-to store for all my clothing needs. The quality is exceptional, prices are unbeatable, and the service is outstanding. Highly recommended for anyone in Indore!"
          rating={5}
          author="Rajesh Kumar, Regular Customer"
          avatars={[
            {
              src: "http://img.b2bpic.net/free-photo/smiling-beautiful-middle-aged-business-woman_1262-3085.jpg",              alt: "Rajesh Kumar"
            },
            {
              src: "http://img.b2bpic.net/free-photo/smiling-man-sitting-cafe-table-gesturing_1262-1141.jpg",              alt: "Priya Singh"
            },
            {
              src: "http://img.b2bpic.net/free-photo/smiling-african-american-man-posing-library_74855-1619.jpg",              alt: "Amit Patel"
            },
            {
              src: "http://img.b2bpic.net/free-photo/smiling-young-businessman-suit-looking-camera-meeting_1163-4654.jpg",              alt: "Vikram Sharma"
            },
          ]}
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get in Touch"
          description="Have questions about our products or services? Fill out the form below and our team will respond promptly. You can also call us directly or message on WhatsApp."
          inputs={[
            {
              name: "fullName",              type: "text",              placeholder: "Full Name",              required: true,
            },
            {
              name: "mobileNumber",              type: "tel",              placeholder: "Mobile Number",              required: true,
            },
            {
              name: "email",              type: "email",              placeholder: "Email Address",              required: false,
            },
            {
              name: "category",              type: "select",              placeholder: "What are you looking for?",              required: true,
            },
          ]}
          textarea={{
            name: "message",            placeholder: "Tell us about your inquiry...",            rows: 5,
            required: false,
          }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/young-support-customer-woman-talking-into-headset-microphone-with-call-center-customer-while-working-startup-company-office-caucasian-female-consultant-providing-telemarketing-service_482257-28282.jpg"
          imageAlt="Contact us for menswear inquiries"
          mediaAnimation="slide-up"
          mediaPosition="right"
          buttonText="Send Inquiry"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Find answers to common questions about our products, delivery, returns, and bulk purchases."
          tag="Help & Support"
          tagIcon={HelpCircle}
          imageSrc="http://img.b2bpic.net/free-photo/call-center-hot-line-information-concept_53876-125154.jpg"
          imageAlt="Customer support and help"
          mediaAnimation="slide-up"
          mediaPosition="left"
          faqs={[
            {
              id: "1",              title: "How can I place an order?",              content: "You can call us at 09630105490, message us on WhatsApp, fill out our contact form, or visit our store in Indore. Our team will assist you with the entire process."
            },
            {
              id: "2",              title: "Do you offer same-day delivery?",              content: "Yes! We offer same-day delivery across Indore for orders placed before 2 PM. Express delivery options are also available for urgent requirements."
            },
            {
              id: "3",              title: "What is your return and exchange policy?",              content: "We accept returns and exchanges within 7 days of purchase for unused items. Simply contact us at 09630105490 or WhatsApp us at wa.me/919630105490 to initiate the process."
            },
            {
              id: "4",              title: "Do you have bulk purchase discounts?",              content: "Absolutely! We offer special pricing for bulk orders (corporate uniforms, resale, etc.). Contact our team for customized quotes and faster delivery options."
            },
            {
              id: "5",              title: "Do you ship outside Indore?",              content: "Currently, we focus on local Indore delivery for fast service. Contact us for special requests or to arrange shipping to other cities."
            },
            {
              id: "6",              title: "Are your products authentic and high-quality?",              content: "Yes! All our products are genuine and sourced from reliable manufacturers. We guarantee premium quality fabrics and excellent craftsmanship on every item."
            },
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          animationType="smooth"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="Apna Mens Wear"
          leftLink={{
            text: "Privacy Policy",            href: "#"
          }}
          rightLink={{
            text: "Terms of Service",            href: "#"
          }}
        />
      </div>
    </ThemeProvider>
  );
}
