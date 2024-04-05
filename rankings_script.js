$(document).ready( function () {
	var table = $('#myTable').DataTable({
		responsive: true,
		"scrollY": "700px",
		"scrollX": true,
	 	"pageLength": 50,
		"lengthMenu": [ [10, 25, 50, -1], [10, 25, 50, "All"] ],
		"processing": true,
	searchPanes: {
		columns: [1, 3, 4, 16, 17],
		orderable: false,
		viewTotal: true,
		initCollapsed: true},
	dom: 'Plfrtip',

	columnDefs: [
		{className:"center", targets:[2] },
		{className: "none", targets: [3, 4, 16, 17] },
		{className: "all", targets: [0, 1, 2, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] },

//SJR Rankings //
{targets:[5], className:"center",
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
{targets:[6], className:"center",
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
{targets:[7], className:"center",
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
{targets:[8], className:"center",
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
{targets:[9], className:"center",
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
{targets:[10], className:"center",
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
{targets:[11], className:"center",
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
{targets:[12], className:"center",
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
{targets:[13], className:"center",
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
} );
