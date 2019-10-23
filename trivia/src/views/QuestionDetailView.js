import React from 'react';
import Header from '../components/Header'
import QuestionService from '../services/QuestionService';
import Question from '../components/Question';
import QuestionList from '../components/QuestionList';
import QuestionDetail from '../components/QuestionDetail';

export class QuestionDetailView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            questions: [],
            order: '',
            category: ''
        };
    }

    componentDidMount(props){
        this.setState({
            loading: true,

        });
        let id = this.props.match.params.id;
        let category = this.props.match.params.category;

        QuestionService.getFilteredQuestions(category).then((data) => {
            this.setState({
                questions: data.results,
                loading: false,
                order: id,
                category: category
            });
        }).catch((e) => {
            console.error(e);
        });
    }

    render() {
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }
        return (
            <div>
              <Header />
              <QuestionDetail questions={this.state.questions} category_id={this.state.category} order={this.state.order}/>


            </div>
        );
    }
};
