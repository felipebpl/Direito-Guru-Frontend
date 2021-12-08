import React, {useEffect, useState} from 'react';
import './Feed.css';
import axios from 'axios';
import user_img from '../imgs/user_img.png';
import Select from 'react-select'
import DataHandler from '../DataHandler/DataHandler';

function Feed(){
    const [duvida, setduvida] = useState("");
    const [AREA, setarea] = useState(null);
    const [feed, setfeed] = useState([]);

    const options = [
        { value: 'Acadêmico', label: 'Acadêmico' },
        { value: 'Civil', label: 'Civil' },
        { value: 'Ambiental', label: 'Ambiental' },
        { value: 'Empresarial', label: 'Empresarial' },
        { value: 'Tecnologia-da-Informação', label: 'Tecnologia da Informação' },
        { value: 'Direito-Consumidor', label: 'Direito do Consumidor' },
        { value: 'Direito-Contratual', label: 'Direito Contratual' },
        { value: 'Penal', label: 'Penal' },
        { value: 'Trabalhista', label: 'Trabalhista' },
        { value: 'Tributário', label: 'Tributário' },
      ];

    const duvidaChanged = (event) =>{
        setduvida(event.target.value);
    }


    const postar = () => {
        var dateObj = new Date();
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();
        var newdate = day + "/" + month + "/" + year;
        axios
            .post("http://127.0.0.1:8000/api/feed/", {area:AREA.value, duvida:duvida, data:newdate})
            .then((response) => {
                console.log(response);
                setduvida("");
                setarea(null);
            })
            .catch(err => console.error(err));
    }

    const loadData = () => {
        axios
          .get("http://127.0.0.1:8000/api/feed/")
          .then((res) => {
            setfeed(res.data);
            console.log(res.data);
          }
            
          );
      }
    
      useEffect(() => {
        loadData();
      }, []);

      return (

        <div className="container"> 
            <h1 className="title"> Tire sua dúvida sobre qualquer problema júridico </h1>
            <p className="sub-title"> Escolha a área do direito e preencha com sua dúvida. Em breve, um de nossos advogados irá te responder!</p>
            <div className="form"> 
            <div className="form-head">
                <img src={user_img} alt="user img" />
                <div className="form-user">
                    <p className="name">Felipe Lemos</p>   
                    <p className="username">@felipebpl</p>
                </div>              
            </div>
            <div className="fields">
            <p className="form-area">Área</p>
            <Select options={options} value={AREA} onChange={setarea} id="area" placeholder="Selecione a área"/>
            <p className="form-duvida">Dúvida</p>
            <textarea className="form-duvida-txt" type="text" name="duvida" 
            value={duvida}
            onChange={duvidaChanged}
            placeholder="Escreva o que deseja saber sobre qualquer problema jurídico"
            />
            </div>
            <div className="form-btn-container">
                <button className="form-btn" onClick={postar}> POSTAR </button>
            </div>
            </div>

            <h1 className="title">Feed</h1>       
            <div className="feed">
                <div className="feed-container">
                    <div className="feed-head">
                        <img src={user_img} alt="user img" />
                        <div className="form-user">
                            <p className="name">Felipe Lemos</p>   
                            <p className="username">@felipebpl</p>
                        </div>
                    </div>
                    <div className="feed-txt">
                        <p className="feed-area"> Área: {feed[0].area}</p>
                        <p className="duvida">
                        {feed[0].duvida}
                        </p>
                    </div>
                    <div className="icons">
                        <p className="feed-data">{feed[0].data}</p>
                    </div>
                </div>
            </div>
            <div className="feed">
                <div className="feed-container">
                    <div className="feed-head">
                        <img src={user_img} alt="user img" />
                        <div className="form-user">
                            <p className="name">Felipe Lemos</p>   
                            <p className="username">@felipebpl</p>
                        </div>
                    </div>
                    <div className="feed-txt">
                        <p className="feed-area"> Área: {feed[2].area}</p>
                        <p className="duvida">
                        {feed[2].duvida}
                        </p>
                    </div>
                    <div className="icons">
                        <p className="feed-data">{feed[2].data}</p>
                    </div>
                </div>
            </div>
            <div className="feed">
                <div className="feed-container">
                    <div className="feed-head">
                        <img src={user_img} alt="user img" />
                        <div className="form-user">
                            <p className="name">Felipe Lemos</p>   
                            <p className="username">@felipebpl</p>
                        </div>
                    </div>
                    <div className="feed-txt">
                        <p className="feed-area"> Área: {feed[3].area}</p>
                        <p className="duvida">
                        {feed[3].duvida}
                        </p>
                    </div>
                    <div className="icons">
                        <p className="feed-data">{feed[3].data}</p>
                    </div>
                </div>
            </div>
            <div className="feed">
                <div className="feed-container">
                    <div className="feed-head">
                        <img src={user_img} alt="user img" />
                        <div className="form-user">
                            <p className="name">Felipe Lemos</p>   
                            <p className="username">@felipebpl</p>
                        </div>
                    </div>
                    <div className="feed-txt">
                        <p className="feed-area"> Área: {feed[4].area}</p>
                        <p className="duvida">
                        {feed[4].duvida}
                        </p>
                    </div>
                    <div className="icons">
                        <p className="feed-data">{feed[4].data}</p>
                    </div>
                </div>
            </div>
            {/* <DataHandler
              feed={feed}
            /> */}

        </div>

        

        );

}


export default Feed;