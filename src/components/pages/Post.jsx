import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

import Layout from "../Layout";
import { contentfulClient } from "../../utils/createContentfulClient";

function Post() {

    const { slug } = useParams();
    const [ post, setPost ] = useState(null);

    const getPost = async () => {
        try {
            const response = await contentfulClient.getEntries({
                content_type: 'blogPost',
                'fields.blogPostSlug': slug,
            });

            console.log(response);
            setPost(response.items[0] || null);
        } catch (error) {
            console.log('Erro ao carregar itens do blogPost', error)
            setPost(null);
        }
    }

    useEffect( () => {
        getPost();
    }, [] );

    return (
        <Layout>
            <main className="container my-4">
                <div className="row">
                    <div className="col">
                        { !post && <div> Carregando... </div> }

                        {post && (
                            <>
                                <h1> { post.fields.blogPostTitle } </h1>
                                    <div 
                                        dangerouslySetInnerHTML={{ __html: documentToHtmlString( post.fields.blogPostContent )}}
                                    />
                                    
                                    <Link to="/" className="btn btn-primary mt-4">
                                        Voltar para a home
                                    </Link >
                            </>
                        )}
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Post;