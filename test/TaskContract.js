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

    it('task created successfully', async () => {
        const result = await this.taskContract.createTask('some task', 'description two');
        const taskEvent = result.logs[0].args
        const tasksCounter = await this.taskContract.taskCounter();

        assert.equal(tasksCounter, 2);
        assert.equal(taskEvent.id.toNumber(), 2);
        assert.equal(taskEvent.title, 'some task');
        assert.equal(taskEvent.description, 'description two');
        assert.equal(taskEvent.done, false);
    })

    it("task toggle done", async () => {
        const result = await this.taskContract.toggleDone(1);
        const taskEvent = result.logs[0].args;
        const task = await this.taskContract.tasks(1);
    
        assert.equal(task.done, true);
        assert.equal(taskEvent.id.toNumber(), 1);
        assert.equal(taskEvent.done, true);
    });
})