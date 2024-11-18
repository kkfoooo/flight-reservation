document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // 获取表单数据
    const departure = document.getElementById('departure').value;
    const destination = document.getElementById('destination').value;
    const departureDate = document.getElementById('departureDate').value;
    const returnDate = document.getElementById('returnDate').value || '单程';
    const passengers = document.getElementById('passengers').value;
    const classType = document.getElementById('classType').value;

    // 打印或处理表单数据
    console.log(`出发地: ${departure}`);
    console.log(`目的地: ${destination}`);
    console.log(`出发日期: ${departureDate}`);
    console.log(`返回日期: ${returnDate}`);
    console.log(`乘客人数: ${passengers}`);
    console.log(`舱位等级: ${classType}`);

    // 这里可以添加AJAX请求或重定向到支付页面等逻辑
    alert('您的预定已提交！');
});