export default class HttpService {

    static apiURL() {return "https://opentdb.com"; }

    static get(url, onSuccess, onError) {
        let token = window.localStorage['jwtToken'];
        let header = new Headers();
        if(token) {
            header.append('Authorization', `JWT ${token}`);
        }

        fetch(url, {
            method: 'GET',
            headers: header
        }).then((resp) => {
            return resp.json();
        }).then((resp) => {
            if(resp.error) {
                onError(resp.error);
            }
            else {
              onSuccess(resp);
            }
        }).catch((e) => {
            onError(e.message);
        });
    }
}
