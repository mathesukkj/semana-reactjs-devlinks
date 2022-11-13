import "./networks.css";
import { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { MdAddLink } from "react-icons/md";

import { db } from "../../services/firebaseConnection";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";

export default function Networks() {
    const [linkedin, setLinkedin] = useState();
    const [github, setGithub] = useState("");
    const [instagram, setInstagram] = useState("");

    useEffect(() => {
        function loadLinks() {
            const docRef = doc(db, "social", "link");
            getDoc(docRef).then((snapshot) => {
                if (snapshot.data() !== undefined) {
                    setLinkedin(snapshot.data().linkedin);
                    setGithub(snapshot.data().github);
                    setInstagram(snapshot.data().instagram);
                }
            });
        }
        loadLinks();
    }, []);

    function handleSave(e) {
        e.preventDefault();
        setDoc(doc(db, "social", "link"), {
            linkedin: linkedin,
            github: github,
            instagram: instagram,
        })
            .then(() => {
                toast.success("Salvo com sucesso!");
            })
            .catch(() => {
                toast.error("Erro ao salvar!");
            });
    }

    return (
        <div className="container">
            <Header />

            <h1 className="title-social">Suas redes sociais</h1>

            <form action="" className="form" onSubmit={handleSave}>
                <label className="label">Link do LinkedIn</label>
                <Input
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}
                    placeholder="Digite o link do LinkedIn"
                />

                <label className="label">Link do GitHub</label>
                <Input
                    value={github}
                    onChange={(e) => setGithub(e.target.value)}
                    placeholder="Digite o link do Github"
                />

                <label className="label">Link do Instagram</label>
                <Input
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                    placeholder="Digite o link do Instagram"
                />

                <button type="submit" className="btn-register">
                    Salvar links <MdAddLink size={24} color="#FFF" />
                </button>
            </form>
        </div>
    );
}
