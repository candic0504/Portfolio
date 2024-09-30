
export function Button({titre,url}){
    return(
        <div>
            <a href={url} target="_blank">
                <button>{titre}</button>
            </a>
        </div>
    );
}