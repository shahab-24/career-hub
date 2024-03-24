

const Job = ({job}) => {
  const {logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Job;