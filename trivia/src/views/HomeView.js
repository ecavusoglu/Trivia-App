import React from 'react';

import { Dropdown } from 'react-bootstrap';

import QuestionService from '../services/QuestionService';
import CategoryService from '../services/CategoryService';

import Header from '../components/Header'
import QuestionList from '../components/QuestionList'
import CategoryList from '../components/CategoryList'

export class HomeView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            questions: [],
            filteredQuestions: [],
            category: '',
            categories: [],
            dropdownTitle: 'Select a category',
        };
    }

    componentDidMount(){
        this.setState({
            loading: true
        });

        QuestionService.getQuestions().then((data) => {
            this.setState({
                questions: data.results,
                loading: false,
            });
        }).catch((e) => {
            console.error(e);
        });

        CategoryService.getCategories().then((data) => {
            this.setState({
                categories: data.trivia_categories,
                loading: false,
            });
        }).catch((e) => {
            console.error(e);
        });


    }

    onSelected(category) {
        QuestionService.getFilteredQuestions(category).then((data) => {
            this.setState({
                filteredQuestions: data.results,
                loading: false,
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
              <Dropdown onSelect={selectedKey => this.onSelected(`${selectedKey}`)} className='d-flex justify-content-center mt-5'>
                  <Dropdown.Toggle variant="info" id="dropdown-basic">
                      {this.state.dropdownTitle}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {this.state.categories.map((e, key) => {
                        return <Dropdown.Item eventKey={e.id}>{e.name}</Dropdown.Item>
                    })}
                  </Dropdown.Menu>
              </Dropdown>
              <div className="mt-5">
                <QuestionList questions={this.state.filteredQuestions} category_id={this.state.category}/>
              </div>
            </div>
        );
    }
};
