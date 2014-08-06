function DummyAsmModule(stdlib, foreign, heap) {
    "use asm";

    function addone(x, y) {
        x = x | 0; //annotate as int
        y = +y; //annotate as double
        var a = 0, //declare local int 
            b = 0.0; //declare local double
        return (x + 1) | 0; // annotate return val as int
    }

    return {
        addone: addone
    };
}

//see your console to see asm.js compilation message
var dummy = DummyAsmModule(window);
alert(dummy.addone(12, 34.55));