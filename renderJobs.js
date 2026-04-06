const jobContainer = document.querySelector('.job-container'); 

fetch('./data.json') 
  .then(res =>  {
    if (!res.ok) {
      throw new Error('Failed to load job data');
    }
    return res.json()
  }) 
  .then(data => { 
    jobContainer.innerHTML = ''; //removesthe loading text
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