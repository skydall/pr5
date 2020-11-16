function square() {
    let a = document.sq.sq_a.value;
    let b = document.sq.sq_b.value;
    let c = document.sq.sq_c.value;
    let sol = document.getElementById("sq_sol");
    let d = b * b - 4 * a * c;
    let str;
    if (d < 0 ) {
      str = "Вещественных корней нет";
    } else if (d == 0) {
      str = "Два одинаковых вещественных корня: <br>x<sub>1</sub> = x<sub>2</sub>";
      str += -b/(2*a);
      str += ".";
    } else {
      str = "Два различных вещественных корня : <br>x<sub>1</sub>";
      str += -b/(2*a)-Math.sqrt(d)/(2*a);
      str += ", x<sub>2</sub> = ";
      str += -b/(2*a)+ Math.sqrt(d)/(2*a);
      str += ".";
    }
    sol.innerHTML = str;
  }
  let h=document.getElementById("h");
  let m=document.getElementById("m");
  let s=document.getElementById("s");
  let da=document.getElementById("da");
  setInterval(tic,1000);
  function tic() {
    let day = new Date();
    let timeend = new Date("December 31, 2016");
    let da = timeend - day.getDay();
    let hours=23-day;
    if (hours<10) {
      hours="0"+hours;
    }
    let min=59-day.getMinutes();
    if (min<10) {
      min="0"+min;
    }
    let sec=59-day.getSeconds();
    if (sec<10) {
      sec="0"+sec;
    }
    da.innerHTML= da + ":";
    h.innerHTML= hours+":";
    m.innerHTML= min+":";
    s.innerHTML= sec;
  }