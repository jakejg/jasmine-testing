describe('tests for payment functions', ()=>{
    beforeEach(()=>{

    billAmtInput.value = "80"
    tipAmtInput.value = "20"
})
    it('should create an object with the payment details', ()=>{
       curPayment = createCurPayment()

    expect(curPayment.billAmt).toEqual("80")
    expect(curPayment.tipAmt).toEqual("20")
    })

    it('add a current payment object to allPayment object and reset the input', ()=>{
        submitPaymentInfo()

        expect(allPayments['payment' + paymentId].billAmt).toEqual("80")
        expect(tipAmtInput.value).toEqual('')
    })

    it('should add to the payment table', ()=>{
        curPayment = createCurPayment()
        appendPaymentTable(curPayment)

        expect(paymentTbody.children.length).toEqual(1)
    })

// not sure why this test is not working
    it('should update the summary table', ()=>{
        let summaryTds = document.querySelectorAll('#summaryTable tbody tr td')
        allPayments={payment1:
            {billAmt: "80",
            tipAmt: "20",
            tipPercent: "16"}}
        updateSummary();

        expect(summaryTds[1].innerText).toEqual("$20")
    })
    
    it('should create a td element "x" and add it the end of a tr', ()=>{
        let trTest = document.createElement('tr')
        appendDeleteBtn(trTest)
        expect(trTest.firstElementChild.innerText).toBe("X")
    })

    afterEach(()=>{
    let tableTr = document.querySelector('#paymentTable tbody tr')
    let summaryTr = document.querySelector('#summary tbody tr')
    if (tableTr){tableTr.remove()}
    if (summaryTr) {summaryTr.remove()
    }
    billAmtInput.value = ""
    tipAmtInput.value = ""
    })
})