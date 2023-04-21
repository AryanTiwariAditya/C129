function setup()
{
    canvas = createCanvas(280, 280);
    canvas.center();
    background("#7ee872");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
}

function clearCanvas()
{
    background("#7ee872");
}

function preload()
{
    classifier = ml5.imageClassifier('DoodleNet');
    }

    function draw()
    {
        // Set stroke we
    }
}
}