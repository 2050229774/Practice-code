var vm = new Vue({
	el   : "#app",
	data : {
		dao : false
	},
	methods:{
		fy: function(){
			this.dao = true;
		},
		fn : function(){
			this.dao = false;
		}
	}
});