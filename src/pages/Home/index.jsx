import "./home.css";
import { Social } from "../../components/Social";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { useState, useEffect } from "react";
import { getDocs, collection, orderBy, query } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";

export default function Home() {
    const [links, setLinks] = useState([]);

    useEffect(() => {
        function loadLinks() {
            const linksRef = collection(db, "links");
            const queryRef = query(linksRef, orderBy("created", "asc"));

            getDocs(queryRef).then((snapshot) => {
                let lista = [];

                snapshot.forEach((doc) => {
                    lista.push({
                        id: doc.id,
                        url: doc.data().url,
                        name: doc.data().name,
                        bg: doc.data().bg,
                        color: doc.data().color,
                    });
                });
                setLinks(lista);
            });
        }

        loadLinks();
    }, []);

    return (
        <div className="container">
            <h1>Mathesu</h1>
            <span>Veja meus projetos</span>
            <main className="links">
                {links.map((item) => (
                    <section
                        key={item.id}
                        className="link-area"
                        style={{ backgroundColor: item.bg }}
                    >
                        <a href={item.url}>
                            <p
                                className="link-text"
                                style={{ color: item.color }}
                            >
                                {item.name}
                            </p>
                        </a>
                    </section>
                ))}

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
