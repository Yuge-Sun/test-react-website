import React , { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './main.css'


function Welcome() {
    return (
      <div>
        <h1>Welcome to Yuge's Cinema</h1>
        <p>Movies!</p>
        <b><i>The Lion King</i></b>
        {Poster()}
        {Trailer()}
        {Map()}
        {ListOfFilm()}
        {Table()}
        {Payment()}
        <div>
            {DisplayMovies ()}
        </div>
      </div>
    );
}
function Poster() {
    return (
        <div>
        <a href="https://en.wikipedia.org/wiki/The_Lion_King" target="_blank">
            <img  id="Lion King" src="https://lumiere-a.akamaihd.net/v1/images/image_fc5cb742.jpeg" alt="cat image"/>
        </a>
        </div>
    );
}
function Trailer() {
    return (
        <div>
        <iframe width="1111" height="625" src="https://www.youtube.com/embed/lFzVJEksoDY" title="The Lion King | Original Trailer | Disney+" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
}
function Map() {
    return (
        <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16447.194428527964!2d-4.204573828479503!3d57.48089263270985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488f15aaaaa7e53f%3A0x7356d1dfbc69db8d!2sVue%20Cinema%20Inverness!5e0!3m2!1sen!2suk!4v1667825341142!5m2!1sen!2suk" width="600" height="450"></iframe>
        </div>
    )
}
function ListOfFilm() {
    return (
        <div>
            a list of films
            <ul>
                <li>
                    film_id
                </li>
                <li>
                    title
                </li>
                <li>
                    description
                </li>
            </ul>
        </div>
    );
}
function Table() {
    return (
        <table>
            <tr>
            <td>film_id</td>
            <td>title</td>
            <td>description</td>
            <td>release_year</td>
            <td>language_id</td>
            <td>original_language_id</td>
            <td>rental_duration</td>
            <td>rental_rate</td>
            <td>length</td>
            <td>replacement_cost</td>
            <td>rating</td>
            <td>special_features</td>
            <td>last_update</td>
            </tr>
            
            <tr>
            <td>1</td>
            <td>ACADEMY DINOSAUR</td>
            <td>A Epic Drama of a Feminist And a Mad Scientist who must Battle a Teacher in The Canadian Rockies</td>
            <td>2006</td>
            <td>1</td>
            <td>NULL</td>
            <td>6</td>
            <td>0.99</td>
            <td>86</td>
            <td>20.99</td>
            <td>PG</td>
            <td>Deleted Scenes,Behind the Scenes</td>
            <td>2006-02-15 05:03:42</td>
            </tr>
            
            <tr>
            <td>2</td>
            <td>ACE GOLDFINGER</td>
            <td>A Astounding Epistle of a Database Administrator And a Explorer who must Find a Car in Ancient China</td>
            <td>2006</td>
            <td>1</td>
            <td>NULL</td>
            <td>3</td>
            <td>4.99</td>
            <td>48</td>
            <td>12.99</td>
            <td>G</td>
            <td>Trailers,Deleted Scenes</td>
            <td>2006-02-15 05:03:42</td>
            </tr>
            
            <tr>
            <td>3</td>
            <td>ADAPTATION HOLES</td>
            <td>A Astounding Reflection of a Lumberjack And a Car who must Sink a Lumberjack in A Baloon Factory</td>
            <td>2006</td>
            <td>1</td>
            <td>NULL</td>
            <td>7</td>
            <td>2.99</td>
            <td>50</td>
            <td>18.99</td>
            <td>NC-17</td>
            <td>Trailers,Deleted Scenes</td>
            <td>2006-02-15 05:03:42</td>
            </tr>
            
            <tr>
            <td>4</td>
            <td>AFFAIR PREJUDICE</td>
            <td>A Fanciful Documentary of a Frisbee And a Lumberjack who must Chase a Monkey in A Shark Tank</td>
            <td>2006</td>
            <td>1</td>
            <td>NULL</td>
            <td>5</td>
            <td>2.99</td>
            <td>117</td>
            <td>26.99</td>
            <td>G</td>
            <td>Commentaries,Behind the Scenes</td>
            <td>2006-02-15 05:03:42</td>
            </tr>
            </table>
    );
}
function Payment() {
    return (
        <div>
        <form>
        Select a film <br/>
        <input type="radio" id="1" name="film selection" value="ACADEMY DINOSAUR"/>
        <lable for="1">ACADEMY DINOSAUR</lable><br/>
        <input type="radio" id="1" name="film selection" value="ACE GOLDFINGER"/>
        <lable for="2">ACE GOLDFINGER</lable><br/>
        <input type="radio" id="1" name="film selection" value="ADAPTATION HOLES"/>
        <lable for="3">ADAPTATION HOLES</lable><br/>
        <input type="radio" id="1" name="film selection" value="AFFAIR PREJUDICE"/>
        <lable for="4">AFFAIR PREJUDICE</lable><br/><br/>
        Enter your payment details<br/>
        <label for="cardNum">Card Number:</label><br/>
        <input type="number" id="cardNum" name="card number"/><br/>
        <label for="date">Pick a date and time:</label><br/>
        <input type="datetime-local" id="date" name="Date and Time"/><br/>
        <label for="email">Email:</label><br/>
        <input type="email" id="email" name ="Email address"/><br/>
        <input type="submit" value="Submit"/>
        </form>
        </div>
    )
}

const MovieList = (props) => {
	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='image-container d-flex justify-content-start m-3'>
					<img src={movie.Poster} alt='movie'></img>
				</div>
			))}
		</>
	);
};

function DisplayMovies ()  {
	const [movies, setMovies] = useState([]);
        const getMovieRequest = async () => {
            const url = `http://www.omdbapi.com/?s=star wars&apikey=263d22d8`;
    
            const response = await fetch(url);
            const responseJson = await response.json();
    
            if (responseJson.Search) {
                console.log(response.Search);
                setMovies(responseJson.Search);
            }
        };
    
        useEffect(() => {
            getMovieRequest();
        }, []);
    
	return (
		<div className='container-fluid movie-app'>
			<div className='row'>
				<MovieList movies={movies} />
			</div>
		</div>
	);
};



  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Welcome />);
