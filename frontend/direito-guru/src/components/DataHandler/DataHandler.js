import { useParams, useHistory } from 'react-router-dom';
import {useState, useEffect} from "react";
import axios from "axios";
import "./DataHandler.css";
import user_img from '../imgs/user_img.png';

export default function DataHandler(props) {

  const feed = props.feed;
  const listFeed = feed.map((area,duvida,data) =>{
    <li>{area} {duvida} {data}</li>  }
  );

  return (
    <>
    <ul>{listFeed}</ul>
      
          {/* <input
          className="form-card-title"
          type="text"
          name="titulo"
          placeholder="Título"
          value={areafeed}
          onChange={areaChanged}
          />

          <textarea
          className="autoresize"
          name="detalhes"
          placeholder="Digite o conteúdo..."
          onChange={contentChanged}
          value={duvidafeed}
          ></textarea> */}


          {/* <div className="feed">
                <div className="feed-container">
                    <div className="feed-head">
                        <img src={user_img} alt="user img" />
                        <div className="form-user">
                            <p className="name">Felipe Lemos</p>   
                            <p className="username">@felipebpl</p>
                        </div>
                    </div>
                    <div className="feed-txt">
                        <p className="feed-area"> Área: {areafeed}</p>
                        <p className="duvida">
                        {duvidafeed}
                        </p>
                    </div>
                    <div className="icons">
                        <p className="feed-data">{datafeed}</p>
                    </div>
                </div>
            </div> */}
      </>
  );
}