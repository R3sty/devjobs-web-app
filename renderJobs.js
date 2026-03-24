const rendJob = document.querySelector('.job-container');

fetch('./data.json') // request or grab a file called data.json
  .then(res => res.json()) // converts the response(res) which is the file you fetched into a usable Javascript data
  .then(data => { // data is now a JS object/array created from json files
    data.forEach(post => { // loop throught tehe array/object one item at a time. For each object call it post and run this function. post = one single jopb object. 
      rendJob.insertAdjacentHTML('beforeend', // evvery time the loop runs it creates a job card and insert it in rendJob which is the job-contaiener. with beforeend we add each new job inside the element at the end of its last child
        ` <div class="job-card">
          <div class="logo-container" style="background-color: ${post.logoBackground};">
            <img
              src="${post.logo}"
            />
          </div>
          <section class="job-info">
            <p>${post.postedAt} · ${post.contract}</p>
            <h3>${post.position}</h3>
            <p class="comp-name">${post.company}</p>
            <span class="highlight">${post.location}</span>
          </section>
        </div>`
      );
    });
  });