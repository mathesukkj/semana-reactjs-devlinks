import { Link } from "react-router-dom";
import "./error.css";
import { Logo } from "../../components/Logo";

export default function Error() {
    return (
        <div className="error">
            <Logo />
            <h1>Página não encontrada!</h1>
            <p>Essa página não existe.</p>

            <Link className="link" to="/">
                Voltar pra home
            </Link>
        </div>
    );
}
