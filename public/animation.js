/* global createjs, AdobeAn */

(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



// stage content:
(lib.animationthatends = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// play_button_copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ap8J8QkHkHAAl1QAAl0EHkHQEIkIF0AAQF1AAEIEIQEHEHAAF0QAAF1kHEHQkIEIl1AAQl0AAkIkIg");
	this.shape.setTransform(750,380);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ap8J9QkHkIAAl1QAAl0EHkIQEIkHF0AAQF1AAEIEHQEHEIAAF0QAAF1kHEIQkIEHl1AAQl0AAkIkHg");
	this.shape_1.setTransform(750,393.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAOEQlzAAkIkHIgBgBQkHkHAAl1QAAjbBci2IAAgBIAAAAQBAh8BqhrIACgCQEHkIF0AAIABAAQFzAAEJEIQEHEHAAF0IAAABIAAAGIAAAcQgLE3jGDpIgFAGQgXAZgZAZIgCACQkGEGl0ABIgCAAg");
	this.shape_2.setTransform(750,461.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAOEQlzAAkIkGIgBgBQkHkIAAl0IAAgBQAAjcBci2QBAh9BqhrIACgCQEHkHF0AAIABAAQF0AAEIEHQEHEIAAF0IAAABIAAAGIAAAcQgLE3jGDoIgGAHQgXAagYAZIgCACQkHEFlzABIgCAAg");
	this.shape_3.setTransform(750,502.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAAOEQlzAAkIkHIgBgBQkHkHAAl1IAAAAQAAjcBci2IAAgBIABAAQA/h8BqhrIACgCQEIkHFzAAIABAAQF0AAEIEHQEGEIABF0IAAAAIAAAHIAAAcQgLE3jGDoIgGAHQgXAagZAZIgCACQkGEFlzABIgCAAg");
	this.shape_4.setTransform(750,543.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAAOEQl0gBkHkGIgBgBQkHkHAAl0IAAgBQAAjcBdi2IAAgBQA/h8BqhrIACgCQEIkHFzAAIABAAQF0AAEIEIQEGEHABFzIAAACIAAAFIAAAdQgLE3jGDpIgGAHQgXAZgZAZIgCACQkHEFlyABIgCAAg");
	this.shape_5.setTransform(750,585);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgBOEQlzAAkHkHIgBgBQkHkIAAlzIAAgBQAAjdBdi1IAAgBIAAAAQBAh9BqhrIACgCQEHkGFzAAIACAAQFzABEIEGQEGEIABFzIAAACIAAAGIAAAcQgLE3jHDpIgFAHQgYAZgYAZIgDADQkGEElzABIgCAAg");
	this.shape_6.setTransform(750,626.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgBOEQlzAAkHkHIgBgBQkHkIAAlzIAAgBQAAjdBdi2IAAgBIAAAAQBAh8BqhrIACgCQEHkGFzAAIACAAQF0ABEHEGQEGEIABFzIAAABIAAAHIAAAcQgLE3jHDpIgGAHQgWAagZAZIgDACQkGEFlzAAIgCAAg");
	this.shape_7.setTransform(750,667.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgBOEQlzgBkIkHIgBgBQkFkGgBl0IAAgBQAAjdBdi2IAAAAIABgBQA/h8BqhrIACgCQEIkGFyAAIACAAQFzAAEIEIQEGEHABFyIAAACIAAAGIAAAcQgLE4jHDpIgGAIQgXAZgYAYIgDADQkHEFlyAAIgCAAg");
	this.shape_8.setTransform(750,708.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ap8J9QkHkIAAl1QAAjdBdi2IAAgBIABAAQA/h9BqhrQEIkHF0AAQF1AAEIEHQEHEIAAF0IAAAGIAAAdQgLE3jHDpIgGAIQgXAZgYAZQkIEHl1AAQl0AAkIkHg");
	this.shape_9.setTransform(750,750);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhaOEQhcgDhSgWQimgth7h2QhCg9g7hLQg8hOgrhSQiAjcgFkcIAAgDIAAgCQAAiqA3iJQAYg0AeguIAAgBIABAAQA6hYBVhEIAygmQCFhgCUg1QCxhGDMAQQB+AIBzAnQDmBLCrCzQBuByA9CFIACAFIAJAWQA7CvgdDGIgBAGIgEAbQgLBBgTA9IgCAIQgLAhgMAgQhIC0iMCMIgHAHQgYAXgaAXQhAA0hDAnQiiBkjFAlQhQAPhRAAIgPAAg");
	this.shape_10.setTransform(748.5499,751.6651);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ai9OGQhfgEhRgdQihg9hkiLQg2hGgxhQQgwhWgkhWQhyjjgIkqIAAgDIAAgCQgDi0A/iGQAbg0AlgpIAAgBQBChPBhgxIA1gcQCRhHCZgqQC3g9DRAeQB+AQB1AxQDrBaCpC4QBuB5A8CJIABAGIAHAXQAoC0g6DAIgBAFIgIAbQgTA+gcA6IgEAIQgOAfgQAfQhdCuiWCAIgHAGQgbAWgdAUQhEAwhHAhQipBZjOAoQhLANhKAAIggAAg");
	this.shape_11.setTransform(747.8668,753.0973);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AklOJQhjgGhQgkQiahMhOigQgqhQgmhVQgmhdgchaQhljqgMk4IAAgCIAAgCQgDi+BFiEQAfgzAqglIAAAAIABAAQBKhGBsgfIA5gTQCdgtCdgfQC+g1DWAuQB9AYB4A5QDxBrCmC8QBuB/A6CPIABAFIAFAYQAVC5hXC7IgCAFIgLAZQgbA7glA3IgFAIIgmA7QhyCqigBzIgIAGQgdAUgfASQhJArhMAbQivBOjXAqQhLANhHAAIgogBg");
	this.shape_12.setTransform(747.7339,754.3672);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AmSOOQhmgIhQgrQiUhag3i3QgehYgchaQgbhlgUheQhXjxgPlFIAAgCIgBgBIABgBQgGjJBMiBQAkgyAwghIAAAAQBSg9B3gMIA9gJIFKgnQDFguDbA9QB9AhB6BCQD3B7CjDAQBvCFA3CVIABAFIAEAZQABC8h0C2IgCAFIgQAZQgjA4guA0IgGAHIgtA5QiHCkiqBoIgIAFQggASghAQQhOAmhQAWQi2BCjhAsQhIANhDAAQgaAAgZgCg");
	this.shape_13.setTransform(748.0501,755.4888);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AoBOVQhpgLhPgyQiOhpggjMIgkjAIgcjPQhKj4gTlTIAAgCIgBgBIABgBQgHjTBTh+QAogxA1gdQBcg0CBAGIBAABQC2AFClgHQDLgmDgBMQB+ApB8BMQD9CLCfDEQBwCLA1CaIAAAFIADAaQgTDBiQCxIgDAFIgTAXQgsA1g2AyQgEADgDAEIg2A1QicCfi0BcIgJAFQgiAQgiAOQhUAhhUAQQi8A2jrAvQhIANhDAAQgcAAgcgCg");
	this.shape_14.setTransform(748.525,756.4902);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ApvOzQhsgNhPg5QiHh3gKjiIgNjPIgKjaQg8j/gYlhIAAgBIAAgBIAAgBQgHjdBZh8QAsgxA7gXIAAgBQBkgrCMAZIBEAKQDCAfCpAEQDRgeDlBcQB+AxB/BVQECCbCdDIQBxCRAyCgIAAAFIABAaQgmDGitCsIgEAEIgWAWQg0Azg/AuQgFADgEAEIg9AzQixCZi+BRIgJAEQglAOgkAMQhZAchZAKQjCArj1AxQhHANhAAAQghAAgfgDg");
	this.shape_15.setTransform(748.996,755.0749);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ArfPbQhvgPhOhAQiCiGANj3QAGh0ADhpQAHh8ADhqQgwkGgalvIAAgBIgBgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQgKjnBhh5QAwgwBAgTQBtgiCWArQAlALAkAJQDNA4CuAPQDYgWDpBrQB/A5CABfQEJCqCZDNQBxCYAxCjQgBACAAAEQgBAMABAPQg6DMjJCmIgFAEIgaAVQg8AvhIAsQgGACgEAEIhEAwQjHCVjIBEIgKADQgnANgmAJQheAYhcAEQjKAgj+A0QhHAMg/AAQgkAAgigEg");
	this.shape_16.setTransform(749.5574,752.6843);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AwNOuQh7iVAjkNQAokSAUjLQgikNgfl9IAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQgKjxBnh3QCLh8EFBjQEHBqDRAgQFWgWF4ErQHaFIBrGKQgBACAAAEQgCANAAAPQhpEbmCDDQgHACgEAEIhMAtQl4D0lWgHQjRAVkHA2QhGANg9AAQinAAhmhdg");
	this.shape_17.setTransform(750.0123,750.0153);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ArNO4QiugohdidQhSisAXj8QAbkIANjXQgXkfgUlqIAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAxiCB9gxQCagyDrBkQD4BuDUA9QFWAwFtEGQC6B4CVB+QAzC0gmDEIgCAFIgLAWQivDtlqCyIgLAFIhNAqQlwDYlaAyQh+AbiMAkQhAgXhEgTg");
	this.shape_18.setTransform(742.6716,752.9139);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AuFNxQhXiAgui6QgpjDAMjrQANj8AHjlQgMkygKlVIAAgBIAAgBIACAAQBtgTCTAWQCpAZDRBkQDoBzDWBaQFXB1FjDhQC5BuCnByQhgCRiNCaIgEADIgTARQj1C+lTChIgKAFIhOAnQloC8leBpQh/AriFAuQgfg9gjg8g");
	this.shape_19.setTransform(745.5892,755.9043);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AxLxLMAiXASvMgiXAPog");
	this.shape_20.setTransform(750,750);
	this.shape_20._off = true;

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("At/xLIb/SvI7/Pog");
	this.shape_21.setTransform(758.175,750);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Av5xLIfzSvI/zPog");
	this.shape_22.setTransform(755.475,750);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AxzxLMAjnASvMgjnAPog");
	this.shape_23.setTransform(752.725,750);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AztxLMAnbASvMgnbAPog");
	this.shape_24.setTransform(750.025,750);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AySxLMAklASvMgklAPog");
	this.shape_25.setTransform(750.025,750);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Aw2xLMAhtASvMghtAPog");
	this.shape_26.setTransform(750.025,750);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AvbxLIe3SvI+3Pog");
	this.shape_27.setTransform(750.025,750);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AvD0TIeHWJI+HSeg");
	this.shape_28.setTransform(750.025,750.025);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AwH3bMAgPAZkMggPAVSg");
	this.shape_29.setTransform(750,750);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AxL6iMAiXAc8MgiXAYJg");
	this.shape_30.setTransform(750,750.025);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AxL4CMAiXAaOMgiXAV3g");
	this.shape_31.setTransform(750,750.025);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AxL1iMAiXAXfMgiXATmg");
	this.shape_32.setTransform(750,750);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AxLzDMAiXAUxMgiXARVg");
	this.shape_33.setTransform(750,750);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AxLykMAiXAUQMgiXAQ6g");
	this.shape_34.setTransform(750,750);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AxLyHMAiXATwMgiXAQfg");
	this.shape_35.setTransform(750,750.025);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AxLxpMAiXATPMgiXAQEg");
	this.shape_36.setTransform(750,750);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1,p:{y:393.35}}]},1).to({state:[{t:this.shape_1,p:{y:406.65}}]},1).to({state:[{t:this.shape_1,p:{y:420}}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21,p:{x:758.175}}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_21,p:{x:750.025}}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(22).to({_off:false},0).to({_off:true},1).wait(17).to({_off:false},0).wait(31));

	// rectangle_copy
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("EgdrAj8QppAAmmkZQlRjhjFmKQiNkZg5lRQgShqgIhiIgDhOIAAvnQAAhbAGhVQAknsDwllQDglOGKjJQEaiQFRg+QCogfBxgDITBAAIJUAAIJjAAIVfAAQJnAAGlEaQFQDgDGGKQCOEZA6FSQAQBfAIBNQAFA8ABAxIAAPnQAAJnkZGmQjhFQmKDHQkZCMlSA6QhpAShiAIIhOAEg");
	this.shape_37.setTransform(750,750);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("EgVMAmTQkUgIkOgdQlPggkXiBQjThbiyiKQjui5iskIQg+heg0hnQh1jmhCkDQgRhEgOhEIgOhMIgMhMIgGg2IgHhPIgqtLQgEhVgDhTQgDhcAEhXQANlTB2kQQA6iHBThzQBwibCch3QCriEDchXQA8gYA+gUQCIgrCFgbQB3gUB8gNQCmgSB4ADQJzAVJfggIA2gDQDOgQDJgeIB9gUQD8glEDghIBUgJQHbg7HLAGQDjAGDdAVQFXAeEZCHQDKBbCrCHQDZCrCiDvQBNBxBAB/QBkDKBADhQAZBZASBZIAFAVIAQBZIAMBWQAHA7ADAzIAmMLQAGB1ADByQANGjiAFFQhBCmhoCKQhhCBiABnQi8CYj8BdQgpAPgpAOQhjAfhmAYIhNAPQiGAWiMANQhqAJhjACIhPAAQqUgapyArQjGATi9AjQkeA4krAtQm1BGm0AAIhaAAg");
	this.shape_38.setTransform(750.0905,750.8804);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("EgVMAoqQkZgQkMg6QlEhAkQiqQjIhxiriYQjkjLiqkOQg+hhg1hoQh5jshKkCQgUhEgQhFIgQhMQgJgngGgmIgIg3IgKhQIhTtVQgJhXgFhUQgHhdABhYQADlcB4kTQA7iJBZhyQB1iYCphuQC0h4DohDQA+gTBBgPQCSgfCDgOQB5gGB9gDQCigFCAAHQKHAqJdhAIA2gGQDOggDDg7IB4gnQDxhMD/hAIBTgTQHlh3HFANQDnALDcAqQFOA8EQCyQC+BxCjCXQDNC8CfD3QBMB1BACBQBmDOBFDiQAdBdATBXIAGAVQAKAvAIArIAOBXQAJA7AFA0IBMMVQAMB2AHBzQAaGtiFFHQhECphwCGQhpB8iNBeQjHCGkKBDQgrALgsAJQhmAVhoAOIhQAHQiJAGiLAAQhrABhlgEIhPgEQqugzpoBVQjEAmiyBHQkIBwkfBaQm1CNm0AAIhXgBg");
	this.shape_39.setTransform(750.1309,751.7812);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("EgVNArBQkcgXkLhYQk4hgkKjRQi9iIijinQjbjeipkTQg9hkg3hoQh8jxhSkCQgWhGgShEIgUhNQgJgogIgnIgKg3IgMhQIh9tgQgOhYgHhUQgKhfgChZQgHllB5kWQA8iMBehwQB7iWC2hlQC+hrDzgxQBAgNBEgJQCcgUCAgBID5APQCgAICHAMQKaA/JchfIA2gKQDOgvC9haIBzg7QDmhwD7hiIBRgcQHwixG+ASQDsARDbA/QFEBaEHDdQCyCGCcCnQDCDOCbD+QBLB6BACCQBoDTBKDjQAgBfAWBWIAFAWQAMAvAJArIAQBZIASBwQA5GSA6GLQARB5AKBzQAnG4iJFJQhGCsh6CCQhvB3iaBUQjUB0kYApQgsAHguAFQhqALhrADIhSAAIkXgWIjSgSIhQgHQrHhNpeB/QjCA5ioBqQjwCokUCIQmzDTmzAAQgsAAgsgCg");
	this.shape_40.setTransform(750.1517,752.6456);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("EgVMAtYQkhgfkIh1QktiAkDj6Qizieici1QjRjwinkZQg+hng3hpQiAj3hakBQgZhGgUhFIgWhOQgLgogJgnIgLg4IgQhRQhTm5hTmxQgShagLhVQgNhggEhaQgSltB7kZQA9iPBjhvQCCiTDDhcQDHhfD+gdQBDgIBGgEQClgIB+AMQB/AWB+ARQCdAVCOARQKtBTJah/IA2gMQDPhAC3h3QA2goA3gmQDciXD3iBQAogUAogSQH6jtG4AZQDxAWDZBUQE6B4D/EIQCmCcCUC3QC2DfCYEGQBKB+BACEQBqDYBPDjQAjBjAYBUIAGAWQAOAwAJArIATBaIAWBxQBLGXBNGQQAYB6ANB0QAzHCiNFLQhJCviDB+Qh2ByimBLQjgBiknAPQgtADgwAAQhvABhtgHIhUgIQiOgciMgXQhsgRhogPIhQgLQrhhmpUCqQjABLieCOQjZDgkIC1QmzEZmxAAQgrAAgsgCg");
	this.shape_41.setTransform(750.1244,753.5464);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("EgVLAvuQpohRniopQmGmjkjn2QjSlkiKlsQgshzgehoQgNgpgKgoQh4oGh4n4QgWhcgNhVQhTntCcliQCOlOFwiVQEGhnFiALQCvADB7AZQQqEkNVj0QDPhPCyiWQD6j0ExjLQIylaHTAiQJQBCGkILQFUGJERHuQDDFbCHFtQAmBmAZBTQATA9ANA0QB1IIB4H2QCUJpi3GiQiPFRl4CJQkQBdlygdQhzgKhvgRQgtgJgqgHQxnlasiEiQi+BfiSCwQjCEZj9DiQmxFgmwAAQgrAAgsgEg");
	this.shape_42.setTransform(750.0832,754.426);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("EgTdAu9QkogUkPiFQkdiMkAkBQmSl7k/nTIgwhHQiCjChqjGQg2hmgwhnQgzhrgkhiQgQgmgMgnQgfhkgehlQgsiPgniQQg+jegzjiIgPg8QgVhbgLhVIAAgBQgjjcAQjGQAJhzAZhpIACgGQAKgpAMgnQATg8Aag6IABgDQCQlJFYikQBxg1CDghQBWgVBfgNIABAAQBMgLBRgEIAcgBQCUgHBuALQEBAvD6AXQCNAOCLAFQFfAQFLgrQDTgcDIg1IARgFQCgg6CRhhQApgcApggQBPhFBRhCIBIg4QB1haB5hUIBcg/QFzjmFGhYQCcglCUACQD3ANDgBhQEsCDD8ERQFiFmErHJQAkA2AiA3QB+DIBpDRQAkBHAgBIQArBfAfBOQAXA6AQAxQAsCOApCOQAtCWApCXQA4DKAwDNIAJAoQAaB3ANBzQAZDcgZDEQgMBhgZBZIgIAcQgNArgQApIgSArIgTAtQgaA0gfAwQiUDhkQB3QiBA3iXAbQhRAQhXAHQhMAHhSAAQhtABhrgIIhTgIQi6gni0gbQhogRhngMQkIggj5AAQisAAikATQifATiYAnQhcAXhYAfIgkASQgmAUglAYQgxAfguAlQhIA4hABIIgtA5Qi4DnjlDJIggAZQijCAikBVQisBaifAdQhrAWhrAAIgaAAg");
	this.shape_43.setTransform(750.1154,753.4332);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("EgajAsaQkhh5kJjmQmelUlbmvIg0hCQiNizh1i1Qg9hfg2hfQg5hkgrhcQgRgkgOgkQgnhfgjhgQg1iJgsiMQhGjZgyjjIgOg7QgUhagJhVIAAgBQgfjaAUjGQAJhzAbhoQAAgDACgDQAKgoANgnQATg9AZg5IABgDQCRlGFCizQBsg9B7gpQBRgdBZgTIABAAQBHgSBOgKIAbgEQCLgSBsAAQD4AVD3AGQCKAECKAAQFZABFNgtQDQgcDIgzIARgFQChg3CShaQAqgaApgeQBShABTg+IBJg1QB4hXB3hQIBdg+QFqjiE7h1QCWguCSgGQDygCDhBTQEvByEHD1QFwFBFGGlIBMBkQCKC4B0DBQApBCAlBDQAwBYAlBKQAaA1ATAvQA3CGAwCIQA2CPAuCTQA/DGAwDNIAIAnQAZB2AMB0QAWDZgcDFQgNBggZBZIgIAcQgNArgQAoIgSAsIgTAsQgZA0geAxQiRDjj+CEQh6A/iNAnQhMAWhSAOQhIAOhMAIQhoALhmACIhQgBQi0gSixgPQhngJhmgGQkEgUj6ACQiqABilAUQieATiYAlQhcAXhYAeIgkASQgnATglAWQgyAdguAjQhJA2hDBDIgvA3Qi/DYjmDJIggAaQihB9iiBbQisBliUAfQh1Afh2AFQkhgBkShxg");
	this.shape_44.setTransform(750.1586,752.4476);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("EgYyAsQQkkhmkSjMQmrktl2mLIg5g8QiYikiAimQhDhWg8hZQg/hbgxhXQgUghgRgiQgthZgphbQg+iEgxiIQhOjUgwjkIgNg7QgThYgIhVIAAgBQgbjWAXjJQAMhxAchnIABgGQALgoANgnQATg8Aag5IABgDQCRlEEtjDQBlhDBygzQBMgiBUgbIABAAQBEgYBJgRIAZgGQCEgeBpgMQDvgED0gKIERgMQFSgNFOgvQDPgdDIgxIARgEQChg0CThTQArgZAqgbQBVg8BTg5IBLgyQB7hTB2hOIBcg9QFijfEwiRQCRg2CPgPQDtgRDkBFQExBgERDaQF/EdFgGAIBSBcQCWCnCBCzQAtA8ApA+QA1BRAqBFQAeAyAXAsQBBB+A3CAQA/CKAzCPQBGDBAvDOIAJAnQAYB0AKB0QATDVgeDIQgOBfgaBZIgIAbQgNArgPAoIgSAsIgTAsQgZA0gdAxQiMDkjtCSQhzBHiDAyQhHAdhNAWQhDAVhIAPQhjAVhhAMIhNAHQiuACiugCIjLgDQj+gHj9AFQioADimATQicASiZAlQhcAWhYAeIgkAQQgnASgmAWQgyAbgvAhQhLAyhFBAIgxA0QjDDKjrDJIggAZQidB8igBhQiuBuiIAjQhxAlh0AMQgwADgwAAQjqAAjmhNg");
	this.shape_45.setTransform(750.1628,751.4602);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("EgXAAsFQkohTkbixQm4kGmRloIg9g2QijiUiLiWQhLhPhBhRQhGhUg3hRQgWgfgTgfQg0hUguhWQhIh+g2iFQhWjOgvjlIgMg6QgRhYgHhWIAAgBQgXjSAbjKQANhwAdhmQAAgDACgDQALgoANgnQATg8Aag4IABgDQCSlBEXjTQBfhJBqg8QBHgqBPgiIABAAQA/geBFgYIAYgIQB8gpBngXQDlgfDxgaQCFgPCJgMQFLgcFQgwQDNgeDHgvIASgEQChgxCUhMQAtgXAqgZICshsIBMgvIDziaIBcg9QFZjaElivQCMg+CMgXQDoghDmA4QEzBOEdC+QGND5F6FcIBYBUQCiCWCNCjQAyA3AtA5QA7BKAvBAQAhAvAbApQBLB2A+B6QBICDA4CLQBNC8AvDPIAIAnQAXBzAJB1QAQDRggDJQgQBfgZBYIgIAbQgOArgPAoIgSArIgSAsQgZA0gcAxQiIDmjcCfQhrBQh5A+QhDAjhHAeQg/AchDAVQhdAghdAVIhJAPQioAWisALIjJALQj5AEj/AIQimAEimAUQibASiaAkQhbAVhZAdIgkAQQgnARgnAUQgyAZgwAfQhMAwhHA8Ig0AwQjIC9juDIIggAZQibB6ieBnQiuB5h9AlQhuArhxATQhgAOhhAAQi1AAi2gwg");
	this.shape_46.setTransform(750.1739,750.5543);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("EgVPAr5QkrhAkliWQnEjfmslEIhBgxQiviEiWiHQhRhHhHhKQhMhMg+hLQgYgdgVgdQg8hOgzhRQhQh4g8iBQhejIgtjnIgLg5QgQhXgFhWIAAgBQgTjQAejKQAPhwAehlQgBgDACgCQALgoAOgnQAUg8AZg4IABgDQCTk+ECjiQBYhRBihFQBCgwBJgpIABAAQA8glBBgeIAWgLQB0g0BkgjQDdg4DugrQCCgYCHgTQFFgqFSgyQDLgeDHgtIASgEQChgtCWhFQAtgWArgXICwhjIBNgsQCDhMBzhHIBbg8QFQjXEajLQCHhGCJggQDkgwDoAqQE1A9EoCiQGaDUGVE5IBfBKQCtCGCaCUQA2AyAxAzQBABEA1A7IBDBRQBVBuBGBzQBRB9A9CHQBTC3AvDQIAIAnQAWBxAHB2QANDOgjDKQgQBegZBYIgJAbQgNAqgPApIgSArIgSAsQgYA0gbAxQiFDojKCsQhjBYhwBJQg+ArhCAlQg6Aig/AdQhXAqhZAfIhGAWQiiArioAYQhjANhkAKQj1ARkBAKQikAGinAUQiZARiaAkQhcAUhYAcIglAPQgnAQgnATQgzAYgxAdQhNAshKA5Ig1AtQjOCujyDIIggAaQiXB3icBtQivCDhyAoQhqAyhvAaQiOAfiRAAQiEAAiGgag");
	this.shape_47.setTransform(750.1766,749.7798);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("EgTdArsQkvgtkuh8QnQi4nIkfIhFgtQi6h0iih3QhXg/hNhCQhShGhEhEQgagagYgbQhDhJg4hMQhahyhAh9QhnjDgqjoQgGgcgFgcQgPhXgDhWQgQjNAjjNQAPhuAfhkQgBgDADgCQALgnAOgnQAUg8AZg4IABgDQCUk7DsjyQBShYBahNQA9g3BEgxIABAAQA3grA9glIAWgNQBrg/BiguQDThTDsg8QB/ggCGgZQE/g5FTgzQDJggDHgqIASgEQChgqCYg+QAtgUAsgVIC0haIBOgpQCHhIBxhFQAugdAugeQFHjTEPjnQCBhPCHgoQDeg/DqAcQE4ArEzCGQGoCxGvEUIBlBCQC6B1ClCEQA7AtA2AuQBFA9A6A3QAoAmAiAkQBgBmBMBsQBaB3BCCDQBbCyAuDQIAIAnQAUBwAHB3QAJDKglDOQgRBbgZBYIgJAbIgcBSIgSArIgSAsQgYA0gZAyQiCDpi4C5QhcBhhmBUQg5Ayg8AsQg3Aqg6AjQhRA0hUApIhDAeQicA/imAlQhhAUhjAQQjxAekDAMQiiAHinAVQiXARicAiQhbAUhYAbIglAOQgoAPgoASQgzAWgxAbQhPAphMA1Ig3ArQjUCfj0DIIggAaQiVB1iaB0QiwCMhmArQhnA4hsAiQi8A2jDAAQhTAAhUgKg");
	this.shape_48.setTransform(750.1488,749.0989);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("EgRsArdQkygZk3hiQndiRnjj8IhKgnQjFhkishoQheg3hTg7QhYg+hLg+QgcgYgagZQhKhDg+hHQhjhthFh5Qhvi9gpjoIgJg4QgOhWgChXQgMjJAnjPQARhuAghjQgBgBAAgBQAAAAAAgBQAAAAABgBQAAAAABgBIAahOQAUg6AZg4IABgDQCVk4DXkCQBLheBShXQA3g+BAg3IAAgBQA0gxA5grIAUgPQBjhLBfg6QDLhtDohMQB8gqCGgfQE4hGFUg2QDIggDHgoIASgEQChgnCZg3QAvgSAsgTQBggpBXgoIBQglQCKhGBwhBQAugcAugfQE+jPEEkEQB8hWCEgyQDZhODtAPQE5AZE+BqQG3CNHJDwIBsA5QDFBlCyB1QA/AnA6ApQBKA2BAAyQArAjAmAhQBqBeBTBlQBjBxBHB/QBiCtAuDRIAIAnQATBuAFB4QAGDGgnDQQgTBcgZBXIgJAaIgbBSIgSArIgSAsIgwBlQh+DrinDHQhUBphcBgQg0A4g3A0QgyAwg2AqQhMA/hPAyIg/AnQiWBSikAzQhfAbhjAWQjsApkFAPQigAJioAVQiVAQidAiQhaAThZAaIglANIhRAfQgzAVgyAZQhRAmhNAxIg6AnQjZCSj3DIIggAZQiTBziXB6QixCWhbAvQhkA+hpAoQjmBWj4AAQgiAAgjgCg");
	this.shape_49.setTransform(750.1414,748.5611);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("EgZwAqAQnqhqn+jYIhOghQjQhVi4hYQhkgwhZgzQheg2hRg5QgfgVgcgWQhRg+hDhCQhshnhLh2Qh2i4gnjpIgJg3QgMhVgBhXQgIjGAqjRQAThsAhhjQgBgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAMgnAOgnQAVg7AZg3IABgDQCVk1DCkSQBFhkBJhgQAyhEA7g/IAAgBQAwg4A0gxIATgSQBchVBchGQDBiHDmhcQB5gzCFglQExhWFWg3QDHghDGgmIASgDQCigkCagwIBcghQBjglBYgkIBSgiQCNhBBug/QAugbAugfQE1jLD6khQB3hfCBg5QDUheDvACQE8AGFIBPQHFBpHkDLIBxAxQDSBUC+BmQBDAiA+AkQBQAvBFAtQAvAgAqAeQBzBWBbBeQBsBqBMB8QBpCoAtDRIAIAnQASBsAEB6QACDCgpDSQgTBbgaBWIgJAbIgbBSIgSArIgRArIgvBlQh6DsiVDVQhNBxhSBrQgwA/gyA8QgtA3gyAxQhGBJhKA8QgeAYgeAWQiRBnigA/QheAjhiAbQjnA2kHASQieAKipAVQiUAQidAhQhbAShYAaIglAMQgpANgpAQQgzASgzAXQhTAjhPAuIg8AkQjeCEj7DHIggAZQiQByiVCAQiyCghPAxQhhBEhnAwQj/B1kgAHQk2gHlAhHg");
	this.shape_50.setTransform(750.0932,748.1488);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("EgYLAqeQn2hDoai0IhSgcQjbhGjDhIQhrgohfgsQhlguhXgzIg/gnQhYg4hJg9Qh1hihPhxQh/iygmjqIgIg3QgLhUABhXQgEjDAujSQAUhsAihiQAAgBgBAAQAAgBAAAAQABgBAAAAQAAgBABAAIAbhNQAVg7AZg3IABgDQCWkyCskhQA/hsBBhpQAthLA1hGIABAAQArg/Axg4IARgTQBThhBahSQC5igDihtQB3g9CEgrQEqhjFYg5QDFgiDFgkIATgDQCighCbgpIBegdQBmggBZggIBTgeQCQg/Btg7QAugbAugeQEtjIDuk9QBxhnB/hDQDPhsDxgMQE+gLFUAzQHTBEH+CnIB4ApQDdBDDKBXQBIAcBCAfQBVAoBLApQAyAbAtAcQB+BOBiBXQB1BkBRB4QBwCjAtDSIAHAmQARBrADB7QgBC+grDUQgVBagZBWIgJAaIgcBSIgSArIgQAsIguBmQh2DtiEDhQhFB6hIB3QgrBFgtBDQgpA/gtA4QhABThGBGQgcAcgdAaQiKB7ieBMQhcAqhiAhQjiBCkJAUQicAMiqAVQiSAPieAgQhaAShZAZIglALIhTAbQg0ARgzAVQhUAghSApIg+AiQjjB1j+DIIggAZQiNBviVCGQixCqhEA1QhdBKhlA3Qj5CJkiAaQhHAChIAAQj1AAj/gig");
	this.shape_51.setTransform(750.0838,747.7494);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("Ego0An3Qjmg2jOg4Qmah0j1iyQh/hbhUhuQiHitgkjrQgShtAEhzQgBjAAyjUQAVhqAkhhQgBgBAAAAQgBgBABAAQAAgBAAAAQABgBABAAIAbhNQAWg8AZg4IGetFQAphRAwhOIAAAAQAuhSA2hIQDilEFQi9QBzhFCDgyQEkhyFag6QDDgjDFgiQCsgeCmgkQChgpCAgnIBVgcQCUg6Brg5QFdjIEGmOQEekmGHgqQMshJPrEHQDpAzDWBHQGgCAD1C9QB+BeBWB0QCCCrApDrQAQBqABB7QgEC7guDWQgVBZgaBWIgJAaIgbBRQgTAtgPAqIgtBmIlgLhIhOCXQjdGflBC5QhaAxhhAmQjeBPkLAWQiaAOiqAVQiRAPieAfQhtAVhsAfIhTAYQg1AQg0ATQh2AnhzA6Qj3BukTDZQiLBtiSCNIjrDrQk7EZmZBAQjKAVjSAAQqWAArsjKg");
	this.shape_52.setTransform(749.9965,747.4759);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("EgfVApNQlPg/lYh0QhEgUhBgWQiSguiGgxQiwg/iPhMQhegyhOg2Ig+gsQgbgVgagWQhzhghNhwQh6ixghjpQgQhtADhyIAAgBQAAhaAKhdQAMhrAahwQAVhqAjhhQgBgBAAAAQAAgBAAAAQAAgBAAAAQABAAABgBIAbhNQAVg8Aag4QA/iBBBh/QCSkeCbkYQArhOAzhLIABAAIALgSQAshEAyg9QCdjMDMiSQBnhKBwg6IAjgSQBlg0BwgmQEmhnFXg2QCygdC0gbIAigGQCsgbCmghQB5gdBpgbIBAgRIBUgZQCTg1Bug0QBWgsBQg2QEAirDRkSQEhkHF9gqIANgBQITgqJKBtQFIA/FUBwQBJAWBIAXQCQAvCHA4QCtBDCNBQQBPAsBFAuQAtAfApAgQAhAaAeAbQBzBjBOB3QB2CvAlDpQANBdACBpIABAfQgEC8gtDTQgVBZgZBVIgJAaIgbBRQgTAtgPAqIgtBmIhXCyQiIEUiQENQgpBKgrBHIghA1QjCE0kDCiQglAXgmAVQg3Abg5AYQgkAPglANIgEACQjfBHkJAVQibAMioATQiRAOidAcQhtAThsAcIhTAWQg1APg0ARQh2Akh0A0Qj8BkkVDGQiOBjiWCAQixCjhCAzQk8D6mOA9IgQACQiqAQiuAAQl4AAmJhIg");
	this.shape_53.setTransform(749.9944,747.672);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("EggzAoPQlJhLlIiHQhAgYg/gaQiKg3h9g6QikhJiDhXQhWg3hIg7QgdgXgbgYQgZgWgWgXQhohlhFhzQhvi1gdjnQgOhtADhyIAAAAQAAhbAJhcQAMhrAZhvQAUhqAjhhQgBAAAAgBQAAgBAAAAQAAgBAAAAQABgBABAAQAMgmAPgnQAVg7AZg4QA/iBBCh+QCUkbCnkOQAuhMA2hGIABgBIAMgRQAuhAA1g6QCjjCDRiIQBshFBug0IAjgRQBngvBwgiQEphdFUgwIFmgzIAigFQCrgZCmgeQB5gZBpgYIBAgQIBVgWQCSgwBxgvQBWgnBRgxQEFiaDdj3QEpjtF9glIAMgBQIbgmI5B/QFCBLFFCDQBGAZBEAcQCIA4B+BBQCiBNCCBZQBIAxA/AxQApAiAlAiQAeAcAbAdQBnBnBHB5QBpC0AiDnQALBdADBoIAAAfQgDC9gsDQQgVBagZBVIgIAaIgcBQIghBXIgtBlQgrBZgtBYQiLERibEEQgsBGgtBFIgkAzQjKEjkMCXQglAWgnATQg3Aag5AVQgkAOgmAMIgEACQjhBAkGASQibALinARQiRANidAZQhsAShsAZQgpAJgqALQg1AMg1AQQh2Agh1AvQj/BakXCyQiTBZiYBzQixCUhMAtQlDDhmMA3IgQACQiPALiPAAQmVAAmehag");
	this.shape_54.setTransform(749.9993,747.8714);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("EgiQAnSQlEhYk4iaQg9gcg7geQiChAh1hDQiYhTh3hiQhPg9hBg+QgagZgYgaQgWgYgUgYQhchpg9h2Qhji5gZjmQgOhsADhxIAAgBQAAhaAJhcQALhsAYhtQAVhqAihhQgBgBAAAAQAAgBAAgBQAAAAABgBQAAAAABAAIAahNQAVg7AZg4QA+iABEh9QCXkZCzkDQAxhJA5hDIAAgBIANgQQAxg9A2g3QCri3DWh+QBvhABugvIAjgPQBogpBwgfQErhTFSgqQCygYCzgWIAigEQCrgWCngbQB3gWBqgWIBAgOIBVgUQCRgqB0gpQBXgkBTgrQELiJDojbQExjTF7ghIANgBQIighIoCPQE9BYE1CWQBDAdBAAhQCABAB2BJQCWBXB2BjQBDA2A4A1QAmAlAgAjQAbAeAYAeQBcBsA+B8QBeC3AeDmQAKBdADBnIAAAfQgEC/gqDNQgUBZgZBVIgJAaIgbBRIghBVIgtBlQgrBZgtBXQiOEOioD6QguBEgwBBIgmAxQjTESkTCNQgmAVgoARQg3AYg5ATQglANgmALIgEABQjiA5kEARQibAJimAQQiRALicAXQhtAPhrAWIhTASQg1ALg1AOQh3Adh1ApQkEBQkZCfQiWBPicBmQiwCDhWAoQlJDImMAxIgPACQh2AIh2AAQmxAAmrhtg");
	this.shape_55.setTransform(749.9805,748.0897);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("EgjtAmUQk/hkkoitQg6ghg4giQh6hIhshNQiLhdhthsQhHhCg5hEQgXgagWgcIglgzQhQhtg2h5QhWi8gWjkQgMhtAChwIAAgBQAAhaAJhbQALhsAXhtQAVhpAhhhQgBgBAAgBQAAAAAAgBQAAAAABgBQAAAAABgBIAahLQAVg7AZg4QA9iBBFh7QCakXC+j5QA0hFA8hBIAAAAIAOgPQA0g7A4gzQCxisDbh0QBzg7BtgqIAjgOQBpgkBxgbQEthIFPglIFlgoIAigEQCrgTCngXIDignIBAgMIBVgSQCQglB2gkQBYgfBUgmQESh3DzjAQE5i5F5gdIANAAQIpgdIYCgQE4BkElCpQA/AiA9AlQB4BIBtBSQCKBgBsBuQA8A7AzA4IA9BMQAYAgAVAgQBQBxA3B+QBSC8AaDjQAJBeACBmIAAAfQgDDAgpDKQgUBZgZBVIgIAaIgbBPIghBWIgtBlQgrBYguBWQiREMizDwQgwBBg0A+IgoAvQjcEBkbCDQgnATgnAQQg4AVg6ASIhKAVIgEABQjlAykBAPQibAIilAOQiSAJiaAUQhtANhrAUIhTAPQg1AKg1AMQh3Aah2AkQkJBGkaCLQiaBFifBZQivBzhgAjQlRCvmKArIgPACQhhAGhhAAQnJAAm0iCg");
	this.shape_56.setTransform(749.9852,748.3147);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("EglKAlWQk6hwkYjAQg3glg0gmQhyhRhjhWQiAhohhh2QhAhIgyhHIgng6Igfg1QhFhyguh8QhKjAgTjjQgKhsAChwIAAgBQAAhaAIhaQALhsAWhsQAUhoAhhhQgBgDACgCIAahMQAUg6AZg4QA9iBBGh7QCckTDLjvQA3hCA+g+IABAAIAOgOQA2g3A7gxQC4igDghrQB2g2BsglIAkgMQBqgfBwgXQEwg+FNggIFlgiIAigDQCqgRCngTIDigiIBAgKIBVgPQCPggB5gfQBZgaBVghQEZhmD+ilQFAieF4gZIANAAQIxgZIGCyQE0BwEWC7QA7AmA5AqQBxBRBkBbQB+BqBgB3QA3BBAsA6QAdArAZAmQAUAiASAhQBFB2AuCBQBHC/AWDiQAIBeACBmIAAAeQgDDCgoDHQgTBYgZBUIgIAaIgbBQIghBWIgtBkQgrBYgvBVQiUEJi+DnQgzA+g3A7IgqAsQjlDxkiB4QgoARgoAPQg5ATg5AQQglAKgmAJIgEABQjmArj/AMQicAHijAMQiSAIiZARQhtAMhsAQIhSAOIhqASQh4AWh2AfQkNA8kdB3QidA7ijBNQiuBihqAfQlXCWmJAkIgQACQhNADhMAAQniAAm6iWg");
	this.shape_57.setTransform(749.9833,748.5391);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("EgmoAkZQk0h+kIjTQg0gogxgrQhqhZhbhgQhzhxhWiBQg4hNgrhNQgRgegQgeQgOgcgMgdQg6h2gmh/Qg+jEgQjgQgIhtAChvIAAgBQAAhaAIhaQAKhsAWhqQAThpAghgQgBgDADgDQALgmAOglQAVg7AYg3QA8iBBHh5QCfkRDWjlQA6g/BCg6IAAAAIAQgOQA4g0A+gtQC9iVDlhhQB7gxBrggIAkgLQBrgZBxgTQEyg0FKgbIFlgcIAigDQCqgNCngRIDigcIBAgIIBVgNQCOgbB8gZQBYgWBXgcQEghVEJiJQFIiEF3gUIAMgBQI5gTH2DBQEuB9EGDOQA4ArA1AuQBpBZBcBkQByBzBWCCQAvBFAnA+QAZAuAUAoIAgBGQA5B6AoCEQA6DEATDgQAGBeACBkIAAAfQgDDDgnDDQgTBZgYBUIgIAaIgbBQIghBVIgtBkQgrBYgwBUQiXEGjIDdQg2A7g6A4IgtAqQjtDgkrBuQgoAPgoANQg5ASg6AOIhLAQIgEABQjoAkj9AKQibAGijAKQiSAHiYAOQhsAJhsAOIhSALQg2AHg1AJQh4ASh3AaQkRAykeBjQiiAyimA/QitBSh0AZQlfB9mHAfIgPABQg9ADg7AAQn5AAm8irg");
	this.shape_58.setTransform(750.0132,748.7793);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("EgoFAjbQkviKj4jnQgxgsgugvQhhhhhShqQhoh7hLiLQgwhTgkhRIgbhAIgVg7Qguh7gfiCQgxjIgNjeQgGhtABhvQAAhaAIhYQAKhsAVhrQAThoAfhhQAAgDACgDQALglAOglQAUg7AZg3QA7iBBIh4QCikNDijcQA9g8BEg2IABAAIAQgOQA7gwBAgrQDEiJDqhXQB+gtBqgbIAlgIQBsgVBwgPQE1gpFIgWIFkgWIAigDQCqgKCngOIDigWIBBgHIBUgKIELgqQBagRBZgWQEmhEEUhuQFQhpF1gRIAMAAQJBgPHkDSQEqCJD3DhQA0AvAxAyQBiBiBSBtQBmB9BLCMQAqBKAgBBQAVAwARArIAZBJQAuB/AfCHQAvDHAPDeQAFBfABBjIABAfQgDDEgmDBQgSBYgYBUIgIAaIgbBPIghBWQgVAygYAxQgrBYgxBTQiaEDjTDTQg5A5g9A0IgvAnQj2DQkyBkQgpANgoAMQg7AQg5AMIhMANIgEABQjqAdj6AIQicAFihAHQiSAGiXALQhsAIhtALIhRAJQg2AGg1AHQh4AOh4AVQkWAokfBPQinAoipAzQirBBh/AUQllBkmGAZIgQABIhXABQoQAAm8jAg");
	this.shape_59.setTransform(750.0109,749.0143);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("EgpiAidQkqiXjoj5Qgugwgqg0QhahphJhzQhbiGhAiVQgphZgdhVIgVhDIgPg+QgjiAgXiEQgljMgKjdQgEhsABhuQAAhaAHhZQAJhsAVhpQAShpAfhgQAAgDACgDQALgmANgkQAVg7AYg3QA6iBBKh3QCkkKDujSQBAg4BIg0IARgMQA9gtBDgoQDKh+DvhNQCDgoBogWIAlgHQBugPBwgLQE3ggFGgQIFkgRIAigBQCpgICngKIDigRIBBgFIBVgIIEMgfQBbgNBagRQEtgzEehSQFYhPF0gMIAMgBQJIgKHUDjQElCWDnDzQAxAzAtA3QBaBqBKB2QBaCHBACVQAjBQAaBEQARAzANAsIATBNQAiCDAYCKQAjDLALDdQAEBeABBiIAAAfQgDDGgkC+QgSBYgYBUIgIAaIgaBPIghBVQgVAygYAxQgrBXgyBSQidEBjeDJQg8A2g/AxIgyAlQj/C/k6BZQgpAMgpAKQg7AOg6ALIhMALIgEAAQjrAWj4AGIk8AJQiSAFiWAIQhsAGhtAIIhRAHIhsAJQh4ALh4AQQkaAekiA7QiqAeitAmQiqAxiIAPQltBLmEASIgQABIg7ABQonAAm4jWg");
	this.shape_60.setTransform(750.0159,749.2572);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("Egq/AhfQklijjYkNQgqg0gng4QhShyhBh8QhOiQg1ifQghhfgWhZIgPhHIgLhBQgXiEgPiHQgYjQgHjbQgDhrAAhuIAAAAQAAhaAIhYQAIhtAUhoQAThoAdhhIACgGIAYhKQAVg6AYg3QA5iBBLh1QCokID5jHQBDg2BLgwIARgMQBBgqBEgkQDRh0D0hCQCGgkBogQIAlgFQBvgKBxgIQE5gVFDgKIFjgMIAigBIFRgMIDigLIBBgEIBVgFIENgUQBdgJBbgLQEzgiEqg3QFgg1FygIIAMAAQJPgGHDD0QEgCiDXEHQAuA3AqA7QBRBzBCB+QBOCQA1CgQAdBVAUBHQANA2AJAuIAMBQQAXCIAQCMQAYDPAHDbQADBeAABiIAAAfQgDDHgjC7QgRBYgYBUIgIAaIgZBPIghBUQgWAzgXAwQgrBXgzBRQigD+jqC/Qg+AzhDAuIg0AjQkHCulCBPQgqALgpAIQg7AMg7AIIhMAJIgEAAQjtAPj2AEIk7AGQiSADiUAGQhtADhsAGIhRAEIhsAHQh5AHh4AKQkgAUkjAoQiuAUiwAZQipAhiSAKQl0AymDAMIgPABIgiAAQo9AAmzjsg");
	this.shape_61.setTransform(749.9969,749.5026);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("EgscAghQkgivjIkgQgng4gkg8QhKh7g3iGQhDiZgpirQgahjgPheIgJhKIgFhEQgMiIgHiKQgNjUgDjYQgBhtAAhtQAAhaAGhXQAJhtAShnQAThoAdhhIACgGQALglANglQAUg6AYg2QA5iCBLh0QCrkEEFi+QBGgzBOgsIASgLQBDgnBHghQDXhoD6g5QCJgfBngLIAlgDIDhgJQE8gLFAgFIFkgGIAhgBIFRgFIDigGIBBgBIBVgDIEQgKIC5gLQE5gRE1gbQFogbFxgEIAMAAQJXgBGyEFQEaCuDIEaQAqA7AmBAQBLB7A4CHQBDCaAqCqQAWBaAOBKQAJA5AEAwIAHBTQALCNAICPQAMDTAEDXIACDBIAAAfQgDDJgiC4QgRBYgYBTIgHAaIgaBOQgPAsgSApQgVAygYAxQgqBWg0BQQijD6j2C3QhAAvhGAsIg2AgQkQCdlKBFQgqAJgqAHQg8AKg6AHIhNAFIgEABQjvAHjzACIk6ADIkmAEIjZAFIhQACIhtADQh5AEh5AFQkiALkmATQizAKizAMQioARicAFQl6AZmDAGIgPABIgHAAQpUAAmtkDg");
	this.shape_62.setTransform(750,749.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37}]}).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},5).to({state:[{t:this.shape_37}]},3).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.shape_37).to({_off:true},1).wait(25).to({_off:false},0).wait(45));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(1089.9,1040,70.19999999999982,20.200000000000045);
// library properties:
lib.properties = {
	id: '2A57C618CFE943B98D0FA52BF93D9CF7',
	width: 1500,
	height: 1500,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['2A57C618CFE943B98D0FA52BF93D9CF7'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;