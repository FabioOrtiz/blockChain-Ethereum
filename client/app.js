App = {
    contracts: {},
    init: () =>{
        console.log('Loaded')
        App.loadEthereum()
        App.loadContracts()
    },

    loadEthereum: async () =>{
        if (window.ethereum){
            App.web3Provider = window.ethereum
            await window.ethereum.request({method: 'eth_requestAccounts'})
        } else if (window.web3){
            web3 = new Web3(window.web3.currentProvider)
        }
        else{
            console.log('Install Metamask');
        }
    },

    loadContracts: async () =>{
        const res = await fetch("TaskContract.json")
        const taskContractJSON = await res.json()
        

        App.contracts.taskContract = TruffleContract(taskContractJSON)
    }
}

App.init()