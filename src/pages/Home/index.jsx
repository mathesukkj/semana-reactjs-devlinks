import "./home.css";

export default function Home() {
    return (
        <div className="container">
            <h1>Mathesu</h1>
            <span>Veja meus links</span>

            <main className="links">
                <section className="link-area">
                    <a href="#">
                        <p className="link-text">NLW eSports</p>
                    </a>
                </section>

                <section className="link-area">
                    <a href="#">
                        <p className="link-text">RocketPay</p>
                    </a>
                </section>

                <section className="link-area">
                    <a href="#">
                        <p className="link-text">GitHub</p>
                    </a>
                </section>
            </main>
        </div>
    );
}
