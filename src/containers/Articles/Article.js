import { connect } from 'react-redux';

import Article from '../../components/Articles/Article';

const mapStateToProps = ( state, {id}  ) => {
    return {
        article: state.articles[id]
    }
};

const enhancer = connect(mapStateToProps);
export default enhancer(Article);