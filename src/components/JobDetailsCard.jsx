const JobDetailsCard = ({ jobDetails }) => {
  const {
    Name,
    Job_Title,
    Posting_Date,
    Deadline,
    min_salary,
    max_salary,
    Job_Applicants_Number,
  } = jobDetails;
  return (
    <div>
      <div className='max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800'>
        <div className='flex items-center justify-between'>
          <span className='text-sm font-light text-gray-600 dark:text-gray-400'>
            Mar 10, 2019
          </span>
          <a
            className='px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500'
            tabIndex='0'
            role='button'
          >
            Design
          </a>
        </div>

        <div className='mt-2'>
          <a
            href='#'
            className='text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline'
            tabIndex='0'
            role='link'
          >
            Accessibility tools for designers and developers
          </a>
          <p className='mt-2 text-gray-600 dark:text-gray-300'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
            enim reprehenderit nisi, accusamus delectus nihil quis facere in
            modi ratione libero!
          </p>
        </div>

        <div className='flex items-center justify-between mt-4'>
          <a
            href='#'
            className='text-blue-600 dark:text-blue-400 hover:underline'
            tabIndex='0'
            role='link'
          >
            Read more
          </a>

          <div className='flex items-center'>
            <a
              className='font-bold text-gray-700 cursor-pointer dark:text-gray-200'
              tabIndex='0'
              role='link'
            >
              Khatab wedaa
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default JobDetailsCard;
