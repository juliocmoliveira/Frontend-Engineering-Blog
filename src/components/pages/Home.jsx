import { Link } from "react-router-dom";

import Card from "../Card";
import Layout from "../Layout";
import { useEffect, useState } from "react";
import { contentfulClient } from "../../utils/createContentfulClient";

function Home() {

    const [ categories, setCategories ] = useState([]);
    const [ posts, setPosts ] = useState([]);
    
    const getCategories = async () => {
        try {
            const response = await contentfulClient.getEntries({
                content_type: 'fiap'
            });
            
            setCategories(response.items);
        } catch (error) {
            console.log('Erro ao obter categorias', error);
            setCategories([]);
        }
    };

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
        getCategories();
        getPosts();
    }, []);

    return (
        <Layout>
            <main className="container my-4">
                <div className="row">
                    <main className="col-md-8">

                        <h2 className="mb-3">Últimos posts!</h2>

                        { posts.map( (item) => {   
                            return <Card
                                key={ item.sys.id }
                                title={ item.fields.blogPostTitle }
                                text={ item.fields.blogPostDescription }
                                link={ '/post/' + item.fields.blogPostSlug }
                            />
                        })}

                        <Link to="/post/algumacoisa" className="btn btn-dark mt-4"> Ver todos os posts </Link>

                    </main>

                    <aside className="col-md-4">
                        <h2>
                            Categorias
                        </h2>
                        <ul>
                            { categories.map( (item) => <li key={item.sys.id}> { item.fields.blogCategoryTitle } </li> )}
                        </ul>
                    </aside>

                </div>
            </main>
        </Layout>
    );
}

export default Home;