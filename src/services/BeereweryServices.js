import axios from 'axios';

let API_endpoint = process.env.REACT_APP_BREWERYDB_API;
let key = process.env.REACT_APP_BREWERYDB_KEY;
let beerFormat = process.env.REACT_APP_BEER_FORMAT;
let breweryFormat = process.env.REACT_APP_BREWERY_FORMAT;
let breweryDetailFormat = process.env.REACT_APP_BREWERYDETAIL_FORMAT;
let beerDetailFormat = process.env.REACT_APP_BEERDETAIL_FORMAT;

export default class BeereweryServices{

    static searchBeer(query, pageNo){
        let url = API_endpoint + 'search?q=' + query + '&key=' + key + "&format=" + beerFormat + pageNo;
         return axios.get(url).then((res) => res.data)
    }

    static searchBrewery(query, pageNo){
        let url = API_endpoint + 'search?q=' + query + '&key=' + key + "&format=" + breweryFormat + pageNo;
        return axios.get(url).then((res) => res.data)
    }


    static getBeer(beerId){

        let url = API_endpoint + 'beer/' + beerId +'?key=' + key + beerDetailFormat;
        return axios.get(url).then((res) => res.data)
    }

    static getBrewery(breweryId){
        let url = API_endpoint + 'brewery/' + breweryId +'?key=' + key + breweryDetailFormat;
        return axios.get(url).then((res) => res.data)
    }
}
