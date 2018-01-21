function searchTable() {
	var input, filter, table, tr, td, i;
	input = document.getElementById("search");
	filter = input.value.toUpperCase();
	table = document.getElementById("configTable");
	tr = table.getElementsByTagName("tr");

	//Loop through all table rows and hide those that don't match the search
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[0];
		if (td) {
			if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}

//TIP: Remove toUpperCase() to perform case-sensitive search
//TIP: Change tr[i].getElementsByTagName('td')[0] to [1] to search for the 2nd column
//you change the [#] to search different columns