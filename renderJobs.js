const rendJob = document.querySelector('.job-container'); 

fetch('./data.json') // request or grab a file called data.json
  .then(res => res.json()) // converts the response(res) which is the file i fetched into a usable Javascript data
  .then(data => { // data is now a JS object/array created from json files
    data.forEach(jobs => { // loop throught tehe array/object one item at a time. For each objects call it jobs and run this function. jobs = one single job objects. 
      rendJob.insertAdjacentHTML('beforeend', // evvery time the loop runs it creates a job card and insert it in rendJob which is the job-contaiener. with beforeend we add each new job inside the element at the end of its last child
        ` <div class="job-card">
          <div class="logo-container" style="background-color: ${jobs.logoBackground};">
            <img
              src="${jobs.logo}"
            />
          </div>
          <section class="job-info">
            <p>${jobs.postedAt} · ${jobs.contract}</p>
            <h3>${jobs.position}</h3>
            <p class="comp-name">${jobs.company}</p>
            <span class="highlight">${jobs.location}</span>
          </section>
        </div>`
      );
    });
  });