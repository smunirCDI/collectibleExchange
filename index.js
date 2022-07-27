const products =[
  {
    id: 01,
    itemName: 'Mariano Rivera New York Yankees Autographed 10 Inscription Stats Nike Cool Base Jersey with LED Frame (CX Auth)',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0260/6605/9352/products/MoLEDBlue_1800x1800.jpg?v=1657298729',
    bitdAmnt: 3,
    currentBid: 20,
    openDate: 'Jan10, 2022 10:00:00 AM EST',
    closingDate: 'Sep 23, 2022 05:00:00 AM EDT',
    description: 'Mariano Rivera is one of the greatest pitchers in the history of baseball. His extremely decorated resume was capped off by becoming the first unanimous Hall of Famer.'
  },
  {
    id: 02,
    itemName: 'Mariano Rivera Autographed New York Yankees New Era Hat with Mariano 2019 HOF Logo on Side of Hat',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0260/6605/9352/products/RIVEHAS000005a_1800x1800.jpg?v=1657637938',
    bitdAmnt: 2,
    currentBid: 50,
    openDate: 'Feb 8, 2022 10:00:00 AM EST',
    closingDate: 'Sep 23, 2022 05:00:00 AM EDT',
    description: 'Mariano Rivera Autographed New York Yankees New Era Hat with Mariano 2019 HOF Logo on Side of Hat.'
  },
  {
    id: 03,
    itemName: 'Mark Messier New York Rangers Autographed and Inscribed Lithograph Photo',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0260/6605/9352/products/IMG_3344_2c53bc66-39b3-4800-a9ae-15e1adc634f8_1800x1800.jpg?v=1657827572',
    bitdAmnt: 0,
    currentBid: 40,
    openDate: 'Feb 8, 2022 10:00:00 AM EST',
    closingDate: 'Sep 23, 2022 05:00:00 AM EDT',
    description: 'Mark Messier New York Rangers Autographed and Inscribed Lithograph Photo.'
  },
  {
    id: 04,
    itemName: 'Dennis Rodman Signed Spalding Chicago Bulls Logo Game Series Replica NBA Basketball',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0260/6605/9352/products/RODBSK216-500x500_1800x1800.jpg?v=1658913112',
    bitdAmnt: 1,
    currentBid: 300,
    openDate: 'May 10, 2022 10:00:00 AM EST',
    closingDate: 'Aug 05, 2022 05:00:00 AM EDT',
    description: 'Dennis Rodman signed Spalding Chicago Bulls logo Game Series replica NBA basketball. Item comes with a Schwartz Sports Memorabilia tamper-proof numbered hologram and Certificate of Authenticity which can be verified online.',
    closingSoon:true
  },
  {
    id: 05,
    itemName: 'Allen Iverson Signed 76ers 2003-04 Black/Red Mitchell & Ness Jersey PSA ITP',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0260/6605/9352/products/s-l500_788ddca7-a93a-4d00-b8d8-b221132db9fc_1800x1800.jpg?v=1658857466',
    bitdAmnt: 5,
    currentBid: 500,
    openDate: 'June 10, 2022 10:00:00 AM EST',
    closingDate: 'Aug 10, 2022 05:00:00 AM EDT',
    description: 'Allen Iverson Signed 76ers 2003-04 Black/Red Mitchell & Ness Jersey PSA ITP',
    closingSoon:true
  },
  {
    id: 06,
    itemName: 'Bobby Mitchell Autographed 1975 Topps Card #468 Milwaukee Brewers SKU #168478',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0260/6605/9352/products/image4158__74861.1586908830_1800x1800.jpg?v=1658917262',
    bitdAmnt: 3,
    currentBid: 100,
    openDate: 'July 10, 2022 10:00:00 AM EST',
    closingDate: 'Aug 13, 2022 05:00:00 AM EDT',
    description: 'This is a 1975 Topps Card #468 that has been hand signed by Bobby Mitchell. This item is guaranteed to pass any third party authentication company including Beckett, PSA/DNA & JSA authentication.',
    closingSoon:true
  },

]


