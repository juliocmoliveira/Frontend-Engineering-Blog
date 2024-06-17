import { Link } from "react-router-dom";

import Card from "../Card";
import Layout from "../Layout";

function Home() {
    return (
        <Layout>
            <main className="container my-4">
                <div className="row">
                    <main className="col-md-8">

                        <h2 className="mb-3">Últimos posts!</h2>

                        <Card
                            title={ "Post 1" }
                            text={ "Texto do post 1" }
                        />

                        <Link to="/post/algumacoisa" className="btn btn-dark mt-4"> Ver todos os posts </Link>

                    </main>

                    <aside className="col-md-4">
                        <h2>
                            Categorias
                        </h2>
                        <ul>
                            <li>
                                Geral
                            </li>
                            <li>
                                Frameworks
                            </li>
                        </ul>
                    </aside>

                </div>
            </main>
        </Layout>
    );
}

export default Home;