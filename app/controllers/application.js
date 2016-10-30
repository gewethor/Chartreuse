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
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);
			var cell4 = row.insertCell(3);
			cell1.innerHTML = "Insert Date(MM/DD/YYYY)";
			cell2.innerHTML = "Insert Description";
			cell3.innerHTML = "Insert Amount($0.00)";
			cell4.innerHTML = "<button contenteditable='false' type='button' {{action 'delrow'}}> Delete </button>";
		},
		delrow: function(){
			var row = document.getElementByTagName("tr");
			var spot = row.rowIndex;
			document.getElementById("ITable").deleteRow(spot);
		}
	}
});
