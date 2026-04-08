let jobs = [];
const jobContainer = document.querySelector('.job-container'); 

fetch('./data.json') 
  .then(res =>  {
    if (!res.ok) {
      throw new Error('Failed to load job data');
    }
    return res.json()
  }) 
  .then(data => { 
    jobContainer.innerHTML = '';
    jobs = data;
    data.forEach(job => { 
      jobContainer.insertAdjacentHTML('beforeend', 
        ` <div class="job-card">
          <div class="logo-container" style="background-color: ${job.logoBackground};">
            <img
              src="${job.logo}"
            />
          </div>
          <section class="job-info">
            <p>${job.postedAt} · ${job.contract}</p>
            <h3>${job.position}</h3>
            <p class="comp-name">${job.company}</p>
            <span class="highlight">${job.location}</span>
          </section>
        </div>`
      );
    });
  })
  .catch(err => {
    console.error('load jobs failed', err);
  });

  //Note: This app needs to run from http://localhost, not by double-clicking the file.

  //When you open an HTML file directly, the browser treats it as a local file. Browsers block fetch requests from local files for security reasons.

  //Running the app on http:// allows fetch to work properly. You can use a simple local server like Live Server in VS Code or Python's built-in HTTP server to serve your files.



//Job title filtering
const titleInput = document.querySelector('.search-input'); 
const locationInput = document.querySelector('.location-input');
const fullTimeCheckBox = document.querySelector('#full-time');

const filterJobs = () => { 
  const titleValue = titleInput.value.toLowerCase(); 
  const locationValue = locationInput.value.toLowerCase();
  const isFullTime = fullTimeCheckBox.checked;

  const filteredJobs = jobs.filter(job => {
    return (
      job.position.toLowerCase().includes(titleValue) &&
      job.location.toLowerCase().includes(locationValue) &&
      (!isFullTime || job.contract.toLowerCase() === "full time")
    );
  });
  jobContainer.innerHTML = ''; 
  if (filteredJobs.length === 0) {
    jobContainer.innerHTML = '<div class="empty-wrapper"><p>No jobs found</p></div>';
    return;
  }

  filteredJobs.forEach(job => {
    jobContainer.insertAdjacentHTML('beforeend',
      ` <div class="job-card">
          <div class="logo-container" style="background-color: ${job.logoBackground};">
            <img
              src="${job.logo}"
            />
          </div>
          <section class="job-info">
            <p>${job.postedAt} · ${job.contract}</p>
            <h3>${job.position}</h3>
            <p class="comp-name">${job.company}</p>
            <span class="highlight">${job.location}</span>
          </section>
        </div>`
    );
  });
}

titleInput.addEventListener('input', filterJobs);
locationInput.addEventListener('input', filterJobs);
fullTimeCheckBox.addEventListener('change', filterJobs);