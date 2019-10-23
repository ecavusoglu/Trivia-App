import HttpService from './HttpService';

export default class CategoryService {

    static baseURL() {return "https://opentdb.com/api_category.php" }

    static getCategories(){
      console.log('urls ', CategoryService.baseURL())
        return new Promise((resolve, reject) => {
            HttpService.get(this.baseURL(), function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }
}
