function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function calculate() {
  // 매수가와 매수량을 배열에 저장
  const buyPrices = [
    document.getElementById("buyPrice1").value,
    document.getElementById("buyPrice2").value,
    document.getElementById("buyPrice3").value,
    document.getElementById("buyPrice4").value,
    document.getElementById("buyPrice5").value,
    document.getElementById("buyPrice6").value,
    document.getElementById("buyPrice7").value,
    document.getElementById("buyPrice8").value,
    document.getElementById("buyPrice9").value,
    document.getElementById("buyPrice10").value,
  ];

  const buyQuantities = [
    document.getElementById("buyQuantity1").value,
    document.getElementById("buyQuantity2").value,
    document.getElementById("buyQuantity3").value,
    document.getElementById("buyQuantity4").value,
    document.getElementById("buyQuantity5").value,
    document.getElementById("buyQuantity6").value,
    document.getElementById("buyQuantity7").value,
    document.getElementById("buyQuantity8").value,
    document.getElementById("buyQuantity9").value,
    document.getElementById("buyQuantity10").value,
  ];

  // 매수 가격 총합과 매수량 총합 구하기
  let totalQuantity = 0;
  let totalPrice = 0;
  for (let i = 0; i < 10; i++) {
    if (buyPrices[i] && buyQuantities[i]) {
      totalQuantity += parseInt(buyQuantities[i]);
      totalPrice += parseInt(buyPrices[i]) * parseInt(buyQuantities[i]);
    }
  }

  // 평단가 계산
  const avgPrice = totalPrice / totalQuantity;

  // 결과 출력
  document.getElementById("avgPrice").innerText = numberWithCommas(
    avgPrice.toFixed(2)
  );
  document.getElementById("totalQuantity").innerText =
    numberWithCommas(totalQuantity);
  document.getElementById("totalPrice").innerText =
    numberWithCommas(totalPrice);
}
