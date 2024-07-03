// Data source as JSON Array
const dataSet =  [
	["","Example Journal 1","GNRL",8,"Standard","NOA","Inv.","NDIS",3.43,5.11,6.3,"81%",20,61,89,4.6,94.59,"2%",400  ],
  	["","Example Journal 2","GNRL",41.5,"Standard","HYBD","Inv.","RTJA",2.74,4.13,5.5,"82%",39,78,87,4.64,96.58,"5%",200  ],
  	["","Example Journal 3","GNRL",75.75,"Standard","HYBD","Inv.","RTJA",1.53,2.1,3.2,"66%",34,48,86,4.64,95.16,"10%",250  ],
  	["","Example Journal 4","M&P",10,"SHort","HYBD","YBKR","RTJA",0.3,0.6,0.3,"22%",4,44,20,0.62,22.87,"50%",400  ]
]

var options = {
	
columns: [
	{ title: 'Rank',
		className: 'all'
	},
	{ title: 'Journal Name (Linked)',
		className: 'all'
	},
	{ title: 'Area',
		className: 'all'
	},
	{ title: '4YAP',
		className: 'all'
	},
	{ title: 'Paper Length',
		className: 'none'
	},
	{ title: 'Open Access',
		className: 'none'
	},
	{ title: 'Book Reviews',
		className: 'none'
	},
	{ title: 'Discussions',
		className: 'none'
	},
	{ title: 'SJR',
		className: 'all'
	},
	{ title: 'SNIP',
		className: 'all'
	},
	{ title: 'CiSc',
		className: 'all'
	},
	{ title: 'CTE%',
		className: 'all'
	},
	{ title: 'GSH5',
		className: 'all'
	},
	{ title: 'SJRH',
		className: 'all'
	},
	{ title: 'Leit',
		className: 'all'
	},
	{ title: 'BrQu',
		className: 'all'
	},
	{ title: 'BrAw',
		className: 'all'
	},
	{ title: 'Acpt',
		className: 'all'
	},
	{ title: 'Subs',
		className: 'all'
	},
],

data: dataSet,

initComplete: function (settings, json) {
	$("div.hider").removeAttr('hidden');
	$("div.loaders").remove();
	this.api().columns.adjust();
},

layout: {
	top1: 'searchPanes',
	topEnd: null
	},
order: [[8, 'desc']],

responsive: {
	details: {
		type: 'none'}
		},

"scrollY": "700px",
"scrollX": true,
"pageLength": 50,
"lengthMenu": [ [10, 25, 50, -1], [10, 25, 50, "All"] ],
"processing": true,
searchPanes: {
	columns: [2, 4, 5, 6, 7],
	orderable: false,
	viewTotal: true,
	initCollapsed: true,
	layout: 'columns-5'},

columnDefs: [

//One way ordering for metrics so they match index (find a better solution?)//
{ orderSequence: ['desc'], targets: [3, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18] },
{ orderSequence: ['asc'], targets: [17] },

//Set don't search and don't order columns//
{ searchable: false, targets: [0] },
{ orderable: false, targets: [0, 1, 2] },

//formatting//
{className:"dt-body-center", targets:[0, 3] },

//SJR Rankings //
{targets:[8], className:"dt-body-center",
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

// SNIP Rankings //
{targets:[9], className:"dt-body-center",
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

// CiSC //
{targets:[10], className:"dt-body-center",
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

// CTE% //
{targets:[11], className:"dt-body-center",
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

// GSH5 //
{targets:[12], className:"dt-body-center",
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

// SJRH //
{targets:[13], className:"dt-body-center",
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


// Letier //
{targets:[14], className:"dt-body-center",
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

// dBQu //
{targets:[15], className:"dt-body-center",
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

// dBAw //
{targets:[16], className:"dt-body-center",
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

var deeplink = $.fn.dataTable.ext.deepLink( [ 'search.search', 'order', 'displayStart', 'searchCols'] );

var config = $.extend(options, deeplink)

$(document).ready( function () {
var table =	$('#myTable').DataTable(config);
	
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
