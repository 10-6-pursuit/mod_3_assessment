

export default function Navbar() {
    return (
        <nav className='navbar'>
            <section className='navbar-main-section'>
                <h1 className='title'>Animania</h1>
            </section>
            <section className='navbar-sub-section'>
                <p>Anime</p>
                <p>Cartoons</p>
                <p>random</p>
            </section>
        </nav>
    )
}

/*
<nav className='navbar'>
    <section className='navbar-main-section'>
        <h1 className='title'>Animania</h1>
    </section>
    <section className='navbar-sub-section'>
        <ul className='nav-links'>
            <li><a href="#anime">Anime</a></li>
            <li><a href="#cartoons">Cartoons</a></li>
            <li><a href="#random">Random</a></li>
        </ul>
    </section>
</nav>




import { Link } from 'react-router-dom';

<nav className='navbar'>
    <section className='navbar-main-section'>
        <h1 className='title'>Animania</h1>
    </section>
    <section className='navbar-sub-section'>
        <ul className='nav-links'>
            <li><Link to="/anime">Anime</Link></li>
            <li><Link to="/cartoons">Cartoons</Link></li>
            <li><Link to="/random">Random</Link></li>
        </ul>
    </section>
</nav>


*/