const GAS_URL = "여기에_본인의_구글_웹앱_URL을_넣으세요";

document.getElementById('recordForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const statusDiv = document.getElementById('status');
    statusDiv.innerText = "저장 중...";

    const data = {
        dateFull: document.getElementById('dateFull').value,
        type: document.getElementById('type').value,
        mainCategory: document.getElementById('mainCategory').value,
        subCategory: document.getElementById('subCategory').value,
        description: document.getElementById('description').value,
        amount: document.getElementById('amount').value,
        account: document.getElementById('account').value,
        note: document.getElementById('note').value
    };

    try {
        const response = await fetch(GAS_URL, {
            method: "POST",
            mode: "no-cors", // GAS와의 통신을 위해 필수
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        
        statusDiv.innerText = "성공적으로 등록되었습니다!";
        document.getElementById('recordForm').reset();
    } catch (error) {
        statusDiv.innerText = "오류 발생: " + error.message;
    }
});
