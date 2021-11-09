const TaskContract = artifacts.require("TaskContract")

contract("TaskContract", () =>{

    before( async() => {
        this.taskContract = await TaskContract.deployed();
    })

    it('migrate deployed successfully', async () =>{
        const address = this.taskContract.address
        assert.notEqual(address, null);
        assert.notEqual(address, undefined);
        assert.notEqual(address, 0x0);
        assert.notEqual(address, '');
    })

    it('get Task List', async () =>{
        const taskCounter = await this.taskContract.taskCounter();
        const task = await this.taskContract.tasks(taskCounter);

        assert.equal(task.id.toNumber(), taskCounter);
        assert.equal(task.title, 'Mi primer tarea');
        assert.equal(task.description, 'Tengo que hacer algo');
        assert.equal(task.done, false);
        assert.equal(taskCounter, 1);

    })
})