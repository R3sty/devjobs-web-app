const params = new URLSearchParams(window.location.search);// URLSearchParams is a built in browser tool that parses it. window.location.search grabs the ?id=1 part of the url
const jobId = params.get('id');//puls the value of the id

const renderJob = (job) => {
  document.querySelector('.job-card').insertAdjacentHTML('beforeend', 
    `<div class="logo-container" style="background-color: ${job.logoBackground}">
          <img src="${job.logo}" alt="scoot logo" />
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

  document.querySelector('.job-detail').insertAdjacentHTML('beforeend',
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

  document.querySelector('.apply-container').insertAdjacentHTML('beforeend', 
    `<section class="desktop-only">
          <h2>${job.position}</h2>
          <span>${job.contract}</span>
        </section>
        <a href="${job.website}" class="apply-btn"
          >Apply Now</a
        >`
  ) //.map().join('') — .map() loops through the items array and wraps each one in a <li>, then .join('') stitches all those strings together into one string so it can be injected as HTML.
}

fetch('./data.json')
  .then(res => {
    if(!res.ok) {
      throw new Error('Failed to load job detail');
    }
    return res.json()
  })
  .then(data => {
    const job = data.find(j => String(j.id) === jobId);//data.find() is a built in array method that finds the first element that matches the condition. String(j.id) === jobId converts the id to a string for comparison, since URL parameters are strings.
    if (!job) {
      document.querySelector('.job-detail').innerHTML = `
        <p>Job not found</p>
        <a href="index.html">← back to listings</a>
      `;
      return;
    }
    renderJob(job)
  })
  .catch(err => {
    console.error('Failed to load job', err);
  });