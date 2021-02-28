<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>





<input 
                placeholder="Enter city name"
                type="text"
                onChange = {(event)=>{
                    updateName(event.target.value);
                }}
            /> 
            <button onClick = {()=>{
                updateCityName(n);
            }}>Search</button>











                   
{!response ?(<h1>No</h1>):(<>
            <h1>{response.name}</h1>
         {/* <h1>{response.weather[0].main}</h1>
            <h1>{response.weather[0].description}</h1>
            <h1>{response.main.temp}</h1>
            <h1>{response.main.temp_max}</h1>
            <h1>{response.main.temp_min}</h1>
            <h1>{response.main.pressure}</h1>
            <h1>{response.main.humidity}</h1>
            <h1>{response.visibility}</h1>
            <h1>{response.wind.speed}</h1>
            <h1>{response.sys.sunrise}</h1>
            <h1>{response.sys.sunset}</h1>*/}
            </>)
            }
            