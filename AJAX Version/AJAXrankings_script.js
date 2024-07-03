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
		topEnd: null
},
order: [[8, 'desc']],
responsive: {
 details: {
		 type: 'none'
 }
},
"scrollY": "700px",
"scrollX": true,
"pageLength": 50,
"lengthMenu": [ [10, 25, 50, -1], [10, 25, 50, "All"] ],
"processing": true,
searchPanes: {
columns: [4, 5, 6, 7],
orderable: false,
viewTotal: true,
initCollapsed: true,
layout: 'columns-5'},

columnDefs: [

//One way odering for mertics so they match index (find better solution?)//
{ orderSequence: ['desc'], targets: [3, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18] },
{ orderSequence: ['asc'], targets: [17] },

//Set don't search and don't order columns//
{ searchable: false, targets: [0] },
{ orderable: false, targets: [0, 1, 2] },

//formatting//
{className:"dt-body-center", targets:[0, 2, 3, 4, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18] },

//SJR Rankings //
{targets:[8],
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
{targets:[9],
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
{targets:[10],
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
{targets:[11],
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
{targets:[12],
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
{targets:[13],
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
{targets:[14],
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
{targets:[15],
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
{targets:[16],
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
