var express = require('express');
var router = express.Router();
'use strict';
var RuleEngine = require('node-rules/lib/node-rules');

router.get('/decision', function(req, res) {
	var mano = req.query.mano || 1;
	var jugadores = req.query.jugadores || 1;	

	inference_engine(mano,jugadores,res);
});

var rules = [
	{
		// Rule #1
	    "condition": function(R) {
	        R.when((this.mano == 1) && (this.jugadores == 1));
	    },
	    "consequence": function(R) {
	        this.result = '2';
	        R.stop();
	    }
	}, {
	    // Rule #2
	    "condition": function(R) {
	        R.when((this.mano == 2) && (this.jugadores == 1));
	    },
	    "consequence": function(R) {
	        this.result = '2';
	        R.stop();
	    }
	}, {
	    // Rule #3
	    "condition": function(R) {
	        R.when((this.mano == 3) && (this.jugadores == 1));
	    },
	    "consequence": function(R) {
	        this.result = '3';
	        R.stop();
	    }
	}, {
	    // Rule #4
	    "condition": function(R) {
	        R.when((this.mano == 4) && (this.jugadores == 1));
	    },
	    "consequence": function(R) {
	        this.result = '4';
	        R.stop();
	    }
	}, {
	    // Rule #5
	    "condition": function(R) {
	        R.when((this.mano == 5) && (this.jugadores == 1));
	    },
	    "consequence": function(R) {
	        this.result = '4';
	        R.stop();
	    }
	}, {
	    // Rule #6
	    "condition": function(R) {
	        R.when((this.mano == 6) && (this.jugadores == 1));
	    },
	    "consequence": function(R) {
	        this.result = '5';
	        R.stop();
	    }
	}, {
	    // Rule #7
	    "condition": function(R) {
	        R.when((this.mano == 7) && (this.jugadores == 1));
	    },
	    "consequence": function(R) {
	        this.result = '5';
	        R.stop();
	    }
	}, {
	    // Rule #8
	    "condition": function(R) {
	        R.when((this.mano == 8) && (this.jugadores == 1));
	    },
	    "consequence": function(R) {
	        this.result = '5';
	        R.stop();
	    }
	}, {
	    // Rule #9
	    "condition": function(R) {
	        R.when((this.mano == 9) && (this.jugadores == 1));
	    },
	    "consequence": function(R) {
	        this.result = '5';
	        R.stop();
	    }
	}
];

function inference_engine(mano, jugadores, res) {
	var R = new RuleEngine();
	R.register(rules);

	var fact = {
	    "mano": mano,
	    "jugadores": jugadores
	};

	R.execute(fact, function(data) {
		res.send(data.result);
	});
}

module.exports = router;
