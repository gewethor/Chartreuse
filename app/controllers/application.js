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
	})
});
