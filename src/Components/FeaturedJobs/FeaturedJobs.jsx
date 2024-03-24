import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch('jobs.json')
    .then(res => res.json())
    .then(data => setJobs(data));
  },[])
  return (
    <div>
      <h3 className="text-5xl text-center">Featured Jobs {jobs.length}</h3>
      <div className="grid grid-cols-2 gap-20">
      {
        jobs.map(job => <Job key={job.id} job={job}></Job>  )
      }
      </div>
    </div>
  );
};

export default FeaturedJobs;