import React from 'react'

const DashboardCards = () => {
  return (
  <>
  <div className='grid grid-cols-1 lg:grid-cols-4 gap-10 mx-10'>
  <div class="card-wrap">
  <div class="card-header one">
    <i class="fas fa-code">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-16">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
</svg>

    </i>
  </div>
  <div class="card-content">
    <h1 class="card-title">Title</h1>
    <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore recusandae libero at optio. Saepe cum veritatis, eos cupiditate, consequatur ea illo, iste dolor fugiat eum officia blanditiis ratione molestias ex.</p>
    <button class="card-btn one">code</button>
  </div>
</div>
<div class="card-wrap">
  <div class="card-header two">
    <i class="fab fa-css3-alt">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-16">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75v16.5M2.25 12h19.5M6.375 17.25a4.875 4.875 0 0 0 4.875-4.875V12m6.375 5.25a4.875 4.875 0 0 1-4.875-4.875V12m-9 8.25h16.5a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5H3.75a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 1.5 1.5Zm12.621-9.44c-1.409 1.41-4.242 1.061-4.242 1.061s-.349-2.833 1.06-4.242a2.25 2.25 0 0 1 3.182 3.182ZM10.773 7.63c1.409 1.409 1.06 4.242 1.06 4.242S9 12.22 7.592 10.811a2.25 2.25 0 1 1 3.182-3.182Z" />
</svg>
 
    </i>
  </div>
  <div class="card-content">
    <h1 class="card-title">Title</h1>
    <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    <button class="card-btn two">css3</button>
  </div>
</div>
<div class="card-wrap">
  <div class="card-header three">
    <i class="fab fa-html5">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-16">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
</svg>
    </i>
  </div>
  <div class="card-content">
    <h1 class="card-title">Title</h1>
    <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    <button class="card-btn three">html5</button>
  </div>
</div>
<div class="card-wrap">
  <div class="card-header four">
    <i class="fab fa-js-square">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-16">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
</svg>
    </i>
  </div>
  <div class="card-content">
    <h1 class="card-title">Title</h1>
    <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    <button class="card-btn four">js</button>
  </div>
</div>
  </div>
  </>
  )
}

export default DashboardCards