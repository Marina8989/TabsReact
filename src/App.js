import React, {useState, useEffect} from 'react';
import {FaAngleDoubleRight} from 'react-icons/fa';

const url = 'https://course-api.com/react-tabs-project';

function App() {
    const [loading, setLoading] = useState(true);
    const [jobs, setJobs] = useState([]);
    const [value, setValue] = useState(0);

    const fetchJob = async () => {
        const response = await fetch(url);
        const newJobs = await response.json();
        setJobs(newJobs);
        setLoading(false);
    }

    useEffect(() => {
        fetchJob();
    }, [])


    if(loading) {
      return (
          <section className="section loading">
              <h2>Loading...</h2>
          </section>
      )
    }
    const {company, title, dates, duties, id} = jobs[value];
    return (
       <section className="section">
          <h2>Job Experience</h2>
           <div key={id}>
                <h3>{title}</h3>
                <h4>{company}</h4>
                <p>{dates}</p>
                {duties.map((duty, index) => {
                    return(
                        <div key={index}>
                            <FaAngleDoubleRight />
                            <p>{duty}</p>
                        </div>
                    )
                })}
            </div>
       </section>
    )
}

export default App