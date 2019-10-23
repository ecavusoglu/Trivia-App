import HttpService from './HttpService';

export default class QuestionService {

    static baseURL() {return "https://opentdb.com/api.php?amount=10" }

    static getQuestions(){
        return new Promise((resolve, reject) => {
            HttpService.get(this.baseURL(), function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static getFilteredQuestions(category){
        return new Promise((resolve, reject) => {
            HttpService.get(`${QuestionService.baseURL()}&category=${category}`, function(data) {
                if(data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                }
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }
}
