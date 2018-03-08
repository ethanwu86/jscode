<<<<<<< HEAD
var num=1;
// this is a comment;
var data=[0,10,'44'];

=======
var nbelems = ixforten_model.nb_elems();
for (var i = 0; i < nbelems; i++) {
	var obj = ixforten_model.element(i);
	if (obj.get_property("fem_type") == "beam") {
		var nodeA = obj.node(0);
		var nodeB = obj.node(1);
		nodeA.set_property("restraint", 63);
		nodeB.set_property("restraint", 63);
		
	}
}
>>>>>>> 4a7c88080b8bcf6973d16b67fa6b64ff59ad5d9e
