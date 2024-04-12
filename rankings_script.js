$(document).ready( function () {
	var table = $('#myTable').DataTable({
		order: [[8, 'desc']],
		responsive: {details: {type: 'none'}},
		"scrollY": "700px",
		"scrollX": true,
	 	"pageLength": 50,
		"lengthMenu": [ [10, 25, 50, -1], [10, 25, 50, "All"] ],
		"processing": true,
		searchPanes: {
			columns: [2, 4, 5, 6, 7],
			orderable: false,
			viewTotal: true,
			initCollapsed: true},
		dom: 'Plfrtip',
		columnDefs: [
			//One-way ordering for metrics so they match index//
			{ orderSequence: ['desc'], targets: [3, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18] },
			{ orderSequence: ['asc'], targets: [17] },

			//Set don't search and don't order columns//
			{ searchable: false, targets: [0] },
			{ orderable: false, targets: [0, 1, 2] },

			//formatting//
			{className:"center", targets:[0, 3] },
			{className: "font", targets: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]},

			//responsive table - selects which columns to show and which to put into the drop-down menu//
			{className: "none", targets: [4, 5, 6, 7] },
			{className: "all", targets: [0, 1, 2, 3, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18] },

			//Conditional formatting for SJR Rankings //
			{targets:[8], className:"center",
				render: function(data){
					if(parseFloat(data)>=2){
					  return "<div class='Top'>"+ data +"</div>";}
					else if ((parseFloat(data)>=1) && ((parseFloat(data)<2))){
					  return "<div class='Great'>"+ data +"</div>";}
					else if ((parseFloat(data)>=0.5) && ((parseFloat(data)<1))){
					  return "<div class='Good'>"+ data +"</div>";}
					else if ((parseFloat(data)>=0.25) && ((parseFloat(data)<0.5))){
					  return "<div class='Ok'>"+ data +"</div>";}
					else if ((parseFloat(data)>=0) && ((parseFloat(data)<0.25))){
					  return "<div class='Poor'>"+ data +"</div>";}
				return data }},

			//Conditional formatting for SNIP Rankings //
			{targets:[9], className:"center",
				render: function(data){
					if(parseFloat(data)>=2.5){
					  return "<div class='Top'>"+ data +"</div>";}
					else if ((parseFloat(data)>=2) && ((parseFloat(data)<2.5))){
					  return "<div class='Great'>"+ data +"</div>";}
					else if ((parseFloat(data)>=1) && ((parseFloat(data)<2))){
					  return "<div class='Good'>"+ data +"</div>";}
					else if ((parseFloat(data)>=0.5) && ((parseFloat(data)<1))){
					  return "<div class='Ok'>"+ data +"</div>";}
					else if ((parseFloat(data)>=0) && ((parseFloat(data)<0.5))){
					  return "<div class='Poor'>"+ data +"</div>";}
				return data }},

			//Conditional formatting for CiteScore //
			{targets:[10], className:"center",
				render: function(data){
					if(parseFloat(data)>=4){
					  return "<div class='Top'>"+ data +"</div>";}
					else if ((parseFloat(data)>=2) && ((parseFloat(data)<4))){
					  return "<div class='Great'>"+ data +"</div>";}
					else if ((parseFloat(data)>=1) && ((parseFloat(data)<2))){
					  return "<div class='Good'>"+ data +"</div>";}
					else if ((parseFloat(data)>=0.5) && ((parseFloat(data)<1))){
					  return "<div class='Ok'>"+ data +"</div>";}
					else if ((parseFloat(data)>=0) && ((parseFloat(data)<0.5))){
					  return "<div class='Poor'>"+ data +"</div>";}
				return data }},

			//Conditional formatting for CTE% //
			{targets:[11], className:"center",
				render: function(data){
					if(parseFloat(data)>=80){
					  return "<div class='Top'>"+ data +"</div>";}
					else if ((parseFloat(data)>=65) && ((parseFloat(data)<80))){
					  return "<div class='Great'>"+ data +"</div>";}
					else if ((parseFloat(data)>=50) && ((parseFloat(data)<65))){
					  return "<div class='Good'>"+ data +"</div>";}
					else if ((parseFloat(data)>=30) && ((parseFloat(data)<50))){
					  return "<div class='Ok'>"+ data +"</div>";}
					else if ((parseFloat(data)>=0) && ((parseFloat(data)<30))){
					  return "<div class='Poor'>"+ data +"</div>";}
				return data }},

			//Conditional formatting for GoogleScholar H5 //
			{targets:[12], className:"center",
				render: function(data){
					if(parseFloat(data)>=30){
					  return "<div class='Top'>"+ data +"</div>";}
					else if ((parseFloat(data)>=20) && ((parseFloat(data)<30))){
					  return "<div class='Great'>"+ data +"</div>";}
					else if ((parseFloat(data)>=12) && ((parseFloat(data)<20))){
					  return "<div class='Good'>"+ data +"</div>";}
					else if ((parseFloat(data)>=6) && ((parseFloat(data)<12))){
					  return "<div class='Ok'>"+ data +"</div>";}
					else if ((parseFloat(data)>=0) && ((parseFloat(data)<7))){
					  return "<div class='Poor'>"+ data +"</div>";}
				return data }},

			//Conditional formatting for SJR H-Index //
			{targets:[13], className:"center",
				render: function(data){
					if(parseFloat(data)>=70){
					  return "<div class='Top'>"+ data +"</div>";}
					else if ((parseFloat(data)>=50) && ((parseFloat(data)<70))){
					  return "<div class='Great'>"+ data +"</div>";}
					else if ((parseFloat(data)>=30) && ((parseFloat(data)<50))){
					  return "<div class='Good'>"+ data +"</div>";}
					else if ((parseFloat(data)>=10) && ((parseFloat(data)<30))){
					  return "<div class='Ok'>"+ data +"</div>";}
					else if ((parseFloat(data)>=0) && ((parseFloat(data)<10))){
					  return "<div class='Poor'>"+ data +"</div>";}
				return data }},

			//Conditional formatting for Letier Rankings //
			{targets:[14], className:"center",
				render: function(data){
					if(parseFloat(data)>=80){
					  return "<div class='Top'>"+ data +"</div>";}
					else if ((parseFloat(data)>=65) && ((parseFloat(data)<80))){
					  return "<div class='Great'>"+ data +"</div>";}
					else if ((parseFloat(data)>=50) && ((parseFloat(data)<65))){
					  return "<div class='Good'>"+ data +"</div>";}
					else if ((parseFloat(data)>=0) && ((parseFloat(data)<50))){
					  return "<div class='Ok'>"+ data +"</div>";}
				return data }},

			//Conditional formatting for dBQu //
			{targets:[15], className:"center",
				render: function(data){
					if(parseFloat(data)>=4.5){
					  return "<div class='Top'>"+ data +"</div>";}
					else if ((parseFloat(data)>=4) && ((parseFloat(data)<4.5))){
					  return "<div class='Great'>"+ data +"</div>";}
					else if ((parseFloat(data)>=3.5) && ((parseFloat(data)<4))){
					  return "<div class='Good'>"+ data +"</div>";}
					else if ((parseFloat(data)>=3) && ((parseFloat(data)<3.5))){
					  return "<div class='Ok'>"+ data +"</div>";}
					else if ((parseFloat(data)>=0) && ((parseFloat(data)<3))){
					  return "<div class='Poor'>"+ data +"</div>";}
				return data }},

			//Conditional formatting for dBAw //
			{targets:[16], className:"center",
				render: function(data){
					if(parseFloat(data)>=95){
					  return "<div class='Top'>"+ data +"</div>";}
					else if ((parseFloat(data)>=90) && ((parseFloat(data)<95))){
					  return "<div class='Great'>"+ data +"</div>";}
					else if ((parseFloat(data)>=80) && ((parseFloat(data)<90))){
					  return "<div class='Good'>"+ data +"</div>";}
					else if ((parseFloat(data)>=60) && ((parseFloat(data)<80))){
					  return "<div class='Ok'>"+ data +"</div>";}
					else if ((parseFloat(data)>=0) && ((parseFloat(data)<60))){
					  return "<div class='Poor'>"+ data +"</div>";}
				return data }},
	]}
	);

//Creating an index column with incremental values//
table
	.on('order.dt search.dt', function () {
		let i = 1;

table
	.cells(null, 0, { search: 'applied', order: 'applied' })
		.every(function (cell) {
                	this.data(i++);
	});
    })
.draw();
});
