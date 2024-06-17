import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { contentfulClient } from "../../utils/createContentfulClient";

import Layout from "../Layout";
import Card from "../Card";

function AllPosts() {

    const [ posts, setPosts ] = useState([]);

    const getPosts = async () => {
        try {
            const response = await contentfulClient.getEntries({
                content_type: 'blogPost',
                limit: 5,
                order: '-sys.createdAt'
            });

            console.log(response.items);
            setPosts(response.items);
        } catch (error) {
            console.log('Erro ao obter posts', error);
            setPosts([]);
        }
    }


    useEffect(() => {
        getPosts();
    }, []);

    return (
        <Layout>
                <main className="container my-4">
                    <div className="row">
                        <main className="col-md-12">

                            <h2 className="mb-3"> Todos os posts </h2>

                            { posts.map( (item) => {   
                                return <Card
                                    key={ item.sys.id }
                                    title={ item.fields.blogPostTitle }
                                    text={ item.fields.blogPostDescription }
                                    link={ '/post/' + item.fields.blogPostSlug }
                                />
                            })}

                            <Link to="/" className="btn btn-primary mt-4">
                                Voltar para a home
                            </Link >

                        </main>

                    </div>
                </main>
            </Layout>
    )
}

export default AllPosts;