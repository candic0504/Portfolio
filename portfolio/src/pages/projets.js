import Project from "../Components/projetCard";


export default function Projets(){

    const imageC = `${process.env.PUBLIC_URL}/cluedo.png`;
    const imageP = `${process.env.PUBLIC_URL}/portfolio.png`;
    const imageA = `${process.env.PUBLIC_URL}/comics.png`;
    const imageD = `${process.env.PUBLIC_URL}/dashboard.png`;

    return(
        
        <div className="projet-liste">
            <Project titre="Portfolio" description="Designed and developed a ReactJS portfolio with day/night theme and 2D animations. " url={imageP}></Project>
            <Project titre="Comics Application" description="Application that lists a range of films, series and comics and shows all their informations  by using ComicVine API and Dart." url={imageA}></Project>
            <Project titre="Dashboard P.E.IoT" description="Dashboard displaying various statistics and data from a company specialising in IoT using custom widgets, APIs, database (MongoDB) and the React framework." url={imageD}></Project>
            <Project titre="Cluedo Game" description="A computer version of Cluedo, immersing players in the magical world of Harry Potter. This ambitious project is not only a reinvention of the classic game in C++, but also serves as a practical application ground for the advanced use of object-oriented programming concepts, in particular classes and abstract classes." url={imageC}></Project>
        </div>
    );
}