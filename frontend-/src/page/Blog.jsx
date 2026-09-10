import { useEffect } from "react";

function Blog() {
    useEffect(() => {
        document.title =
            "How to Transfer Text Between Devices | System Paster";

        const metaDescription = document.querySelector(
            'meta[name="description"]'
        );

        if (metaDescription) {
            metaDescription.setAttribute(
                "content",
                "Learn different ways to transfer copied text, code, links, and other information between phones, computers, tablets, and other devices."
            );
        }

        const canonical = document.querySelector(
            'link[rel="canonical"]'
        );

        if (canonical) {
            canonical.setAttribute(
                "href",
                "https://system-paster.vercel.app/blog"
            );
        }
    }, []);

    return (
        <main className="blog-page">

            {/* HERO */}

            <section className="blog-hero">
                <p className="blog-label">SYSTEM PASTER BLOG</p>

                <h1>
                    How to Transfer Text Between Devices
                </h1>

                <p className="blog-intro">
                    Simple ways to move copied text, code, links, and
                    other information from one device to another.
                </p>

                <p>
                    Sometimes you have something on one device and need
                    it on another. Maybe it's a piece of code on your
                    computer, a link on your phone, or a few lines of
                    text you just copied.
                </p>

                <p>
                    You don't always need WhatsApp, email, a messaging
                    app, or another account just to move a small amount
                    of text. This blog explores practical ways to transfer
                    information between different devices.
                </p>

                <a href="/">
                    Transfer text with System Paster →
                </a>
            </section>


            {/* GUIDES */}

            <section className="blog-articles">
                <h2>Text Transfer Guides</h2>

                <article className="blog-card">
                    <p className="article-label">GUIDE</p>

                    <h3>
                        How to Transfer Text Between Devices Without WhatsApp
                    </h3>

                    <p>
                        Need to move copied text from one device to another
                        without sending it through WhatsApp? Explore simple
                        methods for transferring text and see when a QR-code
                        approach can be useful.
                    </p>

                    <a href="/blog/transfer-text-between-devices-without-whatsapp">
                        Read the guide →
                    </a>
                </article>
            </section>


            {/* SEARCH INTENTS / REAL PROBLEMS */}

            <section className="blog-help">
                <h2>
                    Different Ways You Might Need to Transfer Text
                </h2>

                <p>
                    The best method depends on what you are trying to move
                    and which devices you are using. A few lines of text
                    can be transferred in many different situations.
                </p>

                <p>
                    For example, you might need to move text from a computer
                    to a phone, from a phone to a computer, or between two
                    phones or computers. You might also need to transfer
                    copied code, a URL, a note, or another small piece of
                    information.
                </p>

                <ul>
                    <li>
                        Transfer text from a computer to a phone
                    </li>

                    <li>
                        Transfer text from a phone to a computer
                    </li>

                    <li>
                        Transfer text between two phones
                    </li>

                    <li>
                        Transfer text between two computers
                    </li>

                    <li>
                        Move copied text between devices
                    </li>

                    <li>
                        Transfer code or links between devices
                    </li>
                </ul>
            </section>


            {/* PROBLEM */}

            <section className="blog-help">
                <h2>
                    When You Just Need to Move a Few Lines of Text
                </h2>

                <p>
                    Sharing a small piece of text can be more inconvenient
                    than it should be. You may not want to open a messaging
                    app, send yourself an email, install software, or create
                    an account just to move something you already copied.
                </p>

                <p>
                    In situations like this, a direct device-to-device
                    method can be simpler. System Paster uses a QR code:
                    create the code containing your text on one device,
                    then scan it with the camera of the device that needs
                    the text.
                </p>

                <p>
                    The devices do not have to be the same type. The
                    receiving device simply needs a camera capable of
                    scanning the QR code.
                </p>

                <a href="/">
                    Try System Paster →
                </a>
            </section>


            {/* TOPICS */}

            <section className="blog-topics">
                <h2>
                    Text Transfer Topics
                </h2>

                <ul>
                    <li>
                        Ways to transfer text between devices
                    </li>

                    <li>
                        Moving copied text without WhatsApp
                    </li>

                    <li>
                        Transferring text without creating an account
                    </li>

                    <li>
                        Sending code between devices
                    </li>

                    <li>
                        Moving links from one device to another
                    </li>

                    <li>
                        Quick ways to share small pieces of text
                    </li>

                    <li>
                        QR-code methods for transferring text
                    </li>
                </ul>
            </section>

        </main>
    );
}

export default Blog;