import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { contentfulClient } from "../../utils/createContentfulClient";

import Layout from "../Layout";
import Card from "../Card";

function AllPosts() {

    const [ posts, setPosts ] = useState([]);

    // State for the current page
    const [currentPage, setCurrentPage] = useState(1);

    // Items per page
    const itemsPerPage = 5;

    // Calculate the total number of pages
    const totalPages = Math.ceil(posts.length / itemsPerPage);

    // Get items for the current page
    const lastItemIndex = currentPage * itemsPerPage;
    const firstItemIndex = lastItemIndex - itemsPerPage;
    const currentItems = posts.slice(firstItemIndex, lastItemIndex);

    // Function to change the page
    const changePage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const getPosts = async () => {
        try {
            const response = await contentfulClient.getEntries({
                content_type: 'blogPost',
                skip: 0,
                limit: 100,
                order: '-sys.createdAt'
            });

            console.log('getposts', response.items);
            setPosts(response.items);
        } catch (error) {
            console.log('Erro ao obter posts', error);
            setPosts([]);
        }
    }


    useEffect(() => {
        getPosts();
        console.log(totalPages, posts.length, itemsPerPage,currentItems);
    }, []);

    return (
        <Layout>
                <main className="container my-4">
                    <div className="row">
                        <main className="col-md-12">

                            <h2 className="mb-3"> Todos os posts </h2>

                            { currentItems.map( (item) => {   
                                return <Card
                                    key={ item.sys.id }
                                    title={ item.fields.blogPostTitle }
                                    text={ item.fields.blogPostDescription }
                                    link={ '/post/' + item.fields.blogPostSlug }
                                />
                            })}

                            <nav aria-label="Page navigation" className="container d-flex justify-content-center align-items-center">
                                <ul className="pagination">

                                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                        <button className="page-link" onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                                    </li>

                                    {[...Array(totalPages)].map((_, index) => (
                                        <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                            <button className="page-link" onClick={() => changePage(index + 1)}>
                                                {index + 1}
                                            </button>
                                        </li>
                                     ))}

                                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                        <button className="page-link" onClick={() => changePage(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
                                    </li>

                                </ul>
                            </nav>

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