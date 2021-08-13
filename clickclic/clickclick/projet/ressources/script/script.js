var golds = 0;
var wood = 0;

var golds_reduit= 0;
var wood_reduit=0;
var x = 1;
var click = 0;
var total_minions=0;
var Val_click = 1;

var gps=0;
var wps=0;
var pps=0;

var ammount =0;

var minions = [
    { id: 0, name: "wooden_pickaxe", cost: 10, gps: 0.1, owned: 0, boost: 1},
    { id: 1, name: "stone_pickaxe", cost: 100, gps: 1, owned: 0, boost: 1 },
    { id: 2, name: "iron_pickaxe", cost: 500, gps: 5, owned: 0, boost: 1}
]; 

var minions_axe = [
		{ id : 0, name: "wooden_axe", cost: 200, wps: 1, owned: 0, boost: 1},
		{ id : 1, name: "stone_axe", cost: 500, wps: 5, owned: 0, boost: 1},
		{ id : 2, name: "iron_axe", cost: 1000, pps: 1, owned: 0, boost: 1}
];

function save() {
	localStorage.setItem("golds", golds)
	localStorage.setItem("wood", wood)

	localStorage.setItem("gps", gps)

	localStorage.setItem("wooden_pickaxe", minions[0]['owned'])
	localStorage.setItem("stone_pickaxe", minions[1]['owned'])
	localStorage.setItem("iron_pickaxe", minions[2]['owned'])

	localStorage.setItem("prix_wooden", minions[0]['cost'])
	localStorage.setItem("prix_stone", minions[1]['cost'])
	localStorage.setItem("prix_iron", minions[2]['cost'])
	
	localStorage.setItem("gps_wooden", minions[0]['gps'])
	localStorage.setItem("gps_stone", minions[1]['gps'])
	localStorage.setItem("gps_iron", minions[2]['gps'])

	localStorage.setItem("boost_wooden", minions[0]['boost'])
	localStorage.setItem("boost_stone", minions[1]['boost'])
	localStorage.setItem("boost_iron", minions[2]['boost'])

	localStorage.setItem("total_minions", total_minions)
	localStorage.setItem("Val_click", Val_click)

	localStorage.setItem("click", click)

	localStorage.setItem("wooden_axe", minions_axe[0]['owned'])
	localStorage.setItem("wooden_axe_wps", minions_axe[0]['wps'])
	localStorage.setItem("wooden_axe_prix", minions_axe[0]['cost'])
	
	localStorage.setItem("stone_axe", minions_axe[1]['owned'])
	localStorage.setItem("stone_axe_wps", minions_axe[1]['wps'])
	localStorage.setItem("stone_axe_prix", minions_axe[1]['cost'])
	
	localStorage.setItem("iron_axe", minions_axe[2]['owned'])
	localStorage.setItem("iron_axe_pps", minions_axe[2]['pps'])
	localStorage.setItem("iron_axe_prix", minions_axe[2]['cost'])
}
function load() {
	golds = localStorage.getItem("golds");
	golds = parseFloat(golds);

	wood = localStorage.getItem("wood");
	wood = parseFloat(wood);



	gps = localStorage.getItem("gps");
	gps = parseFloat(gps);



	minions[0]['owned'] = localStorage.getItem("wooden_pickaxe");
	minions[0]['owned'] = parseInt(minions[0]['owned']);

	minions[1]['owned'] = localStorage.getItem("stone_pickaxe");
	minions[1]['owned'] = parseInt(minions[1]['owned']);

	minions[2]['owned'] = localStorage.getItem("iron_pickaxe");
	minions[2]['owned'] = parseInt(minions[2]['owned']);



	minions[0]['cost'] = localStorage.getItem("prix_wooden");
	minions[0]['cost'] = parseFloat(minions[0]['cost'])
	
	minions[1]['cost'] = localStorage.getItem("prix_stone");
	minions[1]['cost'] = parseFloat(minions[1]['cost'])

	minions[2]['cost'] = localStorage.getItem("prix_iron");
	minions[2]['cost'] = parseFloat(minions[2]['cost'])
	


minions[0]['gps'] = localStorage.getItem("gps_wooden");
minions[0]['gps'] = parseFloat(minions[0]['gps'])

minions[1]['gps'] = localStorage.getItem("gps_stone");
minions[1]['gps'] = parseFloat(minions[1]['gps'])

minions[2]['gps'] = localStorage.getItem("gps_iron");
minions[2]['gps'] = parseFloat(minions[2]['gps'])



minions[0['boost']] = localStorage.getItem("boost_wooden")
minions[0['boost']] = parseInt(minions[0]['boost'])

minions[1['boost']] = localStorage.getItem("boost_stone")
minions[1['boost']] = parseInt(minions[0]['boost'])

minions[2['boost']] = localStorage.getItem("boost_iron")
minions[2]['boost'] = parseInt(minions[0]['boost'])



minions_axe[0]['owned'] = localStorage.getItem("wooden_axe");
minions_axe[0]['owned'] = parseInt(minions_axe[0]['owned']);

minions_axe[0]['wps'] = localStorage.getItem("wooden_axe_wps");
minions_axe[0]['wps'] = parseInt(minions_axe[0]['wps']);

minions_axe[0]['cost'] = localStorage.getItem("wooden_axe_prix");
minions_axe[0]['cost'] = parseInt(minions_axe[0]['cost']);



minions_axe[1]['owned'] = localStorage.getItem("stone_axe");
minions_axe[1]['owned'] = parseInt(minions_axe[1]['owned']);

minions_axe[1]['wps'] = localStorage.getItem("stone_axe_wps");
minions_axe[1]['wps'] = parseInt(minions_axe[1]['wps']);

minions_axe[1]['cost'] = localStorage.getItem("stone_axe_prix");
minions_axe[1]['cost'] = parseInt(minions_axe[1]['cost']);



minions_axe[2]['owned'] = localStorage.getItem("iron_axe");
minions_axe[2]['owned'] = parseInt(minions_axe[2]['owned']);

minions_axe[2]['pps'] = localStorage.getItem("iron_axe_pps");
minions_axe[2]['pps'] = parseInt(minions_axe[2]['wps']);

minions_axe[2]['cost'] = localStorage.getItem("iron_axe_prix");
minions_axe[2]['cost'] = parseInt(minions_axe[2]['cost']);



	total_minions = localStorage.getItem("total_minions");
	total_minions = parseInt(total_minions);

	Val_click = localStorage.getItem("Val_click");
	Val_click = parseInt(Val_click);

	

	click = localStorage.getItem("click");
	click = parseInt(click);

	displayRessources() 
	displayPrice()
	displayAutoC()
	displayGPS()
	displayGPC()
} 

