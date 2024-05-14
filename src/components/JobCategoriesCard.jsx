import { Link } from 'react-router-dom';

const JobCategoriesCard = ({ jobs }) => {
  const {
    _id,
    Job_Title,
    Job_Posting_Date,
    Application_Deadline,
    min_salary,
    max_salary,
    Category,
    Job_Applicants_Number,
    Name,
  } = jobs;
  return (
    <div className='w-96 max-w-sm px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800'>
      <div className='flex items-center justify-between'>
        <span className='text-sm font-bold text-gray-800 dark:text-gray-400'>
          Application_Deadline :{Application_Deadline}
        </span>
        <span className='px-3 py-1 text-xs text-blue-800 uppercase bg-green-200 rounded-full dark:bg-blue-300 dark:text-blue-900'>
          {Category}
        </span>
      </div>
      <div>
        <h1 className='mt-2 text-lg font-semibold text-gray-800 dark:text-white'>
          {Job_Title}
        </h1>
        <p className='mt-2 text-sm text-gray-600 dark:text-gray-300'>{Name}</p>
      </div>
      Posting date:{Job_Posting_Date}
      <div>
        <div className=' mt-2 text-gray-700 dark:text-gray-200'>
          <div>
            Salary:{min_salary} to {max_salary}
          </div>
          <div> Applicants no:{Job_Applicants_Number}</div>
        </div>

        <div className='flex items-center justify-center mt-4'>
          <Link to={`/job/${_id}`} className='btn'>
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};
export default JobCategoriesCard;
