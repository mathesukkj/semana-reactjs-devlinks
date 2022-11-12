import { useState } from "react";
import "./admin.css";
import { Header } from "../../components/Header";
import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";
import { MdAddLink } from "react-icons/md";
import { FiTrash2 } from "react-icons/fi";
import { db } from "../../services/firebaseConnection";
import {
    addDoc,
    collection,
    onSnapshot,
    query,
    orderBy,
    doc,
    deleteDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";

export default function Admin() {
    const [nameInput, setNameInput] = useState("");
    const [urlInput, setUrlInput] = useState("");
    const [backgroundColorInput, setBackgroundColorInput] = useState("#F1f1f1");
    const [textColorInput, setTextColorInput] = useState("#121212");

    async function handleRegister(e) {
        e.preventDefault();
        if (nameInput === "" || urlInput === "") {
            toast.warn("Preencha todos os campos!");
            return;
        }
        addDoc(collection(db, "links"), {
            name: nameInput,
            url: urlInput,
            bg: backgroundColorInput,
            color: textColorInput,
            created: new Date(),
        })
            .then(() => {
                setNameInput("");
                setUrlInput("");
                toast.success("Link registrado com sucesso!");
            })
            .catch((error) => {
                toast.warn("Erro ao registrar!");
                console.log("ERRO: " + error);
            });
    }

    return (
        <div className="container">
            <Header />
            <Logo />

            <form className="form" onSubmit={handleRegister}>
                <label className="label">Nome do link</label>
                <Input
                    placeholder="Digite o link..."
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                />
                <label className="label">URL do link</label>
                <Input
                    type="url"
                    placeholder="Digite a url..."
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                />

                <section className="container-colors">
                    <div>
                        <label className="label right">Fundo do link</label>
                        <input
                            type="color"
                            value={backgroundColorInput}
                            onChange={(e) =>
                                setBackgroundColorInput(e.target.value)
                            }
                        />
                    </div>
                    <div>
                        <label className="label right">Cor do link</label>
                        <input
                            type="color"
                            value={textColorInput}
                            onChange={(e) => setTextColorInput(e.target.value)}
                        />
                    </div>
                </section>

                {nameInput !== "" && (
                    <div className="preview">
                        <label className="label">Veja como está ficando</label>
                        <article
                            className="list"
                            style={{
                                marginTop: 6,
                                marginBottom: 8,
                                backgroundColor: backgroundColorInput,
                            }}
                        >
                            <p style={{ color: textColorInput }}>{nameInput}</p>
                        </article>
                    </div>
                )}

                <button className="btn-register" type="submit">
                    Cadastrar <MdAddLink size={24} color="FFF" />
                </button>
            </form>

            <h2 className="title">Meus links</h2>

            <article
                style={{ backgroundColor: "#000", color: "#FFF" }}
                className="list animate-pop"
            >
                <p>texto</p>
                <div>
                    <button className="btn-delete">
                        <FiTrash2 size={18} color="#FFF" />
                    </button>
                </div>
            </article>
        </div>
    );
}
