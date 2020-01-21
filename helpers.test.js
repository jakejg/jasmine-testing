describe("testing the helpers functions", function (){
    beforeEach(function(){
        allPayments= {
            payment1: {
                billAmt: "80",
                tipAmt: "5",
                tipPercent: "6"
            },
            payment2: {
                billAmt: "89",
                tipAmt: "10",
                tipPercent: "11"
            }
        }
    })

    it('should add up all the bills or tips or tip percentages', function(){
        expect(sumPaymentTotal('billAmt')).toEqual(169)
        expect(sumPaymentTotal('tipPercent')).toEqual(17)
    })

    it('should use the billAmt and tipAmt to get the tipPercent', ()=>
        expect(calculateTipPercent(80, 5)).toEqual(6)
    )
  
    it('add a value to row in a table', ()=> {
        let trTest = document.createElement('tr')
        appendTd(trTest, "Jane");
        expect(trTest.firstElementChild.innerText).toContain("Jane")
        expect(trTest.children.length).toEqual(1)
    })

    it('should create a td element "x" and add it the end of a tr', ()=>{
        let trTest = document.createElement('tr')
        appendDeleteBtn(trTest)
        expect(trTest.firstElementChild.innerText).toBe("X")
    })

    afterEach(()=>
    allPayments = {})
})