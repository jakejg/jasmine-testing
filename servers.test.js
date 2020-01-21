
describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  afterEach(function() {
    // teardown logic
    serverNameInput.value = ''
    let tr=document.querySelector('#serverTable tbody tr')
    tr.remove()
     allServers = {};
     serverId = 0;

  });
});


describe('server tests 2', function() {
  beforeEach(function (){
    serverNameInput.value="Julie"
  
  })

  it('should create a row in the server table with the server name and pay', function (){
    submitServerInfo()
    updateServerTable();
let tdList=document.querySelectorAll('#serverTable tbody td')
let firstTd=document.querySelector('#serverTable tbody td')

    expect(tdList.length).toEqual(3);
    expect(firstTd.innerText).toContain('Julie')
  })
afterEach( function(){
  serverNameInput.value=""
  let trs=document.querySelector('#serverTable tbody tr')
  trs.remove()
   allServers = {};
   serverId = 0;

})
})



