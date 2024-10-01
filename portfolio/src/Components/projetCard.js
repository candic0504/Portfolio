import './projetCard.css';

export default function Project({titre,description, url}){
    return(
        <div className='container'>
            <div className="card">
                <img src={url}></img>
                <h1>{titre}</h1>
                <p>{description}</p>
            </div>
        </div>
   
    );
}