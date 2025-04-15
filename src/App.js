import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Hey, welcome to our team!</h1>
        <p>We are Karthik, Bhavana, Shivani, Manasa, and Hemanth.</p>
        <p>This is our team project for Continuous Delivery and DevOps.</p>
      </header>

      <main className="main">
        <section>
          <h2>About Our Project</h2>
          <p>
            Automated Deployment of Static Portfolio Website Using GitHub Actions.<br />
            This project involves creating a personal portfolio using HTML/CSS and 
            setting up a GitHub Actions workflow for automated deployment to GitHub Pages. 
            Every push to the main branch triggers the build and deploy job, ensuring the 
            latest version is always live.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>Feel free to reach out to any of our team members:</p>
          <ul className="contact-list">
            <li><strong>Karthik:</strong> <a href="mailto:2200030209@kluniversity.in">2200030209@kluniversity.in</a></li>
            <li><strong>Bhavana:</strong> <a href="mailto:2200031128@kluniversity.in">2200031128@kluniversity.in</a></li>
            <li><strong>Shivani:</strong> <a href="mailto:2200031760@kluniversity.in">2200031760@kluniversity.in</a></li>
            <li><strong>Manasa:</strong> <a href="mailto:2200030289@kluniversity.in">2200030289@kluniversity.in</a></li>
            <li><strong>Hemanth:</strong> <a href="mailto:2200030301@kluniversity.in">2200030301@kluniversity.in</a></li>
          </ul>
        </section>

        <section>
          <h2>Team Members</h2>
          <div className="card-container">
            {["Karthik", "Bhavana", "Shivani", "Manasa", "Hemanth"].map((member, index) => (
              <div key={index} className="card">{member}</div>
            ))}
          </div>
        </section>

        <section>
          <h2>Technologies Used</h2>
          <div className="card-container">
            <div className="card">React</div>
            <div className="card">HTML/CSS/JS</div>
            <div className="card">Git & GitHub</div>
            <div className="card">GitHub Actions</div>
          </div>
        </section>

        <section>
          <h2>Our Another Projects</h2>
          <div className="card-container">
            <div className="card">
              <h3>BMI / Lifestyle Management</h3>
              <a href="https://github.com/bhavana050604/bmi" target="_blank" rel="noreferrer">View Project</a>
            </div>
            <div className="card">
              <h3>Domestic Violence Awareness</h3>
              <a href="https://github.com/ManasaReddy-2409/DOMESTICVIOLENCEPROJECT" target="_blank" rel="noreferrer">View Project</a>
            </div>
          </div>
        </section>

        <section>
          <h2>Team Resumes</h2>
          <div className="card-container">
            <div className="card">
              <h3>Karthik</h3>
              <a href={`${process.env.PUBLIC_URL}/resumes/karthik.pdf`} target="_blank" rel="noreferrer">View Resume</a>
            </div>
            <div className="card">
              <h3>Bhavana</h3>
              <a href={`${process.env.PUBLIC_URL}/resumes/bhavana.pdf`} target="_blank" rel="noreferrer">View Resume</a>
            </div>
            <div className="card">
              <h3>Shivani</h3>
              <a href={`${process.env.PUBLIC_URL}/resumes/shivani.pdf`} target="_blank" rel="noreferrer">View Resume</a>
            </div>
            <div className="card">
              <h3>Manasa</h3>
              <a href={`${process.env.PUBLIC_URL}/resumes/manasa.pdf`} target="_blank" rel="noreferrer">View Resume</a>
            </div>
            <div className="card">
              <h3>Hemanth</h3>
              <a href={`${process.env.PUBLIC_URL}/resumes/hemanth.pdf`} target="_blank" rel="noreferrer">View Resume</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
