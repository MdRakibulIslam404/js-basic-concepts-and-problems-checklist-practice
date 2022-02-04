// 2 . centimeter to meter with function / centimeterToMeter ||
function centimeterToMeter(centimeter) {
    const meter = centimeter / 100;  // 100 cm = 1 meter // evabeo kora jeto >> cm * 0.01
    return meter;
};
const myMeter = centimeterToMeter(400);
console.log(myMeter, "meter");