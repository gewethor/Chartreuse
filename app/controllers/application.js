import Ember from 'ember';

export default Ember.Controller.extend({
	pieValue1: 300,
	pieValue2: 50,
	pieValue3: 100,
	pieData: Ember.computed('pieValue1', 'picValue2', 'pieValue3', function(){
		return {
		labels: ["Red", "Green", "Yellow"],
		datasets: [
				{
					data:[
						parseInt(this.get('pieValue1')),
						parseInt(this.get('pieValue2')),
						parseInt(this.get('pieValue3'))
					],
					backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
					hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870"]
				}
			]
		};
	}),
	pieValue4: 10,
	pieValue5: 70,
	pieValue6: 600,
	pieData2: Ember.computed('pieValue4', 'picValue5', 'pieValue6', function(){
		return {
		labels: ["Red", "Green", "Yellow"],
		datasets: [
				{
					data:[
						parseInt(this.get('pieValue4')),
						parseInt(this.get('pieValue5')),
						parseInt(this.get('pieValue6'))
					],
					backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
					hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870"]
				}
			]
		};
	}),
	pieValue7: 300,
	pieValue8: 50,
	pieValue9: 100,
	pieData3: Ember.computed('pieValue7', 'picValue8', 'pieValue9', function(){
		return {
		labels: ["Red", "Green", "Yellow"],
		datasets: [
				{
					data:[
						parseInt(this.get('pieValue7')),
						parseInt(this.get('pieValue8')),
						parseInt(this.get('pieValue9'))
					],
					backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
					hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870"]
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
			cell1.className = "inputValue"
			cell2.innerHTML = "Insert Description";
			cell2.className = "inputValue"
			cell3.innerHTML = "Insert Amount($0.00)";
			cell3.className = "inputValue"
			cell4.innerHTML = "<ul id='list'><select id='categories' class='inputValue' name='categories'><option>Select Option</option><option>Fast Food</option><option>Happy Hour</option></select></ul>";
			cell5.innerHTML = "<button contenteditable='false' type='button' {{action 'deleteRow' this}}> Delete </button>";
		},
		deleteRow: function(r){
			var i = r.parentNode.parentNode.rowIndex;
			document.getElementById('ITable').deleteRow(i);
		},
		submit: function(){
			var data = $("#ITable tr.data").map(function (index, elem) {
				var ret = [];
				$('.inputValue', this).each(function () {
					var d = $(this).val() || $(this).text();
					ret.push(d);
					console.log(d);
				});
				return ret;
			});
			console.log(data);
			var ftable = document.getElementById("ITable").innerHTML;
			console.log(ftable);
		}
		 
		/*  
		dateValid: function (dateString) {
			if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
        	return false;

    		var parts = dateString.split("/");
    		var day = parseInt(parts[1], 10);
    		var month = parseInt(parts[0], 10);
    		var year = parseInt(parts[2], 10);

    		if(year < 1000 || year > 3000 || month == 0 || month > 12)
        	return false;

    		var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

		    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        	monthLength[1] = 29;

    		return day > 0 && day <= monthLength[month - 1];
			} 
			*/
	}
});
