import React from 'react'

const domy = () => {
        // const [isSidebarOpen, setSidebarOpen] = useState(false);
    // const [activeDropdown, setActiveDropdown] = useState(null);
  
    // const toggleSidebar = () => {
    //   setSidebarOpen(!isSidebarOpen);
    // };
  
    // const handleDropdownClick = (index) => {
    //   setActiveDropdown(activeDropdown === index ? null : index);
    // };
  return (
   <>
        {/* <div className={`page-wrapper chiller-theme ${isSidebarOpen ? 'toggled' : ''}`}>
        <a id="show-sidebar"  className="btn btn-sm btn-dark" href="#"  onClick={toggleSidebar}>
          <i className="fas fa-bars">v</i>
        </a>
        <nav id="sidebar" className="sidebar-wrapper">
          <div className="sidebar-content">
            <div className="sidebar-brand">
              <a href="#">pro sidebar</a>
              <div id="close-sidebar"  onClick={toggleSidebar}>
                <i className="fas fa-times">u</i>
              </div>
            </div>
            <div className="sidebar-header">
              <div className="user-pic">
                <img
                  className="img-responsive img-rounded"
                  src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg"
                  alt="User picture"
                />
              </div>
              <div className="user-info">
                <span className="user-name">
                  Jhon <strong>Smith</strong>
                </span>
                <span className="user-role">Administrator</span>
                <span className="user-status">
                  <i className="fa fa-circle"></i>
                  <span>Online</span>
                </span>
              </div>
            </div>
            <div className="sidebar-search">
              <div>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control search-menu"
                    placeholder="Search..."
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="sidebar-menu">
              <ul>
                <li className="header-menu">
                  <span>General</span>
                </li>
                <li className="sidebar-dropdown">
                  <a href="#">
                    <i className="fa fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                    <span className="badge badge-pill badge-warning">New</span>
                  </a>
                  <div className="sidebar-submenu">
                    <ul>
                      <li>
                        <a href="#">
                          Dashboard 1
                          <span className="badge badge-pill badge-success">Pro</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">Dashboard 2</a>
                      </li>
                      <li>
                        <a href="#">Dashboard 3</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="sidebar-dropdown">
                  <a href="#">
                    <i className="fa fa-shopping-cart"></i>
                    <span>E-commerce</span>
                    <span className="badge badge-pill badge-danger">3</span>
                  </a>
                  <div className="sidebar-submenu">
                    <ul>
                      <li>
                        <a href="#">Products</a>
                      </li>
                      <li>
                        <a href="#">Orders</a>
                      </li>
                      <li>
                        <a href="#">Credit card</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="sidebar-dropdown">
                  <a href="#">
                    <i className="far fa-gem"></i>
                    <span>Components</span>
                  </a>
                  <div className="sidebar-submenu">
                    <ul>
                      <li>
                        <a href="#">General</a>
                      </li>
                      <li>
                        <a href="#">Panels</a>
                      </li>
                      <li>
                        <a href="#">Tables</a>
                      </li>
                      <li>
                        <a href="#">Icons</a>
                      </li>
                      <li>
                        <a href="#">Forms</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="sidebar-dropdown">
                  <a href="#">
                    <i className="fa fa-chart-line"></i>
                    <span>Charts</span>
                  </a>
                  <div className="sidebar-submenu">
                    <ul>
                      <li>
                        <a href="#">Pie chart</a>
                      </li>
                      <li>
                        <a href="#">Line chart</a>
                      </li>
                      <li>
                        <a href="#">Bar chart</a>
                      </li>
                      <li>
                        <a href="#">Histogram</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="sidebar-dropdown">
                  <a href="#">
                    <i className="fa fa-globe"></i>
                    <span>Maps</span>
                  </a>
                  <div className="sidebar-submenu">
                    <ul>
                      <li>
                        <a href="#">Google maps</a>
                      </li>
                      <li>
                        <a href="#">Open street map</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="header-menu">
                  <span>Extra</span>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-book"></i>
                    <span>Documentation</span>
                    <span className="badge badge-pill badge-primary">Beta</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-calendar"></i>
                    <span>Calendar</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-folder"></i>
                    <span>Examples</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="sidebar-footer">
            <a href="#">
              <i className="fa fa-bell"></i>
              <span className="badge badge-pill badge-warning notification">3</span>
            </a>
            <a href="#">
              <i className="fa fa-envelope"></i>
              <span className="badge badge-pill badge-success notification">7</span>
            </a>
            <a href="#">
              <i className="fa fa-cog"></i>
              <span className="badge-sonar"></span>
            </a>
            <a href="#">
              <i className="fa fa-power-off"></i>
            </a>
          </div>
        </nav>
        <main className="page-content">
          <div className="container-fluid">
            <h2>Pro Sidebar</h2>
            <hr />
            <div className="row">
              <div className="form-group col-md-12">
                <p>
                  This is a responsive sidebar template with dropdown menu based on Bootstrap 4 framework.
                </p>
                <p>
                  You can find the complete code on{' '}
                  <a href="https://github.com/azouaoui-med/pro-sidebar-template" target="_blank" rel="noopener noreferrer">
                    Github
                  </a>, it contains more themes and background image options.
                </p>
              </div>
              <div className="form-group col-md-12">
                <iframe
                  src="https://ghbtns.com/github-btn.html?user=azouaoui-med&repo=pro-sidebar-template&type=star&count=true&size=large"
                  frameBorder="0"
                  scrolling="0"
                  width="140"
                  height="30"
                  title="GitHub Star"
                ></iframe>
                <iframe
                  src="https://ghbtns.com/github-btn.html?user=azouaoui-med&repo=pro-sidebar-template&type=fork&count=true&size=large"
                  frameBorder="0"
                  scrolling="0"
                  width="140"
                  height="30"
                  title="GitHub Fork"
                ></iframe>
              </div>
            </div>
            <h5>More templates</h5>
            <hr />
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                <div className="card rounded-0 p-0 shadow-sm">
                  <img
                    src="https://user-images.githubusercontent.com/25878302/58369568-a49b2480-7efc-11e9-9ca9-2be44afacda1.png"
                    className="card-img-top rounded-0"
                    alt="Angular Pro Sidebar"
                  />
                  <div className="card-body text-center">
                    <h6 className="card-title">Angular Pro Sidebar</h6>
                    <a
                      href="https://github.com/azouaoui-med/angular-pro-sidebar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      Github
                    </a>
                    <a
                      href="https://azouaoui-med.github.io/angular-pro-sidebar/demo/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-success btn-sm"
                    >
                      Preview
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                <div className="card rounded-0 p-0 shadow-sm">
                  <img
                    src="https://user-images.githubusercontent.com/25878302/58369258-33f20900-7ef8-11e9-8ff3-b277cb7ed7b4.PNG"
                    className="card-img-top rounded-0"
                    alt="Angular Dashboard"
                  />
                  <div className="card-body text-center">
                    <h6 className="card-title">Angular Dashboard</h6>
                    <a
                      href="https://github.com/azouaoui-med/lightning-admin-angular"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      Github
                    </a>
                    <a
                      href="https://azouaoui-med.github.io/lightning-admin-angular/demo/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-success btn-sm"
                    >
                      Preview
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div> */}

  
      
      {/* <input type="checkbox" name="" id="menu-toggle"/>
<div className="overlay">
    <label for="menu-toggle">
  </label></div>
<div className="sidebar">
  <div className="sidebar-container">
    <div className="brand">
      <h3>
        <span className="lab la-staylinked"></span>
        vase
      </h3>
    </div>
    <div className="sidebar-avatar">
      <div>
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQF9R2lxnH4fOw/profile-displayphoto-shrink_800_800/0/1639841285929?e=1654128000&v=beta&t=QvocDiNfivbaAzHjsX9fnl9eFa1ZSo4SBHeH4jZANEk" alt="avatar"/>
      </div>
      <div className="avatar-info">
        <div className="avatar-text">
          <h4>maz develop</h4>
          <small>14-10-69</small>
        </div>
        <span className="las la-angle-double-down"></span>
      </div>
    </div>
    <div className="sidebar-menu">
      <ul>
        <li><a href="#" className="active"><span className="las la-adjust"></span><span>Dashboard</span></a></li>
        <li><a href="#"><span className="las la-video"></span><span>Videos</span></a></li>
        <li><a href="#"><span className="las la-chart-bar"></span><span>Analytics</span></a></li>
        <li><a href="#"><span className="las la-calendar"></span><span>Schedule</span></a></li>
        <li><a href="#"><span className="las la-user"></span><span>Account</span></a></li>
      </ul>
    </div>
    <div className="sidebar-card">
      <div className="side-card-icon">
        <span className="lab la-codiepie"></span>
      </div>
      <div>
        <h4>Make AdSense</h4>
        <p>add ads to your videos to earn money</p>
      </div>
      <button className="btn btn-main btn-block">Create now</button>
    </div>
  </div>
</div>
<div className="main-content">
  <header>
    <div className="header-wrapper">
      <label for="menu-toggle">
        <span className="las la-bars">**</span>
      </label>
      <div className="header-title">
        <h1>Analytics</h1>
        <p>Display analytics about your Channel <span className="las la-chart-line"></span></p>
      </div>
    </div>
    <div className="header-action">
      <button className="btn btn-main">
        <span className="las la-video"></span>
        Upload
      </button>
    </div>
  </header>
  <main>
    <section>
      <h3 className="section-head">Overview</h3>
      <div className="analytics">
        <div className="analytic">
          <div className="analytic-icon"><span className="las la-eye"></span></div>
          <div className="analytic-info">
            <h4>Total views</h4>
            <h1>10.3M</h1>
          </div>
        </div>
        <div className="analytic">
          <div className="analytic-icon"><span className="las la-clock"></span></div>
          <div className="analytic-info">
            <h4>Watch time (hrs)</h4>
            <h1>20.9k <small className="text-danger">5%</small></h1>
          </div>
        </div>
        <div className="analytic">
          <div className="analytic-icon"><span className="las la-users"></span></div>
          <div className="analytic-info">
            <h4>Subscribers</h4>
            <h1>1.3k <small className="text-success">12%</small></h1>
          </div>
        </div>
        <div className="analytic">
          <div className="analytic-icon"><span className="las la-heart"></span></div>
          <div className="analytic-info">
            <h4>Total likes</h4>
            <h1>3.4M </h1>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="block-grid">
        <div className="revenue-card">
          <h3 className="section-head">Total Revenue</h3>
          <div className="rev-content">
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQF9R2lxnH4fOw/profile-displayphoto-shrink_800_800/0/1639841285929?e=1654128000&v=beta&t=QvocDiNfivbaAzHjsX9fnl9eFa1ZSo4SBHeH4jZANEk" alt="profile"/>
            <div className="rev-info">
              <h3>Mohsen Alizade</h3>
              <h1>3.5M <small>Subscribers</small></h1>
            </div>
            <div className="rev-sum">
              <h4>Total income</h4>
              <h2>$70.859</h2>
            </div>
          </div>
        </div>
        <div className="graph-card">
          <h3 className="section-head">Graph</h3>
          <div className="graph-content">
            <div className="graph-head">
              <div className="icon-wrapper">
                <div className="icon"><span className="las la-eye text-main"></span></div>
                <div className="icon"><span className="las la-clock text-success"></span></div>
              </div>
              <div className="graph-select">
                <select name="" id="">
                  <option value="">Septamber</option>
                </select>
              </div>
            </div>
            <div className="graph-board">
              <canvas id="revenueChart" width="100%"></canvas>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</div>
pink*****************************
*/}


{/* 
yellowish css

*/}



{/* domy final */}

{/* 
//   const [isSidebarOpen, setSidebarOpen] = useState(false);
//   const [openSubMenu, setOpenSubMenu] = useState(null);

//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

//   const toggleSubMenu = (index) => {
//     setOpenSubMenu(openSubMenu === index ? null : index);
//   };

//   const [isActive, setIsActive] = useState(false);

//   const toggleSidebar = () => {
//     setIsActive(!isActive);
//   };
 */}


     {/*
     
     
     <div className={`sidebar ${isSidebarOpen ? '' : 'close'}`}>
        <div className="logo-details">
          <i className='bx bxl-bitcoin'>
            <Image src={mobilelogo} alt='globalaspirantslogo' className='w-auto h-16'/>
          </i>
          <span className="logo_name">
            <Image src={globalaspirantslogo} alt='globalaspirantslogo' className='p-3'/> 
          </span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#">
              <i className='bx bx-home'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </i>
              <span className="link_name">Home</span>
            </a>
            <ul className="sub-menu blank">
              <li><a className="link_name" href="#">Home</a></li>
            </ul>
          </li>
          <li>
            <div className="icon-link" onClick={() => toggleSubMenu(1)}>
              <a href="#">
                <i className='bx bx-bulb'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
             </svg>
             </i>
                <span className="link_name">Solutions</span>
              </a>
              <i className='bx bxs-chevron-down arrow'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
              </i>
            </div>
            <ul className={`sub-menu ${openSubMenu === 1 ? '' : 'blank'}`}>
              <li><a className="link_name" href="#">Solutions</a></li>
              <li><a href="#">Payments API</a></li>
              <li><a href="#">Accounts API</a></li>
              <li><a href="#">Finance API</a></li>
            </ul>
          </li>
          <li>
            <div className="icon-link" onClick={() => toggleSubMenu(2)}>
              <a href="#">
                <i className='bx bx-news'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
           </svg>
           </i>
                <span className="link_name">Posts</span>
              </a>
              <i className='bx bxs-chevron-down arrow'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
             </svg>
              </i>
            </div>
            <ul className={`sub-menu ${openSubMenu === 2 ? '' : 'blank'}`}>
              <li><a className="link_name" href="#">Posts</a></li>
              <li><a href="#">Recent</a></li>
              <li><a href="#">Trending</a></li>
              <li><a href="#">Most Visited</a></li>
            </ul>
          </li>
          <li>
            <div className="icon-link" onClick={() => toggleSubMenu(3)}>
              <a href="#">
                <i className='bx bx-file-find'>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
               </svg>
               </i>
                <span className="link_name">Insights</span>
              </a>
              <i className='bx bxs-chevron-down arrow'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
           </svg>
           </i>
            </div>
            <ul className={`sub-menu ${openSubMenu === 3 ? '' : 'blank'}`}>
              <li><a className="link_name" href="#">Insights</a></li>
              <li><a href="#">Money Movement</a></li>
              <li><a href="#">Enterprise Spotlight</a></li>
              <li><a href="#">Financial Burnout</a></li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i className='bx bxs-credit-card'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              </i>
              <span className="link_name">Pricing</span>
            </a>
            <ul className="sub-menu blank">
              <li><a className="link_name" href="#">Pricing</a></li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i className='bx bx-bar-chart'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
           </svg>
           </i>
              <span className="link_name">Chart</span>
            </a>
            <ul className="sub-menu blank">
              <li><a className="link_name" href="#">Chart</a></li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i className='bx bx-compass'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
             </svg>
             </i>
              <span className="link_name">Explore</span>
            </a>
            <ul className="sub-menu blank">
              <li><a className="link_name" href="#">Explore</a></li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i className='bx bx-cog'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
              </i>
              <span className="link_name">Setting</span>
            </a>
            <ul className="sub-menu blank">
              <li><a className="link_name" href="#">Setting</a></li>
            </ul>
          </li>
          <li>
            <div className="profile-details">
              <div className="profile-content">
                <img src="https://sachinsamal.netlify.app/static/media/sachin-samal.d451ea9b3c53ed984bf7.png" alt="profileImg"/>
              </div>
              <div className="name-job">
                <div className="profile_name">John Doe</div>
                <div className="job">Crypto Expert</div>
              </div>
              <i className='bx bx-log-out'>@</i>
            </div>
          </li>
        </ul>
      </div>
      <section className="home-section">
        <div className="home-content">
          <i className='bx bx-menu' onClick={toggleSidebar}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
         </svg>
          </i>
          <span className="text">Crypto App</span>
        </div>
      </section> */}
      {/* <div class="sidebar active"> */}
 {/* <div className={`sidebar ${isActive ? 'active' : ''}`}>
  <div class="logo_content">
    <div class="logo">
      <i class='bx bxl-c-plus-plus text-[30px]'></i>
      <div class="logoname ml-[5px]"> 
         <Image src={globalaspirantslogo} alt='globalaspirantslogo'/> </div>
    </div>
    <i class='bx bx-menu-alt-right text-[25px]' onClick={toggleSidebar} id="btn">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
</svg>
    </i>
  </div>
  <ul class="nav_list">
    <li>
      <i class='bx bx-search'></i>
      <input type="text" placeholder="Search..."/>
      <span class="tooltip">Search</span>
    </li>
    <li>
      <a href="#">
        <i class='bx bx-grid-alt'>
        <i className='bx bx-home'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </i>  
        </i>
        <span class="link_names">Dashboard</span>
      </a>
      <span class="tooltip">Dashboard</span>
    </li>
    <li>
      <a href="#">
        <i class='bx bx-user'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
             </svg>  
        </i>
        <span class="link_names">User</span>
      </a>
      <span class="tooltip">User</span>
    </li>
    <li>
      <a href="#">
        <i class='bx bx-chat'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
             </svg>
        </i>
        <span class="link_names">Messages</span>
      </a>
      <span class="tooltip">Messages</span>
    </li>
    <li>
      <a href="#">
        <i class='bx bx-pie-chart-alt-2'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
           </svg>
        </i>
        <span class="link_names">Analytics</span>
      </a>
      <span class="tooltip">Analytics</span>
    </li>
    <li>
      <a href="#">
        <i class='bx bx-folder'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
               </svg>
        </i>
        <span class="link_names">Files</span>
      </a>
      <span class="tooltip">Files</span>
    </li>
    <li>
      <a href="#">
        <i class='bx bx-cart-alt'> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
               </svg></i>
        <span class="link_names">Orders</span>
      </a>
      <span class="tooltip">Orders</span>
    </li>
    <li>
      <a href="#">
        <i class='bx bx-heart'>  
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
               </svg></i>
        <span class="link_names">Liked</span>
      </a>
      <span class="tooltip">Liked</span>
    </li>
    <li>
      <a href="#">
        <i class='bx bx-cog'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
        </i>
        <span class="link_names">Settings</span>
      </a>
      <span class="tooltip">Settings</span>
    </li>
  </ul>
  <div class="profile_content">
    <div class="profile">
      <div class="profile_details">
        <img src="https://vz.cnwimg.com/wp-content/uploads/2014/01/alex.jpg?x86007" alt=""/>
        <div class="name_job">
          <div class="name">Name</div>
          <div class="job">Role</div>
        </div>
      </div>
      <i class='bx bx-log-out' id="log_out">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
               </svg>
      </i>
    </div>
  </div>
</div>
<div class="home_content">
  <div class="text">Home Content Here...</div>
</div>  */}
   </>
  )
}

export default domy