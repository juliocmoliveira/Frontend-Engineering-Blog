import Layout from "../Layout";

function Post() {
    return (
        <Layout>
            <main className="container my-4">
                <div className="row">
                    <div className="col">
                        <h1>Título do Post</h1>
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel necessitatibus dolore facilis id molestiae optio aut in, cupiditate reprehenderit nihil ipsum quidem inventore nam commodi totam obcaecati incidunt, error blanditiis.
                        </div>

                        <a href="#" className="btn btn-primary mt-4">
                            Voltar para a home
                        </a>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Post;