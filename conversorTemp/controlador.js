const modelo = new TempConversor(0,"K");
const vista = new Vista();

vista.onChangingInputC((temp)=>{
    modelo.setTemp(temp);
    modelo.setScale("C");
    return {"F":modelo.getTempF(),"R":modelo.getTempR(),"K":modelo.getTempK()};
});
vista.onChangingInputK((temp)=>{
    modelo.setTemp(temp);
    modelo.setScale("K");
    return {"F":modelo.getTempF(),"R":modelo.getTempR(),"C":modelo.getTempC()};
});
vista.onChangingInputR((temp)=>{
    modelo.setTemp(temp);
    modelo.setScale("R");
    return {"F":modelo.getTempF(),"K":modelo.getTempK(),"C":modelo.getTempC()};
});
vista.onChangingInputF((temp)=>{
    modelo.setTemp(temp);
    modelo.setScale("F");
    return {"K":modelo.getTempK(),"R":modelo.getTempR(),"C":modelo.getTempC()};
});