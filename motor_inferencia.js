var express = require('express');
var router = express.Router();

router.get('/decision', function(req, res) {
	var mano = req.query.mano || 1;
	var jugadores = req.query.jugadores || 1;	

	//res.send("mano: "+mano+", jugadores: "+jugadores);
	res.send(mano);
});













module.exports = router;
