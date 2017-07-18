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
	}, {
	    // Rule #10
	    "condition": function(R) {
	        R.when((this.mano == 1) && (this.jugadores == 2));
	    },
	    "consequence": function(R) {
	        this.result = '1';
	        R.stop();
	    }
	}, {
	    // Rule #11
	    "condition": function(R) {
	        R.when((this.mano == 2) && (this.jugadores == 2));
	    },
	    "consequence": function(R) {
	        this.result = '2';
	        R.stop();
	    }
	}, {
	    // Rule #12
	    "condition": function(R) {
	        R.when((this.mano == 3) && (this.jugadores == 2));
	    },
	    "consequence": function(R) {
	        this.result = '2';
	        R.stop();
	    }
	}, {
	    // Rule #13
	    "condition": function(R) {
	        R.when((this.mano == 4) && (this.jugadores == 2));
	    },
	    "consequence": function(R) {
	        this.result = '2';
	        R.stop();
	    }
	}, {
	    // Rule #14
	    "condition": function(R) {
	        R.when((this.mano == 5) && (this.jugadores == 2));
	    },
	    "consequence": function(R) {
	        this.result = '3';
	        R.stop();
	    }
	}, {
	    // Rule #15
	    "condition": function(R) {
	        R.when((this.mano == 6) && (this.jugadores == 2));
	    },
	    "consequence": function(R) {
	        this.result = '4';
	        R.stop();
	    }
	}, {
	    // Rule #16
	    "condition": function(R) {
	        R.when((this.mano == 7) && (this.jugadores == 2));
	    },
	    "consequence": function(R) {
	        this.result = '5';
	        R.stop();
	    }
	}, {
	    // Rule #17
	    "condition": function(R) {
	        R.when((this.mano == 8) && (this.jugadores == 2));
	    },
	    "consequence": function(R) {
	        this.result = '5';
	        R.stop();
	    }
	},{
		// Rule #18
	    "condition": function(R) {
	        R.when((this.mano == 9) && (this.jugadores == 2));
	    },
	    "consequence": function(R) {
	        this.result = '5';
	        R.stop();
	    }
	}, {
	    // Rule #19
	    "condition": function(R) {
	        R.when((this.mano == 1) && (this.jugadores == 3));
	    },
	    "consequence": function(R) {
	        this.result = '1';
	        R.stop();
	    }
	}, {
	    // Rule #20
	    "condition": function(R) {
	        R.when((this.mano == 2) && (this.jugadores == 3));
	    },
	    "consequence": function(R) {
	        this.result = '1';
	        R.stop();
	    }
	}, {
	    // Rule #21
	    "condition": function(R) {
	        R.when((this.mano == 3) && (this.jugadores == 3));
	    },
	    "consequence": function(R) {
	        this.result = '2';
	        R.stop();
	    }
	}, {
	    // Rule #22
	    "condition": function(R) {
	        R.when((this.mano == 4) && (this.jugadores == 3));
	    },
	    "consequence": function(R) {
	        this.result = '2';
	        R.stop();
	    }
	}, {
	    // Rule #23
	    "condition": function(R) {
	        R.when((this.mano == 5) && (this.jugadores == 3));
	    },
	    "consequence": function(R) {
	        this.result = '3';
	        R.stop();
	    }
	}, {
	    // Rule #24
	    "condition": function(R) {
	        R.when((this.mano == 6) && (this.jugadores == 3));
	    },
	    "consequence": function(R) {
	        this.result = '4';
	        R.stop();
	    }
	}, {
	    // Rule #25
	    "condition": function(R) {
	        R.when((this.mano == 7) && (this.jugadores == 3));
	    },
	    "consequence": function(R) {
	        this.result = '4';
	        R.stop();
	    }
	}, {
	    // Rule #26
	    "condition": function(R) {
	        R.when((this.mano == 8) && (this.jugadores == 3));
	    },
	    "consequence": function(R) {
	        this.result = '5';
	        R.stop();
	    }
	},{
		// Rule #27
	    "condition": function(R) {
	        R.when((this.mano == 9) && (this.jugadores == 3));
	    },
	    "consequence": function(R) {
	        this.result = '5';
	        R.stop();
	    }
	}, {
	    // Rule #28
	    "condition": function(R) {
	        R.when((this.mano == 1) && (this.jugadores == 4));
	    },
	    "consequence": function(R) {
	        this.result = '1';
	        R.stop();
	    }
	}, {
	    // Rule #29
	    "condition": function(R) {
	        R.when((this.mano == 2) && (this.jugadores == 4));
	    },
	    "consequence": function(R) {
	        this.result = '1';
	        R.stop();
	    }
	}, {
	    // Rule #30
	    "condition": function(R) {
	        R.when((this.mano == 3) && (this.jugadores == 4));
	    },
	    "consequence": function(R) {
	        this.result = '2';
	        R.stop();
	    }
	}, {
	    // Rule #31
	    "condition": function(R) {
	        R.when((this.mano == 4) && (this.jugadores == 4));
	    },
	    "consequence": function(R) {
	        this.result = '2';
	        R.stop();
	    }
	}, {
	    // Rule #32
	    "condition": function(R) {
	        R.when((this.mano == 5) && (this.jugadores == 4));
	    },
	    "consequence": function(R) {
	        this.result = '2';
	        R.stop();
	    }
	}, {
	    // Rule #33
	    "condition": function(R) {
	        R.when((this.mano == 6) && (this.jugadores == 4));
	    },
	    "consequence": function(R) {
	        this.result = '3';
	        R.stop();
	    }
	}, {
	    // Rule #34
	    "condition": function(R) {
	        R.when((this.mano == 7) && (this.jugadores == 4));
	    },
	    "consequence": function(R) {
	        this.result = '4';
	        R.stop();
	    }
	}, {
	    // Rule #35
	    "condition": function(R) {
	        R.when((this.mano == 8) && (this.jugadores == 4));
	    },
	    "consequence": function(R) {
	        this.result = '4';
	        R.stop();
	    }
	},{
		// Rule #36
	    "condition": function(R) {
	        R.when((this.mano == 9) && (this.jugadores == 4));
	    },
	    "consequence": function(R) {
	        this.result = '5';
	        R.stop();
	    }
	}, {
	    // Rule #37
	    "condition": function(R) {
	        R.when((this.mano == 1) && (this.jugadores == 5));
	    },
	    "consequence": function(R) {
	        this.result = '1';
	        R.stop();
	    }
	}, {
	    // Rule #38
	    "condition": function(R) {
	        R.when((this.mano == 2) && (this.jugadores == 5));
	    },
	    "consequence": function(R) {
	        this.result = '1';
	        R.stop();
	    }
	}, {
	    // Rule #39
	    "condition": function(R) {
	        R.when((this.mano == 3) && (this.jugadores == 5));
	    },
	    "consequence": function(R) {
	        this.result = '1';
	        R.stop();
	    }
	}, {
	    // Rule #40
	    "condition": function(R) {
	        R.when((this.mano == 4) && (this.jugadores == 5));
	    },
	    "consequence": function(R) {
	        this.result = '1';
	        R.stop();
	    }
	}, {
	    // Rule #41
	    "condition": function(R) {
	        R.when((this.mano == 5) && (this.jugadores == 5));
	    },
	    "consequence": function(R) {
	        this.result = '2';
	        R.stop();
	    }
	}, {
	    // Rule #42
	    "condition": function(R) {
	        R.when((this.mano == 6) && (this.jugadores == 5));
	    },
	    "consequence": function(R) {
	        this.result = '2';
	        R.stop();
	    }
	}, {
	    // Rule #43
	    "condition": function(R) {
	        R.when((this.mano == 7) && (this.jugadores == 5));
	    },
	    "consequence": function(R) {
	        this.result = '3';
	        R.stop();
	    }
	}, {
	    // Rule #44
	    "condition": function(R) {
	        R.when((this.mano == 8) && (this.jugadores == 5));
	    },
	    "consequence": function(R) {
	        this.result = '4';
	        R.stop();
	    }
	},{
		// Rule #45
	    "condition": function(R) {
	        R.when((this.mano == 9) && (this.jugadores == 5));
	    },
	    "consequence": function(R) {
	        this.result = '5';
	        R.stop();
	    }
	}, {
	    // Rule #46
	    "condition": function(R) {
	        R.when((this.mano == 1) && (this.jugadores == 6));
	    },
	    "consequence": function(R) {
	        this.result = '1';
	        R.stop();
	    }
	}, {
	    // Rule #47
	    "condition": function(R) {
	        R.when((this.mano == 2) && (this.jugadores == 6));
	    },
	    "consequence": function(R) {
	        this.result = '1';
	        R.stop();
	    }
	}, {
	    // Rule #48
	    "condition": function(R) {
	        R.when((this.mano == 3) && (this.jugadores == 6));
	    },
	    "consequence": function(R) {
	        this.result = '1';
	        R.stop();
	    }
	}, {
	    // Rule #49
	    "condition": function(R) {
	        R.when((this.mano == 4) && (this.jugadores == 6));
	    },
	    "consequence": function(R) {
	        this.result = '1';
	        R.stop();
	    }
	}, {
	    // Rule #50
	    "condition": function(R) {
	        R.when((this.mano == 5) && (this.jugadores == 6));
	    },
	    "consequence": function(R) {
	        this.result = '2';
	        R.stop();
	    }
	}, {
	    // Rule #51
	    "condition": function(R) {
	        R.when((this.mano == 6) && (this.jugadores == 6));
	    },
	    "consequence": function(R) {
	        this.result = '2';
	        R.stop();
	    }
	}, {
	    // Rule #52
	    "condition": function(R) {
	        R.when((this.mano == 7) && (this.jugadores == 6));
	    },
	    "consequence": function(R) {
	        this.result = '3';
	        R.stop();
	    }
	}, {
	    // Rule #53
	    "condition": function(R) {
	        R.when((this.mano == 8) && (this.jugadores == 6));
	    },
	    "consequence": function(R) {
	        this.result = '4';
	        R.stop();
	    }
	}, {
	    // Rule #54
	    "condition": function(R) {
	        R.when((this.mano == 9) && (this.jugadores == 6));
	    },
	    "consequence": function(R) {
	        this.result = '4';
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
