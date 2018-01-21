//Pulls data from the config file and puts it into a table
$(function() {
	var tableArray = [];
	$.getJSON('config.json', function(data) {
		$.each(data.tableData, function(i, f) {
            var tr = document.createElement("tr"),
                html = "";
            html += "<td class=tableRow>" + f.URL + "</td>";
            html += "<td class=tableRow>" + f.protocol + "</td>";
            html += "<td class=tableRow>" + f.secret + "</td>";
            tr.innerHTML=html;
			$(tr).appendTo("#table tbody");
		})
	})
})