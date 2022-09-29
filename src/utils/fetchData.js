export const exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {

'X-RapidAPI-Key': 'ef99832b87msha17e3316266d83ap175222jsn1649c5e836d0',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    
    }
  };

  export const youtubeOptions = {
    method: 'GET',

    headers: {
      'X-RapidAPI-Key': 'ef99832b87msha17e3316266d83ap175222jsn1649c5e836d0',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async ( url , options ) => {
    const responce = await fetch( url , options );
    const data = responce.json();

    return data;
}