const app =()=>{
    loadNavBar()
    loadProducts()
    productDetail() 
    loadFooter() 

    const test = document.getElementById('test')
    if(test){
      test.innerHTML=''
      categories.forEach(cat=>{
        const parentList = document.createElement('li')
        if(cat.dropDown){
          parentList.setAttribute("onmouseenter", `showExtendedMenu('cat${cat.name}Menu')`);
          parentList.innerHTML= `<a class="nav-link dropdown-toggle" href="#" id="catGaseBall" >${cat.name}</a>`
          parentList.setAttribute("onmouseleave", `hideExtendedMenu('cat${cat.name}Menu')`);
          const childListContainer = document.createElement('div');
        
          childListContainer.className='seconNavContainer hide';
          childListContainer.setAttribute('id',`cat${cat.name}Menu`)
    
          const childListUl = document.createElement('ul');
          childListUl.className='row secondNav'
          cat.list.forEach(team=>{
            const childList = document.createElement('li');
            childList.innerHTML=`<a href="#" class="site-nav__dropdown-link site-nav__dropdown-link--second-level">${team}
          </a>`
          childListUl.appendChild(childList)
          })
          
          childListContainer.appendChild(childListUl)
      
          parentList.appendChild(childListContainer)
          test.appendChild(parentList)
        }else{
          parentList.innerHTML= `<a class="nav-link" href="index.html">${cat.name}</a>`
          test.appendChild(parentList)
        }
      })
    }
    
  }

  
const loadFooter=()=>{
  const footer = document.getElementById('footer')
  footer.innerHTML=`
  <section 
          class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom container"
        >
          <!-- Left -->
          <div class="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          <!-- Left -->
      
          <!-- Right -->
          <div>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-google"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-github"></i>
            </a>
          </div>
          <!-- Right -->
        </section>
        <section class="container">
        <div class="container text-center text-md-start mt-5">
          <!-- Grid row -->
          <div class="row mt-3">
            <!-- Grid column -->
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <!-- Content -->
              <h6 class="text-uppercase fw-bold mb-4">
                <i class="fas fa-gem me-3"></i>Collectible Exchange
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
            <!-- Grid column -->
    
            <!-- Grid column -->
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">
                Cusmtomer Services
              </h6>
              <p>
                <a href="#!" class="text-reset">Account</a>
              </p>
              <p>
                <a href="#!" class="text-reset">FAQ</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Contact Us</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Order History</a>
              </p>
            </div>
            <!-- Grid column -->
    
            <!-- Grid column -->
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">
                Information
              </h6>
              <p>
                <a href="#!" class="text-reset">Privacy Policy</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Terms of Use</a>
              </p>
              <p>
                <a href="#!" class="text-reset">SMS Terms & Conditions</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Site Map</a>
              </p>
            </div>
            <!-- Grid column -->
    
            <!-- Grid column -->
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">
                Auctions
              </h6>
              <p>
                <a href="#!" class="text-reset">All Auctions</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Closing Soon</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Popular Auctions</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Just Opened</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Recently Sold</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Shop</a>
              </p>
            </div>
            <!-- Grid column -->

          </div>
          <!-- Grid row -->
        </div>
      </section>
      <div class="text-center p-4 " style="background-color: rgba(0, 0, 0, 0.05);">
      <div class="container d-flex justify-content-between">
        <p>
          © 2021 Copyright:
  
        </p>
          <div class="bottom-footer text-light">
            <div class="container  align-items-center">
                <a href="http://www.commercedynamics.com/?utm_source=&amp;utm_medium=Footer%20logo&amp;utm_campaign=pistons_auction" target="_blank">
                  <div class="power_container row">
                    <div class="col-6 p-0" style="
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    display: flex;">
                      <div class="cd_logo"><img src="https://vafloc01.s3.amazonaws.com/WBStatic/site1103960/dist/img/logo-cd.png" alt="commerce dynamics marketplace" height="42"></div>
                    </div>
                    <div class="col-6">
                      <div class="smallFont">POWERED BY</div>
                      <div class="mainFont">COMMERCE</div>
                      <div class="mainFont">DYNAMICS</div>
                      <div class="smallFont">AUCTION MARKETPLACE</div>
                    </div>
                  </div>
                </a>
            </div>
        </div>
      </div>
  
    </div>
  
  `


}
const productDetail=()=>{
    const productPage = document.getElementById('productPage')
    if(productPage){
    const productId = location.hash.substr(1);
    console.log(productId)
    productPage.innerHTML=`
    <div class="row container">
            <div class="col-lg-6">
                <img class="product-image sticky-top" src="${products[productId].imageUrl}" alt="">
            </div>
            <div class="product-detail col-lg-6">
                <h2 class="product-title mt-3 mb-3">${products[productId].itemName}</h2>
                <p>Current Bid: $${products[productId].currentBid}</p>
                <form action="submit" class="">
                    <div class="input-group mb-4">
                        <input type="number" class="form-control" placeholder="$${products[productId].currentBid+5}"   min="${products[productId].currentBid+5}" step="5" aria-describedby="basic-addon2">
                        <div class="input-group-append">
                          <button class="btn btn-brand-color" type="button">Button</button>
                        </div>
                      </div>
                </form>
                <hr>
                <p><b>Open Date:</b> ${products[productId].openDate} <br>
                <b>Close Date:</b> ${products[productId].closingDate}</p>
                <hr>
                <p><b>Description:</b> ${products[productId].description}</p>
            </div>
        </div>
    `
    }

  }
