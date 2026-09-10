import { useEffect } from "react";

function Blog() {

    useEffect(() => {
    document.title =
        "System Paster Blog | Transfer Text Between Devices";

    const metaDescription = document.querySelector(
        'meta[name="description"]'
    );

    if (metaDescription) {
        metaDescription.setAttribute(
            "content",
            "Practical guides for transferring text, code, links, and information between devices using simple methods like QR codes."
        );
    }

    const canonical = document.querySelector('link[rel="canonical"]');

    if (canonical) {
        canonical.setAttribute(
            "href",
            "https://system-paster.vercel.app/blog"
        );
    }
}, []);
    return (
        <main className="blog-page">
            <section className="blog-hero">
                <p className="blog-label">SYSTEM PASTER BLOG</p>

                <h1>Simple Ways to Move Text Between Devices</h1>

                <p className="blog-intro">
                    Practical guides for transferring text, code, and information
                    between your phone and computer.
                </p>
            </section>

            <section className="blog-articles">
                <article className="blog-card">
                    <p className="article-label">GUIDE</p>

                    <h2>
                        How to Transfer Text from PC to Phone Without WhatsApp
                    </h2>

                    <p>
                        Need to quickly move text from your computer to your phone?
                        Explore simple methods and find the easiest option for your
                        situation.
                    </p>

                    <a href="/blog/transfer-text-between-devices-without-whatsapp">
                        Read article →
                    </a>
                </article>
            </section>
        </main>
    );
}

export default Blog;
