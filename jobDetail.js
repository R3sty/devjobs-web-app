const params = new URLSearchParams(window.location.search);
const jobId = params.get('id');

const jobCard = document.querySelector('.job-card');
const jobDetail = document.querySelector('.job-detail');
const applyContainer = document.querySelector('.apply-container');

if (jobCard && jobDetail && applyContainer) {
  const renderJob = (job) => {
    jobCard.insertAdjacentHTML('beforeend', 
      `<div class="logo-container" style="background-color: ${job.logoBackground}">
            <img src="${job.logo}" alt="${job.company} logo" />
          </div>
          <div class="detail">
            <section>
              <h2>${job.company}</h2>
              <p>${job.location}</p>
            </section>
            <a href="${job.website}" class="company-btn"
              >Company Site</a
            >
          </div>`
    );

    jobDetail.insertAdjacentHTML('beforeend',
      `<div class="info-container">
            <section class="info">
              <p>${job.postedAt} · ${job.contract}</p>
              <h2>${job.position}</h2>
              <span class="highlight">${job.location}</span>
            </section>
            <a href="${job.apply}" class="apply-btn"
              >Apply Now</a
            >
          </div>

          <section class="description">
            <p>
              ${job.description}
            </p>
          </section>

          <section class="requirements">
            <h3>Requirements</h3>
            <p>
              ${job.requirements.content}
            </p>
            <ul>
              ${job.requirements.items.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </section>

          <section class="role">
            <h3>What You Will Do</h3>
            <p>
              ${job.role.content}
            </p>
            <ol>
              ${job.role.items.map(item => `<li>${item}</li>`).join('')}
            </ol>
          </section>`
    );

    applyContainer.insertAdjacentHTML('beforeend', 
      `<section class="desktop-only">
            <h2>${job.position}</h2>
            <span>${job.contract}</span>
          </section>
          <a href="${job.apply}" class="apply-btn"
            >Apply Now</a
          >`
    )
  }

  fetch('./data.json')
    .then(res => {
      if(!res.ok) {
        throw new Error('Failed to load job detail');
      }
      return res.json()
    })
    .then(data => {
      const job = data.find(j => String(j.id) === jobId);
      if (!job) {
        jobDetail.innerHTML = `
          <p>Job not found</p>
          <a href="index.html">← back to listings</a>
        `;
        return
      }
      renderJob(job)
    })
    .catch(err => {
      console.error('Failed to load job', err);
      jobCard.innerHTML = `
        <p>Failed to load job detail</p>
        <a href="index.html">← back to listings</a>
      `;
    });
}


