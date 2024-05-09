import './home.css';

const Home = () => {
    return (
        <div className="main-container">
            <div className="left-side">
                <div style={{height: "300px", textAlign: "left"}}>
                    <h1>Joseph M. Ingenito</h1>
                    <h3>Senior Full-Stack Developer</h3>
                    <span style={{color: "grey"}}>I build .NET and React applications, specializing in Data Science principles.</span>
                </div>
            </div>
            <div className="right-side">
                Right Side Content<br />
            </div>
        </div>
    );
}

export default Home;