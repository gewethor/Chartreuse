import Ember from 'ember';

export default Ember.Controller.extend({
	pieValue1: 0,
	pieValue2: 0,
	pieValue3: 0,
	pieValue4: 0,
	pieValue5: 0,
	pieValue6: 0,
    pieValue7: 0,
	pieValue8: 11,
	pieValue9: 110,
	lastrow: 0,//last row for keeping track of input table rows
	init: function(){
	  this._super();
		var controllerObj = this;
		var tempcount1 = 0;
		var tempcount2 = 0;
		var tempcount3 = 0;
		var tempcount4 = 0;
		var tempcount5 = 0;
		var tempcount6 = 0;
		var tempcount7 = 0;
		Ember.$.getJSON('../api/bankdata/', function(response) {
			for (var alpha = 0; alpha < response.length; alpha++) {
				if (response[alpha].option === 'Fast Food') {
					tempcount1 += response[alpha].amount;
					controllerObj.set('pieValue1', tempcount1);
				} else if (response[alpha].option === 'Happy Hour') {
					tempcount2 += response[alpha].amount;
					controllerObj.set('pieValue2', tempcount2);
				} else if (response[alpha].option === 'Clothing') {
					tempcount3 += response[alpha].amount;
					controllerObj.set('pieValue3', tempcount3);
				} else if (response[alpha].option === 'Short Term Savings') {
					tempcount4 += response[alpha].amount;
					controllerObj.set('pieValue4', tempcount4);
				} else if (response[alpha].option === 'Long Term Savings') {
					tempcount5 += response[alpha].amount;
					controllerObj.set('pieValue5', tempcount5);
				} else if (response[alpha].option === 'Makeup') {
					tempcount6 += response[alpha].amount;
					controllerObj.set('pieValue6', tempcount6);
				} else if (response[alpha].option === 'Vacation Spending') {
					tempcount7 += response[alpha].amount;
					controllerObj.set('pieValue7', tempcount7);
				} else {
					console.log("Uh Oh!");
				}
			}
		});
	},
	pieData: Ember.computed('pieValue1', 'pieValue2', 'pieValue3', 'pieValue4', 'pieValue5', 'pieValue6', 'pieValue7', function(){
		return {
		labels: ["Fast Food", "Happy Hour", "Clothing", "Short Term Savings", "Long Term Savings", "Makeup", "Vacation Spending"],
		datasets: [
				{
					data:[
						parseFloat(this.get('pieValue1')),
						parseFloat(this.get('pieValue2')),
						parseFloat(this.get('pieValue3')),
						parseFloat(this.get('pieValue4')),
						parseFloat(this.get('pieValue5')),
						parseFloat(this.get('pieValue6')),
						parseFloat(this.get('pieValue7'))
					],
					backgroundColor: ["#986dc7", "#46BFBD", "#fe5e68", "#00ffff", "#33ffcc", "#4d79ff","#e6004c"],
					hoverBackgroundColor: ["#ae7cba", "#5AD3D1", "#fe625e", "#f0f8ff", "#3bffec", "#0039e6", "#990033"]
				}
			]
		};
	}),
	pieData2: Ember.computed('pieValue4', 'picValue5', 'pieValue6', function(){
		return {
		labels: ["Purple", "Green", "Bittersweet"],
		datasets: [
				{
					data:[
						parseInt(this.get('pieValue4')),
						parseInt(this.get('pieValue5')),
						parseInt(this.get('pieValue6'))
					],
					backgroundColor: ["#986dc7", "#46BFBD", "#fe5e68"],
					hoverBackgroundColor: ["#ae7cba", "#5AD3D1", "#fe625e"]
				}
			]
		};
	}),
	pieData3: Ember.computed('pieValue7', 'picValue8', 'pieValue9', function(){
		return {
		labels: ["Purple", "Green", "Bittersweet"],
		datasets: [
				{
					data:[
						parseInt(this.get('pieValue7')),
						parseInt(this.get('pieValue8')),
						parseInt(this.get('pieValue9'))
					],
					backgroundColor: ["#986dc7", "#46BFBD", "#fe5e68"],
					hoverBackgroundColor: ["#ae7cba", "#5AD3D1", "#fe625e"]
				}
			]
		};
	}),
	actions: {
		addrow: function(){
			var table = document.getElementById("ITable");
			var row = table.insertRow(-1);
			row.className = "data "+table.length+"rowid";
			this.set('lastrow', this.get('lastrow')+1);
			table.children[1].lastChild.id= "rowid-"+this.get('lastrow');
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);
			var cell4 = row.insertCell(3);
			var cell5 = row.insertCell(4);
			cell1.innerHTML = "Insert Date(MM/DD/YYYY)";
			cell1.className = "inputValue";
			cell2.innerHTML = "Insert Description";
			cell2.className = "inputValue";
			cell3.innerHTML = "Insert Amount(0.00)";
			cell3.className = "inputValue";
			cell4.innerHTML = "<ul id='list'><select id='categories' class='inputValue' name='categories'><option>Select Option</option><option>Fast Food</option><option>Happy Hour</option><option>Clothing</option><option>Short Term Savings</option><option>Long Term Savings</option><option>Makeup</option><option>Vacation Expense</option></select></ul>";
			cell5.innerHTML = "<button contenteditable='false' type='button' {{action 'deleterow'}}> Delete </button>";
		},
     	deleterow: function(id){ 
     		console.log(Ember.$('#rowid-'+id));
     		Ember.$('#rowid-'+id).remove();
     	}, 
		submit: function(){
			var test1 = 0;
			var test2 = 0;
			var test3 = 0;
/*			var data = Ember.$("#ITable tr.data").map(function () {
				var sub = [];
				Ember.$('.inputValue', this).each(function () {
					var d = Ember.$(this).val() || Ember.$(this).text();
					sub.push(d);
					console.log(d);
				});
				console.log('sub is:');
				console.log(sub);
				var postdata = {
					'user' : 1,
					'date' : sub[0],
					'desc' : sub[1],
					'amount': Number(sub[2]),
					'option': sub[3],
				};
				Ember.$.post('../api/bankdata/', postdata, function(response){
					console.log('Made request with response:');
					console.log(response);
				});
				return sub;

			});
*/
			for(var dcount = 0; dcount < data.length; dcount = dcount + 4){
				var re = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
				if(data[dcount].match(re) === null){
					alert("Please submit a date with the format MM/DD/YYYY.");
				}else {
				var parts = data[dcount].split("/");
				var day = parseInt(parts[1], 10);
				var month = parseInt(parts[0], 10);
				var year = parseInt(parts[2], 10);

				if(year < 1000 || year > 3000 || month === 0 || month > 12){
					alert("Please submit a valid date.");
					test1 = 1;
					return false, test1;
				} else {
					localStorage.setItem("Date"+dcount, data[dcount]);
				    test1 = 0;
				    return test1;
				}

				var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
				//if(year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)){
				//	monthLength[1] = 29;
				//	return day > 0 && day <= monthLength[month - 1];
				//}

				}
			}
			for(var desc = 1; desc < data.length; desc = desc + 4){
				var redesc = /^[a-zA-Z0-9]/;
				if(data[desc].match(redesc) === null){
					alert("Sorry! No special characters accepted.");
					test2 = 1;
					return test2;
				} else {
					localStorage.setItem("Description"+desc, data[desc]);
					test2 = 0;
					return test2;
				}
			}
			for(var ammo = 2; ammo < data.length; ammo = ammo + 4){
				var reammo = /^\d+(?:\.\d{0,2})$/;
				if(data[ammo].match(reammo) === null){
					alert("Please submit a valid curreny amount (0.00)");
					test3 = 1;
					return test3;
				} else {
					localStorage.setItem("Amount"+ammo, data[ammo]);
					test3 = 0;
					return test3;
				}
			}
			for(var opt = 3; opt < data.length; opt = opt + 4){
				localStorage.setItem("Option"+opt, data[opt]);
			}
			if (test1 === 1 || test2 === 1 || test3 === 1) {
				alert("You did something wrong!");
			} else {
				var data = Ember.$("#ITable tr.data").map(function () {
				var sub = [];
				Ember.$('.inputValue', this).each(function () {
					var d = Ember.$(this).val() || Ember.$(this).text();
					sub.push(d);
					console.log(d);
				});
				console.log('sub is:');
				console.log(sub);
				var postdata = {
					'user' : 1,
					'date' : sub[0],
					'desc' : sub[1],
					'amount': Number(sub[2]),
					'option': sub[3],
				};
				Ember.$.post('../api/bankdata/', postdata, function(response){
					console.log('Made request with response:');
					console.log(response);
				});
				return sub;

			});
			}
		},
		loaddata : function() {
			var table1 = document.getElementById('ITable2').getElementsByTagName('tbody')[0];
			Ember.$.getJSON('../api/bankdata/', function(response) {
			for (var beta = 0; beta < response.length; beta++) {
			var row1 = table1.insertRow(table1.rows.length);
			var cells1 = row1.insertCell(0);
			var cells2 = row1.insertCell(1);
			var cells3 = row1.insertCell(2);
			var cells4 = row1.insertCell(3);
			cells1.innerHTML = response[beta].date;
			cells2.innerHTML = response[beta].desc;
			cells3.innerHTML = response[beta].amount;
			cells4.innerHTML = response[beta].option;
			}
		});
		},
	}
});
