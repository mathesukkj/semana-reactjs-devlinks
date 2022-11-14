import "./home.css";
import { Social } from "../../components/social";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { useState, useEffect } from "react";
import {
    getDocs,
    collection,
    orderBy,
    query,
    doc,
    getDoc,
} from "firebase/firestore";
import { db } from "../../services/firebaseConnection";

export default function Home() {
    const [links, setLinks] = useState([]);
    const [socialLinks, setSocialLinks] = useState({});

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

    useEffect(() => {
        function loadSocialLinks() {
            const docRef = doc(db, "social", "link");
            getDoc(docRef).then((snapshot) => {
                if (snapshot.data() !== undefined) {
                    setSocialLinks({
                        linkedin: snapshot.data().linkedin,
                        github: snapshot.data().github,
                        instagram: snapshot.data().instagram,
                    });
                }
            });
        }
        loadSocialLinks();
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

                {links.length !== 0 && Object.keys(socialLinks).length > 0 && (
                    <footer>
                        <Social url={socialLinks?.linkedin}>
                            <FaLinkedin size={30} color="#FFF" />
                        </Social>
                        <Social url={socialLinks?.github}>
                            <FaGithub size={30} color="#FFF" />
                        </Social>
                        <Social url={socialLinks?.instagram}>
                            <FaInstagram size={30} color="#FFF" />
                        </Social>
                    </footer>
                )}
            </main>
        </div>
    );
}
