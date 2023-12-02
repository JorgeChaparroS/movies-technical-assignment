import { Movie } from "../model/movie";

export class Constants {
    static MOVIES: Movie[] = [
        {
            id: 1,
            title: 'Tenet',
            description: 'Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.', 
            raiting: 7.8,
            duration: '2h 30 min',
            genre: 'Action, Sci-Fi',
            releaseDate: new Date('2020/09/03'),
            trailerLink: 'https://www.youtube.com/watch?v=LdOM0x0XDMo',
            imageSrc: '../../../assets/images/movies/Tenet.png'
        },
        {
            id: 2,
            title: 'Spider-Man: Into the Spider-Verse',
            description: 'Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.', 
            raiting: 8.4,
            duration: '1h 57min',
            genre: 'Action, Animation, Adventure',
            releaseDate: new Date('2018/12/14'),
            trailerLink: 'https://www.youtube.com/watch?v=tg52up16eq0',
            imageSrc: '../../../assets/images/movies/SpiderMan.png'
        },
        {
            id: 3,
            title: 'Knives Out',
            description: 'A detective investigates the death of a patriarch of an eccentric, combative family.', 
            raiting: 7.9,
            duration: '2h 10min',
            genre: 'Comedy, Crime, Drama',
            releaseDate: new Date('2019/11/27'),
            trailerLink: 'https://www.youtube.com/watch?v=qGqiHJTsRkQ',
            imageSrc: '../../../assets/images/movies/KnivesOut.png'
        },
        {
            id: 4,
            title: 'Guardians of the Galaxy',
            description: 'A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.', 
            raiting: 8.0,
            duration: '2h 1min',
            genre: 'Action, Adventure, Comedy',
            releaseDate: new Date('2014/08/01'),
            trailerLink: 'https://www.youtube.com/watch?v=d96cjJhvlMA',
            imageSrc: '../../../assets/images/movies/GuardiansOfTheGalaxy.png'
        },
        {
            id: 5,
            title: 'Avengers: Age of Ultron',
            description: "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.", 
            raiting: 7.3,
            duration: '2h 21min',
            genre: 'Action, Adventure, Sci-Fi',
            releaseDate: new Date('2015/05/01'),
            trailerLink: 'https://www.youtube.com/watch?v=tmeOjFno6Do',
            imageSrc: '../../../assets/images/movies/Avengers.png'
        }
    ];
}