const showMenu=(id)=>{

  const dropDown = document.getElementById(id)
  // dropDown.attributes
  dropDown.nextElementSibling.classList.add('show')
  dropDown.parentElement.classList.add('show')
  // const parent = dropDown.parentElement.classList
  if(dropDown.attributes[`aria-expanded`]== false){
    dropDown.attributes[`aria-expanded`].nodeValue('true')
  }
}
const hideMenu=(id)=>{
  const dropDown = document.getElementById(id)

  dropDown.nextElementSibling.classList.remove('show')
  dropDown.parentElement.classList.remove('show')
  if(dropDown.attributes[`aria-expanded`]== true){
    dropDown.attributes[`aria-expanded`].nodeValue('false')
  }
}
const showExtendedMenu=(id)=>{
  console.log(id);
  const dropDown = document.getElementById(id)
  dropDown.classList.remove('hide')
}
const hideExtendedMenu=(id)=>{
  console.log(id);
  const dropDown = document.getElementById(id)
  dropDown.classList.add('hide')
}
const categories = [
  {
    dropDown: true,
    name: 'baseball',
    list: [
      'Arizona Diamondbacks', 'Atlanta Braves', 'Baltimore Orioles','Boston Red Sox','Chicago White Sox','Chicago Cubs','Cincinnati Reds','Cleveland Indians/Guardians','Colorado Rockies','Detroit Tigers','Houston Astros','Kansas City Royals','Los Angeles Angels','Los Angeles Dodgers','Miami Marlins','Milwaukee Brewers','Minnesota Twins','New York Yankees', 'New York Mets', 'Oakland Athletics', 'Philadelphia Phillies', 'Pittsburgh Pirates', 'San Diego Padres', 'San Francisco Giants', 'Seattle Mariners', 'St. Louis Cardinals', 'Tampa Bay Rays', 'Texas Rangers', 'Toronto Blue Jays','Washington Nationals'
    ]
  },
  {
    dropDown: true,
    name: 'basketball',
    list: [
      'Atlanta Hawks', 'Boston Celtics', 'Brooklyn Nets','Charlotte Hornets','Chicago Bulls','Cleveland Cavaliers','Dallas Mavericks','Denver Nuggets','Detroit Pistons','Golden State Warriors','Houston Rockets',
      'Indiana Pacers','Los Angeles Clippers','Los Angeles Lakers','Memphis Grizzlies','Miami Heat','Milwaukee Bucks','Oklahoma City Thunder', 'Minnesota Timberwolves', 'New Orleans Pelicans', 'New York Knicks', 'Orlando Magic', 'Philadelphia 76ers', 'Phoenix Suns', 'Portland Trail Blazers', ' Sacramento Kings', 'San Antonio Spurs', 'Toronto Raptors', 'Utah Jazz','Washington Wizards'
    ]
  },
  {
    dropDown: true,
    name: 'football',
    list: [
      'Arizona Cardinals', 'Atlanta Falcons', 'Baltimore Ravens','Buffalo Bills','Carolina Panthers','Chicago Bears','Cincinnati Bengals','Cleveland Browns','Dallas Cowboys','Denver Broncos','Detroit Lions',
      'Green Bay Packers','Houston Texans','Indianapolis Colts','Jacksonville Jaguars','Kansas City Chiefs','Las Vegas Raiders','Los Angeles Chargers', 'Los Angeles Rams', 'Miami Dolphins', 'Minnesota Vikings', 'New England Patriots', 'New Orleans Saints', 'New York Giants', 'New York Jets', ' Philadelphia Eagles', 'Pittsburgh Steelers', 'San Francisco 49ers', 'Seattle Seahawks','Tampa ','Tennessee Titans','Washington Commanders'
    ]
  },
  {
    dropDown: true,
    name: 'hockey',
    list: [
      'Anaheim Ducks', 'Arizona Coyotes', 'Boston Bruins','Buffalo Sabres','Calgary Flames','Carolina Hurricanes','Chicago Blackhawks','Colorado Avalanche','Columbus Blue Jackets','Dallas Stars','Detroit Red Wings','Edmonton Oilers','Florida Panthers','Los Angeles Kings','Minnesota Wild','Montreal Canadiens','Nashville ','New Jersey Devils', 'New York Islanders', 'New York Rangers', 'Ottawa Senators', 'Philadelphia Flyers', 'Pittsburgh Penguins', 'San Jose Sharks', 'Seattle Kraken', 'St. Louis Blues', 'Toronto Maple Leafs', 'Vancouver Canucks', 'Vegas Golden Knights','Washington Capitals','Winnipeg Jets','Washington Commanders'
    ]
  },
  {
    dropDown: true,
    name: 'entertainment',
    list: [
      'Music', 'Movies', 'TV'
    ]
  },
  {
    dropDown: true,
    name: 'Other',
    list: [
      'Auto Racing', 'Boxing', 'Golf', 'Historical', 'Horse Racing', 'Marvel', 'MMA'
    ]
  },
  {
    dropDown: false,
    name: 'Marketplace'
  },
  {
    dropDown: false,
    name: 'Upcoming Signings'
  },
  {
    dropDown: false,
    name: 'Mariano Rivera'
  },
  {
    dropDown: false,
    name: 'Mark Messier'
  },
  {
    dropDown: false,
    name: 'Trading Cards'
  },
]
const loadNavBar = ()=>{
    const navbarEle= document.getElementById("navBar")
    navbarEle.innerHTML=`    
    <nav class="navbar navbar-expand-lg navbar-light bg-light container-fluid">
      <div class="container categoryMenu">
        <a class="navbar-brand" href="index.html"><img src="https://cdn.shopify.com/s/files/1/0260/6605/9352/files/CX_Logo.png?v=1646252899" alt=""></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item dropdown" onmouseenter="showMenu('navbarDropdown1')" onmouseleave="hideMenu('navbarDropdown1')">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                quick search
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">All Auctions</a>
                <a class="dropdown-item" href="#">Most Popular</a>
                <a class="dropdown-item" href="#">Closing Soon</a>
                <a class="dropdown-item" href="#">Just Opened</a>
                <a class="dropdown-item" href="#">Recently Sold</a>
              </div>
            </li>
            <li class="nav-item dropdown" onmouseenter="showMenu('navbarDropdown2')" onmouseleave="hideMenu('navbarDropdown2')">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Auctions
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">All auctions</a>
              </div>
            </li>
            <li class="nav-item" onmouseenter="showMenu('navbarDropdown3')" onmouseleave="hideMenu('navbarDropdown3')">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Categories
              </a>
              <div class="dropdown-menu dropdown-menu2 menu-full-length" aria-labelledby="navbarDropdown" id="categoryMenu">
              <ul class='menu-full-length row container' id='test'>
              <li class="">
                <a class="nav-link dropdown-toggle" href="#" id="catGaseBall" >
                  Baseball
                </a>
                <div class='seconNavContainer' id="catBaseBallMenu">
                  <ul class="row secondNav" id="catBaseBallMenuUl">
                    <li class="">
                      <a href="/collections/arizona-diamondbacks" class="site-nav__dropdown-link site-nav__dropdown-link--second-level ">
                        Arizona Diamondbacks
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
              </div>
            </li>
            <li class="nav-item dropdown" onmouseenter="showMenu('navbarDropdown4')" onmouseleave="hideMenu('navbarDropdown4')">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown4" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Donate
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">All Donations</a>
              </div>
            </li>
            <li>
              <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="brand-color btn  my-2 my-sm-0" type="submit">Login</button>
              </form>
            </li>
          </ul>
        </div>
      </div>
      </nav>
     
  `
}

