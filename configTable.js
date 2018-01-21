//Pulls tracks from the config file
$(function() {
	var tracks = [];
	$.getJSON('config.json', function(data) {
		$.each(data.tracks, function(i, f) {
            var tr = document.createElement("tr"),
                html = "";
            html += "<td class=trackRow>" + f.domain + "</td>";
            html += "<td class=trackRow>" + f.port + "</td>";
            html += "<td class=trackRow>" + f.apiKey + "</td>";
            tr.innerHTML=html;
			$(tr).appendTo("#trackConfig tbody");
		})
	})
})