/* App = {
    contracts: {},
    init: async () =>{
        console.log('Loaded')
        await App.loadEthereum()
        await App.loadAccount()
        await App.loadContracts()
        App.render()
        await App.renderTask()
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

    loadAccount: async () =>{
        const accounts = await window.ethereum.request({method: 'eth_requestAccounts'})
        App.account = accounts[0]
    },

    loadContracts: async () =>{
        const res = await fetch("TaskContract.json")
        const taskContractJSON = await res.json()
        

        App.contracts.taskContract = TruffleContract(taskContractJSON)

        App.contracts.taskContract.setProvider(App.web3Provider)

        App.taskContract = await App.contracts.taskContract.deployed()
    },

    render: () =>{
        document.getElementById('account').innerText = App.account
    },

    renderTask: async () =>{
        console.log(App.taskContract);
        const taskCounter = await App.taskContract.taskCounter()
        const taskCounterNumber = taskCounter.toNumber()

        let html = ''

        for(let i = 1; i <= taskCounterNumber; i++){
            const task = await App.taskContract.tasks(i)
            const taskId = task[0]
            const taskTitle = task[1]
            const taskDescription = task[2]
            const taskDone = task[3]
            const taskCreated = task[4]

            let taskElement = `
            <div class="card bg-dark rounded-0 mb-2">
                <div class="card-header d-flex justify-content-between align-elements-center">
                    <span>${taskTitle}</span>
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" 
                            data-id="${taskId}"
                            ${taskDone && "checked"} 
                            onchange="App.toggleDone(this)"
                        />
                    </div>
                </div>
                <div class="card-body">
                    <span>${taskDescription}</span>
                    <p class="text-muted">
                        Task was created ${new Date(taskCreated * 1000).toLocaleDateString()}
                    </p>
                </div>
            </div>
            `

            html += taskElement;
        }

       document.querySelector('#taskList').innerHTML = html;
    },

    createTask: async (title, description) =>{ 
        const result = await App.taskContract.createTask(title, description, {
            from: App.account
        })
        console.log(result.logs[0].args)
    },

    toggleDone: async (element) =>{
        const taskId = element.dataset.id

        await App.taskContract.toggleDone(taskId, {
            from: App.account
        })

        window.location.reload();
    }
} */

App = {
    contracts: {},
    init: async () =>{
        console.log('Loaded')
        await App.loadEthereum()
        await App.loadAccount()
        await App.loadContracts()
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

    loadAccount: async () =>{
        const accounts = await window.ethereum.request({method: 'eth_requestAccounts'})
        App.account = accounts[0]
    },

    loadContracts: async () =>{
        const res = await fetch("FormCecatCrud.json")
        const FormCecatCrudJSON = await res.json()
        App.contracts.cecatContract = TruffleContract(FormCecatCrudJSON)
        App.contracts.cecatContract.setProvider(App.web3Provider)
        App.cecatContract = await App.contracts.cecatContract.deployed()
    },

    createInscription: async (title, code, numberCurriculum, emailStudent, numberInvestigationGroup, directorTeacher, objectiveProject) =>{ 
        console.log(App.cecatContract);
        console.log(App.account);
        const result = await App.cecatContract.createInscription('Test 2',
        02,
        02,
        "a@c.com",
        02,
        02,
        'Investigation Special 2',
        02, {
            from: App.account
        });      
        const taskEvent = result;
        console.log(taskEvent);
    }
}