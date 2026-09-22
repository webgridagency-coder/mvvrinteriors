"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles, Clock, Calendar, ArrowRight, Search,
  BookOpen, ChevronRight, MessageCircle, Tag, CheckCircle2
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import AnnouncementBar from "@/components/AnnouncementBar";
import WhatsAppButton from "@/components/WhatsAppButton";
import GsapTextReveal from "@/components/GsapTextReveal";
import GsapMagnet from "@/components/GsapMagnet";
import { BLOG_POSTS, BlogPost } from "@/data/blogs";

const CATEGORIES = [
  "All",
  "Interior Trends",
  "Vastu Shastra",
  "Modular Kitchens",
  "Lighting & False Ceilings",
  "Costs & Budgeting",
  "Coastal Homes",
  "Luxury Living",
  "Space Planning",
] as const;

export default function BlogIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];

  return (
    <>
      <CustomCursor />
      <AnnouncementBar />
      <Navbar />

      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Interior Design Blog</span>
            </div>
            <div className="page-hero-badge">
              <Sparkles size={14} />
              <span>Architectural Insights &amp; 2026 Trends</span>
            </div>
            <GsapTextReveal
              text="Interior Design Journal & Architecture Trends"
              as="h1"
              className="page-hero-title"
              style={{ color: "var(--white)" }}
            />
            <p className="page-hero-desc">
              Authoritative guides, material comparisons, Vastu blueprints, and 2026 luxury design trends curated by the MVVR architectural design team in Visakhapatnam.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section style={{ padding: "60px 0 100px", background: "var(--cream)" }}>
        <div className="container">
          {/* Controls: Search & Category Pills */}
          <div style={{ marginBottom: 44 }}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 16,
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 24,
              }}
            >
              {/* Search Bar */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: 380,
                }}
              >
                <Search
                  size={16}
                  style={{
                    position: "absolute",
                    left: 16,
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "var(--silver-dark)",
                  }}
                />
                <input
                  type="text"
                  placeholder="Search articles, vastu, trends..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px 18px 12px 44px",
                    borderRadius: 999,
                    border: "1px solid rgba(0,0,0,0.12)",
                    background: "var(--white)",
                    fontSize: 14,
                    color: "var(--charcoal)",
                    outline: "none",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                  }}
                />
              </div>

              {/* Articles Count */}
              <div style={{ fontSize: 13, color: "var(--silver-dark)", fontWeight: 500 }}>
                Showing <strong style={{ color: "var(--charcoal)" }}>{filteredPosts.length}</strong> of {BLOG_POSTS.length} Articles
              </div>
            </div>

            {/* Category Filter Pills */}
            <div
              style={{
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      padding: "8px 18px",
                      borderRadius: 999,
                      fontSize: 12.5,
                      fontWeight: 600,
                      cursor: "pointer",
                      border: "none",
                      transition: "all 0.2s ease",
                      background: isActive ? "var(--charcoal)" : "var(--white)",
                      color: isActive ? "var(--gold)" : "var(--charcoal)",
                      boxShadow: isActive
                        ? "0 4px 14px rgba(0,0,0,0.15)"
                        : "0 2px 6px rgba(0,0,0,0.04)",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    {isActive && <CheckCircle2 size={12} style={{ color: "var(--gold)" }} />}
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Featured Post Spotlight (shown when viewing all without search) */}
          {selectedCategory === "All" && !searchQuery && featuredPost && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                background: "var(--white)",
                borderRadius: 24,
                overflow: "hidden",
                boxShadow: "0 20px 48px rgba(0,0,0,0.06)",
                border: "1px solid rgba(0,0,0,0.06)",
                marginBottom: 56,
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  alignItems: "center",
                }}
              >
                <div style={{ position: "relative", height: 380, width: "100%" }}>
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    priority
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 20,
                      left: 20,
                      background: "rgba(10, 10, 10, 0.85)",
                      backdropFilter: "blur(8px)",
                      color: "var(--gold)",
                      padding: "6px 14px",
                      borderRadius: 999,
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <Sparkles size={12} />
                    Featured Spotlight
                  </div>
                </div>

                <div style={{ padding: "40px 44px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                      fontSize: 12,
                      color: "var(--silver-dark)",
                      marginBottom: 14,
                    }}
                  >
                    <span
                      style={{
                        color: "var(--gold-dark)",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {featuredPost.category}
                    </span>
                    <span>•</span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
                      <Calendar size={13} />
                      {featuredPost.date}
                    </span>
                    <span>•</span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
                      <Clock size={13} />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h2
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "clamp(22px, 2.5vw, 30px)",
                      fontWeight: 700,
                      color: "var(--charcoal)",
                      lineHeight: 1.25,
                      marginBottom: 16,
                    }}
                  >
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      {featuredPost.title}
                    </Link>
                  </h2>

                  <p
                    style={{
                      fontSize: 15,
                      lineHeight: 1.7,
                      color: "var(--charcoal-light)",
                      marginBottom: 26,
                    }}
                  >
                    {featuredPost.excerpt}
                  </p>

                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="btn btn-primary"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "12px 26px",
                      fontSize: 13,
                    }}
                  >
                    Read Full Article
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}

          {/* Grid of Blog Posts */}
          {filteredPosts.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "80px 20px",
                background: "var(--white)",
                borderRadius: 20,
              }}
            >
              <BookOpen size={40} style={{ color: "var(--gold)", marginBottom: 16 }} />
              <h3 style={{ fontSize: 20, color: "var(--charcoal)", marginBottom: 8 }}>
                No articles match your search
              </h3>
              <p style={{ color: "var(--silver-dark)", fontSize: 14, marginBottom: 20 }}>
                Try searching for another term or click &ldquo;All&rdquo; to reset categories.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="btn btn-outline"
                style={{ fontSize: 13 }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(330px, 1fr))",
                gap: 32,
              }}
            >
              <AnimatePresence>
                {filteredPosts.map((post, idx) => (
                  <motion.article
                    key={post.slug}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                    style={{
                      background: "var(--white)",
                      borderRadius: 18,
                      overflow: "hidden",
                      boxShadow: "0 10px 28px rgba(0,0,0,0.05)",
                      border: "1px solid rgba(0,0,0,0.06)",
                      display: "flex",
                      flexDirection: "column",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-6px)";
                      e.currentTarget.style.boxShadow = "0 18px 40px rgba(0,0,0,0.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 10px 28px rgba(0,0,0,0.05)";
                    }}
                  >
                    {/* Card Thumbnail */}
                    <Link
                      href={`/blog/${post.slug}`}
                      style={{
                        position: "relative",
                        height: 220,
                        width: "100%",
                        display: "block",
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: 14,
                          left: 14,
                          background: "rgba(10, 10, 10, 0.8)",
                          backdropFilter: "blur(6px)",
                          color: "var(--gold)",
                          padding: "4px 12px",
                          borderRadius: 999,
                          fontSize: 11,
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                        }}
                      >
                        {post.category}
                      </div>
                    </Link>

                    {/* Card Body */}
                    <div
                      style={{
                        padding: "24px 26px 28px",
                        display: "flex",
                        flexDirection: "column",
                        flex: 1,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 12,
                          fontSize: 12,
                          color: "var(--silver-dark)",
                          marginBottom: 12,
                        }}
                      >
                        <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                          <Calendar size={12} />
                          {post.date}
                        </span>
                        <span>•</span>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                          <Clock size={12} />
                          {post.readTime}
                        </span>
                      </div>

                      <h3
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: 19,
                          fontWeight: 700,
                          lineHeight: 1.35,
                          color: "var(--charcoal)",
                          marginBottom: 12,
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        <Link
                          href={`/blog/${post.slug}`}
                          style={{ color: "inherit", textDecoration: "none" }}
                        >
                          {post.title}
                        </Link>
                      </h3>

                      <p
                        style={{
                          fontSize: 13.5,
                          lineHeight: 1.6,
                          color: "var(--charcoal-light)",
                          marginBottom: 20,
                          flex: 1,
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {post.excerpt}
                      </p>

                      <div
                        style={{
                          paddingTop: 16,
                          borderTop: "1px solid rgba(0,0,0,0.06)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <span style={{ fontSize: 12, color: "var(--silver-dark)", fontWeight: 500 }}>
                          By {post.author.name}
                        </span>
                        <Link
                          href={`/blog/${post.slug}`}
                          style={{
                            fontSize: 12.5,
                            fontWeight: 700,
                            color: "var(--gold-dark)",
                            textDecoration: "none",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 5,
                          }}
                        >
                          Read Article
                          <ChevronRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          )}

          {/* Bottom Consultation Banner */}
          <div
            style={{
              marginTop: 80,
              background: "linear-gradient(135deg, #111111 0%, #1a1610 100%)",
              borderRadius: 24,
              padding: "50px 40px",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
              border: "1px solid rgba(197, 160, 89, 0.2)",
              boxShadow: "0 24px 60px rgba(0,0,0,0.3)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: 300,
                height: 1,
                background: "linear-gradient(90deg, transparent, var(--gold), transparent)",
              }}
            />
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: "rgba(197, 160, 89, 0.12)",
                color: "var(--gold)",
                padding: "6px 14px",
                borderRadius: 999,
                fontSize: 11.5,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              <Sparkles size={12} />
              Bespoke Interior Craftsmanship
            </div>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(24px, 3.5vw, 36px)",
                color: "var(--white)",
                fontWeight: 700,
                marginBottom: 14,
              }}
            >
              Ready to Turn These Ideas Into Your Dream Home?
            </h2>
            <p
              style={{
                fontSize: 15,
                color: "var(--silver-light)",
                maxWidth: 620,
                margin: "0 auto 30px",
                lineHeight: 1.6,
              }}
            >
              Schedule a free 1-on-1 design consultation with our chief architects in Visakhapatnam. We craft complete 3D VR walkthroughs and detailed quotation blueprints.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 14,
                justifyContent: "center",
              }}
            >
              <GsapMagnet strength={0.3}>
                <a
                  href="https://wa.me/919391356077?text=Hi%20MVVR%20Interiors,%20I%20read%20your%20design%20blog%20and%20would%20like%20to%20discuss%20interiors%20for%20my%20home."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
                >
                  <MessageCircle size={16} />
                  Chat on WhatsApp with Architect
                </a>
              </GsapMagnet>
              <GsapMagnet strength={0.3}>
                <Link
                  href="/pricing"
                  className="btn btn-outline"
                  style={{ color: "var(--white)", borderColor: "rgba(255,255,255,0.25)" }}
                >
                  Calculate Your Interior Cost
                  <ArrowRight size={14} />
                </Link>
              </GsapMagnet>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </>
  );
}
