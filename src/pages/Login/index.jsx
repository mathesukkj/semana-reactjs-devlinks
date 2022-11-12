import "./login.css";
import { Logo } from "../../components/Logo";
import { useState } from "react";
import { auth } from "../../services/firebaseConnection";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(e) {
        e.preventDefault();
        if (email === "" || password === "") {
            alert("Preencha todos os campos!");
            return;
        }
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                console.log("LOGADO COM SUCCESO");
            })
            .catch(() => {
                console.log("ERRO NO LOGIN");
            });
    }

    return (
        <div className="login-container" onSubmit={handleLogin}>
            <Logo />
            <form className="form">
                <input
                    type="email"
                    placeholder="Digite seu email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="***********"
                    autoComplete="on"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Acessar</button>
            </form>
        </div>
    );
}
