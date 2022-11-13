import "./networks.css";
import { useState } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { MdAddLink } from "react-icons/md";

import { db } from "../../services/firebaseConnection";
import { setDoc, doc, getDoc } from "firebase/firestore";

export default function Networks() {
    const [linkedin, setLinkedin] = useState("");
    const [github, setGithub] = useState("");
    const [instagram, setInstagram] = useState("");

    async function handleSave(e) {
        e.preventDefault();
        await setDoc(doc(db, "social", "link"), {
            linkedin: linkedin,
            github: github,
            instagram: instagram,
        });
    }

    return (
        <div className="container">
            <Header />

            <h1 className="title-social">Suas redes sociais</h1>

            <form action="" className="form" onSubmit={handleSave}>
                <label htmlFor="">Link do LinkedIn</label>
                <Input
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}
                    placeholder="Digite o link do LinkedIn"
                />

                <label htmlFor="">Link do GitHub</label>
                <Input
                    value={github}
                    onChange={(e) => setGithub(e.target.value)}
                    placeholder="Digite o link do Github"
                />

                <label htmlFor="">Link do Instagram</label>
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
