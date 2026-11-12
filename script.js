const places = [
  {id:"farin-ruwa",name:"Farin Ruwa Waterfalls",state:"Nasarawa",category:"Nature",area:"Wamba area",description:"A notable waterfall in Nasarawa State, known for its dramatic cascade and surrounding natural scenery. Check local road and access conditions before setting out.",image:"https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=900&q=80",hours:"Not independently verified — confirm locally",fee:"Confirm with site management",map:"https://www.google.com/maps/search/?api=1&query=Farin+Ruwa+Waterfalls+Nasarawa+Nigeria",status:"Visitor details require confirmation"},
  {id:"eggon-hills",name:"Eggon Hills",state:"Nasarawa",category:"Nature",area:"Akwanga area",description:"A scenic highland area associated with the Eggon landscape and communities. Visitors should arrange local guidance and confirm safe access before visiting.",image:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80",hours:"Outdoor location — confirm safe access",fee:"No verified fee information",map:"https://www.google.com/maps/search/?api=1&query=Eggon+Hills+Nasarawa+Nigeria",status:"Visitor details require confirmation"},
  {id:"doma-dam",name:"Doma Dam",state:"Nasarawa",category:"Nature",area:"Doma",description:"A water resource and landscape feature in Nasarawa State. Access may be restricted in some areas; contact local authorities before planning a visit.",image:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",hours:"Confirm access locally",fee:"Not verified",map:"https://www.google.com/maps/search/?api=1&query=Doma+Dam+Nasarawa+Nigeria",status:"Visitor details require confirmation"},
  {id:"shere-hills",name:"Shere Hills",state:"Plateau",category:"Nature",area:"Jos",description:"A striking group of hills near Jos, popular for its rocky scenery and outdoor exploration. Use a local guide and check current access advice.",image:"https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=900&q=80",hours:"Confirm locally before visiting",fee:"Not verified",map:"https://www.google.com/maps/search/?api=1&query=Shere+Hills+Jos+Plateau+Nigeria",status:"Visitor details require confirmation"},
  {id:"riyom-rock",name:"Riyom Rock Formation",state:"Plateau",category:"Nature",area:"Riyom",description:"A distinctive natural rock formation and one of Plateau State's recognisable landscape features. Confirm safe stopping and access arrangements locally.",image:"https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80",hours:"Outdoor landmark — confirm access",fee:"No verified fee information",map:"https://www.google.com/maps/search/?api=1&query=Riyom+Rock+Formation+Plateau+Nigeria",status:"Visitor details require confirmation"},
  {id:"jos-wildlife",name:"Jos Wildlife Park",state:"Plateau",category:"Leisure",area:"Jos",description:"A recreational wildlife destination in Jos. Check current operating status, visitor rules, opening times and entry fees with the park before travelling.",image:"https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=900&q=80",hours:"Verify current opening hours",fee:"Verify current admission fee",map:"https://www.google.com/maps/search/?api=1&query=Jos+Wildlife+Park+Nigeria",status:"Current operating details must be verified"},
  {id:"lekki",name:"Lekki Conservation Centre",state:"Lagos",category:"Nature",area:"Lekki, Lagos",description:"A conservation and nature destination known for its canopy walkway and green surroundings. Check the official centre's current visitor information before visiting.",image:"https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=80",hours:"Verify with the centre",fee:"Verify current admission fee",map:"https://www.google.com/maps/search/?api=1&query=Lekki+Conservation+Centre+Lagos+Nigeria",status:"Current visitor details must be verified"},
  {id:"nike-gallery",name:"Nike Art Gallery",state:"Lagos",category:"Culture",area:"Lekki, Lagos",description:"An art gallery showcasing Nigerian creativity, artworks and cultural expression. Confirm visiting arrangements and opening times before going.",image:"https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=900&q=80",hours:"Verify with the gallery",fee:"Confirm directly",map:"https://www.google.com/maps/search/?api=1&query=Nike+Art+Gallery+Lagos+Nigeria",status:"Current visitor details must be verified"},
  {id:"obudu",name:"Obudu Mountain Resort",state:"Cross River",category:"Leisure",area:"Obanliku",description:"A mountain resort in Cross River State known for its highland setting. Resort facilities and access arrangements can change; confirm before travelling.",image:"https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",hours:"Confirm resort access and operations",fee:"Confirm accommodation and activity rates",map:"https://www.google.com/maps/search/?api=1&query=Obudu+Mountain+Resort+Cross+River+Nigeria",status:"Current operating details must be verified"},
  {id:"agbokim",name:"Agbokim Waterfalls",state:"Cross River",category:"Nature",area:"Etung",description:"A waterfall attraction close to the Nigeria–Cameroon border area, set in a lush natural environment. Check access and local travel advice before visiting.",image:"https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=900&q=80",hours:"Confirm locally",fee:"Not verified",map:"https://www.google.com/maps/search/?api=1&query=Agbokim+Waterfalls+Cross+River+Nigeria",status:"Visitor details require confirmation"},
  {id:"gidan-makama",name:"Gidan Makama Museum",state:"Kano",category:"History",area:"Kano city",description:"A historic museum in Kano offering insight into the region's history and heritage. Confirm museum opening days, hours and entry arrangements before visiting.",image:"https://images.unsplash.com/photo-1564399579883-451a5d44ec08?auto=format&fit=crop&w=900&q=80",hours:"Verify with museum management",fee:"Verify current fee",map:"https://www.google.com/maps/search/?api=1&query=Gidan+Makama+Museum+Kano+Nigeria",status:"Current visitor details must be verified"},
  {id:"olumo",name:"Olumo Rock",state:"Ogun",category:"History",area:"Abeokuta",description:"A major heritage and tourism landmark in Abeokuta, associated with the history of the Egba people. Check current visitor access, operating hours and fees.",image:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",hours:"Verify with site management",fee:"Verify current admission fee",map:"https://www.google.com/maps/search/?api=1&query=Olumo+Rock+Abeokuta+Nigeria",status:"Current visitor details must be verified"},
  {id:"kajuru",name:"Kajuru Castle",state:"Kaduna",category:"Leisure",area:"Kajuru",description:"A privately operated castle-style destination near Kaduna. Visits may require advance arrangements; confirm access, booking rules and current operations directly.",image:"https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=900&q=80",hours:"Advance confirmation recommended",fee:"Confirm directly with operator",map:"https://www.google.com/maps/search/?api=1&query=Kajuru+Castle+Kaduna+Nigeria",status:"Current access arrangements must be verified"}
];

const grid = document.getElementById("destinationGrid");
const searchInput = document.getElementById("searchInput");
const filters = document.getElementById("stateFilters");
const noResults = document.getElementById("noResults");
const dialog = document.getElementById("placeDialog");
const itineraryKey = "nigeriaExploreItineraryV1";
let activeState = "All";
let searchTerm = "";

function getItinerary() {
  try { return JSON.parse(localStorage.getItem(itineraryKey)) || []; }
  catch (error) { return []; }
}
function saveItinerary(items) {
  localStorage.setItem(itineraryKey, JSON.stringify(items));
  renderItinerary();
  renderPlaces();
}
function isSaved(id) { return getItinerary().includes(id); }

function renderPlaces() {
  const matches = places.filter(place => {
    const stateMatch = activeState === "All" || place.state === activeState;
    const text = `${place.name} ${place.state} ${place.category} ${place.area}`.toLowerCase();
    return stateMatch && text.includes(searchTerm);
  });
  grid.innerHTML = matches.map(place => `
    <article class="destination-card">
      <div class="card-image" style="background-image:url('${place.image}')">
        <span class="card-state">${place.state.toUpperCase()}</span>
        <button class="card-save ${isSaved(place.id) ? "saved" : ""}" data-save="${place.id}" aria-label="${isSaved(place.id) ? "Remove from" : "Add to"} itinerary">${isSaved(place.id) ? "✓" : "+"}</button>
      </div>
      <div class="card-body">
        <span class="card-category">${place.category} · ${place.area}</span>
        <h3>${place.name}</h3>
        <p>${place.description}</p>
        <div class="card-bottom"><span>Visitor details: confirm</span><button class="card-details" data-details="${place.id}">VIEW DETAILS ↗</button></div>
      </div>
    </article>`).join("");
  noResults.hidden = matches.length !== 0;
}

function renderItinerary() {
  const items = getItinerary();
  const list = document.getElementById("itineraryList");
  document.getElementById("navCount").textContent = items.length;
  document.getElementById("itineraryCount").textContent = `${items.length} PLACE${items.length === 1 ? "" : "S"}`;
  document.getElementById("clearItinerary").hidden = items.length === 0;
  if (!items.length) {
    list.innerHTML = '<div class="empty-itinerary">Your itinerary is empty.<br><small>Add a destination to get started.</small></div>';
    return;
  }
  list.innerHTML = items.map(id => {
    const place = places.find(item => item.id === id);
    if (!place) return "";
    return `<div class="itinerary-item"><div>${place.name}<small>${place.state}</small></div><button class="remove-item" data-remove="${place.id}" aria-label="Remove ${place.name}">×</button></div>`;
  }).join("");
}

function toggleSaved(id) {
  const items = getItinerary();
  const updated = items.includes(id) ? items.filter(item => item !== id) : [...items, id];
  saveItinerary(updated);
}

function openDetails(id) {
  const place = places.find(item => item.id === id);
  if (!place) return;
  document.getElementById("dialogContent").innerHTML = `
    <div class="dialog-image" style="background-image:url('${place.image}')"></div>
    <div class="dialog-body">
      <div class="card-category">${place.state} · ${place.category}</div>
      <h2>${place.name}</h2>
      <p>${place.description}</p>
      <div class="detail-grid">
        <div class="detail-box"><b>Area</b><span>${place.area}</span></div>
        <div class="detail-box"><b>Opening information</b><span>${place.hours}</span></div>
        <div class="detail-box"><b>Entry fee</b><span>${place.fee}</span></div>
        <div class="detail-box"><b>Information status</b><span>Not independently verified</span></div>
      </div>
      <div class="verification"><b>Before you visit:</b> ${place.status}. Contact the attraction or relevant local tourism authority to confirm opening times, fees, access and safety conditions. This portal does not present unverified details as confirmed facts.</div>
      <div class="dialog-actions">
        <a class="dialog-map" href="${place.map}" target="_blank" rel="noopener">Open map directions ↗</a>
        <button class="dialog-save" data-dialog-save="${place.id}">${isSaved(place.id) ? "Remove from itinerary" : "Add to itinerary +"}</button>
      </div>
    </div>`;
  dialog.showModal();
}

filters.addEventListener("click", event => {
  const button = event.target.closest("[data-state]");
  if (!button) return;
  activeState = button.dataset.state;
  filters.querySelectorAll(".filter-chip").forEach(chip => chip.classList.toggle("selected", chip === button));
  renderPlaces();
});
searchInput.addEventListener("input", () => {
  searchTerm = searchInput.value.trim().toLowerCase();
  renderPlaces();
});
grid.addEventListener("click", event => {
  const save = event.target.closest("[data-save]");
  const details = event.target.closest("[data-details]");
  if (save) toggleSaved(save.dataset.save);
  if (details) openDetails(details.dataset.details);
});
document.getElementById("itineraryList").addEventListener("click", event => {
  const button = event.target.closest("[data-remove]");
  if (button) toggleSaved(button.dataset.remove);
});
document.getElementById("clearItinerary").addEventListener("click", () => saveItinerary([]));
document.getElementById("dialogClose").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {
  if (event.target === dialog) dialog.close();
  const save = event.target.closest("[data-dialog-save]");
  if (save) {
    toggleSaved(save.dataset.dialogSave);
    save.textContent = isSaved(save.dataset.dialogSave) ? "Remove from itinerary" : "Add to itinerary +";
  }
});
document.getElementById("showAllBtn").addEventListener("click", () => {
  activeState = "All";
  searchTerm = "";
  searchInput.value = "";
  filters.querySelectorAll(".filter-chip").forEach(chip => chip.classList.toggle("selected", chip.dataset.state === "All"));
  renderPlaces();
});
document.querySelectorAll(".experience-card").forEach(card => {
  card.addEventListener("click", () => {
    const category = card.dataset.category;
    searchInput.value = "";
    searchTerm = "";
    activeState = "All";
    filters.querySelectorAll(".filter-chip").forEach(chip => chip.classList.toggle("selected", chip.dataset.state === "All"));
    renderPlaces();
    const filtered = places.filter(place => place.category === category);
    grid.innerHTML = filtered.map(place => `
      <article class="destination-card">
        <div class="card-image" style="background-image:url('${place.image}')"><span class="card-state">${place.state.toUpperCase()}</span><button class="card-save ${isSaved(place.id) ? "saved" : ""}" data-save="${place.id}">${isSaved(place.id) ? "✓" : "+"}</button></div>
        <div class="card-body"><span class="card-category">${place.category} · ${place.area}</span><h3>${place.name}</h3><p>${place.description}</p><div class="card-bottom"><span>Visitor details: confirm</span><button class="card-details" data-details="${place.id}">VIEW DETAILS ↗</button></div></div>
      </article>`).join("");
    noResults.hidden = filtered.length > 0;
    document.getElementById("destinations").scrollIntoView({behavior:"smooth"});
  });
});
document.getElementById("menuToggle").addEventListener("click", () => {
  const nav = document.getElementById("mainNav");
  const open = nav.classList.toggle("open");
  document.getElementById("menuToggle").setAttribute("aria-expanded", String(open));
});
document.querySelectorAll(".main-nav a").forEach(link => link.addEventListener("click", () => {
  document.getElementById("mainNav").classList.remove("open");
  document.getElementById("menuToggle").setAttribute("aria-expanded", "false");
}));

renderPlaces();
renderItinerary();
