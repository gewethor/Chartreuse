import Ember from 'ember';

export default Ember.Controller.extend({
	pieValue1: 300,
	pieValue2: 50,
	pieValue3: 100,
	pieData: Ember.computed('pieValue1', 'picValue2', 'pieValue3', function(){
		return {
		labels: ["Purple", "Green", "Bittersweet"],
		datasets: [
				{
					data:[
						parseInt(this.get('pieValue1')),
						parseInt(this.get('pieValue2')),
						parseInt(this.get('pieValue3'))
					],
					backgroundColor: ["#986dc7", "#46BFBD", "#fe5e68"],
					hoverBackgroundColor: ["#ae7cba", "#5AD3D1", "#fe625e"]
				}
			]
		};
	}),
	pieValue4: 10,
	pieValue5: 70,
	pieValue6: 600,
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
	pieValue7: 300,
	pieValue8: 50,
	pieValue9: 100,
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
			var row = table.insertRow(table.length);
			row.className = "data";
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
			cell5.innerHTML = "<button contenteditable='false' type='button' {{action 'deleteRow'}}> Delete </button>";
		}, 
     	deleterow: function(){   

     	}, 
		submit: function(){
			var data = $("#ITable tr.data").map(function () {
				var sub = [];
				$('.inputValue', this).each(function () {
					var d = $(this).val() || $(this).text();
					sub.push(d);
					console.log(d);
				});
				return sub;
			});
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
					return false;
				}

				var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

				//if(year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)){
				//	monthLength[1] = 29;
				//	return day > 0 && day <= monthLength[month - 1];
				//}
				localStorage.setItem("Date"+dcount, data[dcount]);
				}
			}
			for(var desc = 1; desc < data.length; desc = desc + 4){
				var redesc = /^[a-zA-Z0-9]/;
				if(data[desc].match(redesc) === null){
					alert("Sorry! No special characters accepted.");
				} else {
					localStorage.setItem("Description"+desc, data[desc]);
				}
			}
			for(var ammo = 2; ammo < data.length; ammo = ammo + 4){
				var reammo = /^\d+(?:\.\d{0,2})$/;
				if(data[ammo].match(reammo) === null){
					alert("Please submit a valid curreny amount (0.00)");
				} else {
					localStorage.setItem("Amount"+ammo, data[ammo]);
				}
			}
			for(var opt = 3; opt < data.length; opt = opt + 4){
				localStorage.setItem("Option"+opt, data[opt]);
			}
		}
	}
});
