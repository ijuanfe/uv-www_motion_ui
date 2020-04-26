 $('#party').click(function() {
   bull()
   chick()
   crab()
   fox()
   hedgehog()
   hippopotamus()
   koala()
   lemur()
   pig()
   tiger()
   whale()
   zebra()
 })

function bull() {
  var bull = $('#bull');
  MotionUI.animateIn(bull, "slide-in-up");
}

function chick() {
  var chick = $('#chick');
  MotionUI.animateIn(chick, "slide-in-right");
}

function crab() {
  var crab = $('#crab');
  MotionUI.animateIn(crab, "slide-in-down");
}

function fox() {
  var fox = $('#fox');
  MotionUI.animateIn(fox, "slide-in-left");
}

function hedgehog() {
  var hedgehog = $('#hedgehog');
  MotionUI.animateIn(hedgehog, "fade-in");
}

function hippopotamus() {
  var hippopotamus = $('#hippopotamus');
  MotionUI.animateIn(hippopotamus, "spin-in");
}

function koala() {
  var koala = $('#koala');
  MotionUI.animateIn(koala, "spin-in-ccw");
}

function lemur() {
  var lemur = $('#lemur');
  MotionUI.animateIn(lemur, "scale-in-up");
}

function pig() {
  var pig = $('#pig');
  MotionUI.animateIn(pig, "scale-in-down");
}

function tiger() {
  var tiger = $('#tiger');
  MotionUI.animateIn(tiger, "hinge-in-from-top");
}

function whale() {
  var whale = $('#whale');
  MotionUI.animateIn(whale, "hinge-in-from-right");
}

function zebra() {
  var zebra = $('#zebra');
  MotionUI.animateIn(zebra, "hinge-in-from-bottom");
}
