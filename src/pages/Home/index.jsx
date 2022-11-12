import "./home.css";
import { Social } from "../../components/social";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

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

                <footer>
                    <Social url="https://www.linkedin.com/in/matheus-kemuel/">
                        <FaLinkedin size={30} color="#FFF" />
                    </Social>
                    <Social url="https://github.com/mathesukkj">
                        <FaGithub size={30} color="#FFF" />
                    </Social>
                    <Social url="https://www.instagram.com/mathesukkkkj/">
                        <FaInstagram size={30} color="#FFF" />
                    </Social>
                </footer>
            </main>
        </div>
    );
}