const loadProducts = ()=>{
  const productRow = document.getElementById('productsRow')
  const productsClosingSoonRow = document.getElementById('productsClosingSoonRow')
  if(productRow){
    productRow.innerHTML=''
    products.forEach((item,idx)=>{
      if(!item.closingSoon){
      const card = document.createElement('div')
      card.innerHTML=`
      <a class="card" href="productPage.html#${idx}"
      <div style="width: 18rem;">
        <img class="card-img-top" src="${item.imageUrl}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${item.itemName}
          </h5>
          <p class="card-text">Auction Ends: Sep 01, 09:49 AM EST</p>
          <p class="card-text">Current Bid: ${item.bitdAmnt}</p>
    
          <button class="btn btn-brand-color">Bid Now</button>
        </div>
      </div>
      </a>`
      productRow.appendChild(card)
      }
    })
  }
  if(productsClosingSoonRow){
    productsClosingSoonRow.innerHTML=''
    products.forEach((item,idx)=>{
      if(item.closingSoon){
        const card = document.createElement('div')
        card.innerHTML=`
        <a class="card" href="productPage.html#${idx}"
        <div style="width: 18rem;">
          <img class="card-img-top" src="${item.imageUrl}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${item.itemName}
            </h5>
            <p class="card-text">Auction Ends: Sep 01, 09:49 AM EST</p>
            <p class="card-text">Current Bid: ${item.bitdAmnt}</p>
      
            <button class="btn btn-brand-color">Bid Now</button>
          </div>
        </div>
        </a>`
        productsClosingSoonRow.appendChild(card)

      }
    })
  }

}

// const loadHomePage = ()=>{
//     const carousal= document.getElementById("carouselExampleControls")
//     carousal.innerHTML=1

// }


app()