function addGold(x) {
	//ajouter des golds
	click = click +1;
	golds = golds + x;
	displayRessources()
}	

function addWood(x) {
	//ajouter des woods
	click = click +1;
	wood = wood + x;
	displayRessources()
}	

function displayRessources() {
	if (golds < 1000000000) {
		if (golds < 1000000) {
			if (golds < 1000) {
				golds_reduit = golds
				document.getElementById("total_golds").innerHTML = "Golds: "+golds_reduit.toFixed(1);
			} else {
				golds_reduit = golds / 1000;
				document.getElementById("total_golds").innerHTML = "Golds: "+golds_reduit.toFixed(1)+"k";
			}
		} else {
			golds_reduit = golds / 1000000;
			document.getElementById("total_golds").innerHTML = "Golds: "+golds_reduit.toFixed(1)+"m";
		}
	} else {
		golds_reduit = golds / 1000000000;
		document.getElementById("total_golds").innerHTML = "Golds: "+golds_reduit.toFixed(1)+"M";
	}
	
	if (wood < 1000000000) {
		if (wood < 1000000) {
			if (wood < 1000) {
				wood_reduit = wood
				document.getElementById("total_wood").innerHTML = "Bois: "+wood_reduit.toFixed(1);
			} else {
				wood_reduit = wood / 1000;
				document.getElementById("total_wood").innerHTML = "Bois: "+wood_reduit.toFixed(1)+"k";
			}
		} else {
			wood_reduit = wood / 1000000;
			document.getElementById("total_wood").innerHTML = "Bois "+wood_reduit.toFixed(1)+"m";
		}
	} else {
		wood_reduit = wood / 1000000000;
		document.getElementById("total_wood").innerHTML = "Bois: "+wood_reduit.toFixed(1)+"M";
	}
}

function displayGPS() {
	document.getElementById("nbr_gps").innerHTML = gps.toFixed(1) + " golds/s";
	document.getElementById("nbr_gps_wood").innerHTML = wps.toFixed(1) + " bois/s";

	document.getElementById("foreach_wooden_pickaxe").innerHTML = "Vous gagnez " + minions[0]['gps'] + "gps pour une (" +  (minions[0]['gps']*minions[0]['owned']).toFixed(1) + " total gps)"
	document.getElementById("foreach_stone_pickaxe").innerHTML = "Vous gagnez " + minions[1]['gps'] + " gps pour une (" + (minions[1]['gps']*minions[1]['owned']).toFixed(1) + " total gps)"
	document.getElementById("foreach_iron_pickaxe").innerHTML = "Vous gagnez " + minions[2]['gps'] + "gps pour une (" + (minions[2]['gps']*minions[2]['owned']).toFixed(1) + " total gps)"

	document.getElementById("foreach_wooden_axe").innerHTML = "Vous gagnez  "+ minions_axe[0]['wps'] + "wps pour une (" +  (minions_axe[0]['wps']*minions_axe[0]['owned']).toFixed(1) + " total gps)"
	document.getElementById("foreach_stone_axe").innerHTML = "Vous gagnez " + minions_axe[1]['wps'] + "wps pour une ("  + (minions_axe[1]['wps']*minions_axe[1]['owned']).toFixed(1) + " total gps)"
	document.getElementById("foreach_iron_axe").innerHTML = "Vous gagnez " + minions_axe[2]['pps'] + " pps pour une ("  + (minions_axe[2]['pps']*minions_axe[2]['owned']).toFixed(1) + " total gps)"
}

