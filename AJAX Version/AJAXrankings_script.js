var emptystringtobottom = DataTable.absoluteOrderNumber( { value: '', position: 'bottom' } );

var options = {

	ajax: {
    // Link to JSON array
		url: '../RankingDataJSON.txt',
		dataSrc: ''
	},

	columns: [
		{ data: 'Rank'},
		{ data: 'Journal Name (Linked)'},
		{ data: 'Area'},
		{ data: '4YAP'},
		{ data: 'Paper Length'},
		{ data: 'Open Access'},
		{ data: 'Book Reviews'},
		{ data: 'Discussions'},
		{ data: 'SJR'},
		{ data: 'SNIP'},
		{ data: 'CiSc'},
		{ data: 'CTE%'},
		{ data: 'GSH5'},
		{ data: 'SJRH'},
		{ data: 'Leit'},
		{ data: 'BrQu'},
		{ data: 'BrAw'},
		{ data: 'Acpt'},
		{ data: 'Subs'},
	],

initComplete: function (settings, json) {
		$("div.hider").removeAttr('hidden');
		$("div.loaders").remove();
		this.api().columns.adjust();
},

layout: {
		bottom2: 'searchPanes',
},

responsive: {
		details: {
				type: 'column',
				target: 'none',
		}
},

searchPanes: {
		columns: [4, 5, 6, 7],
		orderable: false,
		viewTotal: true,
		initCollapsed: true,
		layout: 'columns-4'
},


searchDelay: 500,
order: [[8, 'desc']],
scrollY: "700px",
scrollX: true,
pageLength: 50,
lengthMenu: [ [10, 25, 50, -1], [10, 25, 50, "All"] ],
processing: true,

columnDefs: [

//One way odering for mertics so they match index (find better solution?)//
{ orderSequence: ['desc'], targets: [3, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18] },
{ orderSequence: ['asc'], targets: [17] },

//Set don't search and don't order columns//
{ searchable: false, targets: [0] },
{ orderable: false, targets: [0, 1, 2, 4, 5, 6, 7] },

//formatting//
{ className:"dt-body-center", targets:[0, 2, 3, 4, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18] },

//SJR Rankings //
{targets:[8],
	render: function(data){
	if(parseFloat(data)>=1.5){
	return "<div class='topfive'>"+ data +"</div>";}

	else if (parseFloat(data)>=0.5){
	return "<div class='QOne'>"+ data +"</div>";}

	else if (parseFloat(data)>=0.3){
	return "<div class='QTwo'>"+ data +"</div>";}

	else if (parseFloat(data)>=0.15){
	return "<div class='QThree'>"+ data +"</div>";}

	else if (parseFloat(data)>=0){
	return "<div class='QFour'>"+ data +"</div>";}
return data }},

// SNIP Rankings //
{targets:[9],
	render: function(data){
	if(parseFloat(data)>=2){
	return "<div class='topfive'>"+ data +"</div>";}

	else if (parseFloat(data)>=1.25){
	return "<div class='QOne'>"+ data +"</div>";}

	else if (parseFloat(data)>=0.8){
	return "<div class='QTwo'>"+ data +"</div>";}

	else if (parseFloat(data)>=0.35){
	return "<div class='QThree'>"+ data +"</div>";}

	else if (parseFloat(data)>=0){
	return "<div class='QFour'>"+ data +"</div>";}
return data }},

// CiSC //
{targets:[10],
	render: function(data){
	if(parseFloat(data)>=4){
	return "<div class='topfive'>"+ data +"</div>";}

	else if (parseFloat(data)>=1.7){
	return "<div class='QOne'>"+ data +"</div>";}

	else if (parseFloat(data)>=1){
	return "<div class='QTwo'>"+ data +"</div>";}

	else if (parseFloat(data)>=0.4){
	return "<div class='QThree'>"+ data +"</div>";}

	else if (parseFloat(data)>=0){
	return "<div class='QFour'>"+ data +"</div>";}
return data }},

// CTE% //
{targets:[11],
	render: function(data){
	if(parseFloat(data)>=70){
	return "<div class='topfive'>"+ data +"</div>";}

	else if (parseFloat(data)>=60){
	return "<div class='QOne'>"+ data +"</div>";}

	else if (parseFloat(data)>=40){
	return "<div class='QTwo'>"+ data +"</div>";}

	else if (parseFloat(data)>=25){
	return "<div class='QThree'>"+ data +"</div>";}

	else if (parseFloat(data)>=0){
	return "<div class='QFour'>"+ data +"</div>";}
return data }},

// GSH5 //
{targets:[12],
	render: function(data){
	if(parseFloat(data)>=30){
	return "<div class='topfive'>"+ data +"</div>";}

	else if (parseFloat(data)>=15){
	return "<div class='QOne'>"+ data +"</div>";}

	else if (parseFloat(data)>=10){
	return "<div class='QTwo'>"+ data +"</div>";}

	else if (parseFloat(data)>=5){
	return "<div class='QThree'>"+ data +"</div>";}

	else if (parseFloat(data)>=0){
	return "<div class='QFour'>"+ data +"</div>";}
return data }},

// SJRH //
{targets:[13],
	render: function(data){
	if(parseFloat(data)>=70){
	return "<div class='topfive'>"+ data +"</div>";}

	else if (parseFloat(data)>=35){
	return "<div class='QOne'>"+ data +"</div>";}

	else if (parseFloat(data)>=15){
	return "<div class='QTwo'>"+ data +"</div>";}

	else if (parseFloat(data)>=5){
	return "<div class='QThree'>"+ data +"</div>";}

	else if (parseFloat(data)>=0){
	return "<div class='QFour'>"+ data +"</div>";}
return data }},


// Letier //
{targets:[14],
	render: function(data){
	if(parseFloat(data)>=80){
	return "<div class='topfive'>"+ data +"</div>";}

	else if (parseFloat(data)>=65){
	return "<div class='QOne'>"+ data +"</div>";}

	else if (parseFloat(data)>=50){
	return "<div class='QTwo'>"+ data +"</div>";}

	else if (parseFloat(data)>=0){
	return "<div class='QThree'>"+ data +"</div>";}

return data }},

// dBQu //
{targets:[15],
	render: function(data){
	if(parseFloat(data)>=4.5){
	return "<div class='topfive'>"+ data +"</div>";}

	else if (parseFloat(data)>=4){
	return "<div class='QOne'>"+ data +"</div>";}

	else if (parseFloat(data)>=3.5){
	return "<div class='QTwo'>"+ data +"</div>";}

	else if (parseFloat(data)>=3){
	return "<div class='QThree'>"+ data +"</div>";}

	else if (parseFloat(data)>=0){
	return "<div class='QFour'>"+ data +"</div>";}
return data }},

// dBAw //
{targets:[16],
	render: function(data){
	if(parseFloat(data)>=90){
	return "<div class='topfive'>"+ data +"</div>";}

	else if (parseFloat(data)>=95){
	return "<div class='QOne'>"+ data +"</div>";}

	else if (parseFloat(data)>=80){
	return "<div class='QTwo'>"+ data +"</div>";}

	else if (parseFloat(data)>=60){
	return "<div class='QThree'>"+ data +"</div>";}

	else if (parseFloat(data)>=0){
	return "<div class='QFour'>"+ data +"</div>";}
return data }},

// Acpt% //
{targets:[17], type: emptystringtobottom,
	render: function(data){
	if(parseFloat(data)>=40){
	return "<div class='QFour'>"+ data +"</div>";}

	else if (parseFloat(data)>=20){
	return "<div class='QThree'>"+ data +"</div>";}

	else if (parseFloat(data)>=10){
	return "<div class='QTwo'>"+ data +"</div>";}

	else if (parseFloat(data)>=5){
	return "<div class='QOne'>"+ data +"</div>";}

	else if (parseFloat(data)>=0){
	return "<div class='topfive'>"+ data +"</div>";}
return data }},

// Subs //
{targets:[18],
	render: function(data){
	if(parseFloat(data)>=600){
	return "<div class='topfive'>"+ data +"</div>";}

	else if (parseFloat(data)>=200){
	return "<div class='QOne'>"+ data +"</div>";}

	else if (parseFloat(data)>=100){
	return "<div class='QTwo'>"+ data +"</div>";}

	else if (parseFloat(data)>=0){
	return "<div class='QThree'>"+ data +"</div>";}
return data }},

]}

var deeplink = $.fn.dataTable.ext.deepLink( [ 'search.search', 'order', 'displayStart', 'searchCols'] );

var config = $.extend(options, deeplink)

$(document).ready( function () {
	const table =	$('#myTable').DataTable(config);


//adding incremental values to index column//
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
