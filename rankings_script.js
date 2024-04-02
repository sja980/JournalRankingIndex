$(document).ready( function () {
	var table = $('#myTable').DataTable({
		responsive: true,
		"scrollY": "700px",
	 	"pageLength": 50,
		"lengthMenu": [ [10, 25, 50, -1], [10, 25, 50, "All"] ],
		"processing": true,
	searchPanes: {
		columns: [1],
		orderable: false,
		viewTotal: true,
		initCollapsed: true},
	dom: 'Plfrtip'
});
});
