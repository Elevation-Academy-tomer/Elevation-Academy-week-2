let computer = []


$(".generator").on("click" , function(){
    let proId = $(this).parent(".processor").attr('id')
    let data = $(this).parents(".computer");
    let BUS = $(data).find(".BUS").text()
    computer.push({cmp_id: data.data().id});
    console.log(`The processor ID is: ${proId} and the BUS number is ${BUS}`);
})

$(".validator").on("click" , function(){
    let computer = $(this).parents(".computer");
    let generator = $(computer).find(".generator").text();
    let MB = $(computer).find(".MB").text();
    let QR1 = $(computer).find(".QR:first-child").text();
    let QR2 = $(computer).find(".QR:nth-child(2)").text();
    console.log(generator + " " + MB + " " + QR1 + " " + QR2);
})