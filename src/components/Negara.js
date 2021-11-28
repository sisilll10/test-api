import React, {useState, useEffect} from 'react';
import NegaraItem from './NegaraItem';

const Negara = () => {
    const [negara, setNegara] = useState([]);
    const [text, setText] = useState('');

    useEffect(() => {
        fetch('https://covid-193.p.rapidapi.com/statistics?rapidapi-key=3559068132mshd05d84db7426d55p1b2bc8jsn3d61197189be')
        .then(response => response.json())
        .then(data => setNegara(data.response.country));
    }, []
    );
    //console.log(negara);

    fetch(`https://covid-193.p.rapidapi.com/statistics?rapidapi-key=3559068132mshd05d84db7426d55p1b2bc8jsn3d61197189be`)
        .then(response => response.json())
        .then(data => setNegara(data.response.country));

        setText('');

    const handleSubmit = (e) => {
        e.preventDefault();

        var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://covid-193.p.rapidapi.com/statistics',
  headers: {
    'x-rapidapi-host': 'covid-193.p.rapidapi.com',
    'x-rapidapi-key': '3559068132mshd05d84db7426d55p1b2bc8jsn3d61197189be'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});


        setText('');
    }

    const handleChange =(e) => {setText(e.target.value)};

    return(
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <h2>Search Negara</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" className="form-control" onChange={handleChange} value={text} />

                </form>

                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center my-3">
                    { negara.map(negara =><NegaraItem key={negara.list_data} negara={negara} />) }


                </div>
            </div>
        </section>
    );
}

export default Negara;