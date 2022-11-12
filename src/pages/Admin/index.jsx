import { useState } from "react";
import "./admin.css";
import { Header } from "../../components/Header";
import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";
import { MdAddLink } from "react-icons/md";
import { FiTrash2 } from "react-icons/fi";

export default function Admin() {
    const [nameInput, setNameInput] = useState("");
    const [urlInput, setUrlInput] = useState("");
    const [backgroundColorInput, setBackgroundColorInput] = useState("#F1f1f1");
    const [textColorInput, setTextColorInput] = useState("#121212");

    return (
        <div className="container">
            <Header />
            <Logo />

            <form className="form">
                <label className="label">Nome do link</label>
                <Input
                    placeholder="Digite o link..."
                    value={nameInput}
                    onchange={(e) => setNameInput(e.target.value)}
                />
                <label className="label">URL do link</label>
                <Input
                    type="url"
                    placeholder="Digite a url..."
                    value={urlInput}
                    onchange={(e) => setUrlInput(e.target.value)}
                />

                <section className="container-colors">
                    <div>
                        <label className="label right">Fundo do link</label>
                        <input
                            type="color"
                            value={backgroundColorInput}
                            onchange={(e) =>
                                setBackgroundColorInput(e.target.value)
                            }
                        />
                    </div>
                    <div>
                        <label className="label right">Cor do link</label>
                        <input
                            type="color"
                            value={textColorInput}
                            onchange={(e) => setTextColorInput(e.target.value)}
                        />
                    </div>
                </section>

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
