import React from "react";
import { connect } from "react-redux";

//Since we want List to get a list of articles it’s a matter of 
//connecting state.articleswith the component. How? With mapStateToProps.

const mapStateToProps = state => {
    return { articles: state.articles };
};
 
const ConnectedList = ({ articles }) => (
    <ul className="list-group list-group-flush">
        {articles.map(el => (
            <li className="list-group-item" key={el.id}>
                {el.title}
            </li>
        ))}
    </ul>
);
const List = connect(mapStateToProps)(ConnectedList);
export default List;