function displayPrice() {
    //afficher les prix
	document.getElementById("price_wooden_pickaxe").innerHTML = "Une pioche en bois vous coute: " + minions[0]['cost'].toFixed(1) + " golds";
	document.getElementById("price_stone_pickaxe").innerHTML = "Une pioche en pierre vous coute: " + minions[1]['cost'].toFixed(1) + " golds";
	document.getElementById("price_iron_pickaxe").innerHTML = "Une pioche en fer vous coute: " + minions[2]['cost'].toFixed(1) + " golds";

	document.getElementById("price_wooden_axe").innerHTML = "Une hache en bois vous coute: " + minions_axe[0]['cost'].toFixed(1) + " woods";
	document.getElementById("price_stone_axe").innerHTML = "Une hache en pierre vous coute: "  + minions_axe[1]['cost'].toFixed(1) + " woods";
	document.getElementById("price_iron_axe").innerHTML = "Une hache en fer vous coute: "  + minions_axe[2]['cost'].toFixed(1) + " woods";
}

function displayAutoC() {
	//afficher les autoclicks
	document.getElementById("nbr_minions").innerHTML = "Vous avez " + total_minions + " améliorations";

	document.getElementById("nbr_wooden_pickaxe").innerHTML = "Vous avez " + minions[0]['owned'] + " pioche en bois";
	document.getElementById("nbr_stone_pickaxe").innerHTML = "Vous avez "  + minions[1]['owned'] + " pioche en pierre";
	document.getElementById("nbr_iron_pickaxe").innerHTML = "Vous avez "  + minions[2]['owned'] + " pioche en fer";

	document.getElementById("nbr_wooden_axe").innerHTML = "Vous avez " + minions_axe[0]['owned'] + " hache en bois";
	document.getElementById("nbr_stone_axe").innerHTML = "Vous avez " + minions_axe[1]['owned'] + " hache en pierre";
	document.getElementById("nbr_iron_axe").innerHTML = "Vous avez "  + minions_axe[2]['owned'] + " hache en fer";
}
function start_gps() {
	golds = golds + gps;
	displayRessources()
}
setInterval(start_gps, 1000);

function start_wps() {
	wood = wood + wps;
	displayRessources()
}
setInterval(start_wps, 1000);

function start_pps() {
	minions[0]['owned'] = minions[0]['owned'] + pps;
	displayAutoC()
}
setInterval(start_pps, 1000);


function buyminions(id) {
    if (golds >= minions[id]['cost']) {
            golds = golds - minions[id]['cost'];
            minions[id]['cost'] = minions[id]['cost']*1.15;
            minions[id]['owned'] = minions[id]['owned'] + 1;
            
            total_minions = total_minions + 1;
						
						if (minions[id]['owned'] == minions[id]['boost']*25) {
							minions[id]['gps'] = minions[id]['gps'] * 2;
							minions[id]['boost'] = minions[id]['boost'] * 2;
 						}
						 
						 gps = (minions[0]['gps']*minions[0]['owned']) + (minions[1]['gps']*minions[1]['owned']) + (minions[2]['gps']*minions[2]['owned']);
						
						 if (total_minions == (50*Val_click)) {
							Val_click = Val_click * 2;
						}

        displayRessources()
		    displayPrice()
		    displayAutoC()
				displayGPS()
				displayGPC()
        }
}         

function buyminions_axe(id) {
	if (wood >= minions_axe[id]['cost']) {
					wood = wood - minions_axe[id]['cost'];
					minions_axe[id]['cost'] = minions_axe[id]['cost']*1.15;
					minions_axe[id]['owned'] = minions_axe[id]['owned'] + 1;
					
					total_minions = total_minions + 1;
					
					if (minions_axe[id]['owned'] == minions_axe[id]['boost']*25) {
						minions_axe[id]['gps'] = minions_axe[id]['gps'] * 2;
						minions_axe[id]['boost'] = minions_axe[id]['boost'] * 2;
					 }
					 
					 gps = (minions[0]['gps']*minions[0]['owned']) + (minions[1]['gps']*minions[1]['owned']) + (minions[2]['gps']*minions[2]['owned']);
					 wps = (minions_axe[0]['wps']*minions_axe[0]['owned']) + (minions_axe[1]['wps']*minions_axe[1]['owned']);
					 pps = (minions_axe[0]['pps']*minions_axe[0]['owned']);
					 if (total_minions == (50*Val_click)) {
						Val_click = Val_click * 2;
					}

			displayRessources()
			displayPrice()
			displayAutoC()
			displayGPS()
			displayGPC()
			}
}
function stats() {
	alert("Blocks mined: " + click + '\n' + "Blocks/click: " + Val_click);
}
function info() {
	alert("gps: Gold par seconde" + '\n' + "wps: wood par seconde" + '\n' + "pps: pioche par seconde" + '\n' + " " + '\n' +  "k = 1 000" + '\n' + "m = 1 000 000"+ '\n' +  "M = 1 000 000 000") 
}