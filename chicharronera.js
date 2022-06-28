var go = document.getElementById("resolve");
go.addEventListener("click", chicharronera);
var res1 = document.getElementById("result1");
var res2 = document.getElementById("result2");

function chicharronera()
{
    var x1, x2;
    var ina = document.getElementById("ina");
    var a = parseFloat(ina.value);
    var ina = document.getElementById("inb");
    var b = parseFloat(inb.value);
    var ina = document.getElementById("inc");
    var c = parseFloat(inc.value);
    var discriminating = Math.pow(b, 2)-(4*a*c);


    if(a == 0)
    {
        if(b == 0)
        {
            res1.innerHTML = "Debe de ingresar valores de <B>b</B> diferentes de 0";
        }
        else
        {
            x1=-c/b;
            if(c < 0)
            {
                res1.innerHTML = "Usted ingresó una Ecuación Lineal: <B><I>" + b + "x" + c + "=0</B></I>";

            }
            else
            {
                res1.innerHTML = "Usted ingresó una Ecuación Lineal: <B><I>" + b + "x+" + c + "=0</B></I>";

            }
            res2.innerHTML = "El resultado es <B>x = " + x1 + "</B>";
        }
    }
    else
    {
        if(discriminating > 0)
        {
            x1=(-b+Math.sqrt(discriminating))/(2*a);
            x2=(-b-Math.sqrt(discriminating))/(2*a);
            if(b < 0)
            {
                if(c < 0)
                {
                    res1.innerHTML = "Usted ingresó la Ecuación: <B><I>"+ a + "x<sup>2</sup>" + b + "x" + c + "=0</B></I>";
                }
                else
                {
                    res1.innerHTML = "Usted ingresó la Ecuación: <B><I>"+ a + "x<sup>2</sup>" + b + "x+" + c + "=0</B></I>";
                }
            }
            else
            {
                if(c < 0)
                {
                    res1.innerHTML = "Usted ingresó la Ecuación: <B><I>"+ a + "x<sup>2</sup>+" + b + "x" + c + "=0</B></I>";
                }
                else
                {
                    res1.innerHTML = "Usted ingresó la Ecuación: <B><I>"+ a + "x<sup>2</sup>+" + b + "x+" + c + "=0</B></I>";
                }
            }
            res2.innerHTML = "El resultado es:</br><B>x<sub>1</sub> = " + x1 + "</br>x<sub>2</sub> = " + x2 + "</B>";
        }
        if(discriminating < 0)
        {
            x1=(-b)/(2*a);
            x2=(-b)/(2*a);
            var x1i=Math.sqrt(-discriminating)/(2*a);
            var x2i=-Math.sqrt(-discriminating)/(2*a);
            if(b < 0)
            {
                if(c < 0)
                {
                    res1.innerHTML = "Usted ingresó la Ecuación: <B><I>"+ a + "x<sup>2</sup>" + b + "x" + c + "=0</B></I>";
                }
                else
                {
                    res1.innerHTML = "Usted ingresó la Ecuación: <B><I>"+ a + "x<sup>2</sup>" + b + "x+" + c + "=0</B></I>";
                }
            }
            else
            {
                if(c < 0)
                {
                    res1.innerHTML = "Usted ingresó la Ecuación: <B><I>"+ a + "x<sup>2</sup>+" + b + "x" + c + "=0</B></I>";
                }
                else
                {
                    res1.innerHTML = "Usted ingresó la Ecuación: <B><I>"+ a + "x<sup>2</sup>+" + b + "x+" + c + "=0</B></I>";
                }
            }
            res2.innerHTML = "El resultado está en el dominio de los complejos y es:</br>" +
            "<B>x<sub>1</sub> = (" + x1 + " , " + x1i + ")</br>x<sub>2</sub> = (" + x2 + " , " + x2i + ")</B>";
        }
        if(discriminating == 0)
        {
            x1=-b/(2*a);
            if(b < 0)
            {
                if(c < 0)
                {
                    res1.innerHTML = "Usted ingresó la Ecuación: <B><I>"+ a + "x<sup>2</sup>" + b + "x" + c + "=0</B></I>";
                }
                else
                {
                    res1.innerHTML = "Usted ingresó la Ecuación: <B><I>"+ a + "x<sup>2</sup>" + b + "x+" + c + "=0</B></I>";
                }
            }
            else
            {
                if(c < 0)
                {
                    res1.innerHTML = "Usted ingresó la Ecuación: <B><I>"+ a + "x<sup>2</sup>+" + b + "x" + c + "=0</B></I>";
                }
                else
                {
                    res1.innerHTML = "Usted ingresó la Ecuación: <B><I>"+ a + "x<sup>2</sup>+" + b + "x+" + c + "=0</B></I>";
                }
            }
            res2.innerHTML = "La ecución tiene solución única y es:<br/>"
            + "<B>x = " + x1 + "</B>";
        }
    }
}