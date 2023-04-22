import React, {useState} from "react";
import '../css/css/style.css';
import Button from '../composants/button';
import ReactPaginate from 'react-paginate';

export default function Games() {

    const  files = [];
    const context = require.context('../database/Games', false, /\.json$/); //merci ChatGPT

    context.keys().forEach((fileName) => {
        files.push(context(fileName));
    })

    const perPage = 3;
    const [currentPage, setCurrentPage] = useState(0);

    const startIndex = currentPage * perPage;
    const endIndex = startIndex + perPage;
    const displayedGames = files.slice(startIndex, endIndex);

    const pageCount = Math.ceil(files.length / perPage);


    return (
            <>
                <ReactPaginate
                pageCount={pageCount}
                onPageChange={({selected})=> setCurrentPage(selected)}
                pageClassName={"container__text"}
                containerClassName={"container"}
                activeLinkClassName={"container__text container__text--active"}
                disabledLinkClassName={"container__text container__text--disabled"}
                previousLabel={"<"}
                previousClassName={"container__text"}
                nextLabel={">"}
                nextClassName={"container__text"}/>
                {displayedGames.map((data, index) => {
                    return <Button key={index} URL={data.URL} strings={data.name}/>
                })}
            </>
    )
}