import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  Sparkles, Clock, Calendar, ArrowLeft, ArrowRight,
  Share2, MessageCircle, CheckCircle2, Lightbulb,
  BookOpen, ChevronRight, User, ShieldCheck
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import AnnouncementBar from "@/components/AnnouncementBar";
import WhatsAppButton from "@/components/WhatsAppButton";
import GsapMagnet from "@/components/GsapMagnet";
import { BLOG_POSTS, getBlogPostBySlug, getRelatedBlogPosts } from "@/data/blogs";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | MVVR CON & INTERIO",
    };
  }

  return {
    title: `${post.title} | MVVR CON & INTERIO Visakhapatnam`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedBlogPosts(post.slug, 3);

  const whatsappShareText = encodeURIComponent(
    `Check out this interior architecture article: "${post.title}" - https://mvvrinteriors.vercel.app/blog/${post.slug}`
  );

  return (
    <>
      <CustomCursor />
      <AnnouncementBar />
      <Navbar />

      {/* Article Header & Breadcrumbs */}
      <section
        style={{
          paddingTop: 140,
          paddingBottom: 40,
          background: "linear-gradient(180deg, #0d0d0d 0%, #171512 100%)",
          color: "var(--white)",
        }}
      >
        <div className="container" style={{ maxWidth: 860 }}>
          {/* Breadcrumb */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 13,
              color: "var(--silver-dark)",
              marginBottom: 20,
              flexWrap: "wrap",
            }}
          >
            <Link href="/" style={{ color: "var(--silver)", textDecoration: "none" }}>
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" style={{ color: "var(--silver)", textDecoration: "none" }}>
              Blog
            </Link>
            <span>/</span>
            <span style={{ color: "var(--gold)" }}>{post.category}</span>
          </div>

          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "rgba(197, 160, 89, 0.15)",
              color: "var(--gold)",
              padding: "5px 14px",
              borderRadius: 999,
              fontSize: 11.5,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            <Sparkles size={12} />
            {post.category}
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(26px, 4vw, 44px)",
              fontWeight: 700,
              lineHeight: 1.25,
              color: "var(--white)",
              marginBottom: 20,
            }}
          >
            {post.title}
          </h1>

          {/* Meta Information Bar */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 20,
              paddingTop: 16,
              borderTop: "1px solid rgba(255,255,255,0.1)",
              fontSize: 13,
              color: "var(--silver-light)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: "var(--gold)",
                  color: "var(--charcoal)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: 13,
                }}
              >
                M
              </div>
              <div>
                <div style={{ fontWeight: 600, color: "var(--white)" }}>{post.author.name}</div>
                <div style={{ fontSize: 11, color: "var(--silver-dark)" }}>{post.author.role}</div>
              </div>
            </div>

            <span style={{ color: "rgba(255,255,255,0.2)" }}>|</span>

            <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
              <Calendar size={13} style={{ color: "var(--gold)" }} />
              {post.date}
            </span>

            <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
              <Clock size={13} style={{ color: "var(--gold)" }} />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Article Body Section */}
      <article style={{ background: "var(--cream)", padding: "50px 0 90px" }}>
        <div className="container" style={{ maxWidth: 860 }}>
          {/* Featured Image */}
          <div
            style={{
              position: "relative",
              height: "clamp(260px, 45vw, 480px)",
              width: "100%",
              borderRadius: 20,
              overflow: "hidden",
              boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
              marginBottom: 44,
            }}
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 860px"
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Lead Paragraph */}
          <div
            style={{
              background: "var(--white)",
              borderRadius: 20,
              padding: "clamp(28px, 5vw, 48px)",
              boxShadow: "0 10px 32px rgba(0,0,0,0.04)",
              border: "1px solid rgba(0,0,0,0.05)",
              marginBottom: 40,
            }}
          >
            <p
              style={{
                fontSize: "clamp(16px, 1.8vw, 19px)",
                lineHeight: 1.8,
                color: "var(--charcoal)",
                fontWeight: 500,
                borderLeft: "3px solid var(--gold)",
                paddingLeft: 20,
                marginBottom: 36,
                fontStyle: "italic",
              }}
            >
              &ldquo;{post.intro}&rdquo;
            </p>

            {/* Sections */}
            <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
              {post.sections.map((section, idx) => (
                <div key={idx} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {section.heading && (
                    <h2
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "clamp(20px, 2.4vw, 26px)",
                        color: "var(--charcoal)",
                        fontWeight: 700,
                        lineHeight: 1.3,
                        marginTop: 10,
                      }}
                    >
                      {section.heading}
                    </h2>
                  )}

                  {section.paragraphs.map((p, pIdx) => (
                    <p
                      key={pIdx}
                      style={{
                        fontSize: 15.5,
                        lineHeight: 1.8,
                        color: "var(--charcoal-light)",
                      }}
                    >
                      {p}
                    </p>
                  ))}

                  {/* Bullet Points */}
                  {section.bulletPoints && section.bulletPoints.length > 0 && (
                    <div
                      style={{
                        background: "rgba(197, 160, 89, 0.05)",
                        border: "1px solid rgba(197, 160, 89, 0.2)",
                        borderRadius: 14,
                        padding: "20px 24px",
                        margin: "10px 0",
                      }}
                    >
                      <div
                        style={{
                          fontWeight: 700,
                          fontSize: 13,
                          color: "var(--gold-dark)",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                          marginBottom: 12,
                        }}
                      >
                        Architectural Checklist
                      </div>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                        {section.bulletPoints.map((bp, bpIdx) => (
                          <li
                            key={bpIdx}
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: 10,
                              fontSize: 14.5,
                              color: "var(--charcoal)",
                              lineHeight: 1.5,
                            }}
                          >
                            <CheckCircle2 size={16} style={{ color: "var(--gold-dark)", flexShrink: 0, marginTop: 3 }} />
                            <span>{bp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Pro Tip */}
                  {section.proTip && (
                    <div
                      style={{
                        background: "#fff9ee",
                        borderLeft: "4px solid var(--gold)",
                        borderRadius: "0 12px 12px 0",
                        padding: "16px 20px",
                        display: "flex",
                        gap: 14,
                        alignItems: "flex-start",
                        margin: "8px 0",
                      }}
                    >
                      <Lightbulb size={18} style={{ color: "var(--gold-dark)", flexShrink: 0, marginTop: 2 }} />
                      <div style={{ fontSize: 14, color: "#6b531e", lineHeight: 1.6 }}>
                        <strong>Architect&rsquo;s Pro Tip:</strong> {section.proTip}
                      </div>
                    </div>
                  )}

                  {/* Callout */}
                  {section.callout && (
                    <div
                      style={{
                        background: "var(--charcoal)",
                        color: "var(--white)",
                        borderRadius: 14,
                        padding: "22px 26px",
                        margin: "12px 0",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 14,
                      }}
                    >
                      <ShieldCheck size={20} style={{ color: "var(--gold)", flexShrink: 0, marginTop: 2 }} />
                      <div style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--silver-light)" }}>
                        <strong style={{ color: "var(--gold)", display: "block", marginBottom: 4 }}>
                          Standard Operating Principle:
                        </strong>
                        {section.callout}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Conclusion */}
            <div
              style={{
                marginTop: 44,
                paddingTop: 30,
                borderTop: "1px solid rgba(0,0,0,0.08)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: 20,
                  color: "var(--charcoal)",
                  fontWeight: 700,
                  marginBottom: 12,
                }}
              >
                The Takeaway
              </h3>
              <p
                style={{
                  fontSize: 15.5,
                  lineHeight: 1.8,
                  color: "var(--charcoal)",
                  fontWeight: 500,
                }}
              >
                {post.conclusion}
              </p>
            </div>

            {/* Tags & Share */}
            <div
              style={{
                marginTop: 36,
                paddingTop: 24,
                borderTop: "1px solid rgba(0,0,0,0.08)",
                display: "flex",
                flexWrap: "wrap",
                gap: 16,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {post.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      background: "rgba(0,0,0,0.04)",
                      color: "var(--charcoal-light)",
                      fontSize: 12,
                      fontWeight: 600,
                      padding: "4px 12px",
                      borderRadius: 999,
                    }}
                  >
                    #{t}
                  </span>
                ))}
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <a
                  href={`https://wa.me/?text=${whatsappShareText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "8px 16px",
                    borderRadius: 999,
                    background: "#25D366",
                    color: "white",
                    fontSize: 12.5,
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  <MessageCircle size={14} />
                  Share on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Author Bio Box */}
          <div
            style={{
              background: "var(--white)",
              borderRadius: 18,
              padding: "26px 30px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.03)",
              border: "1px solid rgba(0,0,0,0.05)",
              display: "flex",
              alignItems: "center",
              gap: 20,
              marginBottom: 50,
            }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: "50%",
                background: "var(--charcoal)",
                color: "var(--gold)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: 20,
                flexShrink: 0,
              }}
            >
              M
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 16, color: "var(--charcoal)" }}>
                {post.author.name}
              </div>
              <div style={{ fontSize: 12.5, color: "var(--gold-dark)", fontWeight: 600, marginBottom: 4 }}>
                {post.author.role}
              </div>
              <p style={{ fontSize: 13, color: "var(--silver-dark)", margin: 0, lineHeight: 1.5 }}>
                MVVR CON &amp; INTERIO is an architectural and interior design studio with 150+ completed residences across Visakhapatnam, Madhurawada, and Hyderabad.
              </p>
            </div>
          </div>

          {/* Back to Blog & Consultation Banner */}
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <Link
              href="/blog"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                color: "var(--charcoal)",
                fontSize: 13.5,
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              <ArrowLeft size={14} />
              Back to All Articles
            </Link>
          </div>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div>
              <div style={{ textAlign: "center", marginBottom: 30 }}>
                <span
                  style={{
                    fontSize: 11,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--gold-dark)",
                    fontWeight: 700,
                  }}
                >
                  Continue Reading
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: 24,
                    color: "var(--charcoal)",
                    fontWeight: 700,
                    marginTop: 6,
                  }}
                >
                  Related Interior Articles
                </h3>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                  gap: 24,
                }}
              >
                {relatedPosts.map((rPost) => (
                  <Link
                    key={rPost.slug}
                    href={`/blog/${rPost.slug}`}
                    style={{
                      background: "var(--white)",
                      borderRadius: 16,
                      overflow: "hidden",
                      textDecoration: "none",
                      color: "inherit",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.04)",
                      border: "1px solid rgba(0,0,0,0.05)",
                      display: "flex",
                      flexDirection: "column",
                      transition: "transform 0.2s ease",
                    }}
                  >
                    <div style={{ position: "relative", height: 160, width: "100%" }}>
                      <Image
                        src={rPost.image}
                        alt={rPost.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 300px"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div style={{ padding: "18px 20px", display: "flex", flexDirection: "column", flex: 1 }}>
                      <span style={{ fontSize: 11, color: "var(--gold-dark)", fontWeight: 700, textTransform: "uppercase", marginBottom: 6 }}>
                        {rPost.category}
                      </span>
                      <h4
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: 16,
                          fontWeight: 700,
                          color: "var(--charcoal)",
                          lineHeight: 1.35,
                          marginBottom: 8,
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {rPost.title}
                      </h4>
                      <span style={{ fontSize: 12, color: "var(--silver-dark)", marginTop: "auto" }}>
                        {rPost.readTime}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <WhatsAppButton />
      <Footer />
    </>
  );
}
