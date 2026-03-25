const rendJob = document.querySelector('.job-container');

fetch('./data.json')
  .then(res => res.json()) 
  .then(data => { 
    data.forEach(jobs => { 
      rendJob.insertAdjacentHTML('beforeend',
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